import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'users', url: 'http://localhost:4001' },
      { name: 'books', url: 'http://localhost:4002' }
    ],
  }),
});

const server = new ApolloServer({
    gateway,
});

server.listen(4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});