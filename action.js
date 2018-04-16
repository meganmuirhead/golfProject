let numPlayers = 4;
let course;
loadDoc();

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            course = JSON.parse(this.responseText);
            console.log(course);
            let seltees = course.holes[0].tees;
            for(let i = 0; i< seltees.length; i++){
                $("#teeSelect").append("<option value='" + i + "'>champion </option>");
            }
            createCard();
        }
    };
    xhttp.open("GET", "holes.txt", true);
    xhttp.send();
}
function createCard() {
    for(let i = 0; i < course.holes.length; i++){
        $(".right").append("<div id='col"+ i +"' class='column'><div class='cheader'>"+ course.holes[i].name +"</div></div>");
    }
    fillCard();
}
function fillCard() {
    for(let p = 1; p <= numPlayers; p++){
        $(".left").append("<div class='playerlabel'>player " + p + "</div>");
        for(let h = 0; h < course.holes.length; h++){
            $("#col" + h).append("<input class='holeinput' id='p"+ p +"h"+ h +"'  type='text'>")
        }
    }
}