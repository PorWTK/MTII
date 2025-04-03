// import React, { useState, useEffect } from "react";
// import { ButtonsButton } from "../../components/ButtonsButton";
// import { Form } from "../../components/Form";
// import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
// import { Calendar29 } from "../../icons/Calendar29";
// import { LogOut } from "../../icons/LogOut";
// import { Trash2 } from "../../icons/Trash2";
// import { Link } from "react-router-dom";
// import "./style.css";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../../api";

// export const Edit = () => {
//   const { id } = useParams(); // Get income ID from URL
//   const navigate = useNavigate(); // For navigation after update

//   const [formData, setFormData] = useState({
//     quotation_id_number: "",
//     quotation_issue_date: "",
//     quotation_due_date: "",
//     invoice_id_number: "",
//     invoice_issue_date: "",
//     invoice_due_date: "",
//     receipt_issue_date: "",
//     receipt_id_number: "",
//     agency_tax_payer_id_number: "",
//     influencer_posting_date: "",
//     agency_agency_name: "",
//     agency_address: "",
//     agency_phone_number: "",
//     contactor_contactor_name: "",
//     contactor_phone_number: "",
//     contactor_line: "",
//     contactor_email: "",
//     brand_brand_name: "",
//     brand_product: "",
//     transaction_reference_number: "",
//     terms_and_conditions: "",
//     total_payment_amount: "",
//     notes_for_the_total_payment: "",
//     first_payment: "",
//     notes_for_the_first_payment: "",
//     second_payment: "",
//     notes_for_the_second_payment: "",
//     unpaid_payment_amount: "",
//     notes_for_the_unpaid_payment: "",
//     platform_id: "",
//     status_id: "",
//     payment_method_id: "",
//     receiver_id: "",
//     sale_person_id: "",
//     channel_id: "",
//     bank_id: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (id) {
//       api
//         .get(`/income/${id}`)
//         .then((response) => {
//           setFormData(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//           setMessage("Failed to load income data.");
//         });
//     }
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: name.includes('date')
//         ? value
//         : ['quotation_id_number', 'invoice_id_number', 'receipt_id_number', 'agency_tax_payer_id_number', 'transaction_reference_number', 'total_payment_amount', 'first_payment', 'second_payment', 'unpaid_payment_amount', 'platform_id', 'status_id', 'payment_method_id', 'receiver_id', 'sale_person_id', 'channel_id', 'bank_id'].includes(name)
//         ? Number(value) || ''
//         : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     // if (!validateData(formData)) {
//     // setMessage("Data tidak valid.");
//     // setLoading(false);
//     // return;
//   // }
  
//     console.log("Form Data:", formData);

//     const convertToISO = (date) => (date ? new Date(date).toISOString() : null);

//     const formattedData = {
//       ...formData,
//       quotation_issue_date: convertToISO(formData.quotation_issue_date),
//       quotation_due_date: convertToISO(formData.quotation_due_date),
//       invoice_issue_date: convertToISO(formData.invoice_issue_date),
//       invoice_due_date: convertToISO(formData.invoice_due_date),
//       receipt_issue_date: convertToISO(formData.receipt_issue_date),
//       influencer_posting_date: convertToISO(formData.influencer_posting_date),
//       quotation_id_number: Number(formData.quotation_id_number) || null,
//       invoice_id_number: Number(formData.invoice_id_number) || null,
//       receipt_id_number: Number(formData.receipt_id_number) || null,
//       agency_tax_payer_id_number: Number(formData.agency_tax_payer_id_number) || null,
//       transaction_reference_number: Number(formData.transaction_reference_number) || null,
//       total_payment_amount: Number(formData.total_payment_amount) || null,
//       first_payment: Number(formData.first_payment) || null,
//       second_payment: Number(formData.second_payment) || null,
//       unpaid_payment_amount: Number(formData.unpaid_payment_amount) || null,
//       platform_id: Number(formData.platform_id) || null,
//       status_id: Number(formData.status_id) || null,
//       payment_method_id: Number(formData.payment_method_id) || null,
//       receiver_id: Number(formData.receiver_id) || null,
//       sale_person_id: Number(formData.sale_person_id) || null,
//       channel_id: Number(formData.channel_id) || null,
//       bank_id: Number(formData.bank_id) || null,
//     };

//     const cleanData = (data) => {
//       return Object.fromEntries(
//         Object.entries(data).filter(([_, v]) => v !== null && v !== "")
//       );
//     };
    
//     // Remove null and empty values
//     const cleanedData = cleanData(formattedData);
    
//     try {
//       console.log("Updating income with ID:", id);
//       console.log("Cleaned Data:", cleanedData);

//       const response = await api.patch(`/income/${id}`, cleanedData);
//       setMessage("Income successfully added!");
//       navigate("/data"); // Redirect to income data page after update
//     } catch (error) {
//       console.error("Error updating income:", error);
//       setMessage("Failed to update income.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="edit-screen">
//       <HeaderNavigationWrapper
//         className="header-navigation-7"
//         headerNavigationNavItemBaseCurrent
//         headerNavigationNavItemBaseCurrent1={false}
//         headerNavigationNavItemButtonIcon={
//           <LogOut className="icon-instance-node-8" />
//         }
//       />
//       <div className="main-6">
//         <div className="section-7">
//           <div className="content-40">
//             <div className="text-and-supporting-18">
//               <div className="text-52">Edit an order</div>
//             </div>

//             <div className="actions-17">
//               {/* <div className="actions-17">
//                 <ButtonsButton
//                   className="design-component-instance-node-4"
//                   hierarchy="secondary-gray"
//                   icon="default"
//                   iconTrailing={false}
//                   override={<Trash2 className="icon-instance-node-8" />}
//                   size="md"
//                   stateProp="default"
//                   text="Delete"
//                 />
//                 <Link to="/view">
//                   <img
//                     className="button-13"
//                     alt="Button"
//                     src="/img/button-33.svg"
//                   />
//                 </Link>
//               </div> */}
//             </div>
//           </div>

//           {message && <p>{message}</p>}
//           <form onSubmit={handleSubmit}>
//             <label>Quotation ID:</label>
//             <input type="number" name="quotation_id_number" value={formData.quotation_id_number} onChange={handleChange} />

//             <label>Quotation Issue Date:</label>
//             <input type="datetime-local" name="quotation_issue_date" value={formData.quotation_issue_date} onChange={handleChange} />

//             <label>Quotation Due Date:</label>
//             <input type="datetime-local" name="quotation_due_date" value={formData.quotation_due_date} onChange={handleChange} />

//             <label>Invoice ID:</label>
//             <input type="number" name="invoice_id_number" value={formData.invoice_id_number} onChange={handleChange} disabled/>

//             <label>Invoice Issue Date:</label>
//             <input type="datetime-local" name="invoice_issue_date" value={formData.invoice_issue_date} onChange={handleChange} />

//             <label>Invoice Due Date:</label>
//             <input type="datetime-local" name="invoice_due_date" value={formData.invoice_due_date} onChange={handleChange} />

//             <label>Receipt Issue Date:</label>
//             <input type="datetime-local" name="receipt_issue_date" value={formData.receipt_issue_date} onChange={handleChange} />

//             <label>Receipt ID Number:</label>
//             <input type="number" name="receipt_id_number" value={formData.receipt_id_number} onChange={handleChange} />

//             <label>Agency Tax Payer ID:</label>
//             <input type="number" name="agency_tax_payer_id_number" value={formData.agency_tax_payer_id_number} onChange={handleChange} />

//             <label>Influencer Posting Date:</label>
//             <input type="datetime-local" name="influencer_posting_date" value={formData.influencer_posting_date} onChange={handleChange} />

//             <label>Agency Name:</label>
//             <input type="text" name="agency_agency_name" value={formData.agency_agency_name} onChange={handleChange} />

//             <label>Agency Address:</label>
//             <input type="text" name="agency_address" value={formData.agency_address} onChange={handleChange} />

//             <label>Agency Phone Number:</label>
//             <input type="text" name="agency_phone_number" value={formData.agency_phone_number} onChange={handleChange} />

//             <label>Contactor Name:</label>
//             <input type="text" name="contactor_contactor_name" value={formData.contactor_contactor_name} onChange={handleChange} />

//             <label>Contactor Phone Number:</label>
//             <input type="text" name="contactor_phone_number" value={formData.contactor_phone_number} onChange={handleChange} />

//             <label>Contactor Line:</label>
//             <input type="text" name="contactor_line" value={formData.contactor_line} onChange={handleChange} />

//             <label>Contactor Email:</label>
//             <input type="email" name="contactor_email" value={formData.contactor_email} onChange={handleChange} />

//             <label>Brand Name:</label>
//             <input type="text" name="brand_brand_name" value={formData.brand_brand_name} onChange={handleChange} />

//             <label>Brand Product:</label>
//             <input type="text" name="brand_product" value={formData.brand_product} onChange={handleChange} />

//             <label>Transaction Reference Number:</label>
//             <input type="number" name="transaction_reference_number" value={formData.transaction_reference_number} onChange={handleChange} />

//             <label>Terms & Conditions:</label>
//             <textarea name="terms_and_conditions" value={formData.terms_and_conditions} onChange={handleChange} />

//             <label>Total Payment:</label>
//             <input type="number" name="total_payment_amount" value={formData.total_payment_amount} onChange={handleChange} />

//             <label>Notes for Total Payment:</label>
//             <input type="text" name="notes_for_the_total_payment" value={formData.notes_for_the_total_payment} onChange={handleChange} />

//             <label>First Payment:</label>
//             <input type="number" name="first_payment" value={formData.first_payment} onChange={handleChange} />

//             <label>Notes for first Payment:</label>
//             <input type="text" name="notes_for_the_first_payment" value={formData.notes_for_the_first_payment} onChange={handleChange} />

//             <label>Second Payment:</label>
//             <input type="number" name="second_payment" value={formData.second_payment} onChange={handleChange} />

//             <label>Notes for second Payment:</label>
//             <input type="text" name="notes_for_the_second_payment" value={formData.notes_for_the_second_payment} onChange={handleChange} />

//             <label>Unpaid Payment:</label>
//             <input type="number" name="unpaid_payment_amount" value={formData.unpaid_payment_amount} onChange={handleChange} />

//             <label>Notes for unpaid Payment:</label>
//             <input type="text" name="notes_for_the_unpaid_payment" value={formData.notes_for_the_unpaid_payment} onChange={handleChange} />

//             <label>Platform ID:</label>
//             <input type="number" name="platform_id" value={formData.platform_id} onChange={handleChange} />

//             <label>status ID:</label>
//             <input type="number" name="status_id" value={formData.status_id} onChange={handleChange} />

//             <label>payment_method ID:</label>
//             <input type="number" name="payment_method_id" value={formData.payment_method_id} onChange={handleChange} />

//             <label>receiver ID:</label>
//             <input type="number" name="receiver_id" value={formData.receiver_id} onChange={handleChange} />

//             <label>sale_person ID:</label>
//             <input type="number" name="sale_person_id" value={formData.sale_person_id} onChange={handleChange} />

//             <label>channel ID:</label>
//             <input type="number" name="channel_id" value={formData.channel_id} onChange={handleChange} />

//             <label>bank ID:</label>
//             <input type="number" name="bank_id" value={formData.bank_id} onChange={handleChange} />

//             <button type="submit" disabled={loading}>
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           </form>

//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ButtonsButton } from "../../components/ButtonsButton";
import { Trash2 } from "../../icons/Trash2";
import { Link } from "react-router-dom";
import {
  TextField, FormControl, Select, MenuItem, Button, CircularProgress,
} from "@mui/material";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { LogOut } from "../../icons/LogOut";
import { SectionLabel } from "../../components/SectionLabel";
import api from "../../api";
import "./style.css";

export const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const [details, setDetails] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const formatDateTimeLocal = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const offset = date.getTimezoneOffset();
    const adjusted = new Date(date.getTime() - offset * 60000);
    return adjusted.toISOString().slice(0, 16);
  };
  
  // Load income + details
  // useEffect(() => {
  //   if (id) {
  //     api.get(`/income/${id}`)
  //       .then((res) => {
  //         const data = res.data.data;
  //         setFormData({
  //           ...data,
  //           receiver_id: data.receiver?.id,
  //           channel_id: data.channel?.id,
  //           platform_id: data.platform?.id,
  //           bank_id: data.bank?.id,
  //           status_id: data.status?.id,
  //           payment_method_id: data.payment_method?.id,
  //           sale_person_id: data.sale_person?.id,
  //         });
  //       })
  //       .catch((err) => setMessage("Failed to load income"));
    

  //     api.get(`/detail/`)
  //       .then(res => setDetails(
  //         res.data.data.filter(d => d.income.invoice_id_number === formData.invoice_id_number)
  //       ))
  //       .catch(() => setMessage("Failed to load details"));
  //   }
  // }, [id, formData.invoice_id_number]);
  const convertToISO = (dateStr) => {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    return isNaN(date) ? null : date.toISOString();
  };
  
  useEffect(() => {
    if (id) {
      api.get(`/income/${id}`)
        .then((res) => {
          const data = res.data.data;
          setFormData({
            ...data,
            receiver_id: data.receiver?.id || "",
            channel_id: data.channel?.id || "",
            platform_id: data.platform?.id || "",
            bank_id: data.bank?.id || "",
            status_id: data.status?.id || "",
            payment_method_id: data.payment_method?.id || "",
            sale_person_id: data.sale_person?.id || "",
          });
        })
        .catch((err) => setMessage("Failed to load income"));
    }
  }, [id]);
  
  useEffect(() => {
    if (!formData.invoice_id_number) return;
    api.get(`/detail/`)
      .then(res => setDetails(
        res.data.data.filter(d => d.income.invoice_id_number === formData.invoice_id_number)
      ))
      .catch(() => setMessage("Failed to load details"));
  }, [formData.invoice_id_number]);

  //different
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDetailChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...details];
    updated[index] = { ...updated[index], [name]: value };
    setDetails(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formatted = {
      ...formData,
    
      // Dates already in ISO format from <input type="datetime-local">
      quotation_issue_date: formData.quotation_issue_date || null,
      quotation_due_date: formData.quotation_due_date || null,
      invoice_issue_date: formData.invoice_issue_date || null,
      invoice_due_date: formData.invoice_due_date || null,
      receipt_issue_date: formData.receipt_issue_date || null,
      influencer_posting_date: formData.influencer_posting_date || null,
    
      // Use Number() conversion for numeric fields
      quotation_id_number: Number(formData.quotation_id_number),
      invoice_id_number: Number(formData.invoice_id_number),
      receipt_id_number: Number(formData.receipt_id_number),
      transaction_reference_number: Number(formData.transaction_reference_number),
      total_payment_amount: Number(formData.total_payment_amount),
      first_payment: Number(formData.first_payment),
      second_payment: Number(formData.second_payment),
      unpaid_payment_amount: Number(formData.unpaid_payment_amount),
    
      receiver_id: Number(formData.receiver_id),
      channel_id: Number(formData.channel_id),
      platform_id: Number(formData.platform_id),
      bank_id: Number(formData.bank_id),
      status_id: Number(formData.status_id),
      payment_method_id: Number(formData.payment_method_id),
      sale_person_id: Number(formData.sale_person_id),
    };
    
    
    // const formatted = {
    //   ...formData,
    //   quotation_issue_date: convertToISO(formData.quotation_issue_date),
    //   quotation_due_date: convertToISO(formData.quotation_due_date),
    //   invoice_issue_date: convertToISO(formData.invoice_issue_date),
    //   invoice_due_date: convertToISO(formData.invoice_due_date),
    //   receipt_issue_date: convertToISO(formData.receipt_issue_date),
    //   influencer_posting_date: convertToISO(formData.influencer_posting_date),
    // };

    try {
      await api.patch(`/income/${id}`, formatted);
      for (const detail of details) {
        await api.patch(`/detail/${detail.id}`, {
          description: detail.description,
          notes: detail.notes,
          quantity: Number(detail.quantity),
          unit_price: Number(detail.unit_price),
        });
      }
      setMessage("Updated successfully");
      navigate("/data");
    } catch (err) {
      console.error(err);
      setMessage("Update failed");
      console.log("Sending payload:", formatted);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="edit">
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
              <div className="text-54">Edit an order</div>
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
                        type="number" name="quotation_id_number" value={formData.quotation_id_number || ""} onChange={handleChange} required
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
                      <input
                        type="datetime-local" name="quotation_issue_date" value={formatDateTimeLocal(formData.quotation_issue_date)}
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
                      <input
                        type="datetime-local"
                        name="quotation_due_date"
                        value={formatDateTimeLocal(formData.quotation_due_date)}
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
                        type="number" name="invoice_id_number" value={formData.invoice_id_number|| ""} onChange={handleChange} disabled  
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
                        type="datetime-local" name="invoice_issue_date" value={formatDateTimeLocal(formData.invoice_issue_date)} onChange={handleChange} required
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
                    <input type="datetime-local" name="invoice_due_date" value={formatDateTimeLocal(formData.invoice_due_date)} onChange={handleChange} required
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
                        type="number" name="receipt_id_number" value={formData.receipt_id_number|| ""} onChange={handleChange} required 
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
                  <div className="frame-88">
                    <div className="input-with-label-4">
                      <div className="label-wrapper-4">
                        <div className="label-3">Receipt issue date</div>
                      </div>
                    </div>
                    <input type="datetime-local" name="receipt_issue_date" value={formatDateTimeLocal(formData.receipt_issue_date)} onChange={handleChange} required style={{ height: "44px", width: "308px" }}/>
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
                      text="delete"
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
                      <Select
                        label="Receiver"
                        name="receiver_id"
                        value={formData.receiver_id?.toString()|| ""}
                        onChange={handleChange}
                        required>
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
                    <Select
                      label = "Channel"
                      name="channel_id"
                      value={formData.channel_id|| ""}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="1">@PinnPW</MenuItem>
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
                    <Select
                      label= "Platform"
                      name="platform_id"
                      value={formData.platform_id|| ""}
                      onChange={handleChange}
                      required
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
                    <input type="datetime-local" name="influencer_posting_date" value={formatDateTimeLocal(formData.influencer_posting_date)} onChange={handleChange} required style={{ height: "44px", width: "308px" }}/>
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
                        type="text" name="agency_agency_name" value={formData.agency_agency_name|| ""} onChange={handleChange} required
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
                        type="text" name="agency_address" value={formData.agency_address|| ""} onChange={handleChange} required
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
                        type="text" name="contactor_contactor_name" value={formData.contactor_contactor_name|| ""} onChange={handleChange} required
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
                        type="text" name="contactor_line" value={formData.contactor_line|| ""} onChange={handleChange} required 
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
                        type="text" name="brand_brand_name" value={formData.brand_brand_name|| ""} onChange={handleChange} required
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

                  {/* Hidden input for income_invoice_id_number */}
                  <input
                    type="hidden"
                    name="income_invoice_id_number"
                    value= {Number(formData.invoice_id_number)}
                  />
                  {[0, 1, 2, 3].map((idx) => {
                  // Use the existing detail at this index or default to empty values
                  const detailItem = details[idx] || { description: "", notes: "", quantity: "", unit_price: "" };
                  return (
                    <div key={idx} className="frame-6">
                      <div className="frame">
                        <div className="inputbox">
                          <div className="label-for-input">
                            <div className="label-wrapper">
                              <div className="label">Description {idx + 1}:</div>
                            </div>
                          </div>
                          <FormControl fullWidth sx={{ width: "468px" }}>
                            <TextField
                              id={`description-${idx}`}
                              variant="outlined"
                              fullWidth
                              sx={{ height: "44px" }}
                              name="description"
                              value={detailItem.description|| ""}
                              onChange={(e) => handleDetailChange(idx, e)}
                            />
                          </FormControl>
                        </div>
                        <div className="inputbox">
                          <div className="label-for-input">
                            <div className="label-wrapper">
                              <div className="label">Notes {idx + 1}:</div>
                            </div>
                          </div>
                          <FormControl fullWidth sx={{ width: "468px" }}>
                            <TextField
                              id={`notes-${idx}`}
                              variant="outlined"
                              fullWidth
                              sx={{ height: "44px" }}
                              name="notes"
                              value={detailItem.notes|| ""}
                              onChange={(e) => handleDetailChange(idx, e)}
                            />
                          </FormControl>
                        </div>
                      </div>
                      <div className="frame">
                        <div className="inputbox">
                          <div className="label-for-input">
                            <div className="label-wrapper">
                              <div className="label">Quantity {idx + 1}:</div>
                            </div>
                          </div>
                          <FormControl fullWidth sx={{ width: "468px" }}>
                            <TextField
                              id={`quantity-${idx}`}
                              variant="outlined"
                              fullWidth
                              sx={{ height: "44px" }}
                              name="quantity"
                              type="number"
                              value={detailItem.quantity|| ""}
                              onChange={(e) => handleDetailChange(idx, e)}
                            />
                          </FormControl>
                        </div>
                        <div className="inputbox">
                          <div className="label-for-input">
                            <div className="label-wrapper">
                              <div className="label">Unit Price {idx + 1}:</div>
                            </div>
                          </div>
                          <FormControl fullWidth sx={{ width: "468px" }}>
                            <TextField
                              id={`unit-price-${idx}`}
                              variant="outlined"
                              fullWidth
                              sx={{ height: "44px" }}
                              name="unit_price"
                              type="number"
                              value={detailItem.unit_price|| ""}
                              onChange={(e) => handleDetailChange(idx, e)}
                            />
                          </FormControl>
                        </div>
                      </div>
                      <div className="divider-3" />
                    </div>
                  );
                })}
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
                      <Select
                        label ="Bank"
                        name="bank_id"
                        value={formData.bank_id || ""}
                        onChange={handleChange}
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="transaction-ref"
                        variant="outlined"
                        fullWidth
                        type="number" name="transaction_reference_number" value={formData.transaction_reference_number|| ""} onChange={handleChange} required
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
                      <Select label ="Status" labelId="status-label" name="status_id"  value={formData.status_id} onChange={handleChange} required defaultValue="">
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                    <Select
                      lable="Payment Method"
                      name="payment_method_id"
                      value={formData.payment_method_id || ""}
                      onChange={handleChange}
                      required
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
                    <FormControl fullWidth sx={{ width: "468px" }} >
                      <TextField
                        id="terms-conditions"
                        variant="outlined"
                        fullWidth
                        name="terms_and_conditions" value={formData.terms_and_conditions|| ""} onChange={handleChange} required
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
                        type="number" name="total_payment_amount" value={formData.total_payment_amount|| ""} onChange={handleChange} required
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
                        type="number" name="first_payment" value={formData.first_payment|| ""} onChange={handleChange} required
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
                        type="number" name="second_payment" value={formData.second_payment|| ""} onChange={handleChange} required
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
                        type="text" name="notes_for_the_second_payment" value={formData.notes_for_the_second_payment|| ""} onChange={handleChange} required 
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
                        type="number" name="unpaid_payment_amount" value={formData.unpaid_payment_amount|| ""} onChange={handleChange} required
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
                        value={formData.notes_for_the_unpaid_payment|| ""} 
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
                      <Select label="Sale person" labelId="sale-person-label" name="sale_person_id"  value={formData.sale_person_id || ""} onChange={handleChange} >
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


