"use strict";

const numberOfFilms = +prompt("How many films did you watch?","");

let personalMovieDB = {
count:numberOfFilms,
movies:{},
actors:{},
genres:[],
privat:false
};

const lastFilm = prompt("Last watched film?","");
const rating = +prompt("Raiting?","");

personalMovieDB.movies ={
    [lastFilm]:rating
};

console.log(personalMovieDB);
