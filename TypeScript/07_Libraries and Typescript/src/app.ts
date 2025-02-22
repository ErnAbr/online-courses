import _ from "lodash";
import { Product } from "./product.model";
import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

// declare var GLOBAL: string;

console.log(_.shuffle([1, 2, 3]));

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("validation failed");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// const p1 = new Product("A Book", 12.99);
// console.log(p1.getInformation());
