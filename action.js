function loadCourseData() {
    $.ajax(
        'https://uxcobra.com/golfapi/course11819.txt',
        {
            method: "GET",
            success: function (data, textStatus, jqXHR)
            {

            }

        }
    );
}