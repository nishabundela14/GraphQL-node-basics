const {gql}= require("apollo-server");

const typeDefs = gql`
   type Movie {
      id: ID!
      content: String!
      title: String
      author: String
   }

   type Query {
       movies: [Movie]!
       movie(id: ID!): Movie
   }

   type Mutation {
      addMovie(content: String!, title: String, author: String): Movie!
      updateMovie(id: ID!, title: String): Movie!
      deleteMovie(id: ID!): Movie!
   }
`;


module.exports = typeDefs;