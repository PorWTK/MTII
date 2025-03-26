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
import { FormControl, Select, MenuItem, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, IconButton, Menu as MuiMenu, MenuItem as MuiMenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip } from "recharts";

// Action menu component for each row
const ActionMenu = ({ rowId, onDelete }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleView = () => {
    // navigate(`/view/${rowId}`);
    navigate(`/view`);
    handleClose();
  };

  const handleEdit = () => {
    // navigate(`/edit/${rowId}`);
    navigate(`/edit`);
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
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [receiver, setReceiver] = useState("All");

  const handleReceiverChange = (event) => setReceiver(event.target.value);

  const tableData = [
    {
      postingDate: "Jan 6, 2024",
      invoiceId: "IV3066",
      status: "Draft",
      paymentMethod: "Full Payment",
      brand: "Eucerin Thailand",
      platform: "TikTok",
      receiver: "@PWPINN",
    },
    {
      postingDate: "Jan 6, 2024",
      invoiceId: "IV3065",
      status: "Paid",
      paymentMethod: "Deposit",
      brand: "Oreo Rizz",
      platform: "Instagram",
      receiver: "@PWPINN",
    },
    {
      postingDate: "Jan 6, 2024",
      invoiceId: "IV3064",
      status: "Pending",
      paymentMethod: "Credit Term",
      brand: "MAC Cosmetics",
      platform: "TikTok",
      receiver: "@PWPINN",
    },
    {
      postingDate: "Jan 5, 2024",
      invoiceId: "IV3063",
      status: "Overdue",
      paymentMethod: "Full Payment",
      brand: "With that perfume",
      platform: "TikTok",
      receiver: "@PWPINN",
    },
    {
      postingDate: "Jan 5, 2024",
      invoiceId: "IV3062",
      status: "Paid",
      paymentMethod: "Full Payment",
      brand: "Snacks Jumbo Th",
      platform: "TikTok",
      receiver: "@PWPINN",
    },
    // ... additional rows if needed
  ];

  // Filter the data by date range and receiver
  const filteredData = tableData.filter((row) => {
    const rowDate = new Date(row.postingDate);
    let isWithinDateRange = true;
    if (startDate) isWithinDateRange = isWithinDateRange && rowDate >= startDate;
    if (endDate) isWithinDateRange = isWithinDateRange && rowDate <= endDate;
    const isReceiverMatch = receiver === "All" || row.receiver === receiver;
    return isWithinDateRange && isReceiverMatch;
  });

  // Sort the data by posting date (newest first)
  const sortedData = [...filteredData].sort(
    (a, b) => new Date(b.postingDate) - new Date(a.postingDate)
  );
  // Use only the recent 5 rows for the sub table
  const recentData = sortedData.slice(0, 5);

  // Pie chart data (if needed)
  const [pieData, setPieData] = useState([
    { name: "Paid", value: 20 },
    { name: "Pending", value: 30 },
    { name: "Overdue", value: 8 },
    { name: "Draft", value: 29 },
  ]);
  const pieColors = ["#067647", "#DC8420", "#b42318", "#A0A6B2"];
  useEffect(() => {
    // fetch('/api/pieChartData').then(...) -> setPieData(...)
  }, []);

  // Helper to render the status cell as a Chip with border and regular text
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
      // Add an extra CSS class 'draft-icon' so we can force it to 12x12 via CSS
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
                    <MenuItem value="@PWPINN">@PWPINN</MenuItem>
                    <MenuItem value="@Porpyyy_">@Porpyyy_</MenuItem>
                    <MenuItem value="บริษัทโชคชัย 9672 จำกัด">บริษัทโชคชัย 9672 จำกัด</MenuItem>
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
            text1="220,000"
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
            text1="3,500"
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
            text="Total pending amount (baht)"
            text1="56,000"
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
            text="Total overdue amount(baht)"
            text1="9,900"
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
                  <Tooltip />
                </RechartsPieChart>
              </div>

              <div className="legend">
                {pieData.map((item, index) => (
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
                    <div className="text-wrapper-8">{item.name}</div>
                    <div className="text-wrapper-8">({item.value})</div>
                  </div>
                ))}
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
                    <TableCell>Invoice ID</TableCell>
                    <TableCell>Posting Date</TableCell>
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
                      <TableCell>{row.invoiceId}</TableCell>
                      <TableCell>{row.postingDate}</TableCell>
                      <TableCell>{renderStatusCell(row.status)}</TableCell>
                      <TableCell>{row.paymentMethod}</TableCell>
                      <TableCell>{row.brand}</TableCell>
                      <TableCell>{row.platform}</TableCell>
                      <TableCell>
                        <ActionMenu rowId={row.invoiceId} onDelete={(id) => {
                          // Optionally, add deletion logic for Analytics table rows here
                          console.log("Delete", id);
                        }} />
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
