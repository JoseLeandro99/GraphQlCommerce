import React, { useState } from 'react'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import history from '../../services/history';

import './styles.css';

function NewProduct() {
  const [product, setProduct] = useState('');
  const [value, setValue] = useState(0);
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const [addProduct] = useMutation(ADD_PRODUCT);

  function handleAddProduct(e) {
    e.preventDefault();
    addProduct({ variables:
        { name: product, value: Number(value), thumb_url: image, description }
    });
    history.push('/');
  }

  return (
    <div className="product-form-content">
      <form  onSubmit={handleAddProduct}>
        <input
          placeholder="Produto.."
          required
          onChange={e => setProduct(e.target.value)}
        />

        <input
          type="number"
          placeholder="valor..."
          required
          onChange={e => setValue(e.target.value)}
        />

        <input
          placeholder="Url da imagem..."
          required
          onChange={e => setImage(e.target.value)}
        />

        <textarea
          rows="6"
          placeholder="Descrição..."
          required
          onChange={e => setDescription(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $value: Float!, $description: String!, $thumb_url: String!) {
    addProduct (
      name: $name,
      value: $value,
      description: $description,
      thumb_url: $thumb_url,
    ) {
      id,
    }
  }
`;

export default NewProduct;