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
                let sDropdown = [
                    {
                        "filename": "State registration certificate of legal entity.xls",
                        "mediaType": "sap-icon://excel-attachment",
    
                        "type": "State registration certificate of legal entity"
    
                    },
                    {
                        "filename": "Certificate of VAT registration.pdf",
                        "mediaType": "sap-icon://pdf-attachment",
    
                        "type": "Certificate of VAT registration.png"
                    },
                    {
                        "filename": "Tax registration certificate.txt",
                        "mediaType": "sap-icon://doc-attachment",
    
                        "type": "Tax registration certificate"
                    }];
                    let gmodel = new JSONModel(sDropdown);
                    this.getView().setModel(gmodel, "sModel");

                let qmodel = new JSONModel(qDropdown);
                this.getView().setModel(qmodel, "qsModel");
            },
            itemValidationCallback: function (oItemInfo) {
                const { oItem, iTotalItemsForUpload } = oItemInfo;
                var oUploadSetTableInstance = this.byId("UploadSetTable1");
                var oSelectedItems = oUploadSetTableInstance.getSelectedItems();
                var oSelectedItemForUpdate = oSelectedItems.length === 1 ? oSelectedItems[0] : null;
                if (oSelectedItemForUpdate && oSelectedItemForUpdate.getFileName() === "-" && iTotalItemsForUpload === 1) {
                    return new Promise((resolve) => {
                        if (oSelectedItemForUpdate) {
                            var oContext = oSelectedItemForUpdate.getBindingContext();
                            var data = oContext && oContext.getObject ? oContext.getObject() : {};

                            /* Demonstration use case of Setting the header field if required to be passed in API request headers to
                                    inform backend with document type captured through user input */
                            oItem.addHeaderField(new CoreItem(
                                {
                                    key: "existingDocumentID",
                                    text: data ? data.id : ""
                                }
                            ));
                        }
                        resolve(oItem);
                    });
                } else {
                    var oItemPromise = new Promise((resolve, reject) => {
                        this.oItemsProcessor.push({
                            item: oItem,
                            resolve: resolve,
                            reject: reject
                        });
                    });
                    if (iTotalItemsForUpload === 1) {
                        this.openFileUploadDialog();
                    } else if (iTotalItemsForUpload === this.oItemsProcessor.length) {
                        this.openFileUploadDialog();
                    }
                    return oItemPromise;
                }
            },
        });
    }
);
