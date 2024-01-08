const $cardArea = document.querySelector('#card-area');
const $searchInput = document.querySelector('#search')
const $searchBtn = document.querySelector('#search-btn');



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2M5YThkOTRhNWY3MzNmMWU5NTJkNzQ2NGExYTlkMyIsInN1YiI6IjY1OTY2OGY0YTY5OGNmNGQ4NDQzYTAwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_xsFv8iCSCyxZRIrMOCZbZl0odGjIJfwhySjL52vY4'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    const movieList = response['results'];

    movieList.forEach(movie => {
      const poster = movie['poster_path'];
      const title = movie['title'];
      const overview = movie['overview'];
      const rating = movie['vote_average'];

      let temp_html = `
        <div id="card" class="col">
          <div class="card h-100">
            <img src="https://image.tmdb.org/t/p/w500/${poster}" class="card-img-top" alt="${title}">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${overview}</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Rating: ${rating}</small>
            </div>
          </div>
        </div>
      `;
      $cardArea.innerHTML += temp_html;
    });
  })
  .catch(err => console.error(err));