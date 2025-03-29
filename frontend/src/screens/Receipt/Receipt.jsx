import React from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { LogOut } from "../../icons/LogOut";
import { PDF } from "../../components/PDF";
import "./style.css";

export const Receipt = () => {
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
                  to="/view"
                />
                <img
                  className="button-9"
                  alt="Button"
                  src="/img/button-25.svg"
                />
              </div>
            </div>
          </div>

          <div className="form-3">
            <div className="divider-5" />

            <div className="frame-11">
            <PDF
              docType="receipt"
              data={{
                receiver_name: "@PinnPW",
                receiver_address: "123 Main Street, City, Country",
                receiver_phone_number: "+66 123123123",
                receiver_tax_payer_id_number: "00XXXXX1234X0XX",
                receiver_email: "abc@abc.com",
    
                receipt_id_number: "RC12345678",
                receipt_issue_date: "1 January 2024",
                invoice_id_number: "IV12345678",

                agency_tax_payer_id_number: "00XXXXX1234X0XX",
                agency_agency_name: "Acme Agency",
                agency_address: "123 Main Street, City, Country",
                agency_phone_number: "+66 345345345",

                contactor_contactor_name: "John Doe",
                contactor_phone_number: "+66 678678678",
                contactor_line: "john_line",
                contactor_email: "john.doe@example.com",

                brand_brand_name: "Mizumi",
                brand_product: "Face Mask Ultra Glow 2024",

                details_description1: "Face Mask Ultra Glow 2024",
                details_quantity1: "1",
                details_unit_price1: "4,500.00",
                details_total_price1: "4,500.00", //calculation code
                details_description2: "",
                details_quantity2: "",
                details_unit_price2: "",
                details_total_price2: "", //calculation code
                details_description3: "",
                details_quantity3: "",
                details_unit_price3: "",
                details_total_price3: "", //calculation code
                details_description4: "",
                details_quantity4: "",
                details_unit_price4: "",
                details_total_price4: "", //calculation code
                total_payment_amount: "4,500.00", //calculation code


                terms_and_conditions: "Payment due within 30 days.",
                total_payment_amount: "4,500.00",

                notes_for_the_total_payment: "Please review all charges carefully.",
                contactor_line: "john_line",
                payment_method: "Credit Terms",
              }}
            />
            </div>

            <div className="divider-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
