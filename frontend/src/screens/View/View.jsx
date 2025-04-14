import React from "react";
import { useState, useEffect } from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { Form } from "../../components/Form";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { LogOut } from "../../icons/LogOut";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
import api from "../../api";
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { SectionLabel } from "../../components/SectionLabel";

export const View = () => {
    const navigate = useNavigate(); // For navigation after update
  
    const { id } = useParams(); // Get income ID from URL
    const [formData, setFormData] = useState(null);
    const [detailData, setDetailData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    
    useEffect(() => {
      if (id) {
        setLoading(true);
        api.get(`/income/${id}`)
          .then((response) => {
            setFormData(response.data.data);
          })
          .catch((error) => {
            console.error("Error fetching income data:", error);
            setMessage("Failed to load income data.");
          });
        
        api.get(`/detail/`)
          .then((response) => {
            setDetailData(response.data.data);
          })
          .catch((error) => {
            console.error("Error fetching detail data:", error);
            setMessage("Failed to load detail data.");
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }, [id]);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (!formData) {
    return <p>{message || "No data available."}</p>;
  }

  // const filteredDetails = detailData.filter(
  //   detail => detail.income.invoice_id_number === formData.invoice_id_number
  // );

  const filteredDetails = formData 
  ? detailData.filter(detail => detail.income.invoice_id_number === formData.invoice_id_number)
  : [];


  return (
    <div className="view">
      <HeaderNavigationWrapper
        className="header-navigation-8"
        headerNavigationNavItemBaseCurrent
        headerNavigationNavItemBaseCurrent1={false}
        headerNavigationNavItemButtonIcon={
          <LogOut className="icon-instance-node-9" />
        }
      />
      <div className="main-7">
        <div className="section-8">
          <div className="content-41">
            <div className="text-and-supporting-19">
              <div className="text-53">View the order</div>
            </div>

            <div className="actions-18">
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
                {/* <Link to="/edit">
                  <img
                    className="button-14"
                    alt="Button"
                    src="/img/button-35.svg"
                  />
                </Link> */}
              </div>
            </div>
          </div>  

          <div className="form">
            {/* <div className="divider-2" /> */}
            {/* <div className="content-19">
              <div className="QIR-tab">
                <div className="frameQIR"> */}
                  {/* Quotation ID number */}
                  {/* <div className="input-field-3">
                    <div className="input-with-label-3">
                      <div className="label-wrapper-3">
                        <div className="label-3">Quotation ID number</div>
                        <div className="asterisk-5">*</div>
                      </div>
                      <TextField
                        variant="outlined"
                        fullWidth
                        type="number"
                        name="quotation_id_number"
                        value={formData.quotation_id_number}
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                          startAdornment: (
                            <div className="add-on">
                              <div className="text-36" style={{ color: "#101828" }}>
                                QT
                              </div>
                            </div>
                          ),
                        }}
                        className="text-input-4"
                        sx={{
                          "& .MuiOutlinedInput-root": { height: "44px" },
                        }}
                      />
                    </div>
                  </div> */}

                  {/* Quotation issue date */}
                  {/* <div className="frame-88">
                    <div className="input-with-label-4">
                      <div className="label-wrapper-4">
                        <div className="label-3">Quotation issue date</div>
                      </div>
                    </div>
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="quotation_issue_date"
                      value={
                        formData.quotation_issue_date
                          ? new Intl.DateTimeFormat("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(formData.quotation_issue_date))
                          : ""
                      }
                      InputProps={{
                        readOnly: true,
                        style: { backgroundColor: "#f5f5f5" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": { height: "44px", width: "308px" },
                      }}
                    />
                  </div> */}

                  {/* Quotation due date */}
                  {/* <div className="frame-88">
                    <div className="input-with-label-4">
                      <div className="label-wrapper-4"> 
                        <div className="label-3">Quotation due date</div>
                      </div>
                    </div>
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="quotation_due_date"
                      value={
                        formData.quotation_due_date
                          ? new Intl.DateTimeFormat("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(formData.quotation_due_date))
                          : ""
                      }
                      InputProps={{
                        readOnly: true,
                        style: { backgroundColor: "#f5f5f5" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": { height: "44px", width: "308px" },
                      }}
                    />
                  </div>
                </div>

                <div className="frameQIR"> */}
                  {/* Invoice ID number */}
                  {/* <div className="input-field-3">
                    <div className="input-with-label-3">
                      <div className="label-wrapper-3">
                        <div className="label-3">Invoice ID number</div>
                        <div className="asterisk-5">*</div>
                      </div>
                      <TextField
                        variant="outlined"
                        fullWidth
                        type="number"
                        name="invoice_id_number"
                        value={formData.invoice_id_number}
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                          startAdornment: (
                            <div className="add-on">
                              <div className="text-36" style={{ color: "#101828" }}>
                                QT
                              </div>
                            </div>
                          ),
                        }}
                        className="text-input-4"
                        sx={{
                          "& .MuiOutlinedInput-root": { height: "44px" },
                        }}
                      />
                    </div>
                  </div> */}

                  {/* Invoice issue date */}
                  {/* <div className="frame-88">
                    <div className="input-with-label-4">
                      <div className="label-wrapper-4">
                        <div className="label-3">Invoice issue date</div>
                      </div>
                    </div>
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="invoice_issue_date"
                      value={
                        formData.invoice_issue_date
                          ? new Intl.DateTimeFormat("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(formData.invoice_issue_date))
                          : ""
                      }
                      InputProps={{
                        readOnly: true,
                        style: { backgroundColor: "#f5f5f5" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": { height: "44px", width: "308px" },
                      }}
                    />
                  </div> */}

                  {/* Invoice due date */}
                  {/* <div className="frame-88">
                    <div className="input-with-label-4">
                      <div className="label-wrapper-4">
                        <div className="label-3">Invoice due date</div>
                      </div>
                    </div>
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="invoice_due_date"
                      value={
                        formData.invoice_due_date
                          ? new Intl.DateTimeFormat("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(formData.invoice_due_date))
                          : ""
                      }
                      InputProps={{
                        readOnly: true,
                        style: { backgroundColor: "#f5f5f5" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": { height: "44px", width: "308px" },
                      }}
                    />
                  </div>
                </div>

                <div className="frameQIR"> */}
                  {/* Receipt ID number */}
                  {/* <div className="input-field-3">
                    <div className="input-with-label-3">
                      <div className="label-wrapper-3">
                        <div className="label-3">Receipt ID number</div>
                        <div className="asterisk-5">*</div>
                      </div>
                      <TextField
                        variant="outlined"
                        fullWidth
                        type="number"
                        name="receipt_id_number"
                        value={formData.receipt_id_number}
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                          startAdornment: (
                            <div className="add-on">
                              <div className="text-36" style={{ color: "#101828" }}>
                                QT
                              </div>
                            </div>
                          ),
                        }}
                        className="text-input-4"
                        sx={{
                          "& .MuiOutlinedInput-root": { height: "44px" },
                        }}
                      />
                    </div>
                  </div> */}

                  {/* Receipt issue date */}
                  {/* <div className="frame88">
                    <div className="input-with-label-4">
                      <div className="label-wrapper-4">
                        <div className="label-3">Receipt issue date</div>
                      </div>
                    </div>
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="receipt_issue_date"
                      value={
                        formData.receipt_issue_date
                          ? new Intl.DateTimeFormat("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(formData.receipt_issue_date))
                          : ""
                      }
                      InputProps={{
                        readOnly: true,
                        style: { backgroundColor: "#f5f5f5" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": { height: "44px", width: "308px" },
                      }}
                    />
                  </div>
                </div>
              </div>
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
                  /> */}
                  {/* <button type="submit" disabled={loading} className="custom-submit-button ">
                    {loading ? "Submitting..." : <img alt="Button" src="/img/button-35.svg" />}
                  </button> */}
              {/* </div>
            </div> */}

            <div className="divider-2" />

            {/* --- Quotation Section --- */}
            <div className="content-19">
              <SectionLabel
                actions={false}
                className="section-label-instance"
                helpIcon={false}
                size="sm"
                supportingText={false}
                text="Quotation"
              />
              <div className="input-fields-3">
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
                        type="number"
                        name="quotation_id_number"
                        value={formData.quotation_id_number}
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                          startAdornment: (
                            <div className="add-on">
                              <div className="text-36" style={{ color: "#101828" }}>
                                QT
                              </div>
                            </div>
                          ),
                        }}
                        className="text-input-4"
                        sx={{
                          "& .MuiOutlinedInput-root": { height: "44px"  ,width: "468px"},
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
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="quotation_issue_date"
                      value={
                        formData.quotation_issue_date
                          ? new Intl.DateTimeFormat("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(formData.quotation_issue_date))
                          : ""
                      }
                      InputProps={{
                        readOnly: true,
                        style: { backgroundColor: "#f5f5f5" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": { height: "44px", width: "308px" },
                      }}
                    />
                  </div>
                  <div className ="actions-18">
                  <Link to={`/edit/${id}`}>
                    <img className="button-14" alt="Button" src="/img/button-35.svg" />
                  </Link>
                    </div>
                </div>
                <div className="frame">
                  {/* Quotation due date */}
                  <div className="frame-88">
                    <div className="input-with-label-4">
                      <div className="label-wrapper-4"> 
                        <div className="label-3">Quotation due date</div>
                      </div>
                    </div>
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="quotation_due_date"
                      value={
                        formData.quotation_due_date
                          ? new Intl.DateTimeFormat("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(formData.quotation_due_date))
                          : ""
                      }
                      InputProps={{
                        readOnly: true,
                        style: { backgroundColor: "#f5f5f5" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": { height: "44px", width: "308px" },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="divider-2" />

            {/* --- Invoice Section --- */}
            <div className="content-19">
              <SectionLabel
                actions={false}
                className="section-label-instance"
                helpIcon={false}
                size="sm"
                supportingText={false}
                text="Invoice"
              />
              <div className="input-fields-3">
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
                        type="number"
                        name="invoice_id_number"
                        value={formData.invoice_id_number}
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                          startAdornment: (
                            <div className="add-on">
                              <div className="text-36" style={{ color: "#101828" }}>
                                IV
                              </div>
                            </div>
                          ),
                        }}
                        className="text-input-4"
                        sx={{
                          "& .MuiOutlinedInput-root": { height: "44px" , width: "468px"},
                        }}
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
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="invoice_issue_date"
                      value={
                        formData.invoice_issue_date
                          ? new Intl.DateTimeFormat("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(formData.invoice_issue_date))
                          : ""
                      }
                      InputProps={{
                        readOnly: true,
                        style: { backgroundColor: "#f5f5f5" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": { height: "44px", width: "308px" },
                      }}
                    />
                  </div>
                </div>
                <div className="frame">

                  {/* Invoice due date */}
                  <div className="frame-88">
                    <div className="input-with-label-4">
                      <div className="label-wrapper-4">
                        <div className="label-3">Invoice due date</div>
                      </div>
                    </div>
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="invoice_due_date"
                      value={
                        formData.invoice_due_date
                          ? new Intl.DateTimeFormat("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(formData.invoice_due_date))
                          : ""
                      }
                      InputProps={{
                        readOnly: true,
                        style: { backgroundColor: "#f5f5f5" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": { height: "44px", width: "308px" },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="divider-2" />

            {/* --- Receipt Section --- */}
            <div className="content-19">
              <SectionLabel
                actions={false}
                className="section-label-instance"
                helpIcon={false}
                size="sm"
                supportingText={false}
                text="Receipt"
              />
              <div className="input-fields-3">
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
                        type="number"
                        name="receipt_id_number"
                        value={formData.receipt_id_number}
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                          startAdornment: (
                            <div className="add-on">
                              <div className="text-36" style={{ color: "#101828" }}>
                                RC
                              </div>
                            </div>
                          ),
                        }}
                        className="text-input-4"
                        sx={{
                          "& .MuiOutlinedInput-root": { height: "44px" , width: "468px"},
                        }}
                      />
                    </div>
                  </div>
                  {/* Receipt issue date */}
                  <div className="frame-88">
                    <div className="input-with-label-4">
                      <div className="label-wrapper-4">
                        <div className="label-3">Receipt issue date</div>
                      </div>
                    </div>
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="receipt_issue_date"
                      value={
                        formData.receipt_issue_date
                          ? new Intl.DateTimeFormat("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(formData.receipt_issue_date))
                          : ""
                      }
                      InputProps={{
                        readOnly: true,
                        style: { backgroundColor: "#f5f5f5" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": { height: "44px", width: "308px" },
                      }}
                    />
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
                <div className="frame">
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Receiver</div>
                      </div>
                    </div>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={formData.receiver?.name || ""}
                      InputProps={{ readOnly: true,style: { backgroundColor: "#f5f5f5" }, }}
                      sx={{ width: "468px" }}
                    />
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
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={formData.channel?.name || ""}
                      InputProps={{ readOnly: true,style: { backgroundColor: "#f5f5f5" }, }}
                      sx={{ width: "468px" }}
                    />
                  </div>
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Platform</div>
                      </div>
                    </div>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={formData.platform?.name || ""}
                      InputProps={{ readOnly: true,style: { backgroundColor: "#f5f5f5" }, }}
                      sx={{ width: "468px" }}
                    />
                  </div>
                </div>
                <div className="frame">
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Posting Date</div>
                      </div>
                    </div>
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="influencer_posting_date"
                      value={
                        formData.influencer_posting_date
                          ? new Intl.DateTimeFormat("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(formData.influencer_posting_date))
                          : ""
                      }
                      InputProps={{
                        readOnly: true,
                        style: { backgroundColor: "#f5f5f5" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": { height: "44px", width: "308px" },
                      }}
                    />
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
                    <FormControl fullWidth sx={{ width: "468px" }}>
                      <TextField
                        id="agency-name"
                        variant="outlined"
                        fullWidth
                        type="text"
                        name="agency_agency_name"
                        value={formData.agency_agency_name}
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        type="number" name="agency_tax_payer_id_number" value={formData.agency_tax_payer_id_number}  
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        type="text" name="agency_address" value={formData.agency_address} 
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        type="text" name="agency_phone_number" value={formData.agency_phone_number} 
                        // type="tel"
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        type="text" name="contactor_contactor_name" value={formData.contactor_contactor_name} 
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        type="text" name="contactor_phone_number" value={formData.contactor_phone_number} 
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
                        type="text" name="contactor_line" value={formData.contactor_line}  
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
                        type="email" name="contactor_email" value={formData.contactor_email} 
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        type="text" name="brand_brand_name" value={formData.brand_brand_name} 
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        type="text" name="brand_product" value={formData.brand_product}  
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                            value={filteredDetails[0]?.description || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="notes-1"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            value={filteredDetails[0]?.notes || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="quantity-1"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            value={filteredDetails[0]?.quantity || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="unit-price-1"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            value={filteredDetails[0]?.unit_price || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
                            }}
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
                            value={filteredDetails[1]?.description || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="notes-2"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            value={filteredDetails[1]?.notes || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="quantity-2"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            value={filteredDetails[1]?.quantity || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="unit-price-2"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            value={filteredDetails[1]?.unit_price || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
                            }}
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
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            value={filteredDetails[2]?.description || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="notes-3"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            value={filteredDetails[2]?.notes || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="quantity-3"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            value={filteredDetails[2]?.quantity || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="unit-price-3"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            value={filteredDetails[2]?.unit_price || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
                            }}
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="description-4"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            value={filteredDetails[3]?.description || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="notes-4"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            value={filteredDetails[3]?.notes || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="quantity-4"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            value={filteredDetails[3]?.quantity || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
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
                        <FormControl fullWidth sx={{ width: "468px" }}>
                          <TextField
                            id="unit-price-4"
                            variant="outlined"
                            fullWidth
                            sx={{ height: "44px" }}
                            value={filteredDetails[3]?.unit_price || ""}
                            InputProps={{
                              readOnly: true,
                              style: { backgroundColor: "#f5f5f5" },
                            }}
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
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={formData.bank?.name || ""}
                      InputProps={{ readOnly: true,style: { backgroundColor: "#f5f5f5" }, }}
                      sx={{ width: "468px" }}
                    />
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
                        type="number" name="transaction_reference_number" value={formData.transaction_reference_number} 
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={formData.status?.name || ""}
                      InputProps={{ readOnly: true,style: { backgroundColor: "#f5f5f5" }, }}
                      sx={{ width: "468px" }}
                    />
                  </div>
                  <div className="inputbox">
                    <div className="label-for-input">
                      <div className="label-wrapper">
                        <div className="label">Payment method</div>
                      </div>
                    </div>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={formData.payment_method?.name || ""}
                      InputProps={{ readOnly: true,style: { backgroundColor: "#f5f5f5" }, }}
                      sx={{ width: "468px" }}
                    />
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
                        name="terms_and_conditions" value={formData.terms_and_conditions} 
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        type="number" name="total_payment_amount" value={formData.total_payment_amount} 
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        type="text" name="notes_for_the_total_payment" value={formData.notes_for_the_total_payment} 
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
                        type="number" name="first_payment" value={formData.first_payment} 
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
                        type="text" name="notes_for_the_first_payment" value={formData.notes_for_the_first_payment} 
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        type="number" name="second_payment" value={formData.second_payment} 
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        type="text" name="notes_for_the_second_payment" value={formData.notes_for_the_second_payment}  
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        type="number" name="unpaid_payment_amount" value={formData.unpaid_payment_amount} 
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                        InputProps={{
                          readOnly: true,
                          style: { backgroundColor: "#f5f5f5" },
                        }}
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
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={formData.sale_person?.name || ""}
                      InputProps={{ readOnly: true,style: { backgroundColor: "#f5f5f5" }, }}
                      sx={{ width: "468px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="divider-2" />

            {/* <p><strong>Quotation ID:</strong> {formData.quotation_id_number}</p>
            <p><strong>Issue Date:</strong> {new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(formData.quotation_issue_date))}</p>
            <p><strong>Due Date:</strong> {new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(formData.quotation_due_date))}</p>
            <p><strong>Invoice ID:</strong> {formData.invoice_id_number}</p>
            <p><strong>Issue Date:</strong> {new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(formData.invoice_issue_date))}</p>
            <p><strong>due Date:</strong> {new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(formData.invoice_due_date))}</p>
            <p><strong>Receipt ID</strong> {formData.receipt_id_number}</p>
            <p><strong>Issue Date:</strong> {new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(formData.receipt_issue_date))}</p>
            <p><strong>Receiver:</strong> {formData.receiver.name}</p>
            <p><strong>Channel:</strong> {formData.channel.name}</p>
            <p><strong>Platform:</strong> {formData.platform.name}</p>
            <p><strong>Receiver:</strong> {formData.receiver.name}</p>
            <p><strong>Agency Name:</strong> {formData.agency_agency_name}</p>
            <p><strong>Tax payer id number:</strong> {formData.agency_tax_payer_id_number}</p>
            <p><strong>agency address:</strong> {formData.agency_address}</p>
            <p><strong>agency phone number:</strong> {formData.agency_phone_number}</p>
            <p><strong>contactor name:</strong> {formData.contactor_contactor_name}</p>
            <p><strong>contactor phone number:</strong> {formData.contactor_phone_number}</p>
            <p><strong>contactor line:</strong> {formData.contactor_line}</p>
            <p><strong>contactor email:</strong> {formData.contactor_email}</p>
            <p><strong>Brand Name:</strong> {formData.brand_brand_name}</p>
            <p><strong>product:</strong> {formData.brand_product}</p>
            <p><strong>bank:</strong> {formData.bank.name}</p>
            <p><strong>transaction reference number:</strong> {formData.transaction_reference_number}</p>
            <p><strong>status:</strong> {formData.status.name}</p>
            <p><strong>payment method:</strong> {formData.payment_method.name}</p>
            <p><strong>terms and condition:</strong> {formData.terms_and_conditions}</p>
            <p><strong>Total Payment amount:</strong> {formData.total_payment_amount}</p>
            <p><strong>notes for the total payment:</strong> {formData.notes_for_the_total_payment}</p>
            <p><strong>first payment:</strong> {formData.first_payment}</p>
            <p><strong>notes for first payment:</strong> {formData.notes_for_the_first_payment}</p>
            <p><strong>second payment:</strong> {formData.second_payment}</p>
            <p><strong>notes for second payment:</strong> {formData.notes_for_the_second_payment}</p>
            <p><strong>unpaid payment:</strong> {formData.unpaid_payment_amount}</p>
            <p><strong>notes for unpaid payment:</strong> {formData.notes_for_the_unpaid_payment}</p>
            <p><strong>sale person:</strong> {formData.sale_person.name}</p> */}

          </div>
          <div className="preview-buttons-set">
            <ButtonsButton
              className="design-component-instance-node-5"
              hierarchy="secondary-color"
              icon="default"
              iconLeading={false}
              iconTrailing={false}
              size="xl"
              stateProp="default"
              text="Preview the Quotation"
              to={`/quotation/${id}`}
            />
            <ButtonsButton
              className="design-component-instance-node-5"
              hierarchy="secondary-color"
              icon="default"
              iconLeading={false}
              iconTrailing={false}
              size="xl"
              stateProp="default"
              text="Preview the invoice"
              to={`/invoice/${id}`}
            />
            <ButtonsButton
              className="design-component-instance-node-5"
              hierarchy="secondary-color"
              icon="default"
              iconLeading={false}
              iconTrailing={false}
              size="xl"
              stateProp="default"
              text="Preview the receipt"
              to={`/receipt/${id}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};