// Место для кода.
//$(document).ready(function () {
//    setTimeout(continueExecution, 10000)
//})

//function continueExecution()
//{
//    $(".Logo").html("Hack");
//}

(function () {
    "use strict";

    jQuery(document).ready(function ($) {
        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        $('.gallery-btn a').click(function () {

            $(".gallery-btn a").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".gellery-item").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
        // jQeury smooth scroll
        $("li.smooth-scroll a").bind("click", function (event) {
            var $anchor = $(this);
            var headerH = "50";
            $("html, body")
                .stop()
                .animate({
                    scrollTop: $($anchor.attr("href"))
                        .offset()
                        .top - headerH + "px"
                }, 1200, "easeOutCirc");

            event.preventDefault();

        });
        //jquery scroll spy
        $("body").scrollspy({
            target: ".navbar-collapse",
            offset: 95
        });
        new WOW().init();
        //Pretty Photo
        /*$("a[data-gallery^='prettyPhoto']").prettyPhoto({
            social_tools: false
        });
*/
        $("#com_content").hide();

        $("#com_block").bind("click", function (event){
            var content = $("#com_content");
            content.toggle();
            $("#com_content").toggleClass("active");

            if ($("#take_content").toggleClass("active")) {
                $("#take_content").hide();
            }
            if ($("#mail_content").toggleClass("active")) {
                $("#mail_content").hide();
            }
            if ($("#e-mail_content").toggleClass("active")) {
                $("#e-mail_content").hide();
            }
            if ($("#call-button").toggleClass("active")) {
                $("#call-button").hide();
            }
        });
        $("#take_content").hide();

        $("#take_block").bind("click", function (event){
            var content = $("#take_content");
            content.toggle();
            $("#take_content").toggleClass("active");

            if ($("#com_content").toggleClass("active")) {
                $("#com_content").hide();
            }
            if ($("#mail_content").toggleClass("active")) {
                $("#mail_content").hide();
            }
            if ($("#e-mail_content").toggleClass("active")) {
                $("#e-mail_content").hide();
            }
            if ($("#call-button").toggleClass("active")) {
                $("#call-button").hide();
            }
        });
        $("#mail_content").hide();

        $("#mail_block").bind("click", function (event){
            var content = $("#mail_content");
            content.toggle();
            $("#mail_content").toggleClass("active");

            if ($("#com_content").toggleClass("active")) {
                $("#com_content").hide();
            }
            if ($("#take_content").toggleClass("active")) {
                $("#take_content").hide();
            }
            if ($("#e-mail_content").toggleClass("active")) {
                $("#e-mail_content").hide();
            }
            if ($("#call-button").toggleClass("active")) {
                $("#call-button").hide();
            }
        });
        $("#e-mail_content").hide();

        $("#e-mail_block").bind("click", function (event){
            var content = $("#e-mail_content");
            content.toggle();
            $("#e-mail_content").toggleClass("active");

            if ($("#com_content").toggleClass("active")) {
                $("#com_content").hide();
            }
            if ($("#take_content").toggleClass("active")) {
                $("#take_content").hide();
            }
            if ($("#mail_content").toggleClass("active")) {
                $("#mail_content").hide();
            }
            if ($("#call-button").toggleClass("active")) {
                $("#call-button").hide();
            }
        });
        $(".button-content").hide();

        $(".button-icon").bind("click", function (event){
            var content = $(".button-content");
            content.toggle();
            $(".button-content").toggleClass("active");
            if ($("#com_content").toggleClass("active")) {
                $("#com_content").hide();
            }
            if ($("#take_content").toggleClass("active")) {
                $("#take_content").hide();
            }
            if ($("#mail_content").toggleClass("active")) {
                $("#mail_content").hide();
            }
            if ($("#e-mail_content").toggleClass("active")) {
                $("#e-mail_content").hide();
            }
        });
    });
    //<?php
    //mail("nobody@example.com", "the subject", $message,
    // "From: webmaster@ example.com \r\n"
    //."X-Mailer: PHP/" . phpversion());
    //?>
/*
    jQuery(window).load(function () {


    });
*/

}(jQuery));
