

import React from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { DropdownWrapper } from "../../components/DropdownWrapper";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { Pagination } from "../../components/Pagination";
import { TableCell } from "../../components/TableCell";
import { TableHeaderCell } from "../../components/TableHeaderCell";
import { ArrowDown10 } from "../../icons/ArrowDown10";
import { ChatBubble1 } from "../../icons/ChatBubble1";
import { Check32 } from "../../icons/Check32";
import { LogOut } from "../../icons/LogOut";
import { ReverseLeft1 } from "../../icons/ReverseLeft1";
import { SearchLg } from "../../icons/SearchLg";
import { Share } from "../../icons/Share";
import { XClose30 } from "../../icons/XClose30";
import { Link } from "react-router-dom";
import "./style.css";
import { FormControl, Select, MenuItem } from '@mui/material';
import TextField from "@mui/material/TextField";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export const Data = () => {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  
  const [searchValue, setSearchValue] = React.useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Implement your search logic here
      console.log("Searching for:", searchValue);
    }
  };

  const tableData = [
    {
      postingDate: "Jan 6, 2024",
      invoiceId: "IV3066",
      status: "Draft",
      paymentMethod: "Full Payment",
      client: { name: "Agent Name", contact: "Contacter Line" },
      brand: "Eucerin Thailand",
      totalBalance: "10,000",
      channel: "@PWPINN",
      platform: "TikTok"
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
      platform: "Instagram"
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
      platform: "TikTok"
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
      platform: "TikTok"
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
      platform: "TikTok"
    }
  ];

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
              <p className="text-45">Incomes Tracking &amp; Managing (Data)</p>
              <p className="supporting-text-10">
                Keep track and manage the incomes
              </p>
            </div>

            <div className="actions-13">
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
                  <img className="button-12" alt="Create Button" src="/img/button-27.svg" />
                </Link>
              </div>
            </div>
          </div>

          <div className="table-wrapper">
            <div className="table">
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
                        placeholder="Invoice ID, Brand, Client name"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        size="small"
                        fullWidth
                        sx={{ "& .MuiOutlinedInput-root": { height: 56, minHeight: 56 } }}
                        slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          },
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

                  {/* Status Dropdown */}
                  <div className="input-with-label-3">
                    <div className="label-wrapper-3">
                      <div className="label-3">Status</div>
                    </div>
                    <FormControl variant="outlined" className="input-dropdown-8" size="small" >
                      <Select defaultValue="All" label="" inputProps={{ notched: false }}>
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Draft">Draft</MenuItem>
                        <MenuItem value="Paid">Paid</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="Overdue">Overdue</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  {/* Payment Method Dropdown */}
                  <div className="input-with-label-3">
                    <div className="label-wrapper-3">
                      <div className="label-3">Payment method</div>
                    </div>
                    <FormControl variant="outlined" className="input-dropdown-8" size="small">
                      <Select defaultValue="All" label="" inputProps={{ notched: false }}>
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Full Payment">Full Payment</MenuItem>
                        <MenuItem value="Deposit">Deposit</MenuItem>
                        <MenuItem value="Credit Term">Credit Term</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  {/* Channel Dropdown */}
                  <div className="input-with-label-3">
                    <div className="label-wrapper-3">
                      <div className="label-3">Channel</div>
                    </div>
                    <FormControl variant="outlined" className="input-dropdown-8" size="small">
                      <Select defaultValue="All" label="" inputProps={{ notched: false }}>
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="@PWPINN">@PWPINN</MenuItem>
                        <MenuItem value="@Porpagin">@Porpagin</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  {/* Platform Dropdown */}
                  <div className="input-with-label-3">
                    <div className="label-wrapper-3">
                      <div className="label-3">Platform</div>
                    </div>
                    <FormControl variant="outlined" className="input-dropdown-8" size="small">
                      <Select defaultValue="All" label="" inputProps={{ notched: false }}>
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="TikTok">TikTok</MenuItem>
                        <MenuItem value="Instagram">Instagram</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>


              <div className="table-2">
                <div className="content-31">
                  {/* Column for Posting Date */}
                  <div className="column-1">
                    <div className="table-header-wrapper">
                      <div className="table-header-2">
                        <div className="text-47">Posting Date</div>
                        {/* <ArrowDown10 className="arrow-down" /> */}
                      </div>
                    </div>
                    {tableData.map((row, idx) => (
                      <TableCell
                        key={idx}
                        stateProp="default"
                        style="text"
                        supportingText={false}
                        text={row.postingDate}
                      />
                    ))}
                  </div>

                  {/* Column for Invoice ID */}
                  <div className="column-2">
                    <TableHeaderCell
                      checkbox
                      className="table-header-cell-instance"
                      color="gray"
                      tableHeaderText="Invoice ID"
                      tableHeaderVisible={false}
                      text
                      visible={false}
                    />
                    {tableData.map((row, idx) => (
                      <TableCell
                        key={idx}
                        stateProp="default"
                        style="text"
                        supportingText={false}
                        text={row.invoiceId}
                        textAndSupportingClassName="table-cell-11"
                      />
                    ))}
                  </div>

                  {/* Column for Status */}
                  <div className="column-3">
                    <TableHeaderCell
                      checkbox={false}
                      className="table-header-cell-instance"
                      color="gray"
                      tableHeaderText1="Status"
                      text
                    />
                    {tableData.map((row, idx) => {
                      let iconOverride = null;
                      let badgeColor = "gray";
                      if (row.status === "Paid") {
                        iconOverride = <Check32 className="icon-instance-node-5" />;
                        badgeColor = "success";
                      } else if (row.status === "Pending") {
                        iconOverride = <ReverseLeft1 className="icon-instance-node-5" />;
                        badgeColor = "warning";
                      } else if (row.status === "Overdue") {
                        iconOverride = <XClose30 className="icon-instance-node-5" color="#F04438" />;
                        badgeColor = "error";
                      } else if (row.status === "Draft") {
                        iconOverride = <ChatBubble1 className="icon-instance-node-5" color="#344054" />;
                        badgeColor = "gray";
                      }
                      return (
                        <TableCell
                          key={idx}
                          badgeColor={badgeColor}
                          badgeIcon="icon-leading"
                          badgeText={row.status}
                          stateProp="default"
                          style="badge"
                          override={iconOverride}
                          supportingText={false}
                        />
                      );
                    })}
                  </div>

                  {/* Column for Payment Method */}
                  <div className="column-4">
                    <TableHeaderCell
                      checkbox={false}
                      className="table-header-cell-instance"
                      color="gray"
                      tableHeaderText1="Payment Method"
                      text
                    />
                    {tableData.map((row, idx) => (
                      <TableCell
                        key={idx}
                        stateProp="default"
                        style="text"
                        supportingText={false}
                        text={row.paymentMethod}
                      />
                    ))}
                  </div>

                  {/* Column for Client */}
                  <div className="column-5">
                    <TableHeaderCell
                      checkbox={false}
                      className="table-header-cell-instance"
                      color="gray"
                      tableHeaderText1="Client"
                      text
                    />
                    {tableData.map((row, idx) => (
                      <TableCell
                        key={idx}
                        hasText={false}
                        stateProp="default"
                        style="avatar"
                        supportingText
                        supportingTextClassName="table-cell-24"
                        text={row.client.name}
                        text1={row.client.contact}
                        textAndSupportingClassName="table-cell-25"
                        textClassName="table-cell-24"
                      />
                    ))}
                  </div>

                  {/* Column for Brand */}
                  <div className="column-6">
                    <TableHeaderCell
                      checkbox={false}
                      className="table-header-cell-instance"
                      color="gray"
                      tableHeaderText1="Brand"
                      text
                    />
                    {tableData.map((row, idx) => (
                      <TableCell
                        key={idx}
                        stateProp="default"
                        style="text"
                        supportingText={false}
                        text={row.brand}
                        textAndSupportingClassNameOverride="table-cell-26"
                      />
                    ))}
                  </div>

                  {/* Column for Total Balance */}
                  <div className="column-7">
                    <div className="table-header-wrapper">
                      <div className="table-header-3">
                        <div className="text-47">Total Balance</div>
                      </div>
                    </div>
                    {tableData.map((row, idx) => (
                      <TableCell
                        key={idx}
                        stateProp="default"
                        style="text"
                        supportingText={false}
                        text={row.totalBalance}
                      />
                    ))}
                  </div>

                  {/* Column for Channel */}
                  <div className="column-8">
                    <TableHeaderCell
                      checkbox={false}
                      className="table-header-cell-instance"
                      color="gray"
                      tableHeaderText1="Channel"
                      text
                    />
                    {tableData.map((row, idx) => (
                      <TableCell
                        key={idx}
                        stateProp="default"
                        style="text"
                        supportingText={false}
                        text={row.channel}
                        textAndSupportingClassNameOverride="table-cell-26"
                      />
                    ))}
                  </div>

                  {/* Column for Platform */}
                  <div className="column-9">
                    <TableHeaderCell
                      checkbox={false}
                      className="table-header-cell-instance"
                      color="gray"
                      tableHeaderText1="Platform"
                      text
                    />
                    {tableData.map((row, idx) => (
                      <TableCell
                        key={idx}
                        stateProp="default"
                        style="text"
                        supportingText={false}
                        text={row.platform}
                      />
                    ))}
                  </div>

                  {/* Column for Actions */}
                  <div className="column-10">
                    <TableHeaderCell
                      checkbox={false}
                      className="table-header-cell-2"
                      color="gray"
                      text={false}
                    />
                    {tableData.map((_, idx) => (
                      <div key={idx} className="table-cell" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <DropdownWrapper className="design-component-instance-node-2" />
                      </div>
                    ))}
                  </div>
                </div>
                <Pagination
                  breakpoint="desktop"
                  className="pagination-instance"
                  shape="square"
                  type="card-minimal-center-aligned"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
