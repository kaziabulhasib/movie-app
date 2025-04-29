export const TMDB_CONFIG={
    BASE_URL:"https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers : {
        accept :"application/json",
        authorization:`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchPopularMovies = async ({ query }: { query: string }) => {
    const endpoint = `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: "GET",
        headers: TMDB_CONFIG.headers
    });

    if (!response.ok) {
        // @ts-expect-error
        throw new Error("Failed to fetch movies",response.statusText);
     const data = await response.json();

     return data.results;
    }
  
};



// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2U0MjFiMWI5YjhjMzkxOTM2M2RhZGQ1N2E4NDhjMyIsIm5iZiI6MTc0NTkwMjI3My41Niwic3ViIjoiNjgxMDVhYzExNjM1ZDI5MThjODE3NjAyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.4kRvJfB94yierdCuksyuI1JkMAwjaSQdxWiyv2jdBvA'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));