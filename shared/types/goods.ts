interface Product {
  id: number;
  name: string;
  on_sale: boolean;
  price: number;
  count: number;
  description: {
    type: string;
    product_name: string;
    assignment: string;
    type_of_operation: string;
    base: string;
    colour: string;
    degree_of_gloss: string;
    diluent: string;
    flow: string;
    weight: string;
    src: string
  };
}
