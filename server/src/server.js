import { GraphQLServer } from 'graphql-yoga';
import { resolve } from 'path';
import mongoose from 'mongoose';

import resolvers from './resolvers';

mongoose.connect('mongodb://localhost:27017/gqlcommerce', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schemas.graphql'),
  resolvers,
});

server.start();