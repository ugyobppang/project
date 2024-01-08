import { drawMovieList } from "./movie.js";
import { searchMovie } from "./search.js";

drawMovieList();

const searchInput = document.querySelector("#search-input");
searchInput.focus();

const searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchMovie(searchInput.value);
});
