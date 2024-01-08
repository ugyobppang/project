export const drawMovieList = async () => {
  const movies = await fetchMovieData();
  console.log(movies);

  const cardArea = document.querySelector("#card-area");
  cardArea.innerHTML = movies
    .map(
      (el) => `
        <li class="card-list" id="${el.id}">
          <img src="https://image.tmdb.org/t/p/w500${el.poster_path}" alt="${el.title}" />
          <h3 class="movie-title">${el.title}</h3>
          <p class="overview">${el.overview}</p>
          <p class="rating">Rating: ${el.vote_average}</p>
        </li>
      `
    )
    .join("");

  cardArea.addEventListener("click", (e) => {
    if (e.target === cardArea) {
      return;
    }

    if (e.target.matches(".card-list")) {
      alert(`movie_id: ${e.target.id}`);
    } else {
      alert(`movie_id: ${e.target.parentNode.id}`);
    }
  });
};

async function fetchMovieData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2M5YThkOTRhNWY3MzNmMWU5NTJkNzQ2NGExYTlkMyIsInN1YiI6IjY1OTY2OGY0YTY5OGNmNGQ4NDQzYTAwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_xsFv8iCSCyxZRIrMOCZbZl0odGjIJfwhySjL52vY4"
    }
  };
  const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options);
  const data = await response.json();

  return data.results;
}
