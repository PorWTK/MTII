import React, { useState, useEffect } from "react";
import { DropdownWrapper } from "../../components/DropdownWrapper";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { MetricItem } from "../../components/MetricItem";
import { Pagination } from "../../components/Pagination";
import { SectionHeader } from "../../components/SectionHeader";
import { TableCell } from "../../components/TableCell";
import { TableHeaderCell } from "../../components/TableHeaderCell";
import { ChatBubble1 } from "../../icons/ChatBubble1";
import { Check32 } from "../../icons/Check32";
import { LogOut } from "../../icons/LogOut";
import { ReverseLeft1 } from "../../icons/ReverseLeft1";
import { XClose30 } from "../../icons/XClose30";
import { FormControl, Select, MenuItem, TextField } from "@mui/material";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// Recharts imports
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip } from "recharts";

export const Analytics = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [receiver, setReceiver] = useState("All");

  const handleReceiverChange = (event) => {
    setReceiver(event.target.value);
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
      platform: "TikTok",
      receiver: "@PWPINN"
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
      receiver: "@PWPINN"
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
      receiver: "@PWPINN"
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
      receiver: "@PWPINN"
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
      receiver: "@PWPINN"
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
      receiver: "@PWPINN"
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
      receiver: "@PWPINN"
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
      receiver: "@PWPINN"
    },
    {
      postingDate: "Jan 5, 2024",
      invoiceId: "IV3062",
      status: "Pending",
      paymentMethod: "Full Payment",
      client: { name: "Candice Wu", contact: "candice@untitledui.com" },
      brand: "Snacks Jumbo Th",
      totalBalance: "10,000",
      channel: "@Porpyyy_",
      platform: "TikTok",
      receiver: "@Porpyyy_"
    }
  ];
    // Filter the data by date range and receiver dropdown
    const filteredData = tableData.filter((row) => {
      const rowDate = new Date(row.postingDate);
      let isWithinDateRange = true;
      if (startDate) {
        isWithinDateRange = isWithinDateRange && rowDate >= startDate;
      }
      if (endDate) {
        isWithinDateRange = isWithinDateRange && rowDate <= endDate;
      }
      const isReceiverMatch = receiver === "All" || row.receiver === receiver;
      return isWithinDateRange && isReceiverMatch;
    });

    const sortedData = [...filteredData].sort(
      (a, b) => new Date(b.postingDate) - new Date(a.postingDate)
    );

    const recentData = sortedData.slice(0, 5);

  // Pie chart data
  const [pieData, setPieData] = useState([
    { name: "Paid", value: 20 },
    { name: "Pending", value: 30 },
    { name: "Overdue", value: 8 },
    { name: "Draft", value: 29 },
  ]);

  // Colors for each segment
  const pieColors = ["#067647", "#DC8420", "#b42318", "#A0A6B2"];

  useEffect(() => {
    // Example: fetch('/api/pieChartData').then(...) -> setPieData(...)
  }, []);

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
                          <TextField
                            {...params}
                            size="small"
                            fullWidth
                            className="date-picker-input"
                          />
                        )}
                      />
                    </div>
                    <div style={{ flex: "0 0 150px" }}>
                      <DatePicker
                        label="End Date"
                        value={endDate}
                        onChange={(newValue) => setEndDate(newValue)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            fullWidth
                            className="date-picker-input"
                          />
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
              {/* Container for the Recharts PieChart */}
              <div className="pie-chart-2" style={{ backgroundColor: "transparent" }}>
                <RechartsPieChart width={380} height={380}>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={170}
                    dataKey="value"
                    label={false}        // <--- no label text
                    labelLine={false}    // <--- remove label line
                    stroke="none"        // <--- no outer stroke
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={pieColors[index % pieColors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </div>

              {/* Legend */}
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

          {/* Recent activity table */}
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
            <div className="recent-table">
              <div className="content-23">
                {/* Column 1: Invoice ID */}
                <div className="column">
                  <TableHeaderCell
                    checkbox
                    className="table-header-cell-instance"
                    color="gray"
                    tableHeaderText="Invoice ID"
                    tableHeaderVisible={false}
                    text
                    visible={false}
                  />
                  {recentData.map((row, idx) => (
                    <TableCell
                      key={idx}
                      className="table-cell-instance"
                      hasText={false}
                      stateProp="default"
                      style="lead-checkbox"
                      supportingText={false}
                      text={row.invoiceId}
                    />
                  ))}
                </div>

                {/* Column 2: Posting Date */}
                <div className="column-2">
                  <div className="table-header-wrapper">
                    <div className="table-header-2">
                      <div className="text-45">Posting Date</div>
                    </div>
                  </div>
                  {recentData.map((row, idx) => (
                    <TableCell
                      key={idx}
                      className="table-cell-instance"
                      stateProp="default"
                      style="text"
                      supportingText={false}
                      text={row.postingDate}
                    />
                  ))}
                </div>

                {/* Column 3: Status */}
                <div className="column-3">
                  <TableHeaderCell
                    checkbox={false}
                    className="table-header-cell-instance"
                    color="gray"
                    tableHeaderText1="Status"
                    text
                  />
                  {recentData.map((row, idx) => {
                    let iconOverride = null;
                    let badgeColor = "gray";

                    if (row.status === "Paid") {
                      iconOverride = <Check32 className="icon-instance-node-2" />;
                      badgeColor = "success";
                    } else if (row.status === "Pending") {
                      iconOverride = <ReverseLeft1 className="icon-instance-node-2" />;
                      badgeColor = "warning";
                    } else if (row.status === "Overdue") {
                      iconOverride = <XClose30 className="icon-instance-node-2" color="#F04438" />;
                      badgeColor = "error";
                    } else if (row.status === "Draft") {
                      iconOverride = <ChatBubble1 className="icon-instance-node-2" color="#344054" />;
                      badgeColor = "gray";
                    }

                    return (
                      <TableCell
                        key={idx}
                        badgeColor={badgeColor}
                        badgeIcon="icon-leading"
                        badgeText={row.status}
                        className={`table-cell-${6 + idx}`}
                        override={iconOverride}
                        stateProp="default"
                        style="badge"
                        supportingText={false}
                      />
                    );
                  })}
                </div>

                {/* Column 4: Payment Method */}
                <div className="column-3">
                  <TableHeaderCell
                    checkbox={false}
                    className="table-header-cell-instance"
                    color="gray"
                    tableHeaderText1="Payment Method"
                    text
                  />
                  {recentData.map((row, idx) => (
                    <TableCell
                      key={idx}
                      className="table-cell-instance"
                      stateProp="default"
                      style="text"
                      supportingText={false}
                      text={row.paymentMethod}
                    />
                  ))}
                </div>

                {/* Column 5: Brand */}
                <div className="column-4">
                  <TableHeaderCell
                    checkbox={false}
                    className="table-header-cell-instance"
                    color="gray"
                    tableHeaderText1="Brand"
                    text
                  />
                  {recentData.map((row, idx) => (
                    <TableCell
                      key={idx}
                      className="table-cell-instance"
                      stateProp="default"
                      style="text"
                      supportingText={false}
                      text={row.brand}
                    />
                  ))}
                </div>

                {/* Column 6: Platform */}
                <div className="column-5">
                  <TableHeaderCell
                    checkbox={false}
                    className="table-header-cell-instance"
                    color="gray"
                    tableHeaderText1="Platform"
                    text
                  />
                  {recentData.map((row, idx) => (
                    <TableCell
                      key={idx}
                      className="table-cell-instance"
                      stateProp="default"
                      style="text"
                      supportingText={false}
                      text={row.platform}
                    />
                  ))}
                </div>

                {/* Column 7: Actions */}
                <div className="column-3">
                  <TableHeaderCell
                    checkbox={false}
                    className="table-header-cell-2"
                    color="gray"
                    text={false}
                  />
                  {recentData.map((_, idx) => (
                    <div key={idx} className="table-cell-12">
                      <DropdownWrapper className="dropdown-5" />
                    </div>
                  ))}
                </div>
              </div>
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
    </div>
  );
};
