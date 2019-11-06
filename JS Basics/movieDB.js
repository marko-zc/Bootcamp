var movies = [
    {
        title: "Scott Pilgrim vs the World",
        hasWatched: true,
        rating: 4
    },
    {
        title: "Forrest Gump",
        hasWatched: false,
        rating: 5
    },
    {
        title: "Spider-Man: Far From Home",
        hasWatched: true,
        rating: 3.5
    },
    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    }
]

movies.forEach(function(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title +"\" - ";
    result += movie.rating + " stars";
    console.log(result)
})