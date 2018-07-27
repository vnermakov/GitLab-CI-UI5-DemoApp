/* global sap:true */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("be.wl.DemoMulitLabels.controller.View1", {

		onInit: function() {

			// create JSON model instance
			var oModel = new JSONModel();

			// JSON sample data
			var oData = {
				labels: {
					d0: [{
						value: "test"
					}],
					d1: [{
						value: "test1"
					}, {
						value: "test2"
					}],
					d2: [{
						value: "test1"
					}, {
						value: "test2"
					}],
					d3: [{
						value: "test1"
					}, {
						value: "test2"
					}]
				},
				"catalog": {
					"clothing": {
						"categories": [{
							"name": "Women",
							"categories": [{
								"name": "Clothing",
								"categories": [{
									"name": "Dresses",
									"categories": [{
										"name": "Casual Red Dress",
										"amount": 16.99,
										"currency": "EUR",
										"size": "S"
									}, {
										"name": "Short Black Dress",
										"amount": 47.99,
										"currency": "EUR",
										"size": "M"
									}, {
										"name": "Long Blue Dinner Dress",
										"amount": 103.99,
										"currency": "USD",
										"size": "L"
									}]
								}, {
									"name": "Tops",
									"categories": [{
										"name": "Printed Shirt",
										"amount": 24.99,
										"currency": "USD",
										"size": "M"
									}, {
										"name": "Tank Top",
										"amount": 14.99,
										"currency": "USD",
										"size": "S"
									}]
								}, {
									"name": "Pants",
									"categories": [{
										"name": "Red Pant",
										"amount": 32.99,
										"currency": "USD",
										"size": "M"
									}, {
										"name": "Skinny Jeans",
										"amount": 44.99,
										"currency": "USD",
										"size": "S"
									}, {
										"name": "Black Jeans",
										"amount": 99.99,
										"currency": "USD",
										"size": "XS"
									}, {
										"name": "Relaxed Fit Jeans",
										"amount": 56.99,
										"currency": "USD",
										"size": "L"
									}]
								}, {
									"name": "Skirts",
									"categories": [{
										"name": "Striped Skirt",
										"amount": 24.99,
										"currency": "USD",
										"size": "M"
									}, {
										"name": "Black Skirt",
										"amount": 44.99,
										"currency": "USD",
										"size": "S"
									}]
								}]
							}, {
								"name": "Jewelry",
								"categories": [{
									"name": "Necklace",
									"amount": 16.99,
									"currency": "USD"
								}, {
									"name": "Bracelet",
									"amount": 47.99,
									"currency": "USD"
								}, {
									"name": "Gold Ring",
									"amount": 399.99,
									"currency": "USD"
								}]
							}, {
								"name": "Handbags",
								"categories": [{
									"name": "Little Black Bag",
									"amount": 16.99,
									"currency": "USD",
									"size": "S"
								}, {
									"name": "Grey Shopper",
									"amount": 47.99,
									"currency": "USD",
									"size": "M"
								}]
							}, {
								"name": "Shoes",
								"categories": [{
									"name": "Pumps",
									"amount": 89.99,
									"currency": "USD"
								}, {
									"name": "Sport Shoes",
									"amount": 47.99,
									"currency": "USD"
								}, {
									"name": "Boots",
									"amount": 103.99,
									"currency": "USD"
								}]
							}]
						}, {
							"name": "Men",
							"categories": [{
								"name": "Clothing",
								"categories": [{
									"name": "Shirts",
									"categories": [{
										"name": "Black T-shirt",
										"amount": 9.99,
										"currency": "USD",
										"size": "XL"
									}, {
										"name": "Polo T-shirt",
										"amount": 47.99,
										"currency": "USD",
										"size": "M"
									}, {
										"name": "White Shirt",
										"amount": 103.99,
										"currency": "USD",
										"size": "L"
									}]
								}, {
									"name": "Pants",
									"categories": [{
										"name": "Blue Jeans",
										"amount": 78.99,
										"currency": "USD",
										"size": "M"
									}, {
										"name": "Stretch Pant",
										"amount": 54.99,
										"currency": "USD",
										"size": "S"
									}]
								}, {
									"name": "Shorts",
									"categories": [{
										"name": "Trouser Short",
										"amount": 62.99,
										"currency": "USD",
										"size": "M"
									}, {
										"name": "Slim Short",
										"amount": 44.99,
										"currency": "USD",
										"size": "S"
									}]
								}]
							}, {
								"name": "Accessories",
								"categories": [{
									"name": "Tie",
									"amount": 36.99,
									"currency": "USD"
								}, {
									"name": "Wallet",
									"amount": 47.99,
									"currency": "USD"
								}, {
									"name": "Sunglasses",
									"amount": 199.99,
									"currency": "USD"
								}]
							}, {
								"name": "Shoes",
								"categories": [{
									"name": "Fashion Sneaker",
									"amount": 89.99,
									"currency": "USD"
								}, {
									"name": "Sport Shoe",
									"amount": 47.99,
									"currency": "USD"
								}, {
									"name": "Boots",
									"amount": 103.99,
									"currency": "USD"
								}]
							}]
						}, {
							"name": "Girls",
							"categories": [{
								"name": "Clothing",
								"categories": [{
									"name": "Shirts",
									"categories": [{
										"name": "Red T-shirt",
										"amount": 16.99,
										"currency": "USD",
										"size": "S"
									}, {
										"name": "Tunic Top",
										"amount": 47.99,
										"currency": "USD",
										"size": "M"
									}, {
										"name": "Fuzzy Sweater",
										"amount": 103.99,
										"currency": "USD",
										"size": "L"
									}]
								}, {
									"name": "Pants",
									"categories": [{
										"name": "Blue Jeans",
										"amount": 24.99,
										"currency": "USD",
										"size": "M"
									}, {
										"name": "Red Pant",
										"amount": 54.99,
										"currency": "USD",
										"size": "S"
									}]
								}, {
									"name": "Shorts",
									"categories": [{
										"name": "Jeans Short",
										"amount": 32.99,
										"currency": "USD",
										"size": "M"
									}, {
										"name": "Sport Short",
										"amount": 14.99,
										"currency": "USD",
										"size": "S"
									}]
								}]
							}, {
								"name": "Accessories",
								"categories": [{
									"name": "Necklace",
									"amount": 26.99,
									"currency": "USD"
								}, {
									"name": "Gloves",
									"amount": 7.99,
									"currency": "USD"
								}, {
									"name": "Beanie",
									"amount": 12.99,
									"currency": "USD"
								}]
							}, {
								"name": "Shoes",
								"categories": [{
									"name": "Sport Shoes",
									"amount": 39.99,
									"currency": "USD"
								}, {
									"name": "Boots",
									"amount": 87.99,
									"currency": "USD"
								}, {
									"name": "Sandals",
									"amount": 63.99,
									"currency": "USD"
								}]
							}]
						}, {
							"name": "Boys",
							"categories": [{
								"name": "Clothing",
								"categories": [{
									"name": "Shirts",
									"categories": [{
										"name": "Black T-shirt with Print",
										"amount": 16.99,
										"currency": "USD",
										"size": "S"
									}, {
										"name": "Blue Shirt",
										"amount": 47.99,
										"currency": "USD",
										"size": "M"
									}, {
										"name": "Yellow Sweater",
										"amount": 63.99,
										"currency": "USD",
										"size": "L"
									}]
								}, {
									"name": "Pants",
									"categories": [{
										"name": "Blue Jeans",
										"amount": 44.99,
										"currency": "USD",
										"size": "M"
									}, {
										"name": "Brown Pant",
										"amount": 89.99,
										"currency": "USD",
										"size": "S"
									}]
								}, {
									"name": "Shorts",
									"categories": [{
										"name": "Sport Short",
										"amount": 32.99,
										"currency": "USD",
										"size": "M"
									}, {
										"name": "Jeans Short",
										"amount": 99.99,
										"currency": "USD",
										"size": "XS"
									}, {
										"name": "Black Short",
										"amount": 56.99,
										"currency": "USD",
										"size": "L"
									}]
								}]
							}, {
								"name": "Accessories",
								"categories": [{
									"name": "Sunglasses",
									"amount": 36.99,
									"currency": "USD"
								}, {
									"name": "Beanie",
									"amount": 17.99,
									"currency": "USD"
								}, {
									"name": "Scarf",
									"amount": 15.99,
									"currency": "USD"
								}]
							}, {
								"name": "Shoes",
								"categories": [{
									"name": "Sneaker",
									"amount": 89.99,
									"currency": "USD"
								}, {
									"name": "Sport Shoe",
									"amount": 47.99,
									"currency": "USD"
								}, {
									"name": "Boots",
									"amount": 103.99,
									"currency": "USD"
								}]
							}]
						}]
					}

				},
				"sizes": [{
					"key": "XS",
					"value": "Extra Small"
				}, {
					"key": "S",
					"value": "Small"
				}, {
					"key": "M",
					"value": "Medium"
				}, {
					"key": "L",
					"value": "Large"
				}]
			};

			// set the data for the model
			oModel.setData(oData);
			var oView = this.getView();
			// set the model to the core
			oView.setModel(oModel);

			// oView.byId("multiheader").setHeaderSpan([3,2,1]);
		},
		onAddLabel: function() {
			var oModel = new JSONModel();
			var oData = {
				labels: {
					d0: [{
						value: ""
					}],
					d1: [{
						value: "test1"
					}, {
						value: "test2"
					}],
					d2: [{
						value: "test1"
					}, {
						value: "test2"
					}],
					d3: [{
						value: "test1"
					}, {
						value: "test2"
					}]
				},
				modelData: [{
					supplier: "Titanium",
					street: "401 23rd St",
					city: "Port Angeles",
					phone: "5682-121-828"
				}, {
					supplier: "Technocom",
					street: "51 39th St",
					city: "Smallfield",
					phone: "2212-853-789"
				}, {
					supplier: "Red Point Stores",
					street: "451 55th St",
					city: "Meridian",
					phone: "2234-245-898"
				}, {
					supplier: "Technocom",
					street: "40 21st St",
					city: "Bethesda",
					phone: "5512-125-643"
				}, {
					supplier: "Very Best Screens",
					street: "123 72nd St",
					city: "McLean",
					phone: "5412-543-765"
				}]
			};

			// set the data for the model
			oModel.setData(oData);
			var oView = this.getView();
			// set the model to the core
			oView.setModel(oModel);
		}

	});
});