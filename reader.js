//The code that is fired upon page load
//to check your plugin js is working uncomment the next line.
//$("body").append('Test');

var $div = $('<div />').appendTo('body');
$div.attr('id', 'reader');
$("#reader").css({
    "display":"none",
    "background":"blue",
    "position": "absolute",
    "float": "left"
});

$(document).bind('mousemove', function(e){
                 
    var w = 300;
    var wS = w + "px";
                 
    var h = 100;
    var hS = h + "px";
                 
    $('#reader').css({
        left:   e.pageX - (w/2),
        top:    e.pageY - (h+50),
        width:  wS,
        height: hS
    });
                 
    $("#reader").css({"display":"block"});
});

function myFunction() {
    alert("I am an alert box!");
}