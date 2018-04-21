// $(function () {
//
//     var $courseData = $('#par1');
//     $.ajax({
//         type: 'GET',
//         url: 'https://uxcobra.com/golfapi/course11819.txt',
//         success: function (getCourses) {
//             // console.log('success', data)
//             $.each(getCourses, function (i, teeBoxes) {
//                 $courseData.append('<div> 1: '+ holes.teeBoxes.par +'</div>');
//             });
//         }
//
//     });
//
// });


// $.ajax(
//     'https://uxcobra.com/golfapi/course11819.txt',
//     {
//         method: "GET",
//         success: function (data, textStatus, jqXHR)
//         {
//
//         }
//
//     }
// );
var btn = document.getElementById("btn")
var makeParDiv = document.getElementById("par1");

btn.addEventListener("click", function () {
    var loadCourseData = new XMLHttpRequest();
    loadCourseData.open('GET', 'https://uxcobra.com/golfapi/course11819.txt');

    loadCourseData.onload = function(){

        var ourData = JSON.parse(loadCourseData.responseText);
        console.log(ourData.data.holes);
        renderHTML(ourData);


    };
loadCourseData.send();

});

function renderHTML(data) {
    var htmlString = "";
    var holes = data.data.holes;

    for (i = 0; i < holes.length; i++){
        var eId = "par" + holes[i].hole;
        var parInserter = document.getElementById(eId);
        parInserter.append(holes[i].teeBoxes[0].par)

    }
}
