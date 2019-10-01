var apiKey = "e61d114c9948d8d2d77e771be6615ac1";
var imgServer ="https://image.tmdb.org/t/p/w500";


let ratedShow = document.querySelector("#ratedShow");
let popularShow = document.querySelector("#popularShow");


function ratedTv() {
    $.ajax({
        url: "https://api.themoviedb.org/3/tv/top_rated?api_key="+apiKey+"&language=en-US&page=1",
        type: "GET",
        success: function(response){
            console.log(response);
            parseObjects(response.results);
        }
    });
}

function popularTv() {
    $.ajax({
        url: "https://api.themoviedb.org/3/tv/popular?api_key="+apiKey+"&language=en-US&page=1",
        type: "GET",
        success: function(response){
            console.log(response);
            parseObjects(response.results);
        }
    });
}

ratedShow.onclick = ratedTv;

popularShow.onclick = popularTv;


function parseObjects(responseArray) {

    var container = $("#mainContainer");
    container.empty();
    responseArray.forEach(function (item) {
        var img = imgServer + item.poster_path;
        var idItem = item.id;
        container.append("    <div class='card'>\n" +
            "        <img id='filmImage' src='"+img+"' class='card-img-top' alt=''>\n" +
            "        <div class='card-body'>\n" +
            "            <h3 id='filmTitle' class='card-title'>"+ item.name+"</h3>\n" +
            "            <p id='filmDescription' class='card-text'>"+ item.overview+"</p>\n" +
            "            <a href='#' class='btn btn-primary' id='"+idItem+"'>view</a>\n" +
            "        </div>\n" +
            "    </div>\n"+
            "    <hr>\n");
    })
}


