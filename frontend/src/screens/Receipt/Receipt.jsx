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

export const Receipt = () => {
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
    const original = pdfRef.current;
    if (!original) return;
  
    setLoading(true);
    try {
      // 1) Measure the original CSS size (px)
      const { width: origW, height: origH } =
        original.getBoundingClientRect();
  
      // 2) Compute the pixel width that maps to 210 mm @96 dpi
      const pxPerMM  = 96 / 25.4;             // ≈ 3.78 px/mm
      const targetPx = 210 * pxPerMM;         // ≈ 793 px
  
      // 3) Compute uniform scale factor
      const scale = targetPx / origW;
  
      // 4) Clone the node & apply the scale off‑screen
      const clone = original.cloneNode(true);
      Object.assign(clone.style, {
        position:         "absolute",
        top:              "-9999px",
        left:             "-9999px",
        transformOrigin:  "top left",
        transform:        `scale(${scale})`,
        backgroundColor:  "white",    // ensure white behind
        width:            `${origW}px`,
        height:           `${origH}px`,
      });
      document.body.appendChild(clone);
  
      // 5) Capture the **scaled clone** at devicePixelRatio for crispness
      const canvas = await html2canvas(clone, {
        backgroundColor: null,           // preserves your grey boxes
        scale:           window.devicePixelRatio,
        useCORS:         true,
        logging:         false,
      });
  
      // 6) Clean up the clone
      document.body.removeChild(clone);
  
      // 7) Build A4 PDF & embed full‑page
      const imgData = canvas.toDataURL("image/png");
      const pdf     = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
  
      // 8) Save with “IV” prefix
      pdf.save(`RC${id}.pdf`);
    } catch (err) {
      console.error(err);
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
    <div className="receipt">
      <HeaderNavigationWrapper
        className="header-navigation-3"
        headerNavigationNavItemButtonIcon={
          <LogOut className="icon-instance-node-2" />
        }
      />
      <div className="main-2">
        <div className="section-2">
          <div className="content-27">
            <div className="text-and-supporting-12">
              <div className="text-43">Preview the receipt</div>
            </div>

            <div className="actions-11">
              <div className="actions-11">
                <ButtonsButton
                  className="button-6"
                  hierarchy="secondary-gray"
                  icon="default"
                  iconTrailing={false}
                  override={<ChevronLeft className="icon-instance-node" />}
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

          <div className="form-3">
            <div className="divider-5" />
            <div className="frame-11">
              <div className="PDF-format-2" ref={pdfRef} style={{ backgroundColor: "white", padding: "20px" }}>
                <PDF
                  docType="receipt"
                  data={{
                    receiver_name: formData.receiver.name,
                    receiver_address: formData.receiver.address,
                    receiver_phone_number: formData.receiver.phone,
                    receiver_tax_payer_id_number: formData.receiver.tax_payer_id,
                    receiver_email: formData.receiver.email,
        
                    receipt_id_number: formData.receipt_id_number,
                    invoice_id_number: formData.invoice_id_number,
                    receipt_issue_date: formData.receipt_issue_date
                    ? new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric" }).format(new Date(formData.receipt_issue_date))
                    : "",

                    agency_tax_payer_id_number: formData.agency_tax_payer_id_number,
                    agency_agency_name: formData.agency_agency_name,
                    agency_address: formData.agency_address,
                    agency_phone_number: formData.agency_phone_number,

                    contactor_contactor_name: formData.contactor_contactor_name,
                    contactor_phone_number: formData.contactor_phone_number,
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

                    terms_and_conditions: formData.terms_and_conditions,
                    total_payment_amount: formData.total_payment_amount,
                    contactor_line: formData.contactor_line,
                    notes_for_the_total_payment: formData.notes_for_the_total_payment,
                    payment_method: formData.payment_method.name,
                    // Other variables for invoice/receipt can be left empty for now
                  }}
                  details={detailData} 
                />
              </div>
              </div>
            <div className="divider-5" />
          </div>
        </div>
      </div>
    </div>
  );
};