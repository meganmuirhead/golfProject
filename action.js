var courseData;


function loadPar() {
    var loadCourseData = new XMLHttpRequest();
    loadCourseData.open('GET', 'https://uxcobra.com/golfapi/course11819.txt');

    loadCourseData.onload = function () {

        var ourData = JSON.parse(loadCourseData.responseText);
        console.log(ourData.data.holes);
        courseData = ourData;
        renderPar(ourData);

    };
    if (!courseData) {
        loadCourseData.send();
    }
    else {
        renderPar(courseData);
    }

};

function handi() {
    var loadCourseData = new XMLHttpRequest();
    loadCourseData.open('GET', 'https://uxcobra.com/golfapi/course11819.txt');

    loadCourseData.onload = function () {

        var ourData = JSON.parse(loadCourseData.responseText);
        console.log(ourData.data.holes);
        courseData = ourData;
        renderHand(ourData);


    };
    if (!courseData) {
        loadCourseData.send();
    }
    else {
        renderHand(courseData);
    }

};

function renderPar(data) {
    var htmlString = "";
    var holes = data.data.holes;

    var totalOut = 0;
    var totalIn = 0;

    for (i = 0; i < holes.length; i++) {

        var eId = "par" + holes[i].hole;
        var parInserter = document.getElementById(eId);
        $(parInserter).empty();
        var par = holes[i].teeBoxes[0].par;
        parInserter.append(par);
        htmlString += holes;
        if (holes[i].hole < 10) {
            totalOut += parseInt(par);
        }
        else {
            totalIn += parseInt(par);
        }
    }
    var total = totalIn + totalOut;
    $('#out1').empty();
    $('#out1').append(totalOut);
    $('#in1').empty();
    $('#in1').append(totalIn);
    $('#parTotal').empty();
    $('#parTotal').append(total);
}



function renderYardage() {
    var holes = courseData.data.holes;
    var total = 0;
    var teeBoxName = $('#yf').val();

    for (i = 0; i < holes.length; i++) {
        var teeBoxes = holes[i].teeBoxes;
        var teeBox = teeBoxes.filter(function(e){
            return e.teeType === teeBoxName;
        })[0];

        var cellID = '#yard' + holes[i].hole;
        $(cellID).empty();
        $(cellID).append(teeBox.yards);
        total += parseInt(teeBox.yards);

    }
    $('#yardTot').empty();
    $('#yardTot').append(total);

}


function renderHand(data) {
    var htmlString = "";
    var holes = data.data.holes;


    for (i = 0; i < holes.length; i++) {
        var eId = "hand" + holes[i].hole;
        var parInserter = document.getElementById(eId);
        $(parInserter).empty();
        parInserter.append(holes[i].teeBoxes[0].hcp)
        htmlString += holes;


    }
}



function holeTotal(inputElement) {
    var gparTableDiv = $(inputElement).parent().parent();
    var theseMoFos = $(gparTableDiv).find("input");
    // console.log(theseMoFos);

    var tot = 0;
    for (var i = 1; i < theseMoFos.length; i++) {
        if (parseInt(theseMoFos[i].value))
            tot += parseInt(theseMoFos[i].value);
        // console.log(theseMoFos[i].value);
        // console.log(parseInt(theseMoFos[i].value));
    }
    console.log(tot);
    // document.getElementById('p1Tot').value = tot;
    $('#p1Tot').empty();
    $('#p1Tot').append(tot);


}

