import React from "react";
import { DatePickerDropdown } from "../../components/DatePickerDropdown";
import { DropdownWrapper } from "../../components/DropdownWrapper";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { InputDropdown } from "../../components/InputDropdown";
import { MetricItem } from "../../components/MetricItem";
import { Pagination } from "../../components/Pagination";
import { SectionHeader } from "../../components/SectionHeader";
import { TableCell } from "../../components/TableCell";
import { TableHeaderCell } from "../../components/TableHeaderCell";
import { Calendar29 } from "../../icons/Calendar29";
import { ChatBubble1 } from "../../icons/ChatBubble1";
import { Check32 } from "../../icons/Check32";
import { LogOut } from "../../icons/LogOut";
import { ReverseLeft1 } from "../../icons/ReverseLeft1";
import { XClose30 } from "../../icons/XClose30";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Analytics = () => {
  const navigate = useNavigate();
  return (
    <div className="analytics">
      <HeaderNavigationWrapper
        className="header-navigation-2"
        headerNavigationNavItemBaseCurrent={false}
        headerNavigationNavItemBaseCurrent1
        headerNavigationNavItemButtonIcon={
          <LogOut className="icon-instance-node" />
        }
      />
      <div className="main">
        <div className="header">
          <div className="header-2">
            <div className="text-and-supporting-12">
              <p className="text-44">
                Incomes Tracking &amp; Managing (Analytics)
              </p>

              <div className="supporting-text-14">Analyze the incomes</div>
            </div>

            <div className="actions-8" />
          </div>

          <div className="tabs-and-filters">
            <div className="frame">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Dates</div>
                </div>
              </div>

              <DatePickerDropdown
                breakpoint="mobile"
                buttonsButtonIcon={
                  <Calendar29 className="icon-instance-node" />
                }
                buttonsButtonSizeMdHierarchyClassName="date-picker-dropdown-4"
                buttonsButtonText="Select dates"
                buttonsButtonTextClassName="date-picker-dropdown-3"
                buttonsButtonTextPaddingClassName="date-picker-dropdown-2"
                className="date-picker-dropdown-instance"
                opened={false}
                stateProp="active"
                type="dual-dates"
              />
            </div>

            <InputDropdown
              className="input-dropdown-2"
              helpIcon={false}
              hintText={false}
              inputWithLabelClassName="input-dropdown-3"
              required={false}
              stateProp="default"
              supportingText={false}
              text="Channel"
              text1="All"
              type="default"
            />
          </div>
        </div>

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
            text="Total pending (baht)"
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
            text="Total overdue (baht)"
            text1="9,900"
            type="chart-01"
          />
        </div>

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
              <div className="pie-chart-2">
                <div className="overlap-group-10">
                  <img
                    className="series"
                    alt="Series"
                    src="/img/series-1-4.svg"
                  />

                  <img
                    className="series-2"
                    alt="Series"
                    src="/img/series-2-7.svg"
                  />

                  <img
                    className="series-3"
                    alt="Series"
                    src="/img/series-3-7.svg"
                  />
                </div>
              </div>

              <div className="legend">
                <div className="legend-series">
                  <div className="color-wrapper">
                    <div className="color" />
                  </div>

                  <div className="text-wrapper-8">Paid</div>

                  <div className="text-wrapper-8">(20)</div>
                </div>

                <div className="legend-series">
                  <div className="color-wrapper">
                    <div className="color-2" />
                  </div>

                  <div className="text-wrapper-8">Pending</div>

                  <div className="text-wrapper-8">(30)</div>
                </div>

                <div className="legend-series">
                  <div className="color-wrapper">
                    <div className="color-3" />
                  </div>

                  <div className="text-wrapper-8">Overdue</div>

                  <div className="text-wrapper-8">(8)</div>
                </div>

                <div className="legend-series">
                  <div className="color-wrapper">
                    <div className="color-4" />
                  </div>

                  <div className="text-wrapper-8">Draft</div>

                  <div className="text-wrapper-8">(29)</div>
                </div>
              </div>
            </div>
          </div>

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
                  <TableCell
                    className="table-cell-instance"
                    hasText={false}
                    stateProp="default"
                    style="lead-checkbox"
                    supportingText={false}
                    text="IV3066"
                  />
                  <TableCell
                    className="table-cell-2"
                    hasText={false}
                    stateProp="default"
                    style="lead-checkbox"
                    supportingText={false}
                    text="IV3065"
                  />
                  <TableCell
                    className="table-cell-3"
                    hasText={false}
                    stateProp="default"
                    style="lead-checkbox"
                    supportingText={false}
                    text="IV3064"
                  />
                  <TableCell
                    className="table-cell-4"
                    hasText={false}
                    stateProp="default"
                    style="lead-checkbox"
                    supportingText={false}
                    text="IV3063"
                  />
                  <TableCell
                    className="table-cell-5"
                    hasText={false}
                    stateProp="default"
                    style="lead-checkbox"
                    supportingText={false}
                    text="IV3062"
                  />
                </div>

                <div className="column-2">
                  <div className="table-header-wrapper">
                    <div className="table-header-2">
                      <div className="text-45">Posting Date</div>
                    </div>
                  </div>

                  <TableCell
                    className="table-cell-instance"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="6 Jan 2024"
                  />
                  <TableCell
                    className="table-cell-2"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="6 Jan 2024"
                  />
                  <TableCell
                    className="table-cell-3"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="6 Jan 2024"
                  />
                  <TableCell
                    className="table-cell-4"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="5 Jan 2024"
                  />
                  <TableCell
                    className="table-cell-5"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="5 Jan 2024"
                  />
                </div>

                <div className="column-3">
                  <TableHeaderCell
                    checkbox={false}
                    className="table-header-cell-instance"
                    color="gray"
                    tableHeaderText1="Status"
                    text
                  />
                  <TableCell
                    badgeColor="gray"
                    badgeIcon="icon-leading"
                    badgeText="Draft"
                    className="table-cell-6"
                    override={
                      <ChatBubble1
                        className="icon-instance-node-2"
                        color="#344054"
                      />
                    }
                    stateProp="default"
                    style="badge"
                    supportingText={false}
                  />
                  <TableCell
                    badgeColor="success"
                    badgeIcon="icon-leading"
                    badgeText="Paid"
                    className="table-cell-7"
                    override={<Check32 className="icon-instance-node-2" />}
                    stateProp="default"
                    style="badge"
                    supportingText={false}
                  />
                  <TableCell
                    badgeColor="warning"
                    badgeIcon="icon-leading"
                    badgeText="Pending"
                    className="table-cell-8"
                    override={<ReverseLeft1 className="icon-instance-node-2" />}
                    stateProp="default"
                    style="badge"
                    supportingText={false}
                  />
                  <TableCell
                    badgeColor="error"
                    badgeIcon="icon-leading"
                    badgeText="Overdue"
                    className="table-cell-9"
                    override={
                      <XClose30
                        className="icon-instance-node-2"
                        color="#F04438"
                      />
                    }
                    stateProp="default"
                    style="badge"
                    supportingText={false}
                  />
                  <TableCell
                    badgeColor="success"
                    badgeIcon="icon-leading"
                    badgeText="Paid"
                    className="table-cell-10"
                    override={<Check32 className="icon-instance-node-2" />}
                    stateProp="default"
                    style="badge"
                    supportingText={false}
                  />
                </div>

                <div className="column-3">
                  <TableHeaderCell
                    checkbox={false}
                    className="table-header-cell-instance"
                    color="gray"
                    tableHeaderText1="Payment Method"
                    text
                  />
                  <TableCell
                    className="table-cell-instance"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="Full Payment"
                  />
                  <TableCell
                    className="table-cell-2"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="Deposit"
                  />
                  <TableCell
                    className="table-cell-3"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="Credit Term"
                  />
                  <TableCell
                    className="table-cell-4"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="Full Payment"
                  />
                  <TableCell
                    className="table-cell-5"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="Full Payment"
                  />
                </div>

                <div className="column-4">
                  <TableHeaderCell
                    checkbox={false}
                    className="table-header-cell-instance"
                    color="gray"
                    tableHeaderText1="Brand"
                    text
                  />
                  <TableCell
                    className="table-cell-instance"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="Eucerin Thailand"
                    textAndSupportingClassName="table-cell-11"
                  />
                  <TableCell
                    className="table-cell-2"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="Oreo Rizz"
                    textAndSupportingClassName="table-cell-11"
                  />
                  <TableCell
                    className="table-cell-3"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="MAC Cosmetics"
                    textAndSupportingClassName="table-cell-11"
                  />
                  <TableCell
                    className="table-cell-4"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="With that perfume"
                    textAndSupportingClassName="table-cell-11"
                  />
                  <TableCell
                    className="table-cell-5"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="Snacks Jumbo Th"
                    textAndSupportingClassName="table-cell-11"
                  />
                </div>

                <div className="column-5">
                  <TableHeaderCell
                    checkbox={false}
                    className="table-header-cell-instance"
                    color="gray"
                    tableHeaderText1="Platform"
                    text
                  />
                  <TableCell
                    className="table-cell-instance"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="TikTok"
                  />
                  <TableCell
                    className="table-cell-2"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="Instagram"
                  />
                  <TableCell
                    className="table-cell-3"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="TikTok"
                  />
                  <TableCell
                    className="table-cell-4"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="TikTok"
                  />
                  <TableCell
                    className="table-cell-5"
                    stateProp="default"
                    style="text"
                    supportingText={false}
                    text="TikTok"
                  />
                </div>

                <div className="column-3">
                  <TableHeaderCell
                    checkbox={false}
                    className="table-header-cell-2"
                    color="gray"
                    text={false}
                  />
                  <div className="table-cell-12">
                    <DropdownWrapper className="dropdown-5" />
                  </div>

                  <div className="table-cell-13">
                    <DropdownWrapper className="dropdown-5" />
                  </div>

                  <div className="table-cell-14">
                    <DropdownWrapper className="dropdown-5" />
                  </div>

                  <div className="table-cell-15">
                    <DropdownWrapper className="dropdown-5" />
                  </div>

                  <div className="table-cell-16">
                    <DropdownWrapper className="dropdown-5" />
                  </div>
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
