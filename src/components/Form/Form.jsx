
import PropTypes from "prop-types";
import React, { useState } from "react";
// Material‑UI components
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { SectionLabel } from "../SectionLabel";

import "./style.css";

export const Form = ({ mode, className, ...props }) => {
  // In view mode, disable all inputs
  const isDisabled = mode === "view";

  // States for date fields (adjust as needed)
  const [quotationIssueDate, setQuotationIssueDate] = useState(null);
  const [quotationDueDate, setQuotationDueDate] = useState(null);
  const [invoiceIssueDate, setInvoiceIssueDate] = useState(null);
  const [invoiceDueDate, setInvoiceDueDate] = useState(null);
  const [receiptIssueDate, setReceiptIssueDate] = useState(null);
  const [postingDate, setPostingDate] = useState(null);

  return (
    <div className={`form ${className || ""}`}>
      <div className="divider-2" />

      {/* Quotation / Invoice / Receipt Section */}
      <div className="content-19">
        <div className="QIR-tab">
          <div className="frame">
            {/* Quotation ID number */}
            <div className="input-field-3">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Quotation ID number</div>
                  <div className="asterisk-5">*</div>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  fullHeight
                  disabled={isDisabled}
                  InputProps={{
                    startAdornment: (
                      <div className="add-on">
                        <div className="text-36">QT</div>
                      </div>
                    ),
                  }}
                  className="text-input-4"
                  sx={{
                    "& .MuiOutlinedInput-root": { height: "44px" },
                  }}
                />
              </div>
            </div>

            {/* Quotation issue date */}
            <div className="frame-2">
              <div className="input-with-label-4">
                <div className="label-wrapper-4">
                  <div className="label-3">Quotation issue date</div>
                </div>
              </div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={quotationIssueDate}
                  onChange={(newValue) => setQuotationIssueDate(newValue)}
                  disabled={isDisabled}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{ height: "44px", width: "100% !important"}}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>

            {/* Quotation due date */}
            <div className="frame-2">
              <div className="input-with-label-4">
                <div className="label-wrapper-4"> 
                  <div className="label-3">Quotation due date</div>
                </div>
              </div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={quotationDueDate}
                  onChange={(newValue) => setQuotationDueDate(newValue)}
                  disabled={isDisabled}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      sx={{ height: "44px", width: "405.33px" }}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>

          <div className="frame">
            {/* Invoice ID number */}
            <div className="input-field-3">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Invoice ID number</div>
                  <div className="asterisk-5">*</div>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  disabled={isDisabled}
                  InputProps={{
                    startAdornment: (
                      <div className="add-on">
                        <div className="text-36">IV</div>
                      </div>
                    ),
                  }}
                  className="text-input-4"
                  sx={{
                    "& .MuiOutlinedInput-root": { height: "44px" },
                  }}
                />
              </div>
            </div>

            {/* Invoice issue date */}
            <div className="frame-2">
              <div className="input-with-label-4">
                <div className="label-wrapper-4">
                  <div className="label-3">Invoice issue date</div>
                </div>
              </div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={invoiceIssueDate}
                  onChange={(newValue) => setInvoiceIssueDate(newValue)}
                  disabled={isDisabled}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      sx={{ height: "44px", width: "405.33px" }}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>

            {/* Invoice due date */}
            <div className="frame-2">
              <div className="input-with-label-4">
                <div className="label-wrapper-4">
                  <div className="label-3">Invoice due date</div>
                </div>
              </div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={invoiceDueDate}
                  onChange={(newValue) => setInvoiceDueDate(newValue)}
                  disabled={isDisabled}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      sx={{ height: "44px", width: "405.33px" }}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>

          <div className="frame">
            {/* Receipt ID number */}
            <div className="input-field-3">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Receipt ID number</div>
                  <div className="asterisk-5">*</div>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  disabled={isDisabled}
                  InputProps={{
                    startAdornment: (
                      <div className="add-on">
                        <div className="text-36">RC</div>
                      </div>
                    ),
                  }}
                  className="text-input-4"
                  sx={{
                    "& .MuiOutlinedInput-root": { height: "44px" },
                  }}
                />
              </div>
            </div>

            {/* Receipt issue date */}
            <div className="frame-2">
              <div className="input-with-label-4">
                <div className="label-wrapper-4">
                  <div className="label-3">Receipt issue date</div>
                </div>
              </div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={receiptIssueDate}
                  onChange={(newValue) => setReceiptIssueDate(newValue)}
                  disabled={isDisabled}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      sx={{ height: "44px", width: "405.33px" }}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      {/* --- Receiver Section --- */}
      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Receiver"
        />
        <div className="input-fields-3">
          <div className="input-with-label-4">
            <div className="label-wrapper-4">
              <div className="label-3">Receiver</div>
            </div>
          </div>
          <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
            <InputLabel id="receiver-label" sx={{ display: "none" }}>
              Receiver
            </InputLabel>
            <Select labelId="receiver-label" defaultValue="">
              <MenuItem value="@PinnPW">@PinnPW</MenuItem>
              <MenuItem value="@Porpyyy_">@Porpyyy_</MenuItem>
              <MenuItem value="บริษัท โชคชัย 9672 จำกัด">บริษัท โชคชัย 9672 จำกัด</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="divider-2" />

      {/* --- Influencer Section --- */}
      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Influencer"
        />
        <div className="input-fields-3">
          <div className="frame-3">
            <div className="input-fields-3">
              <div className="input-with-label-4">
                <div className="label-wrapper-4">
                  <div className="label-3">Channel</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "479px" }} disabled={isDisabled}>
                <InputLabel id="channel-label">Channel</InputLabel>
                <Select labelId="channel-label" label="Channel" defaultValue="">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Option1">Option1</MenuItem>
                </Select>
              </FormControl>
            </div>
            <FormControl fullWidth sx={{ width: "479px" }} disabled={isDisabled}>
              <InputLabel id="platform-label">Platform</InputLabel>
              <Select labelId="platform-label" label="Platform" defaultValue="">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Option1">Option1</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="frame-4">
            <div className="input-with-label-4">
              <div className="label-wrapper-4">
                <div className="label-3">Posting Date</div>
              </div>
            </div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={postingDate}
                onChange={(newValue) => setPostingDate(newValue)}
                disabled={isDisabled}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    sx={{ height: "44px", width: "476px" }}
                  />
                )}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      {/* --- Client (Agency) Section --- */}
      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Client (Agency)"
        />
        <div className="input-fields-3">
          <div className="frame-3">
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="agency-name">
                Agency Name
              </InputLabel>
              <TextField
                id="agency-name"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="taxpayer-id">
                Tax Payer ID number
              </InputLabel>
              <TextField
                id="taxpayer-id"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
          </div>
          <div className="frame-3">
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="address">
                Address
              </InputLabel>
              <TextField
                id="address"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="phone-agency">
                Phone number
              </InputLabel>
              <TextField
                id="phone-agency"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                type="tel"
                sx={{ height: "44px" }}
              />
            </FormControl>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      {/* --- Client (Contactor) Section --- */}
      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Client (Contactor)"
        />
        <div className="input-fields-3">
          <div className="frame-3">
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="contacter-name">
                Contacter Name
              </InputLabel>
              <TextField
                id="contacter-name"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="phone-contacter">
                Phone number
              </InputLabel>
              <TextField
                id="phone-contacter"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                type="tel"
                sx={{ height: "44px" }}
              />
            </FormControl>
          </div>
          <div className="frame-3">
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="line">
                Line
              </InputLabel>
              <TextField
                id="line"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="email">
                Email
              </InputLabel>
              <TextField
                id="email"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                type="email"
                sx={{ height: "44px" }}
              />
            </FormControl>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      {/* --- Brand Section --- */}
      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Brand"
        />
        <div className="input-fields-3">
          <div className="frame-3">
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="brand-name">
                Brand name
              </InputLabel>
              <TextField
                id="brand-name"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="product">
                Product
              </InputLabel>
              <TextField
                id="product"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      {/* --- Details Section --- */}
      <div className="frame-5">
        <div className="content-19">
          <SectionLabel
            actions={false}
            className="section-label-instance"
            helpIcon={false}
            size="sm"
            supportingText={false}
            text="Details"
          />
          <div className="frame-6">
            <div className="div-3">
              <div className="frame-3">
                <FormControl fullWidth>
                  <InputLabel shrink htmlFor="description-1">
                    Description
                  </InputLabel>
                  <TextField
                    id="description-1"
                    variant="outlined"
                    fullWidth
                    disabled={isDisabled}
                    sx={{ height: "44px" }}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel shrink htmlFor="notes-1">Notes</InputLabel>
                  <TextField
                    id="notes-1"
                    variant="outlined"
                    fullWidth
                    disabled={isDisabled}
                    sx={{ height: "44px" }}
                  />
                </FormControl>
              </div>
              <div className="frame-3">
                <FormControl fullWidth>
                  <InputLabel shrink htmlFor="quantity-1">
                    Quantity
                  </InputLabel>
                  <TextField
                    id="quantity-1"
                    variant="outlined"
                    fullWidth
                    disabled={isDisabled}
                    sx={{ height: "44px" }}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel shrink htmlFor="unit-price-1">
                    Unit price
                  </InputLabel>
                  <TextField
                    id="unit-price-1"
                    variant="outlined"
                    fullWidth
                    disabled={isDisabled}
                    sx={{ height: "44px" }}
                  />
                </FormControl>
              </div>
              <div className="divider-3" />
            </div>
            <div className="div-3">
              <div className="frame-3">
                <FormControl fullWidth>
                  <InputLabel shrink htmlFor="description-2">
                    Description
                  </InputLabel>
                  <TextField
                    id="description-2"
                    variant="outlined"
                    fullWidth
                    disabled={isDisabled}
                    sx={{ height: "44px" }}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel shrink htmlFor="notes-2">Notes</InputLabel>
                  <TextField
                    id="notes-2"
                    variant="outlined"
                    fullWidth
                    disabled={isDisabled}
                    sx={{ height: "44px" }}
                  />
                </FormControl>
              </div>
              <div className="frame-3">
                <FormControl fullWidth>
                  <InputLabel shrink htmlFor="quantity-2">
                    Quantity
                  </InputLabel>
                  <TextField
                    id="quantity-2"
                    variant="outlined"
                    fullWidth
                    disabled={isDisabled}
                    sx={{ height: "44px" }}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel shrink htmlFor="unit-price-2">
                    Unit price
                  </InputLabel>
                  <TextField
                    id="unit-price-2"
                    variant="outlined"
                    fullWidth
                    disabled={isDisabled}
                    sx={{ height: "44px" }}
                  />
                </FormControl>
              </div>
              <div className="divider-3" />
            </div>
            <div className="div-3">
              <div className="actions-9">
                <Button variant="contained" color="secondary" disabled={isDisabled}>
                  Delete
                </Button>
                <Button variant="contained" disabled={isDisabled}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      {/* --- Payment Section --- */}
      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Payment"
        />
        <div className="frame-7">
          <div className="frame-8">
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="bank">
                Bank
              </InputLabel>
              <TextField
                id="bank"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="transaction-ref">
                Transaction Reference number
              </InputLabel>
              <TextField
                id="transaction-ref"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
          </div>
          <div className="frame-9">
            <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
              <InputLabel id="status-label">Status</InputLabel>
              <Select labelId="status-label" label="Status" defaultValue="">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Paid">Paid</MenuItem>
                <MenuItem value="Unpaid">Unpaid</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
              <InputLabel id="payment-method-label">Payment method</InputLabel>
              <Select labelId="payment-method-label" label="Payment method" defaultValue="">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Credit Card">Credit Card</MenuItem>
                <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="frame-3">
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="terms-conditions">
                Terms and conditions
              </InputLabel>
              <TextField
                id="terms-conditions"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
          </div>
          <div className="frame-3">
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="total-payment">
                Total Payment Amount
              </InputLabel>
              <TextField
                id="total-payment"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="notes-total-payment">
                Notes for the total payment
              </InputLabel>
              <TextField
                id="notes-total-payment"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
          </div>
          <div className="frame-3">
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="first-payment">
                First Payment
              </InputLabel>
              <TextField
                id="first-payment"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="notes-first-payment">
                Notes for the first payment
              </InputLabel>
              <TextField
                id="notes-first-payment"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
          </div>
          <div className="frame-3">
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="second-payment">
                Second Payment
              </InputLabel>
              <TextField
                id="second-payment"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="notes-second-payment">
                Notes for the second payment
              </InputLabel>
              <TextField
                id="notes-second-payment"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
          </div>
          <div className="frame-3">
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="unpaid-payment">
                Unpaid payment amount
              </InputLabel>
              <TextField
                id="unpaid-payment"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel shrink htmlFor="notes-unpaid-payment">
                Notes for the unpaid payment
              </InputLabel>
              <TextField
                id="notes-unpaid-payment"
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                sx={{ height: "44px" }}
              />
            </FormControl>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      {/* --- Sale Person Section --- */}
      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Sale Person"
        />
        <div className="input-fields-3">
          <div className="input-with-label-4">
            <div className="label-wrapper-4">
              <div className="label-3">Sale Person</div>
            </div>
          </div>
          <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
            <InputLabel id="sale-person-label" sx={{ display: "none" }}>
              Sale person
            </InputLabel>
            <Select labelId="receiver-label" defaultValue="">
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="MissFah">Miss Fah</MenuItem>
              <MenuItem value="MissKan">Miss Kan</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="divider-2" />
    </div>
  );
};

Form.propTypes = {
  mode: PropTypes.oneOf(["create", "edit", "view"]),
  className: PropTypes.string,
};

export default Form;
