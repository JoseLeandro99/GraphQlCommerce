import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  thumb_url: {
    type: String,
    required: true,
  },

  value: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
  }
});

export default model('Product', ProductSchema);