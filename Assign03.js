(async  function () {
   const response = await fetch("./data.json");
   const data = await response.json();

   .then(data => {
     // Store movie data in an array
     const movies = data;
 
     // Function to filter movies based on user input
     const filterMovies = () => {
       const genre = document.getElementById('genre').value;
       const year = document.getElementById('year').value;
       const language = document.getElementById('language').value;
       const rating = document.getElementById('rating').value;
     
       document.getElementById('moviesContainer').innerHTML = '';
 
       // Filter movies based on user input
       const filteredMovies = movies.filter(movie => {
         return (genre === '' || movie.genre === genre) &&
                (year === '' || movie.year === year) &&
                (rating === '' || movie.rating >= rating);
       });
 
       filteredMovies.forEach(movie => {
         const movieCard = document.createElement('div');
         movieCard.classList.add('movieCard');
         movieCard.innerHTML = `
           <h2>${movie.title}</h2>
           <img src="${movie.image}">
           <p>Genre: ${movie.genre}</p>
           <p>Year: ${movie.year}</p>
           <p>Rating: ${movie.rating}</p>}
       }})();