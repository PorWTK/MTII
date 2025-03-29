// import React from "react";
// // import { ButtonsButton } from "../../components/ButtonsButton";
// import { Form } from "../../components/Form";
// import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
// import { LogOut } from "../../icons/LogOut";
// // import { Link } from "react-router-dom";
// import "./style.css";

// export const Create = () => {
//   return (
//     <div className="create">
//       <HeaderNavigationWrapper
//         className="header-navigation-9"
//         headerNavigationNavItemBaseCurrent
//         headerNavigationNavItemBaseCurrent1={false}
//         headerNavigationNavItemButtonIcon={
//           <LogOut className="icon-instance-node-10" />
//         }
//       />
//       <div className="main-8">
//         <div className="section-9">
//           <div className="content-42">
//             <div className="text-and-supporting-20">
//               <div className="text-54">Create a new order</div>

//               <p className="supporting-text-13">
//                 Fill out the form below to create a new invoice
//               </p>
//             </div>

//             {/* <div className="actions-19">
//               <div className="actions-19">
//                 <ButtonsButton
//                   className="design-component-instance-node-6"
//                   hierarchy="secondary-gray"
//                   icon="default"
//                   iconLeading={false}
//                   iconTrailing={false}
//                   size="md"
//                   stateProp="default"
//                   text="Cancel"
//                   to="/data"
//                 />
//                 <Link to="/view">
//                   <img
//                     className="button-15"
//                     alt="Button"
//                     src="/img/button-36.svg"
//                   />
//                 </Link>
//               </div>
//             </div> */}
//           </div>

//           <Form
//             button="/img/button-37.svg"
//             buttonClassName="form-11"
//             buttonsButtonStateProp="default"
//             className="design-component-instance-node-6"
//             mode = "create"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { Form } from "../../components/Form";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { Calendar29 } from "../../icons/Calendar29";
import { LogOut } from "../../icons/LogOut";
import { Link } from "react-router-dom";
import { SectionLabel } from "../../components/SectionLabel";
import "./style.css";
import { useState } from "react";
import api from "../../api"; 
// Material‑UI components
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export const Create = () => {
  const [formData, setFormData] = useState({
    quotation_id_number: "",
    quotation_issue_date: "",
    quotation_due_date: "",
    invoice_id_number: "",
    invoice_issue_date: "",
    invoice_due_date: "",
    receipt_issue_date: "",
    receipt_id_number: "",
    agency_tax_payer_id_number: "",
    influencer_posting_date: "",
    agency_agency_name: "",
    agency_address: "",
    agency_phone_number: "",
    contactor_contactor_name: "",
    contactor_phone_number: "",
    contactor_line: "",
    contactor_email: "",
    brand_brand_name: "",
    brand_product: "",
    transaction_reference_number: "",
    terms_and_conditions: "",
    total_payment_amount: "",
    notes_for_the_total_payment: "",
    first_payment: "",
    notes_for_the_first_payment: "",
    second_payment: "",
    notes_for_the_second_payment: "",
    unpaid_payment_amount: "",
    notes_for_the_unpaid_payment: "",
    platform_id: "",
    status_id: "",
    payment_method_id: "",
    receiver_id: "",
    sale_person_id: "",
    channel_id: "",
    bank_id: "",
  });


  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    console.log("Form Data:", formData);

    const convertToISO = (date) => (date ? new Date(date).toISOString() : null);

    const formattedData = {
      ...formData,
      quotation_issue_date: convertToISO(formData.quotation_issue_date),
      quotation_due_date: convertToISO(formData.quotation_due_date),
      invoice_issue_date: convertToISO(formData.invoice_issue_date),
      invoice_due_date: convertToISO(formData.invoice_due_date),
      receipt_issue_date: convertToISO(formData.receipt_issue_date),
      influencer_posting_date: convertToISO(formData.influencer_posting_date),
      quotation_id_number: Number(formData.quotation_id_number) || null,
      invoice_id_number: Number(formData.invoice_id_number) || null,
      receipt_id_number: Number(formData.receipt_id_number) || null,
      agency_tax_payer_id_number: Number(formData.agency_tax_payer_id_number) || null,
      transaction_reference_number: Number(formData.transaction_reference_number) || null,
      total_payment_amount: Number(formData.total_payment_amount) || null,
      first_payment: Number(formData.first_payment) || null,
      second_payment: Number(formData.second_payment) || null,
      unpaid_payment_amount: Number(formData.unpaid_payment_amount) || null,
      platform_id: Number(formData.platform_id) || null,
      status_id: Number(formData.status_id) || null,
      payment_method_id: Number(formData.payment_method_id) || null,
      receiver_id: Number(formData.receiver_id) || null,
      sale_person_id: Number(formData.sale_person_id) || null,
      channel_id: Number(formData.channel_id) || null,
      bank_id: Number(formData.bank_id) || null,
    };

    try {
      const responses = await api.post("/income/", formattedData);
      setMessage("Income successfully added!");
      setFormData(formattedData);
    } catch (error) {
      console.error("Error submitting income:", error);
      setMessage("Failed to add income.");
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <div className="create">
      <HeaderNavigationWrapper
        className="header-navigation-9"
        headerNavigationNavItemBaseCurrent
        headerNavigationNavItemBaseCurrent1={false}
        headerNavigationNavItemButtonIcon={
          <LogOut className="icon-instance-node-10" />
        }
      />
      <div className="main-8">
        <div className="section-9">
          <div className="content-42">
            <div className="text-and-supporting-20">
              <div className="text-54">Create a new order</div>

              <p className="supporting-text-13">
                Fill out the form below to create a new invoice
              </p>
            </div>
          </div>
          
          <div className="form">
          {message && <p>{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className="divider-2" />

            {/* Quotation / Invoice / Receipt Section */}
            <div className="content-19">
              <div className="QIR-tab">
                <div className="frameQIR">
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
                        type="number" name="quotation_id_number" value={formData.quotation_id_number} onChange={handleChange} required
                        InputProps={{
                          startAdornment: (
                            <div className="add-on">
                              <div className="text-36" style={{ color: "#101828" }} >QT</div>
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
                  <div className="frame-88">
                    <div className="input-with-label-4">
                      <div className="label-wrapper-4">
                        <div className="label-3">Quotation issue date</div>
                      </div>
                    </div>
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        // type="datetime-local" 
                        name="quotation_issue_date" 
                        value={formData.quotation_issue_date} 
                        onChange={handleChange} 
                        // value={quotationIssueDate}
                        // onChange={(newValue) => setQuotationIssueDate(newValue)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            error={false} 
                            sx={{ height: "44px", width: "100% !important"}}
                          />
                        )}
                      />
                    </LocalizationProvider> */}
                    <input
                        type="datetime-local"
                        name="quotation_issue_date"
                        value={formData.quotation_issue_date}
                        onChange={handleChange}
                        //  required
                        style={{ height: "44px", width: "308px" }}
                      />
                  </div>

                  {/* Quotation due date */}
                  <div className="frame-88">
                    <div className="input-with-label-4">
                      <div className="label-wrapper-4"> 
                        <div className="label-3">Quotation due date</div>
                      </div>
                    </div>
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        // value={quotationDueDate}
                        // onChange={(newValue) => setQuotationDueDate(newValue)}
                        // type="datetime-local" 
                        name="quotation_due_date" value={formData.quotation_due_date} onChange={handleChange} required 
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            sx={{ height: "44px", width: "308px" }}
                          />
                        )}
                      />
                    </LocalizationProvider> */}
                    <input
                        type="datetime-local"
                        name="quotation_due_date"
                        value={formData.quotation_due_date}
                        onChange={handleChange}
                        //  required
                        style={{ height: "44px", width: "308px" }}
                      />
                  </div>
                </div>

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
                        type="number" name="invoice_id_number" value={formData.invoice_id_number} onChange={handleChange} required 
                        InputProps={{
                          startAdornment: (
                            <div className="add-on">
                              <div className="text-36" style={{ color: "#101828" }}>IV</div>
                            </div>
                          ),
                        }}
                        className="text-input-4"
                        sx={{ "& .MuiOutlinedInput-root": { height: "44px" } }}
                      />
                    </div>
                  </div>

                  {/* Invoice issue date */}
                  <div className="frame-88">
                    <div className="input-with-label-4">
                      <div className="label-wrapper-4">
                        <div className="label-3">Invoice issue date</div>
                      </div>
                    </div>
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        // value={invoiceIssueDate}
                        // onChange={(newValue) => setInvoiceIssueDate(newValue)}
                        // type="datetime-local" 
                        name="invoice_issue_date" value={formData.invoice_issue_date} onChange={handleChange} required
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            sx={{ height: "44px", width: "308px" }}
                          />
                        )}
                      />
                    </LocalizationProvider> */}
                    <input
                        type="datetime-local" name="invoice_issue_date" value={formData.invoice_issue_date} onChange={handleChange} required
                        style={{ height: "44px", width: "308px" }}
                      />
                  </div>

                  {/* Invoice due date */}
                  <div className="frame-88">
                    <div className="input-with-label-4">
                      <div className="label-wrapper-4">
                        <div className="label-3">Invoice due date</div>
                      </div>
                    </div>
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        // value={invoiceDueDate}
                        // onChange={(newValue) => setInvoiceDueDate(newValue)}
                        // type="datetime-local" 
                        name="invoice_due_date" value={formData.invoice_due_date} onChange={handleChange} required 
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            sx={{ height: "44px", width: "308px" }}
                          />
                        )}
                      />
                    </LocalizationProvider> */}
                    <input type="datetime-local" name="invoice_due_date" value={formData.invoice_due_date} onChange={handleChange} required
                        style={{ height: "44px", width: "308px" }}
                      />
                  </div>
                </div>

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
                        type="number" name="receipt_id_number" value={formData.receipt_id_number} onChange={handleChange} required 
                        InputProps={{
                          startAdornment: (
                            <div className="add-on">
                              <div className="text-36" style={{ color: "#101828" }}>RC</div>
                            </div>
                          ),
                        }}
                        className="text-input-4"
                        sx={{ "& .MuiOutlinedInput-root": { height: "44px" } }}
                      />
                    </div>
                  </div>

                  {/* Receipt issue date */}
                  <div className="frame88">
                    <div className="input-with-label-4">
                      <div className="label-wrapper-4">
                        <div className="label-3">Receipt issue date</div>
                      </div>
                    </div>
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        // value={receiptIssueDate}
                        // onChange={(newValue) => setReceiptIssueDate(newValue)}
                        // type="datetime-local" 
                        name="receipt_issue_date" value={formData.receipt_issue_date} onChange={handleChange} required
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            sx={{ height: "44px", width: "308px" }}
                          />
                        )}
                      />
                    </LocalizationProvider> */}
                    <input type="datetime-local" name="receipt_issue_date" value={formData.receipt_issue_date} onChange={handleChange} required style={{ height: "44px", width: "308px" }}/>
                  </div>
                </div>
              </div>
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
                <button type="submit" disabled={loading} className="custom-submit-button ">
                  {loading ? "Submitting..." : <img alt="Button" src="/img/button-36.svg" />}
                </button>
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
                <div className="frame">
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Receiver</div>
                      </div>
                    </div>
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <Select labelId="receiver-label" name="receiver_id" value={formData.receiver_id} onChange={handleChange} required defaultValue="">
                        <MenuItem value="1">@PinnPW</MenuItem>
                        <MenuItem value="2">@Porpyyy_</MenuItem>
                        <MenuItem value="3">
                          บริษัท โชคชัย 9672 จำกัด
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
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
                <div className="frame">
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Channel</div>
                      </div>
                    </div>
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <Select labelId="channel-label" name="channel_id" value={formData.channel_id} onChange={handleChange} required defaultValue="">
                        <MenuItem value="1">@PinnPw</MenuItem>
                        <MenuItem value="2">@Porpyyy_</MenuItem>
                        <MenuItem value="3">@Porpagin</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Platform</div>
                      </div>
                    </div>
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <Select labelId="platform-label" name="platform_id" value={formData.platform_id} onChange={handleChange} required defaultValue="">
                        <MenuItem value="1">TikTok</MenuItem>
                        <MenuItem value="2">Instagram</MenuItem>
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
                    <input type="datetime-local" name="influencer_posting_date" value={formData.influencer_posting_date} onChange={handleChange} required style={{ height: "44px", width: "308px" }}/>
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        // value={postingDate}
                        // onChange={(newValue) => setPostingDate(newValue)}
                        type="datetime-local" name="influencer_posting_date" value={formData.influencer_posting_date} onChange={handleChange} required 
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            sx={{ height: "44px", width: "468px" }}
                          />
                        )}
                      />
                    </LocalizationProvider> */}
                  </div>
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
                <div className="frame">
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Agency Name</div>
                      </div>
                    </div>
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="agency-name"
                        variant="outlined"
                        fullWidth
                        type="text" name="agency_agency_name" value={formData.agency_agency_name} onChange={handleChange} required
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="taxpayer-id"
                        variant="outlined"
                        fullWidth
                        type="number" name="agency_tax_payer_id_number" value={formData.agency_tax_payer_id_number} onChange={handleChange} required 
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="address"
                        variant="outlined"
                        fullWidth
                        type="text" name="agency_address" value={formData.agency_address} onChange={handleChange} required
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="phone-agency"
                        variant="outlined"
                        fullWidth
                        type="text" name="agency_phone_number" value={formData.agency_phone_number} onChange={handleChange} required
                        // type="tel"
                        sx={{ height: "44px" }}
                      />
                    </FormControl>
                  </div>
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
                <div className="frame">
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Contacter Name</div>
                      </div>
                    </div>
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="contacter-name"
                        variant="outlined"
                        fullWidth
                        type="text" name="contactor_contactor_name" value={formData.contactor_contactor_name} onChange={handleChange} required
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="phone-contacter"
                        variant="outlined"
                        fullWidth
                        type="text" name="contactor_phone_number" value={formData.contactor_phone_number} onChange={handleChange} required
                        // type="tel"
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="line"
                        variant="outlined"
                        fullWidth
                        type="text" name="contactor_line" value={formData.contactor_line} onChange={handleChange} required 
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="email"
                        variant="outlined"
                        fullWidth
                        type="email" name="contactor_email" value={formData.contactor_email} onChange={handleChange} required
                        // type="email"
                        sx={{ height: "44px" }}
                      />
                    </FormControl>
                  </div>
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
                <div className="frame">
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Brand name</div>
                      </div>
                    </div>
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="brand-name"
                        variant="outlined"
                        fullWidth
                        type="text" name="brand_brand_name" value={formData.brand_brand_name} onChange={handleChange} required
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="product"
                        variant="outlined"
                        fullWidth
                        type="text" name="brand_product" value={formData.brand_product} onChange={handleChange} required 
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

                  {/* Details Section 1 */}
                  <div className="frame-6">
                    <div className="frame">
                      <div className="inputbox">
                        <div className="label-for-input">
                          <div className="label-wrapper">
                            <div className="label">Description</div>
                          </div>
                        </div>
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="description-1"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            // name =
                            // value =
                            onChange={handleChange}
                          />
                        </FormControl>
                      </div>
                      <div className="inputbox">
                        <div className="label-for-input">
                          <div className="label-wrapper">
                            <div className="label">Notes</div>
                          </div>
                        </div>
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="notes-1"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            // name =
                            // value =
                            onChange={handleChange}
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="quantity-1"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            // name =
                            // value =
                            onChange={handleChange}
                          />
                        </FormControl>
                      </div>
                      <div className="inputbox">
                        <div className="label-for-input">
                          <div className="label-wrapper">
                            <div className="label">Unit price</div>
                          </div>
                        </div>
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="unit-price-1"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            // name =
                            // value =
                            onChange={handleChange}
                          />
                        </FormControl>
                      </div>
                    </div>
                    <div className="divider-3" />
                  </div>

                  {/* Details Section 2 */}
                  <div className="frame-6">
                    <div className="frame">
                      <div className="inputbox">
                        <div className="label-for-input">
                          <div className="label-wrapper">
                            <div className="label">Description</div>
                          </div>
                        </div>
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="description-2"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            // name =
                            // value =
                            onChange={handleChange}
                          />
                        </FormControl>
                      </div>
                      <div className="inputbox">
                        <div className="label-for-input">
                          <div className="label-wrapper">
                            <div className="label">Notes</div>
                          </div>
                        </div>
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="notes-2"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            onChange={handleChange}
                            // name =
                            // value =
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="quantity-2"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            // name =
                            // value =
                            onChange={handleChange}
                          />
                        </FormControl>
                      </div>
                      <div className="inputbox">
                        <div className="label-for-input">
                          <div className="label-wrapper">
                            <div className="label">Unit price</div>
                          </div>
                        </div>
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="unit-price-2"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            // name =
                            // value =
                            onChange={handleChange}
                          />
                        </FormControl>
                      </div>
                    </div>
                    <div className="divider-3" />
                  </div>

                  {/* Details Section 3 */}
                  <div className="frame-6">
                    <div className="frame">
                      <div className="inputbox">
                        <div className="label-for-input">
                          <div className="label-wrapper">
                            <div className="label">Description</div>
                          </div>
                        </div>
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="description-3"
                            // name =
                            // value =
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </div>
                      <div className="inputbox">
                        <div className="label-for-input">
                          <div className="label-wrapper">
                            <div className="label">Notes</div>
                          </div>
                        </div>
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="notes-3"
                            // name =
                            // value =
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            onChange={handleChange}
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="quantity-3"
                            variant="outlined"
                            fullWidth
                            // name =
                            // value =
                            sx={{ height: "44px" }}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </div>
                      <div className="inputbox">
                        <div className="label-for-input">
                          <div className="label-wrapper">
                            <div className="label">Unit price</div>
                          </div>
                        </div>
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="unit-price-3"
                            variant="outlined"
                            fullWidth
                            // name =
                            // value =
                            sx={{ height: "44px" }}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </div>
                    </div>
                    <div className="divider-3" />
                  </div>

                  {/* Details Section 4 */}
                  <div className="frame-6">
                    <div className="frame">
                      <div className="inputbox">
                        <div className="label-for-input">
                          <div className="label-wrapper">
                            <div className="label">Description</div>
                          </div>
                        </div>
                        <FormControl fullWidth sx={{ width: "468px" }} >
                          <TextField
                            id="description-4"
                            variant="outlined"
                            fullWidth
                            // name =
                            // value =
                            sx={{ height: "44px" }}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </div>
                      <div className="inputbox">
                        <div className="label-for-input">
                          <div className="label-wrapper">
                            <div className="label">Notes</div>
                          </div>
                        </div>
                        <FormControl fullWidth sx={{ width: "468px" }} >
                          <TextField
                            id="notes-4"
                            variant="outlined"
                            fullWidth
                            // name =
                            // value =
                            sx={{ height: "44px" }}
                            onChange={handleChange}
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
                        <FormControl fullWidth sx={{ width: "468px" }} >
                          <TextField
                            id="quantity-4"
                            variant="outlined"
                            fullWidth
                            // name =
                            // value =
                            sx={{ height: "44px" }}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </div>
                      <div className="inputbox">
                        <div className="label-for-input">
                          <div className="label-wrapper">
                            <div className="label">Unit price</div>
                          </div>
                        </div>
                        <FormControl fullWidth sx={{ width: "468px" }} >
                          <TextField
                            id="unit-price-4"
                            variant="outlined"
                            fullWidth
                            // name =
                            // value =
                            sx={{ height: "44px" }}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </div>
                    </div>
                    <div className="divider-3" />
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
              <div className="input-fields-3">
                <div className="frame">
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Bank</div>
                      </div>
                    </div>
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <Select labelId="bank-label" name="bank_id" value={formData.bank_id} onChange={handleChange} required  defaultValue="">
                        <MenuItem value="1">ธนาคารกรุงเทพ (BBL)</MenuItem>
                        <MenuItem value="2">ธนาคารกรุงไทย (KTB)</MenuItem>
                        <MenuItem value="3">ธนาคารกสิกรไทย (KBank)</MenuItem>
                        <MenuItem value="4">ธนาคารไทยพาณิชย์ (SCB)</MenuItem>
                        <MenuItem value="5">ธนาคารกรุงศรีอยุธยา (Krungsri)</MenuItem>
                        <MenuItem value="6">ธนาคารทหารไทยธนชาต (TTB)</MenuItem>
                        <MenuItem value="7">ธนาคารออมสิน (GSB)</MenuItem>
                        <MenuItem value="8">ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร (BAAC)</MenuItem>
                        <MenuItem value="9">ธนาคารซีไอเอ็มบีไทย (CIMB)</MenuItem>
                        <MenuItem value="10">ธนาคารอาคารสงเคราะห์ (GHB)</MenuItem>
                        <MenuItem value="11">ธนาคารแลนด์แอนด์เฮ้าส์ (LHB)</MenuItem>
                        <MenuItem value="12">ธนาคารทิสโก้ (TISCO)</MenuItem>
                        <MenuItem value="13">ธนาคารเกียรตินาคิน (Kiatnakin)</MenuItem>
                        <MenuItem value="14">ธนาคารเมย์แบงก์ (Maybank)</MenuItem>
                        <MenuItem value="15">ธนาคารเอชเอสบีซี (HSBC)</MenuItem>
                        <MenuItem value="16">ธนาคารสแตนดาร์ดชาร์เตอร์ (Standard Chartered)</MenuItem>
                        <MenuItem value="17">ธนาคารยูโอบี (UOB)</MenuItem>
                        <MenuItem value="18">ธนาคารซิตี้แบงก์ (Citibank)</MenuItem>
                        <MenuItem value="19">ธนาคารอิสลามแห่งประเทศไทย (Islamic Bank of Thailand)</MenuItem>
                        <MenuItem value="20">ธนาคารไอซีบีซี (ICBC)</MenuItem>
                      </Select>
                  </FormControl>
                  </div>
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Transaction Reference number</div>
                      </div>
                    </div>
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="transaction-ref"
                        variant="outlined"
                        fullWidth
                        type="number" name="transaction_reference_number" value={formData.transaction_reference_number} onChange={handleChange} required
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <Select labelId="status-label" name="status_id" value={formData.status_id} onChange={handleChange} required defaultValue="">
                        <MenuItem value="1">Paid</MenuItem>
                        <MenuItem value="2">Draft</MenuItem>
                        <MenuItem value="3">Pending</MenuItem>
                        <MenuItem value="4">Overdue</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Payment method</div>
                      </div>
                    </div>
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <Select labelId="payment-method-label" name="payment_method_id" value={formData.payment_method_id} onChange={handleChange} required  defaultValue="">
                        <MenuItem value="1">Full Payment</MenuItem>
                        <MenuItem value="2">Deposit</MenuItem>
                        <MenuItem value="3">Credit Term</MenuItem>
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="terms-conditions"
                        variant="outlined"
                        fullWidth
                        name="terms_and_conditions" value={formData.terms_and_conditions} onChange={handleChange} required
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="total-payment"
                        variant="outlined"
                        fullWidth
                        type="number" name="total_payment_amount" value={formData.total_payment_amount} onChange={handleChange} required
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="notes-total-payment"
                        variant="outlined"
                        fullWidth
                        type="text" name="notes_for_the_total_payment" value={formData.notes_for_the_total_payment} onChange={handleChange} required
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="first-payment"
                        variant="outlined"
                        fullWidth
                        type="number" name="first_payment" value={formData.first_payment} onChange={handleChange} required
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="notes-first-payment"
                        variant="outlined"
                        fullWidth
                        type="text" name="notes_for_the_first_payment" value={formData.notes_for_the_first_payment} onChange={handleChange} required
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="second-payment"
                        variant="outlined"
                        fullWidth
                        type="number" name="second_payment" value={formData.second_payment} onChange={handleChange} required
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="notes-second-payment"
                        variant="outlined"
                        fullWidth
                        type="text" name="notes_for_the_second_payment" value={formData.notes_for_the_second_payment} onChange={handleChange} required 
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="unpaid-payment"
                        variant="outlined"
                        fullWidth
                        type="number" name="unpaid_payment_amount" value={formData.unpaid_payment_amount} onChange={handleChange} required
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="notes-unpaid-payment"
                        variant="outlined"
                        fullWidth
                        sx={{ height: "44px" }}
                        type="text" 
                        name="notes_for_the_unpaid_payment" 
                        value={formData.notes_for_the_unpaid_payment} 
                        onChange={handleChange} 
                        required
                      />
                    </FormControl>
                  </div>
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
                <div className="frame">
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Sale Person</div>
                      </div>
                    </div>
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <Select labelId="sale-person-label" name="sale_person_id" value={formData.sale_person_id} onChange={handleChange} required>
                        <MenuItem value="1">Miss Fah</MenuItem>
                        <MenuItem value="2">Miss Kan</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider-2" />
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};


