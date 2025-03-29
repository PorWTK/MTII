// import React from "react";
// import { ButtonsButton } from "../../components/ButtonsButton";
// import { Form } from "../../components/Form";
// import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
// // import { ChevronLeft } from "../../icons/ChevronLeft";
// import { LogOut } from "../../icons/LogOut";
// // import { Link } from "react-router-dom";
// import "./style.css";

// export const View = () => {
//   return (
//     <div className="view">
//       <HeaderNavigationWrapper
//         className="header-navigation-8"
//         headerNavigationNavItemBaseCurrent
//         headerNavigationNavItemBaseCurrent1={false}
//         headerNavigationNavItemButtonIcon={
//           <LogOut className="icon-instance-node-9" />
//         }
//       />
//       <div className="main-7">
//         <div className="section-8">
//           <div className="content-41">
//             <div className="text-and-supporting-19">
//               <div className="text-53">View an order</div>
//             </div>

//             {/* <div className="actions-18">
//               <div className="actions-18">
//                 <ButtonsButton
//                   className="design-component-instance-node-5"
//                   hierarchy="secondary-gray"
//                   icon="default"
//                   iconTrailing={false}
//                   override={<ChevronLeft className="icon-instance-node-9" />}
//                   size="md"
//                   stateProp="default"
//                   text="Back"
//                   to="/data"
//                 />
//                 <Link to="/edit">
//                   <img
//                     className="button-14"
//                     alt="Button"
//                     src="/img/button-35.svg"
//                   />
//                 </Link>
//               </div>
//             </div> */}
//           </div>

//           <Form
//             mode="view"
//             buttonsButtonStateProp="disabled"
//             className="design-component-instance-node-5"
//           />

//           <div className="preview-buttons-set">
//             <ButtonsButton
//               className="design-component-instance-node-5"
//               hierarchy="secondary-color"
//               icon="default"
//               iconLeading={false}
//               iconTrailing={false}
//               size="xl"
//               stateProp="default"
//               text="Preview the Quotation"
//               to="/quotation"
//             />
//             <ButtonsButton
//               className="design-component-instance-node-5"
//               hierarchy="secondary-color"
//               icon="default"
//               iconLeading={false}
//               iconTrailing={false}
//               size="xl"
//               stateProp="default"
//               text="Preview the invoice"
//               to="/invoice"
//             />
//             <ButtonsButton
//               className="design-component-instance-node-5"
//               hierarchy="secondary-color"
//               icon="default"
//               iconLeading={false}
//               iconTrailing={false}
//               size="xl"
//               stateProp="default"
//               text="Preview the receipt"
//               to="/receipt"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
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

export const View = () => {
  const { id } = useParams(); // Get income ID from URL
    const navigate = useNavigate(); // For navigation after update
  

    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

  useEffect(() => {
    if (id) {
      api
        .get(`/income/${id}`)
        .then((response) => {
          console.log("Fetched Data:", response.data.data); // Debugging
          setFormData(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setMessage("Failed to load income data.");
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
              <div className="text-53">View an order</div>
            </div>

            <div className="actions-18">
              {/* <div className="actions-18">
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
                  <img
                    className="button-14"
                    alt="Button"
                    src="/img/button-35.svg"
                  />
                </Link>
              </div> */}
            </div>
          </div>  

            <p><strong>Quotation ID:</strong> {formData.quotation_id_number}</p>
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
            <p><strong>sale person:</strong> {formData.sale_person.name}</p>


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
              to="/quotation"
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
              to="/invoice"
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
              to="/receipt"
            />
          </div>
        </div>
      </div>
    </div>
  );
};