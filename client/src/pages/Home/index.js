import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

import './styles.css';

function Home() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <h1>Carregando produtos...</h1>;

  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div className="products-content">
      <header>
        <strong>{data.products.length || 0} produto(s)</strong>
        <Link to="/new">Novo</Link>
      </header>
      <ul>
        {data.products && data.products.map(product => (
          <li key={product.id}>
            <img src={product.thumb_url} alt={product.name}/>
            <section>
              <strong>{product.name}</strong>
              <span>
                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.value)}
              </span>
              <p>{product.description}</p>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}

const GET_PRODUCTS = gql`
  query {
    products {
      id,
      name,
      value,
      description,
      thumb_url,
    }
  }
`;

export default Home;