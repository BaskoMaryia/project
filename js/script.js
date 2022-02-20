"use strict";

let lastFilm;
let lastFilmRating;
let numberOfFilms;
do {
    numberOfFilms = +prompt("How many films did you watch?", "");
}
while (lastFilm == null || lastFilm.length == 0 || lastFilm.length > 50 );

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let i;
for (i = 1; i <= numberOfFilms; i++) {
    do {
        lastFilm = prompt("Last watched film?", "");
    }
    while (lastFilm == null || lastFilm.length == 0 || lastFilm.length > 50 );

    do {
        lastFilmRating = +prompt("Raiting?", "");
    }
    while (lastFilmRating == 0 || lastFilmRating.length == 0);

    personalMovieDB.movies[lastFilm] = lastFilmRating;
}

if (personalMovieDB.count < 10) {
    alert("So small count of watched films");
} else if (personalMovieDB.count <= 30) {
    alert("You a classical watcher");
} else if (personalMovieDB.count > 30) {
    alert("You are films lover");
} else {
    alert("Something went wrong");
}

console.log(personalMovieDB);