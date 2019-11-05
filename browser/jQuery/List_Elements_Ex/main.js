$(document).ready(function () {
    $(".addBtn").on('click', function () {
        let input = $('input').val();

        $(`<li>${input}<span class = 'close'>&times;</span></li>`).appendTo('#myUl');

        $('input').val('');
    });
    $('#myUl').on('click', 'span.close', function () {
        $(this).parent().remove();
    });
    $('#myUl').on('click', 'li', function () {
        $(this).toggleClass('checked');
    });

    $('input').keypress(event => {
        let key = event.which;
        if (key == 13) $('.addBtn').click();
    });
});