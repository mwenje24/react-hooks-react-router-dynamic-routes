import React from "react";
// import the custom `useRouteMatch` hook from React Router
import { Route, useRouteMatch } from "react-router-dom";
import MovieShow from "./MovieShow";
import MoviesList from "./MoviesList";


function MoviesPage({ movies }) {

  const match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movieId`}>
        <MovieShow />
      </Route>
    </div>
  );
}
export default MoviesPage;
