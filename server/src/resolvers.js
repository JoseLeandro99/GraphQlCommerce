import Product from './schemas/Product';

export default {
  Query: {
    products: () => Product.find(),
    product: (_, { id }) => Product.findById(id),
  },

  Mutation: {
    addProduct: (_, { name, value, description, thumb_url }) => Product.create({
      name,
      value,
      description,
      thumb_url,
    }),
  }
}