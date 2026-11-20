import Handlebars from "handlebars";

import productsUsingItTemplate from "../../../source/templates/00-Intro/products-using-it/products-using-it.hbs?raw";

const renderProductsUsingIt = Handlebars.compile(productsUsingItTemplate);

export default {
  title: "Products Using It",
};

export const ProductsUsingIt = {
  name: "Products Using It",
  render: (args) => renderProductsUsingIt(args),
};
