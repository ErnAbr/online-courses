"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const product_model_1 = require("./product.model");
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
console.log(lodash_1.default.shuffle([1, 2, 3]));
const products = [
    { title: "A Carpet", price: 29.99 },
    { title: "A Book", price: 10.99 },
];
const loadedProducts = (0, class_transformer_1.plainToInstance)(product_model_1.Product, products);
for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
const newProd = new product_model_1.Product("", -5.99);
(0, class_validator_1.validate)(newProd).then((errors) => {
    if (errors.length > 0) {
        console.log("validation failed");
        console.log(errors);
    }
    else {
        console.log(newProd.getInformation());
    }
});
//# sourceMappingURL=app.js.map