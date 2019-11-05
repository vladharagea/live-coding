$(document).ready(function(){
    console.log("document is ready: Hello world");

    // let headerObjects =document.getElementsByTagName('h3');
    // for(let i=0; i<headerObjects.length; i++)
    // {
    //     headerObjects[i].classList.add('red-color');
    // }
    $('h3').addClass('red-color');
    $('#firstpara').addClass('blue-color');
    $('.para-class').addClass('green-color');

    //1. make all list items red who has the name "theking"
    $("li[name='theking']").addClass('red-color');

    //2. Make all list items underline who has class company and  class ceo
    $('.company,.ceo').addClass('underline');
    //3. Give all li items a border class who are direct children of the element with id "companies"
    $('#companies > li').addClass('border');
    //$('#companies').children().addClass('border');

    //4. highlight (highlight1 or highlight2) all list items who has class company. if they have an index greater than 0
    $('li.company:gt(0)').addClass('highlight1');
    //$('li.company:not(:first)').addClass('highlight1');
    //$('li.company').slice(1).addClass('highlight1');

    //5. Make blue all list items which are children of ULs of class flagship 
    $('ul.flagship li').addClass('blue-color');
 





});

