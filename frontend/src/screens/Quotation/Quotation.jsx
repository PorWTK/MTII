import React, { useState, useEffect, useRef } from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { LogOut } from "../../icons/LogOut";
import { PDF } from "../../components/PDF";
import api from "../../api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./style.css";

export const Quotation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [detailData, setDetailData] = useState([]); // New state for details
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const pdfRef = useRef(null); // Ref for the PDF section

  useEffect(() => {
    if (id) {
      setLoading(true);
      api.get(`/income/${id}`)
        .then((response) => {
          console.log("Fetched Income Data:", response.data.data);
          setFormData(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setMessage("Failed to load data.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    if (formData) {
      api.get(`/detail/`)
        .then((response) => {
          const filteredDetails = response.data.data.filter(
            (detail) =>
              detail.income.invoice_id_number === formData.invoice_id_number
          );
          setDetailData(filteredDetails);
        })
        .catch((error) => {
          console.error("Error fetching detail data:", error);
        });
    }
  }, [formData]);


  const saveAsPDF = async () => {
    const input = pdfRef.current;
    if (!input) return;

    setLoading(true);

    try {
      const canvas = await html2canvas(input, {
        scale: 2, // increases resolution
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      // Calculate yOffset to center the image vertically on a 297mm tall A4 page
      const yOffset = (297 - imgHeight) / 2;
      
       // Add image to PDF
      pdf.addImage(imgData, "PNG", 0, yOffset, imgWidth, imgHeight);
      pdf.save(`QT${id}.pdf`);

      console.log("PDF saved successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      setMessage("Failed to generate PDF.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (!formData) {
    return <p>{message || "No data available."}</p>;
  }
  
  return (
    <div className="quotation">
      <HeaderNavigationWrapper
        className="header-navigation-4"
        headerNavigationNavItemButtonIcon={
          <LogOut className="icon-instance-node-3" />
        }
      />
      <div className="main-3">
        <div className="section-3">
          <div className="content-28">
            <div className="text-and-supporting-13">
              <div className="text-44">Preview the quotation</div>
            </div>

            <div className="actions-12">
              <div className="actions-12">
                <ButtonsButton
                  className="button-10"
                  hierarchy="secondary-gray"
                  icon="default"
                  iconTrailing={false}
                  override={<ChevronLeft className="icon-instance-node-3" />}
                  size="md"
                  stateProp="default"
                  text="Back"
                  to={`/view/${id}`}
                />
                <button className="button-11" onClick={saveAsPDF}>
                <img
                  className="button-11"
                  alt="Button"
                  src="/img/button-26.svg"
                />
              </button>
              </div>
            </div>
          </div>

          <div className="form-4">
            <div className="divider-6" />
            <div className="frame-12">
            <div className="PDF-format-3" ref={pdfRef} style={{ backgroundColor: "white", padding: "20px" }}>
            <PDF
              docType="quotation"
              data={{
                receiver_name: formData.receiver.name,
                receiver_address: formData.receiver.address,
                receiver_phone_number: formData.receiver.phone,
                receiver_tax_payer_id_number: formData.receiver.tax_payer_id,
                receiver_email: formData.receiver.email,
    
                quotation_id_number: formData.quotation_id_number,
                quotation_issue_date: formData.quotation_issue_date
                ? new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric" }).format(new Date(formData.quotation_issue_date))
                : "",
                quotation_due_date: formData.quotation_due_date
                  ? new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric" }).format(new Date(formData.quotation_due_date))
                  : "",

                agency_tax_payer_id_number: formData.agency_tax_payer_id_number,
                agency_agency_name: formData.agency_agency_name,
                agency_address: formData.agency_address,
                agency_phone_number: formData.agency_phone_number,

                contactor_contactor_name: formData.contactor_contactor_name,
                contactor_phone_number: formData.contactor_phone_number,
                contactor_line: formData.contactor_line,
                contactor_email: formData.contactor_email,

                brand_brand_name: formData.brand_brand_name,
                brand_product: formData.brand_product,

                details_description1: formData.description,
                details_quantity1: formData.quantity,
                details_unit_price1: formData.unit_price,
                details_total_price1: formData.total_price, //calculation code
                details_description2: formData.description,
                details_quantity2: formData.quantity,
                details_unit_price2: formData.unit_price,
                details_total_price2: formData.total_price, //calculation code
                details_description3: formData.description,
                details_quantity3: formData.quantity,
                details_unit_price3: formData.unit_price,
                details_total_price3: formData.total_price, //calculation code
                details_description4: formData.description,
                details_quantity4: formData.quantity,
                details_unit_price4: formData.unit_price,
                details_total_price4: formData.total_price, //calculation code


                transaction_reference_number: formData.transaction_reference_number,
                terms_and_conditions: formData.terms_and_conditions,
                total_payment_amount: formData.total_payment_amount,

                notes_for_the_total_payment: formData.notes_for_the_total_payment,
                payment_method: formData.payment_method.name,
                // Other variables for invoice/receipt can be left empty for now
              }}
              details={detailData} 
            />
            </div>
            </div>
            <div className="divider-6" />
          </div>
        </div>
      </div>
    </div>
  );
};