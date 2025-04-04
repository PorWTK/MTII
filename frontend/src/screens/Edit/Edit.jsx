import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ButtonsButton } from "../../components/ButtonsButton";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { LogOut } from "../../icons/LogOut";
import { SectionLabel } from "../../components/SectionLabel";
import { TextField, FormControl, Select, MenuItem } from "@mui/material";
import api from "../../api";
import "./style.css";

export const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);
  const [detailItems, setDetailItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // const handleDateChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // Fetch the income record
  useEffect(() => {
    if (id) {
      console.log("[EFFECT] Fetching data for id:", id);
      setLoading(true);
      api.get(`/income/${id}`)
        .then((response) => {
          let data = response.data.data;
          console.log("[FETCHED] Raw income data:", data);

        // Normalize dropdown fields to be strings
        if (data.sale_person && data.sale_person.id) {
          data.sale_person_id = String(data.sale_person.id);
        }
        if (data.receiver && data.receiver.id) {
          data.receiver_id = String(data.receiver.id);
        }
        if (data.channel && data.channel.id) {
          data.channel_id = String(data.channel.id);
        }
        if (data.platform && data.platform.id) {
          data.platform_id = String(data.platform.id);
        }
        if (data.bank && data.bank.id) {
          data.bank_id = String(data.bank.id);
        }
        if (data.status && data.status.id) {
          data.status_id = String(data.status.id);
        }
        if (data.payment_method && data.payment_method.id) {
          data.payment_method_id = String(data.payment_method.id);
        }

        // Normalize date fields to a datetime-local friendly format
        if (data.quotation_issue_date) {
          data.quotation_issue_date = new Date(data.quotation_issue_date)
            .toISOString()
            .slice(0, 16);
        }
        if (data.quotation_due_date) {
          data.quotation_due_date = new Date(data.quotation_due_date)
            .toISOString()
            .slice(0, 16);
        }
        if (data.invoice_issue_date) {
          if (data.invoice_issue_date.startsWith("0001-01-01")) {
            data.invoice_issue_date = "";
          } else {
            data.invoice_issue_date = new Date(data.invoice_issue_date)
              .toISOString()
              .slice(0, 16);
          }
        }
        if (data.invoice_due_date) {
          if (data.invoice_due_date.startsWith("0001-01-01")) {
            data.invoice_due_date = "";
          } else {
            data.invoice_due_date = new Date(data.invoice_due_date)
              .toISOString()
              .slice(0, 16);
          }
        }
        if (data.receipt_issue_date) {
          data.receipt_issue_date = new Date(data.receipt_issue_date)
            .toISOString()
            .slice(0, 16);
        }
        if (data.influencer_posting_date) {
          data.influencer_posting_date = new Date(data.influencer_posting_date)
            .toISOString()
            .slice(0, 16);
        }

          setFormData(data);
        })
        .catch((error) => {
          console.error("Error fetching income data:", error);
          setMessage("Failed to load income data.");
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  // Fetch associated detail items once the income data is available
  useEffect(() => {
    if (formData && formData.invoice_id_number) {
      api.get(`/detail/`)
        .then((response) => {
          const details = response.data.data.filter(
            (detail) =>
              detail.income.invoice_id_number === formData.invoice_id_number
          );
          const fixedDetails = [];
          for (let i = 0; i < 4; i++) {
            fixedDetails.push(
              details[i] || {
                description: "",
                notes: "",
                quantity: "",
                unit_price: "",
                income_invoice_id_number: formData.invoice_id_number,
              }
            );
          }
          setDetailItems(fixedDetails);
        })
        .catch((error) => {
          console.error("Error fetching detail data:", error);
          setMessage("Failed to load detail data.");
        });
    }
  }, [formData]);

  // Handle main form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle changes for detail items
  const handleDetailChange = (e, index) => {
    const { name, value } = e.target;
    const newDetails = [...detailItems];
    newDetails[index][name] = value;
    newDetails[index].income_invoice_id_number = formData.invoice_id_number;
    setDetailItems(newDetails);
  };

  // Handle form submission to update income and details
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Helper to convert dates to ISO string
    const convertToISO = (date) => {
      if (!date || isNaN(new Date(date).getTime())) return null;
      return new Date(date).toISOString();
    };
    console.log("[SUBMIT] Raw formData:", formData);

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
    console.log("[SUBMIT] Formatted Data:", formattedData);
    try {
      // Use PATCH instead of PUT for updating the income record
      const response = await api.patch(`/income/${id}`, formattedData);
      console.log("Update Income API Response:", response.data);
  
      // Update each detail item
      for (const detail of detailItems) {
        // Prepare formatted detail ensuring proper types
        const formattedDetail = {
          description: detail.description.trim(),
          notes: detail.notes.trim(),
          quantity: detail.quantity !== "" ? Number(detail.quantity) : null,
          unit_price: detail.unit_price !== "" ? Number(detail.unit_price) : null,
          income_invoice_id_number: Number(formData.invoice_id_number) || null,
        };

        // Optionally, skip updating if all fields are empty
        if (
          !formattedDetail.description &&
          !formattedDetail.notes &&
          !formattedDetail.quantity &&
          !formattedDetail.unit_price
        ) {
          continue;
        }

        if (detail.id) {
          // Use PATCH for existing detail items
          await api.patch(`/detail/${detail.id}`, formattedDetail);
        } else {
          // POST for new detail items
          await api.post("/detail/", formattedDetail);
        }
      }

      setMessage("Income updated successfully!");
      navigate(`/view/${id}`);
    } catch (error) {
      console.error("Error updating income or details:", error);
      setMessage("Failed to update income or details.");
    } finally {
      setLoading(false);
    }
  };

  if (loading || !formData) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="edit">
      <HeaderNavigationWrapper
        className="header-navigation-9"
        headerNavigationNavItemBaseCurrent
        headerNavigationNavItemBaseCurrent1={false}
        headerNavigationNavItemButtonIcon={<LogOut className="icon-instance-node-10" />}
      />
      <div className="main-8">
        <div className="section-9">
          <div className="content-42">
            <div className="text-and-supporting-20">
              <div className="text-54">Edit Order</div>
              <p className="supporting-text-13">
                Update the fields below and submit to save changes.
              </p>
            </div>
          </div>
          {message && <p>{message}</p>}
          <div className="form">
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
                          type="number"
                          name="quotation_id_number"
                          value={formData.quotation_id_number}
                          onChange={handleChange}
                          required
                          InputProps={{
                            startAdornment: (
                              <div className="add-on">
                                <div className="text-36" style={{ color: "#101828" }}>QT</div>
                              </div>
                            ),
                          }}
                          className="text-input-4"
                          sx={{ "& .MuiOutlinedInput-root": { height: "44px" } }}
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
                      <input
                        type="datetime-local"
                        name="quotation_issue_date"
                        value={formData.quotation_issue_date}
                        onChange={(e) => {
                            const { name, value } = e.target;
                            setFormData({ ...formData, [name]: value });
                          }}
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
                      <input
                        type="datetime-local"
                        name="quotation_due_date"
                        value={formData.quotation_due_date }
                        onChange={(e) => {
                          const { name, value } = e.target;
                          setFormData({ ...formData, [name]: value });
                        }}
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
                          type="number"
                          name="invoice_id_number"
                          value={formData.invoice_id_number}
                          onChange={handleChange}
                          required
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
                      <input
  type="datetime-local"
  name="invoice_issue_date"
  value={formData.invoice_issue_date || ""}
  onChange={(e) => {
    const { name, value } = e.target;
    console.log("[CHANGE] invoice_issue_date:", value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  }}
  required
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
                      <input
  type="datetime-local"
  name="invoice_due_date"
  value={formData.invoice_due_date || ""}
  onChange={(e) => {
    const { name, value } = e.target;
    console.log("[CHANGE] invoice_due_date:", value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  }}
  required
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
                          type="number"
                          name="receipt_id_number"
                          value={formData.receipt_id_number}
                          onChange={handleChange}
                          required
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
                      <input
                        type="datetime-local"
                        name="receipt_issue_date"
                        value={formData.receipt_issue_date }
                        onChange={(e) => {
                          const { name, value } = e.target;
                          setFormData({ ...formData, [name]: value });
                        }}
                        required
                        style={{ height: "44px", width: "308px" }}
                      />
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
                  <button type="submit" disabled={loading} className="custom-submit-button">
                    {loading ? "Submitting..." : <img alt="Button" src="/img/button-36.svg" />}
                  </button>
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <Select
                          labelId="receiver-label"
                          name="receiver_id"
                          value={formData.receiver_id}
                          onChange={handleChange}
                          required
                          defaultValue=""
                        >
                          <MenuItem value="1">@PinnPW</MenuItem>
                          <MenuItem value="2">@Porpyyy_</MenuItem>
                          <MenuItem value="3">บริษัท โชคชัย 9672 จำกัด</MenuItem>
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <Select
                          labelId="channel-label"
                          name="channel_id"
                          value={formData.channel_id}
                          onChange={handleChange}
                          required
                          defaultValue=""
                        >
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <Select
                          labelId="platform-label"
                          name="platform_id"
                          value={formData.platform_id}
                          onChange={handleChange}
                          required
                          defaultValue=""
                        >
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
                      <input
                        type="datetime-local"
                        name="influencer_posting_date"
                        value={formData.influencer_posting_date }
                        onChange={(e) => {
                          const { name, value } = e.target;
                          setFormData({ ...formData, [name]: value });
                        }}
                        required
                        style={{ height: "44px", width: "308px" }}
                      />
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="agency-name"
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="agency_agency_name"
                          value={formData.agency_agency_name}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="taxpayer-id"
                          variant="outlined"
                          fullWidth
                          type="number"
                          name="agency_tax_payer_id_number"
                          value={formData.agency_tax_payer_id_number}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="address"
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="agency_address"
                          value={formData.agency_address}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="phone-agency"
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="agency_phone_number"
                          value={formData.agency_phone_number}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="contacter-name"
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="contactor_contactor_name"
                          value={formData.contactor_contactor_name}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="phone-contacter"
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="contactor_phone_number"
                          value={formData.contactor_phone_number}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="line"
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="contactor_line"
                          value={formData.contactor_line}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="email"
                          variant="outlined"
                          fullWidth
                          type="email"
                          name="contactor_email"
                          value={formData.contactor_email}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="brand-name"
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="brand_brand_name"
                          value={formData.brand_brand_name}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="product"
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="brand_product"
                          value={formData.brand_product}
                          onChange={handleChange}
                          required
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
                  <input
                    type="hidden"
                    name="income_invoice_id_number"
                    value={formData.invoice_id_number}
                  />
                  {detailItems.map((item, index) => (
                    <div key={index} className="frame-6">
                      <div className="frame">
                        <div className="inputbox">
                          <div className="label-for-input">
                            <div className="label-wrapper">
                              <div className="label">Description {index + 1}:</div>
                            </div>
                          </div>
                          <FormControl fullWidth sx={{ width: "468px" }}>
                            <TextField
                              id={`description-${index}`}
                              variant="outlined"
                              fullWidth
                              sx={{ height: "44px" }}
                              name="description"
                              value={item.description}
                              onChange={(e) => handleDetailChange(e, index)}
                            />
                          </FormControl>
                        </div>
                        <div className="inputbox">
                          <div className="label-for-input">
                            <div className="label-wrapper">
                              <div className="label">Notes {index + 1}:</div>
                            </div>
                          </div>
                          <FormControl fullWidth sx={{ width: "468px" }}>
                            <TextField
                              id={`notes-${index}`}
                              variant="outlined"
                              fullWidth
                              sx={{ height: "44px" }}
                              name="notes"
                              value={item.notes}
                              onChange={(e) => handleDetailChange(e, index)}
                            />
                          </FormControl>
                        </div>
                      </div>
                      <div className="frame">
                        <div className="inputbox">
                          <div className="label-for-input">
                            <div className="label-wrapper">
                              <div className="label">Quantity {index + 1}:</div>
                            </div>
                          </div>
                          <FormControl fullWidth sx={{ width: "468px" }}>
                            <TextField
                              id={`quantity-${index}`}
                              variant="outlined"
                              fullWidth
                              sx={{ height: "44px" }}
                              name="quantity"
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleDetailChange(e, index)}
                            />
                          </FormControl>
                        </div>
                        <div className="inputbox">
                          <div className="label-for-input">
                            <div className="label-wrapper">
                              <div className="label">Unit Price {index + 1}:</div>
                            </div>
                          </div>
                          <FormControl fullWidth sx={{ width: "468px" }}>
                            <TextField
                              id={`unit-price-${index}`}
                              variant="outlined"
                              fullWidth
                              sx={{ height: "44px" }}
                              name="unit_price"
                              type="number"
                              value={item.unit_price}
                              onChange={(e) => handleDetailChange(e, index)}
                            />
                          </FormControl>
                        </div>
                      </div>
                      <div className="divider-3" />
                    </div>
                  ))}
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <Select
                          labelId="bank-label"
                          name="bank_id"
                          value={formData.bank_id}
                          onChange={handleChange}
                          required
                          defaultValue=""
                        >
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="transaction-ref"
                          variant="outlined"
                          fullWidth
                          type="number"
                          name="transaction_reference_number"
                          value={formData.transaction_reference_number}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <Select
                          labelId="status-label"
                          name="status_id"
                          value={formData.status_id}
                          onChange={handleChange}
                          required
                          defaultValue=""
                        >
                          <MenuItem value="1">Paid</MenuItem>
                          <MenuItem value="2">Pending</MenuItem>
                          <MenuItem value="3">Overdue</MenuItem>
                          <MenuItem value="4">Draft</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="inputbox">
                      <div className="label-for-input">
                        <div className="label-wrapper">
                          <div className="label">Payment method</div>
                        </div>
                      </div>
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <Select
                          labelId="payment-method-label"
                          name="payment_method_id"
                          value={formData.payment_method_id}
                          onChange={handleChange}
                          required
                          defaultValue=""
                        >
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="terms-conditions"
                          variant="outlined"
                          fullWidth
                          name="terms_and_conditions"
                          value={formData.terms_and_conditions}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="total-payment"
                          variant="outlined"
                          fullWidth
                          type="number"
                          name="total_payment_amount"
                          value={formData.total_payment_amount}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="notes-total-payment"
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="notes_for_the_total_payment"
                          value={formData.notes_for_the_total_payment}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="first-payment"
                          variant="outlined"
                          fullWidth
                          type="number"
                          name="first_payment"
                          value={formData.first_payment}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="notes-first-payment"
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="notes_for_the_first_payment"
                          value={formData.notes_for_the_first_payment}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="second-payment"
                          variant="outlined"
                          fullWidth
                          type="number"
                          name="second_payment"
                          value={formData.second_payment}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="notes-second-payment"
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="notes_for_the_second_payment"
                          value={formData.notes_for_the_second_payment}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="unpaid-payment"
                          variant="outlined"
                          fullWidth
                          type="number"
                          name="unpaid_payment_amount"
                          value={formData.unpaid_payment_amount}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <TextField
                          id="notes-unpaid-payment"
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="notes_for_the_unpaid_payment"
                          value={formData.notes_for_the_unpaid_payment}
                          onChange={handleChange}
                          required
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
                      <FormControl fullWidth sx={{ width: "468px" }}>
                        <Select
                          labelId="sale-person-label"
                          name="sale_person_id"
                          value={formData.sale_person_id}
                          onChange={handleChange}
                          required
                        >
                          <MenuItem value="1">Miss Fah</MenuItem>
                          <MenuItem value="2">Miss Kan</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
