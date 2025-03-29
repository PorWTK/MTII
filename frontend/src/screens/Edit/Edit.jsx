// import React from "react";
// // import { ButtonsButton } from "../../components/ButtonsButton";
// import { Form } from "../../components/Form";
// import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
// // import { Calendar29 } from "../../icons/Calendar29";
// import { LogOut } from "../../icons/LogOut";
// // import { Trash2 } from "../../icons/Trash2";
// // import { Link } from "react-router-dom";
// import "./style.css";

// export const Edit = () => {
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

//             {/* <div className="actions-17">
//               <div className="actions-17">
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
//               </div>
//             </div> */}
//           </div>

//           <Form
//             button="/img/button-34.svg"
//             className="design-component-instance-node-4"
//             mode = "edit"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { Form } from "../../components/Form";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { Calendar29 } from "../../icons/Calendar29";
import { LogOut } from "../../icons/LogOut";
import { Trash2 } from "../../icons/Trash2";
import { Link } from "react-router-dom";
import "./style.css";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api";

export const Edit = () => {
  const { id } = useParams(); // Get income ID from URL
  const navigate = useNavigate(); // For navigation after update

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

  useEffect(() => {
    if (id) {
      api
        .get(`/income/${id}`)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setMessage("Failed to load income data.");
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name.includes('date')
        ? value
        : ['quotation_id_number', 'invoice_id_number', 'receipt_id_number', 'agency_tax_payer_id_number', 'transaction_reference_number', 'total_payment_amount', 'first_payment', 'second_payment', 'unpaid_payment_amount', 'platform_id', 'status_id', 'payment_method_id', 'receiver_id', 'sale_person_id', 'channel_id', 'bank_id'].includes(name)
        ? Number(value) || ''
        : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // if (!validateData(formData)) {
    // setMessage("Data tidak valid.");
    // setLoading(false);
    // return;
  // }
  
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

    const cleanData = (data) => {
      return Object.fromEntries(
        Object.entries(data).filter(([_, v]) => v !== null && v !== "")
      );
    };
    
    // Remove null and empty values
    const cleanedData = cleanData(formattedData);
    
    try {
      console.log("Updating income with ID:", id);
      console.log("Cleaned Data:", cleanedData);

      const response = await api.patch(`/income/${id}`, cleanedData);
      setMessage("Income successfully added!");
      navigate("/data"); // Redirect to income data page after update
    } catch (error) {
      console.error("Error updating income:", error);
      setMessage("Failed to update income.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-screen">
      <HeaderNavigationWrapper
        className="header-navigation-7"
        headerNavigationNavItemBaseCurrent
        headerNavigationNavItemBaseCurrent1={false}
        headerNavigationNavItemButtonIcon={
          <LogOut className="icon-instance-node-8" />
        }
      />
      <div className="main-6">
        <div className="section-7">
          <div className="content-40">
            <div className="text-and-supporting-18">
              <div className="text-52">Edit an order</div>
            </div>

            <div className="actions-17">
              {/* <div className="actions-17">
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
                  <img
                    className="button-13"
                    alt="Button"
                    src="/img/button-33.svg"
                  />
                </Link>
              </div> */}
            </div>
          </div>

          {message && <p>{message}</p>}
          <form onSubmit={handleSubmit}>
            <label>Quotation ID:</label>
            <input type="number" name="quotation_id_number" value={formData.quotation_id_number} onChange={handleChange} />

            <label>Quotation Issue Date:</label>
            <input type="datetime-local" name="quotation_issue_date" value={formData.quotation_issue_date} onChange={handleChange} />

            <label>Quotation Due Date:</label>
            <input type="datetime-local" name="quotation_due_date" value={formData.quotation_due_date} onChange={handleChange} />

            <label>Invoice ID:</label>
            <input type="number" name="invoice_id_number" value={formData.invoice_id_number} onChange={handleChange} disabled/>

            <label>Invoice Issue Date:</label>
            <input type="datetime-local" name="invoice_issue_date" value={formData.invoice_issue_date} onChange={handleChange} />

            <label>Invoice Due Date:</label>
            <input type="datetime-local" name="invoice_due_date" value={formData.invoice_due_date} onChange={handleChange} />

            <label>Receipt Issue Date:</label>
            <input type="datetime-local" name="receipt_issue_date" value={formData.receipt_issue_date} onChange={handleChange} />

            <label>Receipt ID Number:</label>
            <input type="number" name="receipt_id_number" value={formData.receipt_id_number} onChange={handleChange} />

            <label>Agency Tax Payer ID:</label>
            <input type="number" name="agency_tax_payer_id_number" value={formData.agency_tax_payer_id_number} onChange={handleChange} />

            <label>Influencer Posting Date:</label>
            <input type="datetime-local" name="influencer_posting_date" value={formData.influencer_posting_date} onChange={handleChange} />

            <label>Agency Name:</label>
            <input type="text" name="agency_agency_name" value={formData.agency_agency_name} onChange={handleChange} />

            <label>Agency Address:</label>
            <input type="text" name="agency_address" value={formData.agency_address} onChange={handleChange} />

            <label>Agency Phone Number:</label>
            <input type="text" name="agency_phone_number" value={formData.agency_phone_number} onChange={handleChange} />

            <label>Contactor Name:</label>
            <input type="text" name="contactor_contactor_name" value={formData.contactor_contactor_name} onChange={handleChange} />

            <label>Contactor Phone Number:</label>
            <input type="text" name="contactor_phone_number" value={formData.contactor_phone_number} onChange={handleChange} />

            <label>Contactor Line:</label>
            <input type="text" name="contactor_line" value={formData.contactor_line} onChange={handleChange} />

            <label>Contactor Email:</label>
            <input type="email" name="contactor_email" value={formData.contactor_email} onChange={handleChange} />

            <label>Brand Name:</label>
            <input type="text" name="brand_brand_name" value={formData.brand_brand_name} onChange={handleChange} />

            <label>Brand Product:</label>
            <input type="text" name="brand_product" value={formData.brand_product} onChange={handleChange} />

            <label>Transaction Reference Number:</label>
            <input type="number" name="transaction_reference_number" value={formData.transaction_reference_number} onChange={handleChange} />

            <label>Terms & Conditions:</label>
            <textarea name="terms_and_conditions" value={formData.terms_and_conditions} onChange={handleChange} />

            <label>Total Payment:</label>
            <input type="number" name="total_payment_amount" value={formData.total_payment_amount} onChange={handleChange} />

            <label>Notes for Total Payment:</label>
            <input type="text" name="notes_for_the_total_payment" value={formData.notes_for_the_total_payment} onChange={handleChange} />

            <label>First Payment:</label>
            <input type="number" name="first_payment" value={formData.first_payment} onChange={handleChange} />

            <label>Notes for first Payment:</label>
            <input type="text" name="notes_for_the_first_payment" value={formData.notes_for_the_first_payment} onChange={handleChange} />

            <label>Second Payment:</label>
            <input type="number" name="second_payment" value={formData.second_payment} onChange={handleChange} />

            <label>Notes for second Payment:</label>
            <input type="text" name="notes_for_the_second_payment" value={formData.notes_for_the_second_payment} onChange={handleChange} />

            <label>Unpaid Payment:</label>
            <input type="number" name="unpaid_payment_amount" value={formData.unpaid_payment_amount} onChange={handleChange} />

            <label>Notes for unpaid Payment:</label>
            <input type="text" name="notes_for_the_unpaid_payment" value={formData.notes_for_the_unpaid_payment} onChange={handleChange} />

            <label>Platform ID:</label>
            <input type="number" name="platform_id" value={formData.platform_id} onChange={handleChange} />

            <label>status ID:</label>
            <input type="number" name="status_id" value={formData.status_id} onChange={handleChange} />

            <label>payment_method ID:</label>
            <input type="number" name="payment_method_id" value={formData.payment_method_id} onChange={handleChange} />

            <label>receiver ID:</label>
            <input type="number" name="receiver_id" value={formData.receiver_id} onChange={handleChange} />

            <label>sale_person ID:</label>
            <input type="number" name="sale_person_id" value={formData.sale_person_id} onChange={handleChange} />

            <label>channel ID:</label>
            <input type="number" name="channel_id" value={formData.channel_id} onChange={handleChange} />

            <label>bank ID:</label>
            <input type="number" name="bank_id" value={formData.bank_id} onChange={handleChange} />

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};