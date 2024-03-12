sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    function (BaseController, JSONModel) {
        "use strict";

        return BaseController.extend("com.sap.supplierportal.controller.View2", {
            onInit: function () {
                let qDropdown = [
                    {
                        "question": "Are there any personal relationships between key personnel of your company or its Affiliates, and KPO Key Personnel?",
                        "response": "EDD",

                        "details": "john",


                    },
                    {
                        "question": "Are you aware of anti-bribery laws applicable to your company in the Republic of Kazakhstan?",
                        "response": "EDD",

                        "details": "john",

                    },
                    {
                        "question": "Does your company have policies to ensure compliance/ethical conduct in accordance with anti-bribery laws?",




                    },
                    {
                        "question": "Has your company’s senior management formally approved the compliance/ethical conduct policies?",



                    },
                    {
                        "question": "Does your company provide training for all employees in your organization on ethical conduct and anti-corruption?",



                    }
                ];

                let qmodel = new JSONModel(qDropdown);
                this.getView().setModel(qmodel, "qsModel");
            }
        });
    }
);
