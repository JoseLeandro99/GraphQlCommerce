import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import tag from 'graphql-tag';

import styles from './styles';

function Home() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (error) return <Text>{error.message}</Text>;

  if (loading) return <Text>Carregando...</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.products_count}>
          {data.products.length} produto(s)
        </Text>
      </View>

      <FlatList
        style={styles.product_list}
        keyExtractor={item => String(item.id)}
        data={data.products}
        renderItem={({ item }) => (
          <View style={styles.list_item}>
            <View style={styles.list_item_image_container}>
              <Image source={{ uri: item.thumb_url }} style={styles.list_item_image}/>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.list_item_title}>{item.name}</Text>

              <Text style={styles.list_item_value}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency', currency: 'BRL'
                }).format(item.value)}
              </Text>

              <Text
                style={styles.list_item_description}
                numberOfLines={3}
              >
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const GET_PRODUCTS = tag`
  query {
    products {
      id,
      name,
      value,
      thumb_url,
      description,
    }
  }
`;

export default Home;