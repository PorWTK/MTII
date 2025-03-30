import React from "react";
import { useState, useEffect } from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { DropdownWrapper } from "../../components/DropdownWrapper";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { TableHeaderCell } from "../../components/TableHeaderCell";
import { ChatBubble1 } from "../../icons/ChatBubble1";
import { Check32 } from "../../icons/Check32";
import { ReverseLeft1 } from "../../icons/ReverseLeft1";
import { Share } from "../../icons/Share";
import { XClose30 } from "../../icons/XClose30";
import "./style.css";
import axios from "axios";
import api from "../../api";
import { LogOut } from "../../icons/LogOut";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { FormControl, Select, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, Paper, Chip, TableSortLabel, IconButton, Menu } from "@mui/material";
import { TableContainer } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import * as XLSX from "xlsx";

export const Data = () => {
  const [tableData, setTableData] = React.useState([]);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  // Sorting states
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");

  
  const [searchValue, setSearchValue] = React.useState("");
  
  const [selectedStatus, setSelectedStatus] = React.useState("All");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState("All");
  const [selectedChannel, setSelectedChannel] = React.useState("All");
  const [selectedPlatform, setSelectedPlatform] = React.useState("All");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get("/income/");
      if (Array.isArray(response.data.data)) {
        setTableData(response.data.data);
      } else {
        console.error("Unexpected API response:", response.data);
        setTableData([]); // Set default empty array to avoid errors
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setTableData([]); // Set empty array in case of an error
    }
  };
  

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Implement your search logic here
      console.log("Searching for:", searchValue);
    }
  };

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

  const filteredData = Array.isArray(tableData)
  ? tableData.filter((row) => {
      const rowDate = new Date(row.influencer_posting_date);
      return (
        (selectedStatus === "All" || row.status.name === selectedStatus) &&
        (selectedPaymentMethod === "All" || row.payment_method.name === selectedPaymentMethod) &&
        (selectedChannel === "All" || row.channel.name === selectedChannel) &&
        (selectedPlatform === "All" || row.platform.name === selectedPlatform) &&
        (searchValue === "" ||
          String(row.invoice_id_number).includes(searchValue) ||
          row.agency_agency_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          row.brand_brand_name.toLowerCase().includes(searchValue.toLowerCase())
        ) &&
        (!startDate || rowDate >= normalizeStartDate(startDate)) &&
        (!endDate || rowDate <= normalizeEndDate(endDate))
      );
    })
  : [];


  const descendingComparator = (a, b, orderBy) => {
    if (orderBy === "postingDate") {
      // Map "postingDate" to the actual property "influencer_posting_date"
      const dateA = new Date(a.influencer_posting_date).getTime();
      const dateB = new Date(b.influencer_posting_date).getTime();
      return dateB - dateA;
    }
    if (orderBy === "invoiceId") {
      // Map "invoiceId" to the actual property "invoice_id_number"
      if (a.invoice_id_number < b.invoice_id_number) return -1;
      if (a.invoice_id_number > b.invoice_id_number) return 1;
      return 0;
    }
    // Generic comparator for other fields
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
  };
  
  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };
  
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  
  const sortedData = orderBy
    ? filteredData.slice().sort(getComparator(order, orderBy))
    : filteredData;
  
  // Call the filtering callback when dates change
  const handleStartDateChange = (newValue) => {
    setStartDate(newValue);
    // onFilterChange(newValue, endDate);
  };

  const handleEndDateChange = (newValue) => {
    setEndDate(newValue);
    // onFilterChange(startDate, newValue);
  };



  // Render status cell using Chip with border and regular text
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
      iconOverride = <ChatBubble1 className="icon-instance-node-5" color="#344054" />;
      badgeColorKey = "gray";
    }

    const chipStyles = {
      success: {
        backgroundColor: "#ECFDF5",
        color: "#027A48",
      },
      warning: {
        backgroundColor: "#FEF3C7",
        color: "#B45309",
      },
      error: {
        backgroundColor: "#FEE2E2",
        color: "#B91C1C",
      },
      gray: {
        backgroundColor: "#F3F4F6",
        color: "#374151",
      },
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

  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(sortedData.map(row => ({
      "Posting Date": row.influencer_posting_date,
      "Invoice ID": row.invoice_id_number,
      "Status": row.status?.name || "N/A",
      "Payment Method": row.payment_method?.name || "N/A",
      "Client": row.agency_agency_name || "N/A",
      "Brand": row.brand_brand_name || "N/A",
      "Total Balance": row.total_payment_amount,
      "Channel": row.channel?.name || "N/A",
      "Platform": row.platform?.name || "N/A"
    })));
  
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Income Data");
  
    XLSX.writeFile(wb, "income_data.xlsx");
  };

  return(
    <div className="data">
      <HeaderNavigationWrapper
        className="header-navigation-5"
        headerNavigationNavItemButtonIcon={<LogOut className="icon-instance-node-4" />}
      />
      <div className="main-4">
        <div className="section-4">
          <div className="content-29">
            <div className="text-and-supporting-14">
              <p className="text-45">Incomes Tracking & Managing (Data)</p>
              <p className="supporting-text-10">
                Keep track and manage the incomes
              </p>
            </div>
            <div className="actions-13">
              <div onClick={exportToCSV}>
                  <ButtonsButton
                    className="design-component-instance-node-2"
                    hierarchy="secondary-gray"
                    icon="default"
                    iconTrailing={false}
                    override={<Share className="icon-instance-node-4" />}
                    size="md"
                    stateProp="default"
                    text="Export as CSV"
                  />
              </div>
              {/* <Button onClick={exportToCSV} className="design-component-instance-node-2" override={<Share className="icon-instance-node-4" />}>Export CSV</Button>; */}
              <Link to="/create">
                <img
                  className="button-12"
                  alt="Create Button"
                  src="/img/button-27.svg"
                />
              </Link>
            </div>
          </div>

          <div className="table-wrapper">
            <div className="filters-bar">
              <div className="actions-14">
                <div className="input-dropdown-7">
                  <div className="input-with-label-5">
                    <div className="label-wrapper-5">
                      <label className="label-5" htmlFor="search-field">
                        Search for an order
                      </label>
                    </div>
                    <TextField
                      id="search-field"
                      placeholder="Invoice ID, Client name, Brand"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      size="small"
                      fullWidth
                      sx={{ "& .MuiOutlinedInput-root": { height: 56, minHeight: 56 } }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div className="frame-13">
                  <div className="input-with-label-6">
                    <div className="label-wrapper-5">
                      <div className="label-5">Dates</div>
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <div style={{ display: "flex", gap: "8px", width: "100%" }}>
                        <div style={{ flex: 1 }}>
                          <DatePicker
                            label="Start Date"
                            value={startDate}
                            onChange={handleStartDateChange}
                            inputFormat="MM/dd/yyyy"
                            renderInput={(params) => (
                              <TextField {...params} size="small" fullWidth />
                            )}
                          />
                        </div>
                        <div style={{ flex: 1 }}>
                          <DatePicker
                            label="End Date"
                            value={endDate}
                            onChange={handleEndDateChange}
                            inputFormat="MM/dd/yyyy"
                            renderInput={(params) => (
                              <TextField {...params} size="small" fullWidth />
                            )}
                          />
                        </div>
                      </div>
                    </LocalizationProvider>
                  </div>
                </div>

                <div className="input-with-label-3">
                  <div className="label-wrapper-3">
                    <div className="label-3">Status</div>
                  </div>
                  <FormControl variant="outlined" className="input-dropdown-8" size="small">
                    <Select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      label=""
                      inputProps={{ notched: false }}
                    >
                      <MenuItem value="All">All</MenuItem>
                      <MenuItem value="Paid">Paid</MenuItem>
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Overdue">Overdue</MenuItem>
                      <MenuItem value="Draft">Draft</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="input-with-label-3">
                  <div className="label-wrapper-3">
                    <div className="label-3">Payment method</div>
                  </div>
                  <FormControl variant="outlined" className="input-dropdown-8" size="small">
                    <Select
                      value={selectedPaymentMethod}
                      onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                      label=""
                      inputProps={{ notched: false }}
                    >
                      <MenuItem value="All">All</MenuItem>
                      <MenuItem value="Full Payment">Full Payment</MenuItem>
                      <MenuItem value="Deposit">Deposit</MenuItem>
                      <MenuItem value="Credit Term">Credit Term</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="input-with-label-3">
                  <div className="label-wrapper-3">
                    <div className="label-3">Channel</div>
                  </div>
                  <FormControl variant="outlined" className="input-dropdown-8" size="small">
                    <Select
                      value={selectedChannel}
                      onChange={(e) => setSelectedChannel(e.target.value)}
                      label=""
                      inputProps={{ notched: false }}
                    >
                      <MenuItem value="All">All</MenuItem>
                      <MenuItem value="@PinnPW">@PinnPW</MenuItem>
                      <MenuItem value="@Porpyyy_">@Porpyyy_</MenuItem>
                      <MenuItem value="@Porpagin">@Porpagin</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="input-with-label-3">
                  <div className="label-wrapper-3">
                    <div className="label-3">Platform</div>
                  </div>
                  <FormControl variant="outlined" className="input-dropdown-8" size="small">
                    <Select
                      value={selectedPlatform}
                      onChange={(e) => setSelectedPlatform(e.target.value)}
                      label=""
                      inputProps={{ notched: false }}
                    >
                      <MenuItem value="All">All</MenuItem>
                      <MenuItem value="TikTok">TikTok</MenuItem>
                      <MenuItem value="Instagram">Instagram</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          <div className="table-wrapper">
            <TableContainer component={Paper} sx={{ overflow: 'visible' }}>
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
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "postingDate"}
                        direction={orderBy === "postingDate" ? order : "asc"}
                        onClick={() => handleRequestSort("postingDate")}
                      >
                        Posting Date
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "invoiceId"}
                        direction={orderBy === "invoiceId" ? order : "asc"}
                        onClick={() => handleRequestSort("invoiceId")}
                      >
                        Invoice ID
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Payment Method</TableCell>
                    <TableCell>Client</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>Total Balance</TableCell>
                    <TableCell>Channel</TableCell>
                    <TableCell>Platform</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {sortedData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {row.influencer_posting_date
                        ? new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric" }).format(new Date(row.influencer_posting_date))
                        : ""}
                    </TableCell>
                    <TableCell>{row.invoice_id_number}</TableCell>
                    <TableCell>{renderStatusCell(row.status.name)}</TableCell>
                    <TableCell>{row.payment_method.name}</TableCell>
                    <TableCell><div>{row.agency_agency_name}</div><div style={{ fontSize: "12px", color: "#667085" }}>{row.contactor_email}</div></TableCell>
                    <TableCell>{row.brand_brand_name}</TableCell>
                    <TableCell>{row.total_payment_amount}</TableCell>
                    <TableCell>{row.channel.name}</TableCell>
                    <TableCell>{row.platform.name}</TableCell>
                    <TableCell><DropdownWrapper className="design-component-instance-node-2" id={row.invoice_id_number} /></TableCell>
                  </TableRow>
                ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};