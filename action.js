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


loadCourseData

var loadCourseData = new XMLHttpRequest();
loadCourseData.open('GET', 'https://uxcobra.com/golfapi/course11819.txt');

loadCourseData.onload = function(){

var ourData = JSON.parse(loadCourseData.responseText);
    console.log(ourData.data.holes);



};
loadCourseData.send();

// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//
// ourRequest.onload = function(){
//     var ourData = JSON.parse(ourRequest.responseText);
//
//     console.log(ourData[0].name);
//
// };
// ourRequest.send();