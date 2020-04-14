
var EventHandler = (function(){

    function init(){
        console.log("Eventhandler ready")
        $("#center-a").click(onClickCenter);
        $("#left-a").click(onClickLeft);
        $("#right-a").click(onClickRight);
    }
    
    function onClickCenter(){

        var h = $(".header-a").css("background-color", "#f5dff3");
        var h = $("#center-a").css("background-color", "#f2a5ea");
        // p.hide(1500).show(1500);
        // p.queue(function() {
        //   p.css("background-color", "#f2a5ea");
        // });

        var d = $(".info").css("display", "none");
        var d = $("#about-us").css("display","block");

    }

    function onClickLeft(){
        var h = $(".header-a").css("background-color", "#f5dff3");
        var h = $("#left-a").css("background-color", "#f2a5ea");
        var d = $(".info").css("display", "none");
        var d = $("#main-info").css("display","block");
    }

    function onClickRight(){
        var h = $(".header-a").css("background-color", "#f5dff3");
        var h = $("#right-a").css("background-color", "#f2a5ea");
        var d = $(".info").css("display", "none");
        var d = $("#challenges").css("display","block");
    }



return {init}

}());


window.addEventListener("DOMContentLoaded", function () {
        EventHandler.init()
});