// Work on your tasks here
$(document).ready(function () {
    let initialText;
    $('.submit').on('click', function () {
        $('.modal').show();
    });

    $('.modal').on('click', '.modal-close', function () {
        $('.modal').hide();
    });
    $('.teapot').on('click', function () {
        $('.teapot').toggleClass('teapot-rotate');
    });

    $(".tea-desc")
        .mouseover(function () {
            let randomNum = Math.ceil(Math.random() * 3);
            let phrase = randomNum === 1 ? 'Great for a cold day' : randomNum === 2 ? 'Rich in flavours' : 'Soothing and tasty';
            //'event.target' is the same as 'this'
            initialText = $(this).text();
            $(this).text(phrase);
        })
        .mouseleave(function () {
            $(this).text(initialText);
            initialText = '';
        });

});