$(function () {

    var $courseData = $('#par1');
    $.ajax({
        type: 'GET',
        url: 'https://uxcobra.com/golfapi/course11819.txt',
        success: function (getCourses) {
            // console.log('success', data)
            $.each(getCourses, function (i, teeBoxes) {
                $courseData.append('<div> 1: '+ holes.teeBoxes.par +'</div>');
            });
        }

    });
    
});


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


// loadCourseData