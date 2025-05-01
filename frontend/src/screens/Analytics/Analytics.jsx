import React, { useState, useEffect } from "react";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { MetricItem } from "../../components/MetricItem";
import { Pagination } from "../../components/Pagination";
import { SectionHeader } from "../../components/SectionHeader";
import { ChatBubble1 } from "../../icons/ChatBubble1";
import { Check32 } from "../../icons/Check32";
import { LogOut } from "../../icons/LogOut";
import { ReverseLeft1 } from "../../icons/ReverseLeft1";
import { XClose30 } from "../../icons/XClose30";
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip } from "recharts";
import api from "../../api"; // Import API like in Data.jsx

// Helper function: Calculate progressive tax based on income
const calculateTax = (income) => {
  let tax = 0;
  let remainingIncome = income;
  const brackets = [
    { amount: 150000, rate: 0.0 },       // 0 – 150,000 Baht
    { amount: 150000, rate: 0.05 },        // 150,001 – 300,000 Baht
    { amount: 200000, rate: 0.10 },        // 300,001 – 500,000 Baht
    { amount: 250000, rate: 0.15 },        // 500,001 – 750,000 Baht
    { amount: 250000, rate: 0.20 },        // 750,001 – 1,000,000 Baht
    { amount: 1000000, rate: 0.25 },       // 1,000,001 – 2,000,000 Baht
    { amount: 3000000, rate: 0.30 },       // 2,000,001 – 5,000,000 Baht
    { amount: Infinity, rate: 0.35 },       // Above 5,000,000 Baht
  ];

  for (const bracket of brackets) {
    if (remainingIncome <= 0) break;
    const taxableAmount = Math.min(remainingIncome, bracket.amount);
    tax += taxableAmount * bracket.rate;
    remainingIncome -= taxableAmount;
  }
  return tax;
};

// Action menu component for each row
const ActionMenu = ({ rowId, onDelete }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleView = () => {
    navigate(`/view/${rowId}`);
    handleClose();
  };

  const handleEdit = () => {
    navigate(`/edit/${rowId}`);
    handleClose();
  };

  const handleDelete = () => {
    onDelete(rowId);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>
      <MuiMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MuiMenuItem onClick={handleView}>View</MuiMenuItem>
        <MuiMenuItem onClick={handleEdit}>Edit</MuiMenuItem>
        <MuiMenuItem onClick={handleDelete}>Delete</MuiMenuItem>
      </MuiMenu>
    </>
  );
};

export const Analytics = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [receiver, setReceiver] = useState("All");

  // States for computed metrics, pie chart data and recent activity table
  const [metrics, setMetrics] = useState({
    totalIncome: 0,
    taxToPay: 0,
    totalPending: 0,
    totalOverdue: 0,
  });
  const [pieData, setPieData] = useState([]);
  const [recentData, setRecentData] = useState([]);

  const totalCount = pieData.reduce((sum, item) => sum + item.value, 0);

  // Normalize dates so filtering is inclusive of the entire day
  const normalizeStartDate = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const normalizeEndDate = (date) => {
    const d = new Date(date);
    d.setHours(23, 59, 59, 999);
    return d;
  };

  // Function to fetch income data
  const fetchData = async () => {
    try {
      const response = await api.get("/income/");
      if (Array.isArray(response.data.data)) {
        setTableData(response.data.data);
      } else {
        console.error("Unexpected API response:", response.data);
        setTableData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setTableData([]);
    }
  };

  // Fetch data from API on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to filter data based on date range and receiver
  const getFilteredData = () => {
    return tableData.filter((row) => {
      const rowDate = new Date(row.influencer_posting_date);
      let isWithinDateRange = true;
      if (startDate)
        isWithinDateRange = isWithinDateRange && rowDate >= normalizeStartDate(startDate);
      if (endDate)
        isWithinDateRange = isWithinDateRange && rowDate <= normalizeEndDate(endDate);
      let receiverMatch = true;
      if (receiver !== "All") {
        receiverMatch = row.receiver && row.receiver.name === receiver;
      }
      return isWithinDateRange && receiverMatch;
    });
  };

  // Recalculate metrics, pie chart data, and recent activity table whenever filters change
  useEffect(() => {
    const filteredData = getFilteredData();

    // Metrics Calculation
    const totalIncome = filteredData
      .filter((row) => row.status.name === "Paid")
      .reduce((acc, row) => acc + Number(row.total_payment_amount), 0);
    const taxToPay = calculateTax(totalIncome);
    const totalPending = filteredData
      .filter((row) => row.status.name === "Pending")
      .reduce((acc, row) => acc + Number(row.unpaid_payment_amount), 0);
    const totalOverdue = filteredData
      .filter((row) => row.status.name === "Overdue")
      .reduce((acc, row) => acc + Number(row.unpaid_payment_amount), 0);

    setMetrics({ totalIncome, taxToPay, totalPending, totalOverdue });

    // Pie Chart: Count the distribution of statuses
    const statusCounts = filteredData.reduce((acc, row) => {
      const status = row.status.name;
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});

    const pieChartData = [
      { name: "Paid", value: statusCounts["Paid"] || 0 },
      { name: "Pending", value: statusCounts["Pending"] || 0 },
      { name: "Overdue", value: statusCounts["Overdue"] || 0 },
      { name: "Draft", value: statusCounts["Draft"] || 0 },
    ];
    setPieData(pieChartData);

    // Recent Activity: Sort by posting date (newest first) and take the top 5
    const sortedData = [...filteredData].sort(
      (a, b) => new Date(b.influencer_posting_date) - new Date(a.influencer_posting_date)
    );
    setRecentData(sortedData.slice(0, 5));
  }, [tableData, startDate, endDate, receiver]);

  // Handle receiver selection change
  const handleReceiverChange = (event) => {
    setReceiver(event.target.value);
  };

  // Helper to render status cell with an icon and colored Chip
  const renderStatusCell = (status) => {
    let iconOverride = null;
    let badgeColorKey = "gray";
    if (status === "Paid") {
      iconOverride = <Check32 className="icon-instance-node-5" />;
      badgeColorKey = "success";
    } else if (status === "Pending") {
      iconOverride = <ReverseLeft1 className="icon-instance-node-5" />;
      badgeColorKey = "warning";
    } else if (status === "Overdue") {
      iconOverride = <XClose30 className="icon-instance-node-5" color="#F04438" />;
      badgeColorKey = "error";
    } else if (status === "Draft") {
      iconOverride = <ChatBubble1 className="draft-icon" color="#344054" />;
      badgeColorKey = "gray";
    }
    const chipStyles = {
      success: { backgroundColor: "#ECFDF5", color: "#027A48" },
      warning: { backgroundColor: "#FEF3C7", color: "#B45309" },
      error: { backgroundColor: "#FEE2E2", color: "#B91C1C" },
      gray: { backgroundColor: "#F3F4F6", color: "#374151" },
    };
    return (
      <Chip
        icon={iconOverride}
        label={status}
        size="small"
        sx={{
          ...chipStyles[badgeColorKey],
          border: `1px solid ${chipStyles[badgeColorKey].color}`,
          fontWeight: "normal",
        }}
      />
    );
  };

  // Define colors for the pie chart slices
  const pieColors = ["#067647", "#DC8420", "#b42318", "#A0A6B2"];

  // Deletion function that first deletes related detail records, then the income record
  const handleDeleteIncome = async (incomeId) => {
    try {
      // Fetch all details
      const detailsResponse = await api.get(`/detail/`);
      const allDetails = detailsResponse.data.data;
      
      // Filter details that belong to the income
      const relatedDetails = allDetails.filter(
        (detail) => detail.income.invoice_id_number === incomeId
      );
      
      // Delete details if they exist
      if (relatedDetails && relatedDetails.length > 0) {
        for (const detail of relatedDetails) {
          await api.delete(`/detail/${detail.id}`);
        }
      }
      
      // Now delete the income record itself
      await api.delete(`/income/${incomeId}`);
      
      // Refresh the data after deletion
      fetchData();
    } catch (error) {
      console.error("Error deleting income and its details:", error);
    }
  };

  return (
    <div className="analytics">
      <HeaderNavigationWrapper
        className="header-navigation-2"
        headerNavigationNavItemBaseCurrent={false}
        headerNavigationNavItemBaseCurrent1
        headerNavigationNavItemButtonIcon={<LogOut className="icon-instance-node" />}
      />
      <div className="main">
        <div className="header">
          <div className="header-2">
            <div className="text-and-supporting-12">
              <p className="text-44">Incomes Tracking &amp; Managing (Analytics)</p>
              <div className="supporting-text-14">Analyze the incomes</div>
            </div>
            <div className="actions-8" />
          </div>

          {/* Filters */}
          <div className="tabs-and-filters">
            <div className="frame">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Dates</div>
                </div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <div style={{ display: "flex", gap: "8px", width: "100%" }}>
                    <div style={{ flex: "0 0 150px" }}>
                      <DatePicker
                        label="Start Date"
                        value={startDate}
                        onChange={(newValue) => setStartDate(newValue)}
                        renderInput={(params) => (
                          <TextField {...params} size="small" fullWidth className="date-picker-input" />
                        )}
                      />
                    </div>
                    <div style={{ flex: "0 0 150px" }}>
                      <DatePicker
                        label="End Date"
                        value={endDate}
                        onChange={(newValue) => setEndDate(newValue)}
                        renderInput={(params) => (
                          <TextField {...params} size="small" fullWidth className="date-picker-input" />
                        )}
                      />
                    </div>
                  </div>
                </LocalizationProvider>
              </div>
            </div>

            <div className="frame">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Receiver</div>
                </div>
                <FormControl variant="outlined" className="input-dropdown-2" size="small">
                  <Select
                    value={receiver}
                    onChange={handleReceiverChange}
                    label=""
                    inputProps={{ notched: false }}
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="@PinnPW">@PinnPW</MenuItem>
                    <MenuItem value="@Porpyyy_">@Porpyyy_</MenuItem>
                    {/* <MenuItem value="บริษัท โชคชัย 9672 จำกัด">บริษัทโชคชัย 9672 จำกัด</MenuItem> */}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="metrics">
          <MetricItem
            actions={false}
            breakpoint="desktop"
            className="metric-item-instance"
            dropdownIcon={false}
            hasBadgeWrap={false}
            hasChangeAndText={false}
            headingClassName="metric-item-2"
            numberClassName="metric-item-2"
            text="Total income (baht)"
            text1={metrics.totalIncome.toLocaleString()}
            type="chart-01"
          />
          <MetricItem
            actions={false}
            breakpoint="desktop"
            className="metric-item-instance"
            dropdownIcon={false}
            hasBadgeWrap={false}
            hasChangeAndText={false}
            headingClassName="metric-item-3"
            numberClassName="metric-item-3"
            text="Tax to pay (baht)"
            text1={metrics.taxToPay.toLocaleString()}
            type="chart-01"
          />
          <MetricItem
            actions={false}
            breakpoint="desktop"
            className="metric-item-instance"
            dropdownIcon={false}
            hasBadgeWrap={false}
            hasChangeAndText={false}
            headingClassName="metric-item-4"
            numberClassName="metric-item-4"
            text="Total pending (baht)"
            text1={metrics.totalPending.toLocaleString()}
            type="chart-01"
          />
          <MetricItem
            actions={false}
            breakpoint="desktop"
            className="metric-item-instance"
            dropdownIcon={false}
            hasBadgeWrap={false}
            hasChangeAndText={false}
            headingClassName="metric-item-5"
            numberClassName="metric-item-5"
            text="Total overdue (baht)"
            text1={metrics.totalOverdue.toLocaleString()}
            type="chart-01"
          />
        </div>

        {/* Chart + Table */}
        <div className="section">
          <div className="chart">
            <SectionHeader
              actions={false}
              breakpoint="desktop"
              className="section-header-instance"
              dropdownIcon={false}
              img="/img/divider-194.svg"
              supportingText={false}
              tabs={false}
              text="Sessions by payment status"
              type="buttons"
            />
            <div className="pie-chart">
              <div className="pie-chart-2" style={{ backgroundColor: "transparent" }}>
                <RechartsPieChart width={380} height={380}>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={170}
                    dataKey="value"
                    label={false}
                    labelLine={false}
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  {/* <Tooltip /> */}
                  <Tooltip separator=": " />
                </RechartsPieChart>
              </div>
              <div className="legend">
                {pieData.map((item, index) => {
                  const percent = totalCount > 0
                    ? Math.round((item.value / totalCount) * 100)
                    : 0;
                  return (
                    <div key={index} className="legend-series">
                      <div className="color-wrapper">
                        <div
                          className={
                            index === 0
                              ? "color"
                              : index === 1
                              ? "color-2"
                              : index === 2
                              ? "color-3"
                              : "color-4"
                          }
                        />
                      </div>
                      <div className="text-wrapper-8">
                        {item.name}: {item.value} ({percent}%)
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Recent activity table with Action column */}
          <div className="table">
            <SectionHeader
              actions={false}
              breakpoint="desktop"
              className="section-header-2"
              dropdownIcon={false}
              img="/img/divider-195.svg"
              supportingText={false}
              tabs={false}
              text="Recent activity"
              type="buttons"
            />
            <TableContainer component={Paper}>
              <Table>
                <TableHead
                  sx={{
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#F9FAFB",
                    zIndex: 1,
                  }}
                >
                  <TableRow>
                    <TableCell>Posting Date</TableCell>
                    <TableCell>Invoice ID</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Payment Method</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>Platform</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentData.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell>
                        {row.influencer_posting_date
                          ? new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric" }).format(new Date(row.influencer_posting_date))
                          : ""}
                      </TableCell>
                      <TableCell>{row.invoice_id_number}</TableCell>
                      <TableCell>{renderStatusCell(row.status.name)}</TableCell>
                      <TableCell>{row.payment_method.name}</TableCell>
                      <TableCell>{row.brand_brand_name}</TableCell>
                      <TableCell>{row.platform.name}</TableCell>
                      <TableCell>
                        <ActionMenu
                          rowId={row.invoice_id_number}
                          onDelete={handleDeleteIncome}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div onClick={() => navigate("/data")}>
              <Pagination
                breakpoint="desktop"
                buttonsButtonText="View all"
                className="pagination-instance"
                hasButtonWrap={false}
                hasPaginationNumbers={false}
                shape="square"
                type="card-minimal-center-aligned"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
