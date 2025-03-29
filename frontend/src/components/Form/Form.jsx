import PropTypes from "prop-types";
import React, { useState } from "react";
// Material‑UI components
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { SectionLabel } from "../SectionLabel";
import { ButtonsButton } from "../ButtonsButton";
import { Trash2 } from "../../icons/Trash2";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { Link } from "react-router-dom";
import "./style.css";

export const Form = ({ mode, className, ...props }) => {
  // In view mode, disable all inputs
  const isDisabled = mode === "view";

  // States for date fields
  const [quotationIssueDate, setQuotationIssueDate] = useState(null);
  const [quotationDueDate, setQuotationDueDate] = useState(null);
  const [invoiceIssueDate, setInvoiceIssueDate] = useState(null);
  const [invoiceDueDate, setInvoiceDueDate] = useState(null);
  const [receiptIssueDate, setReceiptIssueDate] = useState(null);
  const [postingDate, setPostingDate] = useState(null);

  // Details section dynamic state (min 1, max 4 sets)
  const [detailSets, setDetailSets] = useState([
    { description: "", notes: "", quantity: "", unitPrice: "" }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "create") {
      // Gather data from your form state
      const formData = { /* ... your data ... */ };
      saveNewOrder(formData)
        .then(() => {
          // After saving, navigate to the view page
          navigate("/view");
        })
        .catch((error) => {
          console.error("Error saving new order:", error);
        });
    } else if (mode === "edit") {
      const formData = { /* ... your updated data ... */ };
      updateOrder(invoiceId, formData)
        .then(() => {
          navigate(`/view/${invoiceId}`);
        })
        .catch((error) => {
          console.error("Error updating order:", error);
        });
    }
  };
  

  return (
    <form className={`form ${className || ""}`} onSubmit={handleSubmit}>
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

          {/* Invoice Section */}
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
              <div className="input-with-label-3">
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
              <div className="input-with-label-3">
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

          {/* Receipt Section */}
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
              <div className="input-with-label-3">
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
        <div className="action-buttons-container">
          {/* Action Buttons Section */}
          <div className="actions-9" style={{ margin: "20px 0" }}>
            {mode === "create" ? (
              <div className="actions-19">
                <div className="actions-19">
                  <ButtonsButton
                    className="design-component-instance-node-6"
                    hierarchy="secondary-gray"
                    icon="default"
                    iconLeading={false}
                    iconTrailing={false}
                    size="md"
                    stateProp="default"
                    text="Cancel"
                    to="/data"
                  />
                  <Link to="/view">
                    <img className="button-15" alt="Button" src="/img/button-36.svg" />
                  </Link>
                </div>
              </div>
            ) : mode === "edit" ? (
              <div className="actions-17">
                <ButtonsButton
                  className="design-component-instance-node-4"
                  hierarchy="secondary-gray"
                  icon="default"
                  iconTrailing={false}
                  override={<Trash2 className="icon-instance-node-8" />}
                  size="md"
                  stateProp="default"
                  text="Delete"
                />
                <Link to="/view">
                  <img className="button-13" alt="Button" src="/img/button-33.svg" />
                </Link>
              </div>
            ) : mode === "view" ? (
              <div className="actions-18">
                <ButtonsButton
                  className="design-component-instance-node-5"
                  hierarchy="secondary-gray"
                  icon="default"
                  iconTrailing={false}
                  override={<ChevronLeft className="icon-instance-node-9" />}
                  size="md"
                  stateProp="default"
                  text="Back"
                  to="/data"
                />
                <Link to="/edit">
                  <img className="button-14" alt="Button" src="/img/button-35.svg" />
                </Link>
              </div>
            ) : (
              <Button type="submit" variant="contained" disabled={isDisabled}>
                Submit
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="divider-2" />

      {/* Receiver Section */}
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
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Receiver</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="receiver-label" sx={{ display: "none" }}>
                  Receiver
                </InputLabel>
                <Select labelId="receiver-label" defaultValue="">
                  <MenuItem value="@PinnPW">@PinnPW</MenuItem>
                  <MenuItem value="@Porpyyy_">@Porpyyy_</MenuItem>
                  <MenuItem value="บริษัท โชคชัย 9672 จำกัด">
                    บริษัท โชคชัย 9672 จำกัด
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      {/* Influencer Section */}
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
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Channel</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="channel-label" sx={{ display: "none" }}>
                  Channel
                </InputLabel>
                <Select labelId="channel-label" defaultValue="">
                  <MenuItem value="@PinnPw">@PinnPw</MenuItem>
                  <MenuItem value="@Porpyyy_">@Porpyyy_</MenuItem>
                  <MenuItem value="@Porpagin">@Porpagin</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Platform</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="platform-label" sx={{ display: "none" }}>
                  Platform
                </InputLabel>
                <Select labelId="platform-label" defaultValue="">
                  <MenuItem value="TikTok">TikTok</MenuItem>
                  <MenuItem value="Instagram">Instagram</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Posting Date</div>
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
                      sx={{ height: "44px", width: "468px" }}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      {/* Client (Agency) Section */}
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
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Agency Name</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="agency-name-label" sx={{ display: "none" }}>
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
            </div>
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Tax Payer ID number</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="taxpayer-id-label" sx={{ display: "none" }}>
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
          </div>
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Address</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="address-label" sx={{ display: "none" }}>
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
            </div>
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Phone number</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="phone-agency-label" sx={{ display: "none" }}>
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
      </div>

      <div className="divider-2" />

      {/* Client (Contactor) Section */}
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
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Contacter Name</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="contacter-name-label" sx={{ display: "none" }}>
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
            </div>
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Phone number</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="phone-contacter-label" sx={{ display: "none" }}>
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
          </div>
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Line</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="line-label" sx={{ display: "none" }}>
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
            </div>
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Email</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="email-label" sx={{ display: "none" }}>
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
      </div>

      <div className="divider-2" />

      {/* Brand Section */}
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
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Brand name</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="brand-name-label" sx={{ display: "none" }}>
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
            </div>
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Product</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="product-label" sx={{ display: "none" }}>
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
      </div>

      <div className="divider-2" />

      {/* Details Section */}
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
            {detailSets.map((detail, index) => (
              <div key={index} className="div-3">
                <div className="frame">
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Description</div>
                      </div>
                    </div>
                    <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                      <InputLabel id={`description-label-${index}`} sx={{ display: "none" }}>
                        Description
                      </InputLabel>
                      <TextField
                        id={`description-${index}`}
                        variant="outlined"
                        fullWidth
                        disabled={isDisabled}
                        sx={{ height: "44px" }}
                        value={detail.description}
                        onChange={(e) => {
                          const newSets = [...detailSets];
                          newSets[index].description = e.target.value;
                          setDetailSets(newSets);
                        }}
                      />
                    </FormControl>
                  </div>
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Notes</div>
                      </div>
                    </div>
                    <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                      <InputLabel id={`notes-label-${index}`} sx={{ display: "none" }}>
                        Notes
                      </InputLabel>
                      <TextField
                        id={`notes-${index}`}
                        variant="outlined"
                        fullWidth
                        disabled={isDisabled}
                        sx={{ height: "44px" }}
                        value={detail.notes}
                        onChange={(e) => {
                          const newSets = [...detailSets];
                          newSets[index].notes = e.target.value;
                          setDetailSets(newSets);
                        }}
                      />
                    </FormControl>
                  </div>
                </div>
                <div className="frame">
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Quantity</div>
                      </div>
                    </div>
                    <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                      <InputLabel id={`quantity-label-${index}`} sx={{ display: "none" }}>
                        Quantity
                      </InputLabel>
                      <TextField
                        id={`quantity-${index}`}
                        variant="outlined"
                        fullWidth
                        disabled={isDisabled}
                        sx={{ height: "44px" }}
                        value={detail.quantity}
                        onChange={(e) => {
                          const newSets = [...detailSets];
                          newSets[index].quantity = e.target.value;
                          setDetailSets(newSets);
                        }}
                      />
                    </FormControl>
                  </div>
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Unit price</div>
                      </div>
                    </div>
                    <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                      <InputLabel id={`unit-price-label-${index}`} sx={{ display: "none" }}>
                        Unit price
                      </InputLabel>
                      <TextField
                        id={`unit-price-${index}`}
                        variant="outlined"
                        fullWidth
                        disabled={isDisabled}
                        sx={{ height: "44px" }}
                        value={detail.unitPrice}
                        onChange={(e) => {
                          const newSets = [...detailSets];
                          newSets[index].unitPrice = e.target.value;
                          setDetailSets(newSets);
                        }}
                      />
                    </FormControl>
                  </div>
                </div>
                {index < detailSets.length - 1 && <div className="divider-3" />}
              </div>
            ))}

            <div className="div-3">
              <div className="actions-9">
                <Button
                  variant="contained"
                  disabled={isDisabled || detailSets.length === 1}
                  sx={{
                    backgroundColor: "#ff4d4d",
                    "&:hover": { backgroundColor: "#e60000" },
                  }}
                  onClick={() =>
                    setDetailSets(detailSets.slice(0, detailSets.length - 1))
                  }
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  disabled={isDisabled || detailSets.length === 4}
                  sx={{
                    backgroundColor: "#7F56D9",
                    "&:hover": { backgroundColor: "#8B5FED" },
                  }}
                  onClick={() =>
                    setDetailSets([
                      ...detailSets,
                      { description: "", notes: "", quantity: "", unitPrice: "" },
                    ])
                  }
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      {/* Payment Section */}
      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Payment"
        />
        <div className="input-fields-3">
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Bank</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="bank-label" sx={{ display: "none" }}>ธนาคาร</InputLabel>
                <Select labelId="bank-label" defaultValue="">
                  <MenuItem value="bbl">ธนาคารกรุงเทพ (BBL)</MenuItem>
                  <MenuItem value="ktb">ธนาคารกรุงไทย (KTB)</MenuItem>
                  <MenuItem value="kbank">ธนาคารกสิกรไทย (KBank)</MenuItem>
                  <MenuItem value="scb">ธนาคารไทยพาณิชย์ (SCB)</MenuItem>
                  <MenuItem value="krungsri">ธนาคารกรุงศรีอยุธยา (Krungsri)</MenuItem>
                  <MenuItem value="ttb">ธนาคารทหารไทยธนชาต (TTB)</MenuItem>
                  <MenuItem value="gsb">ธนาคารออมสิน (GSB)</MenuItem>
                  <MenuItem value="baac">ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร (BAAC)</MenuItem>
                  <MenuItem value="cimb">ธนาคารซีไอเอ็มบีไทย (CIMB)</MenuItem>
                  <MenuItem value="ghb">ธนาคารอาคารสงเคราะห์ (GHB)</MenuItem>
                  <MenuItem value="lhb">ธนาคารแลนด์แอนด์เฮ้าส์ (LHB)</MenuItem>
                  <MenuItem value="tisco">ธนาคารทิสโก้ (TISCO)</MenuItem>
                  <MenuItem value="kiatnakin">ธนาคารเกียรตินาคิน (Kiatnakin)</MenuItem>
                  <MenuItem value="maybank">ธนาคารเมย์แบงก์ (Maybank)</MenuItem>
                  <MenuItem value="hsbc">ธนาคารเอชเอสบีซี (HSBC)</MenuItem>
                  <MenuItem value="stdchartered">ธนาคารสแตนดาร์ดชาร์เตอร์ (Standard Chartered)</MenuItem>
                  <MenuItem value="uob">ธนาคารยูโอบี (UOB)</MenuItem>
                  <MenuItem value="citi">ธนาคารซิตี้แบงก์ (Citibank)</MenuItem>
                  <MenuItem value="ibank">ธนาคารอิสลามแห่งประเทศไทย (Islamic Bank of Thailand)</MenuItem>
                  <MenuItem value="icbc">ธนาคารไอซีบีซี (ICBC)</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Transaction Reference number</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="transaction-ref-label" sx={{ display: "none" }}>
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
          </div>
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Status</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="status-label" sx={{ display: "none" }}>
                  Status
                </InputLabel>
                <Select labelId="status-label" defaultValue="">
                  <MenuItem value="Paid">Paid</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Overdue">Overdue</MenuItem>
                  <MenuItem value="Draft">Draft</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Payment method</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="payment-method-label" sx={{ display: "none" }}>
                  Payment method
                </InputLabel>
                <Select labelId="payment-method-label" defaultValue="">
                  <MenuItem value="Full Payment">Full Payment</MenuItem>
                  <MenuItem value="Deposit">Deposit</MenuItem>
                  <MenuItem value="Credit Term">Credit Term</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Terms and conditions</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="terms-label" sx={{ display: "none" }}>
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
          </div>
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Total Payment Amount</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="total-payment-label" sx={{ display: "none" }}>
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
            </div>
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Notes for the total payment</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="notes-total-payment-label" sx={{ display: "none" }}>
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
          </div>
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">First Payment</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="first-payment-label" sx={{ display: "none" }}>
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
            </div>
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Notes for the first payment</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="notes-first-payment-label" sx={{ display: "none" }}>
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
          </div>
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Second Payment</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="second-payment-label" sx={{ display: "none" }}>
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
            </div>
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Notes for the second payment</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="notes-second-payment-label" sx={{ display: "none" }}>
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
          </div>
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Unpaid payment amount</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="unpaid-payment-label" sx={{ display: "none" }}>
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
            </div>
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Notes for the unpaid payment</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="notes-unpaid-payment-label" sx={{ display: "none" }}>
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
      </div>

      <div className="divider-2" />

      {/* Sale Person Section */}
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
          <div className="frame">
            <div className="inputbox">
              <div className="label-for-input">
                <div className="label-wrapper">
                  <div className="label">Sale Person</div>
                </div>
              </div>
              <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
                <InputLabel id="sale-person-label" sx={{ display: "none" }}>
                  Sale Person
                </InputLabel>
                <Select labelId="sale-person-label" defaultValue="">
                  <MenuItem value="MissFah">Miss Fah</MenuItem>
                  <MenuItem value="MissKan">Miss Kan</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-2" />
    </form>
  );
};

Form.propTypes = {
  mode: PropTypes.oneOf(["create", "edit", "view"]),
  className: PropTypes.string,
};

export default Form;
