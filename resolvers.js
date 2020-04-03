let movies = [
    {
      id: '1',
      content: 'One day I will find the right words, and they will be simple.',
      title: 'Dharma Bums',
      author: 'Jack Kerouac'
    },
    {
      id: '2',
      content: 'In the limits of a situation there is humor, there is grace, and everything else.',
      title: 'Arbitrary Stupid Goal',
      author: 'Tamara Shopsin'
    }
]

const resolvers = {
    Query: {
      movies: () => movies,
      movie: (parent, args) => {
        return movies.find(movie => movie.id === args.id);
      }
    },

    Mutation: {
      addMovie: (parent, args) => {
        const movie = {
          id : String(movies.length + 1),
          content: args.content,
          title: args.title,
          author: args.author
        }
        movies.push(movie);
        return movie;
      },
      updateMovie: (parent, args) =>{
        const index = movies.findIndex((m)=> m.id === args.id)
        const movie = {
          id : args.id,
          content: movies[index].content,
          title: args.title,
          author: movies[index].author
        }

        movies[index] = movie;
        return movie;
      },
      deleteMovie: (parent, args) => {
          const deleteMovie = movies.find(m => m.id === args.id);

          movies = movies.filter(m => m.id !== args.id);
          return deleteMovie;
      }
    }
      
}

module.exports = resolvers;