import React from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { LogOut } from "../../icons/LogOut";
import { PDF } from "../../components/PDF";
import "./style.css";

export const Quotation = () => {
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
                  to="/view"
                />
                <img
                  className="button-11"
                  alt="Button"
                  src="/img/button-26.svg"
                />
              </div>
            </div>
          </div>

          <div className="form-4">
            <div className="divider-6" />

            <div className="frame-12">
            <PDF
              data={{
                receiver_name: "John Doe",
                receiver_address: "123 Main Street, City, Country",
                receiver_phone_number: "+66 123123123",
                receiver_tax_payer_id_number: "00XXXXX1234X0XX",
                receiver_email: "abc@abc.com",
    
                quotation_id_number: "QT12345678",
                quotation_issue_date: "1 January 2024",
                quotation_due_date: "1 February 2024",

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


                transaction_reference_number: "QT12345678",
                terms_and_conditions: "Payment due within 30 days.",
                total_payment_amount: "4,500.00",

                notes_for_the_total_payment: "Please review all charges carefully.",
                contactor_line: "john_line",
                payment_method: "Credit Terms",
                // Other variables for invoice/receipt can be left empty for now
              }}
            />
            </div>

            <div className="divider-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
