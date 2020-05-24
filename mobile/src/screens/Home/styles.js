import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9F9',
  },

  header: {
    paddingHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
  },

  products_count: {
    fontSize: 14,
  },

  product_list: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
  },

  list_item: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginVertical: 4,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#AAAAAA44'
  },

  list_item_image_container: {
    justifyContent: 'center',
  },

  list_item_image: {
    resizeMode: 'cover',
    width: 100,
    height: 100,
    marginRight: 10,
  },

  list_item_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },

  list_item_value: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 5,
  },

  list_item_description: {
    fontSize: 14,
    color: '#555555',
  },
});