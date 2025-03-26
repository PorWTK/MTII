import React, { useState } from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { LogOut } from "../../icons/LogOut";
import { ChatBubble1 } from "../../icons/ChatBubble1";
import { Check32 } from "../../icons/Check32";
import { ReverseLeft1 } from "../../icons/ReverseLeft1";
import { XClose30 } from "../../icons/XClose30";
import { Share } from "../../icons/Share";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { FormControl, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, TableSortLabel, IconButton, Menu } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

// Component for action menu in each row
const ActionMenu = ({ rowId, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleView}>View</MenuItem>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export const Data = () => {
  // Sorting states
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");

  // Filter & other states
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("All");
  const [selectedChannel, setSelectedChannel] = useState("All");
  const [selectedPlatform, setSelectedPlatform] = useState("All");

  // Table data stored in state for deletion to work
  const [data, setData] = useState([
    {
      postingDate: "Jan 6, 2024",
      invoiceId: "IV3066",
      status: "Draft",
      paymentMethod: "Full Payment",
      client: { name: "Agent Name", contact: "Contacter Line" },
      brand: "Eucerin Thailand",
      totalBalance: "10,000",
      channel: "@PWPINN",
      platform: "TikTok",
    },
    {
      postingDate: "Jan 6, 2024",
      invoiceId: "IV3065",
      status: "Paid",
      paymentMethod: "Deposit",
      client: { name: "Phoenix Baker", contact: "phoenix@untitledui.com" },
      brand: "Oreo Rizz",
      totalBalance: "10,000",
      channel: "@Porpagin",
      platform: "Instagram",
    },
    {
      postingDate: "Jan 6, 2024",
      invoiceId: "IV3064",
      status: "Pending",
      paymentMethod: "Credit Term",
      client: { name: "Lana Steiner", contact: "lana@untitledui.com" },
      brand: "MAC Cosmetics",
      totalBalance: "10,000",
      channel: "@PWPINN",
      platform: "TikTok",
    },
    {
      postingDate: "Jan 5, 2024",
      invoiceId: "IV3063",
      status: "Overdue",
      paymentMethod: "Full Payment",
      client: { name: "Demi Wilkinson", contact: "demi@untitledui.com" },
      brand: "With that perfume",
      totalBalance: "10,000",
      channel: "@PWPINN",
      platform: "TikTok",
    },
    {
      postingDate: "Jan 5, 2024",
      invoiceId: "IV3062",
      status: "Paid",
      paymentMethod: "Full Payment",
      client: { name: "Candice Wu", contact: "candice@untitledui.com" },
      brand: "Snacks Jumbo Th",
      totalBalance: "10,000",
      channel: "@PWPINN",
      platform: "TikTok",
    },
    // ... additional rows as needed
  ]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Searching for:", searchValue);
    }
  };

  const handleDeleteRow = (rowId) => {
    setData((prevData) => prevData.filter((row) => row.invoiceId !== rowId));
  };

  // Filter data based on search and other filters
  const filteredData = data.filter((row) => {
    const rowDate = new Date(row.postingDate);
    let isDateMatch = true;
    if (startDate) {
      isDateMatch = isDateMatch && rowDate >= startDate;
    }
    if (endDate) {
      isDateMatch = isDateMatch && rowDate <= endDate;
    }
    return (
      isDateMatch &&
      (selectedStatus === "All" || row.status === selectedStatus) &&
      (selectedPaymentMethod === "All" || row.paymentMethod === selectedPaymentMethod) &&
      (selectedChannel === "All" || row.channel === selectedChannel) &&
      (selectedPlatform === "All" || row.platform === selectedPlatform) &&
      (searchValue === "" ||
        row.invoiceId.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.client.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.brand.toLowerCase().includes(searchValue.toLowerCase()))
    );
  });

  // Sorting helper functions
  const descendingComparator = (a, b, orderBy) => {
    if (orderBy === "postingDate") {
      const dateA = new Date(a[orderBy]);
      const dateB = new Date(b[orderBy]);
      if (dateB < dateA) return -1;
      if (dateB > dateA) return 1;
      return 0;
    }
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

  return (
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
                      placeholder="Invoice ID, Client name"
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
                            onChange={(newValue) => setStartDate(newValue)}
                            renderInput={(params) => (
                              <TextField {...params} size="small" fullWidth />
                            )}
                          />
                        </div>
                        <div style={{ flex: 1 }}>
                          <DatePicker
                            label="End Date"
                            value={endDate}
                            onChange={(newValue) => setEndDate(newValue)}
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
                      <MenuItem value="@PWPINN">@PWPINN</MenuItem>
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
                  {sortedData.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{row.postingDate}</TableCell>
                      <TableCell>{row.invoiceId}</TableCell>
                      <TableCell>{renderStatusCell(row.status)}</TableCell>
                      <TableCell>{row.paymentMethod}</TableCell>
                      <TableCell>
                        <div>
                          <div>{row.client.name}</div>
                          <div style={{ fontSize: "12px", color: "#667085" }}>
                            {row.client.contact}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{row.brand}</TableCell>
                      <TableCell>{row.totalBalance}</TableCell>
                      <TableCell>{row.channel}</TableCell>
                      <TableCell>{row.platform}</TableCell>
                      <TableCell>
                        <ActionMenu rowId={row.invoiceId} onDelete={handleDeleteRow} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
