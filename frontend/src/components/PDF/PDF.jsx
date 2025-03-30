import React from "react";
import "./style.css";

export const PDF = ({ data, docType }) => {
  return (
    <div className="PDF-format">
      <div className="main">
        
        {/* Receiver */}
        <div className="receiver">
          <div className="details">
            <div className="name">{data.receiver_name}</div>
            <input
              className="email"
              placeholder={data.receiver_email}
              type="email"
            />
            <div className="phone">{data.receiver_phone_number}</div>
          </div>

          <div className="div">
            <p className="address">
              {data.receiver_address}
            </p>
            <div className="taxid">
              <div className="text-wrapper">TAX ID:</div>
              <div className="text-wrapper">{data.receiver_tax_payer_id_number}</div>
            </div>
          </div>
        </div>
        
        {/* Main Bill for Quotation */}
        {docType === "quotation" && (
        <div className="main-bill">
          <div className="frame">
            <div className="text-wrapper-2">Quotation (ใบเสนอราคา)</div>
          </div>

          <div className="QI-rnumber">
            <div className="text-wrapper-3">Quotation number</div>
                <div className="text-wrapper-4">QT {data.quotation_id_number}</div>
          </div> 

          <div className="issue-date">
            <div className="text-wrapper-3">Issue date</div>
            <div className="text-wrapper-4">{data.quotation_issue_date}</div>
          </div>

          <div className="brand-product">
            <div className="text-wrapper-3">Brand &amp; Product</div>
            <p className="mizumi-face-mask">
              {data.brand_brand_name}
              <br />
              {data.brand_product}
            </p>
          </div>

          <div className="due-date">
            <div className="text-wrapper-5">Due date</div>
            <div className="text-wrapper-6">{data.quotation_due_date}</div>
          </div>

          <div className="client">
            <div className="text-wrapper-3">Billed to,</div>
            <div className="client-2">
              <div className="agency-name">{data.agency_agency_name}</div>
              <p className="text-wrapper-7">{data.agency_address}</p>
              <div className="text-wrapper-7">{data.agency_phone_number}</div>
              <div className="taxid-2">
                <div className="text-wrapper-8">TAX ID:</div>
                <div className="text-wrapper-8">{data.agency_tax_payer_id_number}</div>
              </div>
            </div>
          </div>


          <img className="vector" alt="Vector" src="/img/vector-148.svg" />
          <img className="img" alt="Vector" src="/img/vector-148.svg" />
          <img className="vector-2" alt="Vector" src="/img/vector-152.svg" />
          <img className="vector-3" alt="Vector" src="/img/vector-152.svg" />

          <div className="navbar">
            <div className="description">DESCRIPTION</div>
            <div className="quantity">QUANTITY</div>
            <div className="text-wrapper-9">UNIT PRICE</div>
            <div className="text-wrapper-9">AMOUNT</div>
          </div>

          <div className="lists">
            <div className="list">
              <div className="description-2">{data.details_description1}</div>
              <div className="qty">{data.details_quantity1}</div>
              <div className="text-wrapper-10">{data.details_unit_price1}</div>
              <div className="text-wrapper-10">{data.details_total_price1}</div>
            </div>

            <div className="list">
              <div className="description-2">{data.details_description2}</div>
              <div className="qty">{data.details_quantity2}</div>
              <div className="text-wrapper-10">{data.details_unit_price2}</div>
              <div className="text-wrapper-10">{data.details_total_price2}</div>
            </div>
            <div className="list">
              <div className="description-2">{data.details_description3}</div>
              <div className="qty">{data.details_quantity3}</div>
              <div className="text-wrapper-10">{data.details_unit_price3}</div>
              <div className="text-wrapper-10">{data.details_total_price3}</div>
            </div>

            <div className="list">
              <div className="description-2">{data.details_description4}</div>
              <div className="qty">{data.details_quantity4}</div>
              <div className="text-wrapper-10">{data.details_unit_price4}</div>
              <div className="text-wrapper-10">{data.details_total_price4}</div>
            </div>
          </div>

          <div className="total">
            <div className="text-wrapper-11">Subtotal</div>
            <div className="text-wrapper-12">{data.total_payment_amount}</div>
          </div>

          <div className="notes">
            <p className="p">
              <span className="span">Notes</span>
              <span className="text-wrapper-13">:</span>
            </p>
            <p className="description-3">
              {data.notes_for_the_total_payment}
            </p>
          </div>
        </div>
        )}


        {/* Main Bill for Invoice */}
        {docType === "invoice" && (
        <div className="main-bill">
          <div className="frame">
            <div className="text-wrapper-2">Invoice (ใบแจ้งหนี้)</div>
          </div>

          <div className="QI-rnumber">
            <div className="text-wrapper-3">Invoice number</div>
            <div className="text-wrapper-4">IV {data.invoice_id_number}</div>
          </div>

          <div className="issue-date">
            <div className="text-wrapper-3">Issue date</div>
            <div className="text-wrapper-4">{data.invoice_issue_date}</div>
          </div>

          <div className="brand-product">
            <div className="text-wrapper-3">Brand &amp; Product</div>
            <p className="mizumi-face-mask">
              {data.brand_brand_name}
              <br />
              {data.brand_product}
            </p>
          </div>

          <div className="due-date">
            <div className="text-wrapper-5">Due date</div>
            <div className="text-wrapper-6">{data.invoice_due_date}</div>
          </div>

          <div className="client">
            <div className="text-wrapper-3">Billed to,</div>
            <div className="client-2">
              <div className="agency-name">{data.agency_agency_name}</div>
              <p className="text-wrapper-7">{data.agency_address}</p>
              <div className="text-wrapper-7">{data.agency_phone_number}</div>
              <div className="taxid-2">
                <div className="text-wrapper-8">TAX ID:</div>
                <div className="text-wrapper-8">{data.agency_tax_payer_id_number}</div>
              </div>
            </div>
          </div>


          <img className="vector" alt="Vector" src="/img/vector-148.svg" />
          <img className="img" alt="Vector" src="/img/vector-148.svg" />
          <img className="vector-2" alt="Vector" src="/img/vector-152.svg" />
          <img className="vector-3" alt="Vector" src="/img/vector-152.svg" />

          <div className="navbar">
            <div className="description">DESCRIPTION</div>
            <div className="quantity">QUANTITY</div>
            <div className="text-wrapper-9">UNIT PRICE</div>
            <div className="text-wrapper-9">AMOUNT</div>
          </div>

          <div className="lists">
            <div className="list">
              <div className="description-2">{data.details_description1}</div>
              <div className="qty">{data.details_quantity1}</div>
              <div className="text-wrapper-10">{data.details_unit_price1}</div>
              <div className="text-wrapper-10">{data.details_total_price1}</div>
            </div>

            <div className="list">
              <div className="description-2">{data.details_description2}</div>
              <div className="qty">{data.details_quantity2}</div>
              <div className="text-wrapper-10">{data.details_unit_price2}</div>
              <div className="text-wrapper-10">{data.details_total_price2}</div>
            </div>
            <div className="list">
              <div className="description-2">{data.details_description3}</div>
              <div className="qty">{data.details_quantity3}</div>
              <div className="text-wrapper-10">{data.details_unit_price3}</div>
              <div className="text-wrapper-10">{data.details_total_price3}</div>
            </div>

            <div className="list">
              <div className="description-2">{data.details_description4}</div>
              <div className="qty">{data.details_quantity4}</div>
              <div className="text-wrapper-10">{data.details_unit_price4}</div>
              <div className="text-wrapper-10">{data.details_total_price4}</div>
            </div>
          </div>

          <div className="total">
            <div className="text-wrapper-11">Subtotal</div>
            <div className="text-wrapper-12">{data.total_payment_amount}</div>
          </div>

          <div className="notes">
            <p className="p">
              <span className="span">Notes</span>
              <span className="text-wrapper-13">:</span>
            </p>
            <p className="description-3">
              {data.notes_for_the_total_payment}
            </p>
          </div>

          <div className="ref">
            <div className="text-wrapper-3">Reference</div>
            <div className="text-wrapper-4">QT {data.quotation_id_number}</div>
          </div>
        </div>
        )}

        {/* Main Bill for Receipt */}
        {docType === "receipt" && (
            <div className="main-bill">
            <div className="frame">
                <div className="text-wrapper-2">Receipt (ใบเสร็จ)</div>
            </div>

            <div className="QI-rnumber">
                <div className="text-wrapper-3">Receipt number</div>
                <div className="text-wrapper-4">RC {data.receipt_id_number}</div>
            </div>

            <div className="issue-date">
                <div className="text-wrapper-3">Issue date</div>
                <div className="text-wrapper-4">{data.receipt_issue_date}</div>
            </div>

            <div className="brand-product">
                <div className="text-wrapper-3">Brand &amp; Product</div>
                <p className="mizumi-face-mask">
                {data.brand_brand_name}
                <br />
                {data.brand_product}
                </p>
            </div>

            <div className="client">
                <div className="text-wrapper-3">Billed to,</div>
                <div className="client-2">
                <div className="agency-name">{data.agency_agency_name}</div>
                <p className="text-wrapper-7">{data.agency_address}</p>
                <div className="text-wrapper-7">{data.agency_phone_number}</div>
                <div className="taxid-2">
                    <div className="text-wrapper-8">TAX ID:</div>
                    <div className="text-wrapper-8">{data.agency_tax_payer_id_number}</div>
                </div>
                </div>
            </div>


            <img className="vector" alt="Vector" src="/img/vector-148.svg" />
            <img className="img" alt="Vector" src="/img/vector-148.svg" />
            <img className="vector-2" alt="Vector" src="/img/vector-152.svg" />
            <img className="vector-3" alt="Vector" src="/img/vector-152.svg" />

            <div className="navbar">
                <div className="description">DESCRIPTION</div>
                <div className="quantity">QUANTITY</div>
                <div className="text-wrapper-9">UNIT PRICE</div>
                <div className="text-wrapper-9">AMOUNT</div>
            </div>

            <div className="lists">
                <div className="list">
                <div className="description-2">{data.details_description1}</div>
                <div className="qty">{data.details_quantity1}</div>
                <div className="text-wrapper-10">{data.details_unit_price1}</div>
                <div className="text-wrapper-10">{data.details_total_price1}</div>
                </div>

                <div className="list">
                <div className="description-2">{data.details_description2}</div>
                <div className="qty">{data.details_quantity2}</div>
                <div className="text-wrapper-10">{data.details_unit_price2}</div>
                <div className="text-wrapper-10">{data.details_total_price2}</div>
                </div>
                <div className="list">
                <div className="description-2">{data.details_description3}</div>
                <div className="qty">{data.details_quantity3}</div>
                <div className="text-wrapper-10">{data.details_unit_price3}</div>
                <div className="text-wrapper-10">{data.details_total_price3}</div>
                </div>

                <div className="list">
                <div className="description-2">{data.details_description4}</div>
                <div className="qty">{data.details_quantity4}</div>
                <div className="text-wrapper-10">{data.details_unit_price4}</div>
                <div className="text-wrapper-10">{data.details_total_price4}</div>
                </div>
            </div>

            <div className="total">
                <div className="text-wrapper-11">Subtotal</div>
                <div className="text-wrapper-12">{data.total_payment_amount}</div>
            </div>

            <div className="ref">
                <div className="text-wrapper-3">Reference</div>
                <div className="text-wrapper-4">IV {data.invoice_id_number}</div>
            </div>
            </div>
        )}

        
        {/* Signage for Quotation */}
        {docType === "quotation" && (
        <div className="siagnage">
          <img className="vector-4" alt="Vector" src="/img/vector-148.svg" />
          <img className="vector-5" alt="Vector" src="/img/vector-148.svg" />
          <div className="signbox">
            <img className="vector-6" alt="Vector" src="/img/vector-153-2.svg" />
            <div className="text">
              <div className="text-wrapper-14">Bill issuer (ผู้วางบิล)</div>
              <div className="text-wrapper-15">{data.quotation_issue_date}</div>
            </div>
          </div>
          <div className="signbox-3">
            <img className="vector-6" alt="Vector" src="/img/vector-153-2.svg" />
            <div className="text">
              <div className="text-wrapper-14">Bill receiver (ผู้รับบิล)</div>
            </div>
          </div>
        </div>
        )}

        
        {/* Signage for Invoice */}
        {docType === "invoice" && (
        <div className="siagnage">
          <img className="vector-4" alt="Vector" src="/img/vector-148.svg" />
          <img className="vector-5" alt="Vector" src="/img/vector-148.svg" />
          <div className="signbox">
            <img className="vector-6" alt="Vector" src="/img/vector-153-2.svg" />
            <div className="text">
              <div className="text-wrapper-14">Bill issuer (ผู้วางบิล)</div>
              <div className="text-wrapper-15">{data.invoice_issue_date}</div>
            </div>
          </div>
          <div className="signbox-3">
            <img className="vector-6" alt="Vector" src="/img/vector-153-2.svg" />
            <div className="text">
              <div className="text-wrapper-14">Bill receiver (ผู้รับบิล)</div>
            </div>
          </div>
        </div>
        )}

        {/* Signage for Receipt */}
        {docType === "receipt" && (
            <div className="siagnage">
            <img className="vector-4" alt="Vector" src="/img/vector-148.svg" />
            <img className="vector-5" alt="Vector" src="/img/vector-148.svg" />
            <div className="signbox">
                <img className="vector-6" alt="Vector" src="/img/vector-153-2.svg" />
                <div className="text">
                <div className="text-wrapper-14">Bill issuer (ผู้วางบิล)</div>
                <div className="text-wrapper-15">{data.receipt_issue_date}</div>
                </div>
            </div>
            <div className="signbox-2">
                <img className="vector-6" alt="Vector" src="/img/vector-153-2.svg" />
                <div className="text">
                <div className="text-wrapper-14">Payment receiver (ผู้รับเงิน)</div>
                </div>
            </div>
            <div className="signbox-3">
                <img className="vector-6" alt="Vector" src="/img/vector-153-2.svg" />
                <div className="text">
                <div className="text-wrapper-14">Bill receiver (ผู้รับบิล)</div>
                </div>
            </div>
            </div>
        )}


        {/* Terms and Conditions */}
        <div className="t-c">
          <div className="text-wrapper-16">Terms and Conditions</div>
          <div className="line">
            <div className="text-wrapper-17">
              เงื่อนไขและรายละเอียดเพิ่มเติมในแชทไลน์ Line:
            </div>
            <div className="text-wrapper-17">{data.contactor_line}</div>
          </div>
          <p className="paymentmethod">
          {data.payment_method}
          </p>
        </div>

      </div>
    </div>
  );
};

export default PDF;
