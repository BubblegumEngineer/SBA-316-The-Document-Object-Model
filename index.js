const movies = [
  {
    Title: "Guardians of the Galaxy Vol. 2",
    Year: "2017",
    Rated: "PG-13",
    Released: "05 May 2017",
    Runtime: "136 min",
    Genre: "Comedy",
  },

  {
    Title: "Barbie",
    Year: "2023",
    Rated: "PG-13",
    Released: "21 Jul 2023",
    Runtime: "114 min",
    Genre: "Romance",
  },

  {
    Title: "Sonic the Hedgehog 3",
    Year: "2024",
    Rated: "PG",
    Released: "20 Dec 2024",
    Runtime: "110 min",
    Genre: "Kid",
  },
];

const menu = document.getElementById("menu");

const displayList = document.querySelector("#displayList");


// menu.addEventListener("change", handleChangeMenu );
menu.onchange = handleChangeMenu;
function handleChangeMenu(event) {
  event.preventDefault();

  displayList.innerHTML = ""; // this clears the previous selection

  console.log(event.target.value);

  let selectedMovies = movies.filter( m => m.Genre === event.target.value );

  for( movie of selectedMovies) {
    let movieListItem = document.createElement('li');
    movieListItem.innerHTML = `<h2>${movie.Title}</h2><p>${movie.Genre}</p>`;
    displayList.appendChild(movieListItem);
}


  
} // end of handler function
