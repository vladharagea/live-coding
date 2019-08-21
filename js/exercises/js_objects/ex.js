//1. Create a variable that contains a JSON string. The properties of this JSON string should be about Joaquin Phoenix and should contain firstName, lastName, dateOFBirth, placeOfBirth, imdbRating, movies(this should be an empty array) and latestMovieTitle.

// 2. Convert that JSON to an object.

// 3. Add a function to the object above called updateImdbRating that takes as input a number and updates the object’s imdbRating.

// 4. Update his IMDB rating using the function above.

// 5. Add a new property named lastMovie. It should be an object that contains the title of the movie and the year. 
//  {title: 'Gladiator', year: 2000} .

// 6. Add a function called updateLatestMovie that takes an object as an input and edits the lastMovie and the movies array.

// 7. Update his lastMovie and movies using that function. Please avoid duplicates in the movie array. Use the below object to call updateLatestMovie.
// {title: ‘Walk the line’, year: 2005}

// 8. Add a property called oscarsWon with the value of 0.

// 9. Make a function called updateOscarsCount that updates oscarsWon by one.

// 10. Call updateOscarsCount twice.

// 11. Add a function called addMovies that will take an array of movies (please use the spread operator ...) and will add movies to the movies array.

// 12. Call the function three times with the below arrays. Make sure your movies array has no duplicates when you update it.

// movies = [
//  {title: ‘8 mm’, year: ‘1999’},
//  {title: ‘Buffalo Soldiers’, year: ‘2001’},
//  {title: ‘Quills’, year: ‘2000’}
// ]

// moreMovies = [
//  {title: ‘The Village’, year: 2004},
//  {title: ‘Buffalo Soldiers’, year: ‘2001’},
//  {title: ‘Signs’, year: 2002},
//  {title: ‘Walk the line’, year: 2005}
// ]

// someMoreMovies = [
//  {title: ‘The Master, year: 2012},
//  {title: ‘Joker’, year: 2019},
//  {title: ‘Inherent Vice’, year: 2014},
//  {title: ‘Walk the line’, year: 2005},
//  {title: ‘You Were Never Really Here’, year: 2017},
//  {title: ‘The Immigrant’, year: 2013}
// ]



// 13. 	Add a function called calculateNumberOfMovies that will calculate how many movies he made and it will add a new property to the initial object called totalMovies.

// 14. 	Everytime you call the addMovies function, which adds more movies to the object, it should update the totalMovies and it should also update the lastMovie with the latest movie based on the year of each movie.
