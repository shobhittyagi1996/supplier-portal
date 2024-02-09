sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.sap.supplierportal.controller.View1", {
        onInit: function () {
            var oModel = new JSONModel({
                selectedKey: "page1"

            });
            let model = new JSONModel({
                "items": [
                    {
                        "fileName": "Company Registration Documents.doc",
                        "mediaType": "application/msword",
                        "url": "demokit/sample/UploadCollection/LinkedDocuments/Business Plan Agenda.doc",
                        "uploadState": "Complete",
                        "markers": [
                            {
                                "type": "Draft"
                            },
                            {
                                "type": "Favorite"
                            },
                            {
                                "type": "Flagged"
                            },
                            {
                                "type": "Locked"
                            },
                            {
                                "type": "Unsaved"
                            }
                        ],
                        "statuses": [
                            {
                                "title": "Uploaded By",
                                "text": "Jane Burns",
                                "active": true
                            },
                            {
                                "title": "Uploaded On",
                                "text": "2014-07-28",
                                "active": false
                            },
                            {
                                "title": "File Size",
                                "text": "25",
                                "active": false
                            },
                            {
                                "title": "Document Info Record",
                                "text": "SSP/101010101",
                                "state": "Information"
                            }
                        ],
                        "selected": false
                    },
                    {
                        "fileName": "Certificate of VAT registration.doc",
                        "mediaType": "application/msword",


                        "uploadState": "Complete",
                        "statuses": [
                            {
                                "title": "Uploaded By",
                                "text": "James",
                                "active": true
                            },
                            {
                                "title": "Uploaded On",
                                "text": "2014-07-28",
                                "active": false
                            }
                        ]
                    },
                    {
                        "fileName": "Tax registration certificate.doc",
                        "mediaType": "application/msword",


                        "uploadState": "Complete",
                        "statuses": [
                            {
                                "title": "Uploaded By",
                                "text": "Danial",
                                "active": true
                            },
                            {
                                "title": "Uploaded On",
                                "text": "2014-07-28",
                                "active": false
                            }
                        ]
                    },
                    {
                        "fileName": "State registration certificate of legal entity.png",
                        "mediaType": "application/png",


                        "uploadState": "Complete",
                        "statuses": [
                            {
                                "title": "Uploaded By",
                                "text": "Jones",
                                "active": true
                            },
                            {
                                "title": "Uploaded On",
                                "text": "2014-07-28",
                                "active": false
                            }
                        ]
                    }
                
                    
                ]
            });
            let myModel = new JSONModel({
                "contracts": [
                    {
                        "ContractNo": "98712",
                        "ContractDescription": "Supplier agreement for raw materials",
                        "Status": "Pending",
                        "DeliveryDate": "07-Feb-2024"                   },
                        {
                            "ContractNo": "91235",
                            "ContractDescription": "Service contract for IT support",
                            "Status": "Approved",
                            "DeliveryDate": "09-Feb-2024"                   }
                    
                ]
            });

            this.getView().setModel(oModel, "aaa");
            this.getView().setModel(model);
            this.getView().setModel(myModel, "myModel");




        },
        onItemSelect: function (oEvent) {
            debugger
            var oItem = oEvent.getParameter("item");
            this.byId("pageContainer").to(this.getView().createId(oItem.getKey()));
        },
        onpress: function () {
            this.getView().getModel().setProperty("/selectedKey", "page2");
            this.byId("pageContainer").to(this.getView().createId("page2"));

        }
    });
});
