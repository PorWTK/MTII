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

  // You can define your own handleSubmit here
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something on submit, e.g. call an API or dispatch a Redux action
    console.log("Form submitted!");
  };

  // States for date fields (adjust as needed)
  const [quotationIssueDate, setQuotationIssueDate] = useState(null);
  const [quotationDueDate, setQuotationDueDate] = useState(null);
  const [invoiceIssueDate, setInvoiceIssueDate] = useState(null);
  const [invoiceDueDate, setInvoiceDueDate] = useState(null);
  const [receiptIssueDate, setReceiptIssueDate] = useState(null);
  const [postingDate, setPostingDate] = useState(null);

  // Example detail sets (add / remove logic)
  const [detailSets, setDetailSets] = useState([
    { description: "", notes: "", quantity: "", unitPrice: "" }
  ]);

  return (
    <form
      className={`form ${className || ""}`}
      onSubmit={handleSubmit}
      // If you want the default HTML form validation, remove the onSubmit override
      // or handle it differently as needed
    >
      <div className="divider-2" />

      {/* Quotation / Invoice / Receipt Section */}
      <div className="content-19">
        <div className="QIR-tab">
          {/* ---------- Example: Quotation ---------- */}
          <div className="frameQIR">
            <div className="input-field-3">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Quotation ID number</div>
                  <div className="asterisk-5">*</div>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  disabled={isDisabled}
                  InputProps={{
                    startAdornment: (
                      <div className="add-on">
                        <div className="text-36">QT</div>
                      </div>
                    ),
                  }}
                  className="text-input-4"
                  sx={{ "& .MuiOutlinedInput-root": { height: "44px" } }}
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
                      sx={{ height: "44px", width: "100% !important" }}
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

          {/* ---------- Example: Invoice ---------- */}
          <div className="frameQIR">
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
                  sx={{ "& .MuiOutlinedInput-root": { height: "44px" } }}
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

          {/* ---------- Example: Receipt ---------- */}
          <div className="frameQIR">
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
                  sx={{ "& .MuiOutlinedInput-root": { height: "44px" } }}
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

      {/* -------------- Additional Sections -------------- */}
      {/* (Receiver, Influencer, Client, Brand, Details, Payment, Sale Person) */}
      {/* They each have their own container with an optional SectionLabel, and
          each input is in a <div> with a label + MUI FormControl. 
          See the code you have for each section. 
          All these sections remain inside the same <form> so that the user can 
          press "Submit" at the end. */}

      {/* ...the rest of your code from above, for each section, remains basically the same... */}

      {/* -------------- Final Submit Button -------------- */}
      {/* Typically placed at the bottom of the form */}
      <div className="actions-9" style={{ margin: "20px 0" }}>
        <Button type="submit" variant="contained" disabled={isDisabled}>
          Submit
        </Button>
      </div>
    </form>
  );
};

Form.propTypes = {
  mode: PropTypes.oneOf(["create", "edit", "view"]),
  className: PropTypes.string,
};

export default Form;
