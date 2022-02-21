"use strict";

let lastFilm;
let lastFilmRating;
let numberOfFilms;

function start() {

    do {
        numberOfFilms = +prompt("How many films did you watch?", "");
    }
    while (numberOfFilms == 0 || isNaN(numberOfFilms));

}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 1; i <= 2; i++) {
        do {
            lastFilm = prompt("One from last watched film?", "");
        }
        while (lastFilm == null || lastFilm.length == 0 || lastFilm.length > 50);

        do {
            lastFilmRating = +prompt("Raiting?", "");
        }
        while (lastFilmRating == 0 || isNaN(lastFilmRating));

        personalMovieDB.movies[lastFilm] = lastFilmRating;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("So small count of watched films");
    } else if (personalMovieDB.count <= 30) {
        alert("You a classical watcher");
    } else if (personalMovieDB.count > 30) {
        alert("You are films lover");
    } else {
        alert("Something went wrong");
    }
}

detectPersonalLevel();

function writeYourGenres() {

    for (let i = 1; i < 4; i++) {
        do {
            personalMovieDB.genres[i - 1] = prompt(`Favorite movie genre by number ${i} ?`, "");
        }
        while (personalMovieDB.genres[i - 1] == null || personalMovieDB.genres[i - 1].length == 0 ||
            personalMovieDB.genres[i - 1].length > 50);
    }
}

writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();