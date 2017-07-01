var ts = 200;

$( document ).ready(function() {

    var text = ["quick learning", "highly motivated", "professional developed psychological skills"]
        for ( i = 0; i < 3; i++){
            $("h5.header-text").append(text[i] + "... ");
        }


    checkCookie();

});

$(function (){

    $("#cookie_btn").click(function(){

        setCookie("policy","ok",366);
        $("#cookie").hide();
    });


    $("div.menu").hide();
    $("div.content-wraper").hide();


        $(document).ready(function(){



        $("img[alt='Home']").click(function(){

            $("div.links_all").show(ts);
            $("div.menu").hide(ts);
            $("div.content-wraper").hide(ts);
            $("#menu-top-at").show();
            $("#menu-top-learning_path").show();
            CleanSite();
        });

        $(".link-to-at").click(function(){

            $("div.links_all").hide(ts);
            $("div.menu").show(ts);
            CleanSite();
            $.get("../res/at.json", function(data){

                $("div.content-wraper").show(ts);
                $("h3.content-title").text(data.content[0].title);
                $("p.content-paragraph").html(data.content[0].link);
                $("p.content-paragraph").prepend(data.content[0].paragraph + " ");
                TopManuDisplay("at");
            });
        });


        $(".link-to-learning-path").click(function(){

            $("div.links_all").hide(ts);
            $("div.menu").show(ts);
            $("div.menu-displayer").hide();
            CleanSite();
            $.get("../res/learning_path.json", function(data){

                $("div.content-wraper").show(ts);
                $("h3.content-title").text(data.content[0].title);
                $("p.content-paragraph").text(data.content[0].paragraph);
                $("table.content-paragraph").append("<tr><th>Date</th><th>Description</th></tr>");

                for ( i = 0; i < data.table.length; i++){

                    $("table.content-paragraph").append("<tr><td>" + data.table[i].td1 + "</td><td>" + data.table[i].td2 + "</td></tr>");
                }

                TopManuDisplay("learning_path");

            });
        });


        $(".link-to-projects").click(function(){

            $("div.links_all").hide(ts);
            $("div.menu").show(ts);
            CleanSite();
            $.get("../res/projects.json", function(data){

                $("div.content-wraper").show(ts);
                $("h3.content-title").text(data.content[0].title);
                $("p.content-paragraph").append(data.content[0].paragraph +"<br>");

                for ( i = 0; i < data.panel.length; i++){

                    $("div.content-wraper").append("<div class='panel panel-info'><div class='panel-heading'><h3 class='panel-title'>" + data.panel[i].title + "</h3></div> <div class='panel-body'><p>" +  data.panel[i].content + "</div><div class='panel-footer'>" + data.panel[i].footer + "</div></div>");

                }
                TopManuDisplay("projects");
            });
          });


        $(".link-to-cv").click(function(){
            $("div.links_all").hide(ts);
            $("div.menu").show(ts);
            CleanSite();
            $("div.background").css("display","none");
            $("div.menu-displayer").hide();

            $.get("../res/cv.json", function(data){
                $("div.content-wraper").show(ts);
                $("div.cv-left").append(data.header[0].info_1);
                $("div.cv-left").append(data.header[0].info_2);
                $("div.cv-left").append(data.additional_info[0].personal_data);
                $("div.cv-left").append(data.additional_info[0].it_skills);
                $("div.cv-left").append(data.additional_info[0].additional_skills);
                $("div.cv-left").append(data.additional_info[0].hobbies);
                $("p.cv-right").append(data.job_objectives[0].content);
                $("p.cv-right").append("<h3>work experience</h3>");
                $("p.cv-right").append("<a href='#' class='empl' id='employment_history_1'>(show full employment hitory)</a></h3>");
                $("p.cv-right").append("<a href='#' class='empl' id='employment_history_2'>(show short employment hitory)</a></h3>");
                $("#employment_history_2").hide();

                for ( i = 0; i < data.job_short.length; i++){

                    $("table.cv-right-short").append("<tr><td>" + data.job_short[i].td1 + "</td><td>" + data.job_short[i].td2 + "</td></tr>");
                }

                for ( i = 0; i < data.job_long.length; i++){
                    $("table.cv-right-long").append("<tr><td>" + data.job_long[i].td1 + "</td><td>" + data.job_long[i].td2 + "</td></tr>");
                }

                $("table.cv-right-long").hide();
                $("p.edu").append("<h3>education</h3>");

                for ( i = 0; i < data.education.length; i++){
                    $("table.table-education").append("<tr><td>" + data.education[i].td1 + "</td><td>" + data.education[i].td2 + "</td></tr>");
                }


                $("#employment_history_1").click(function(){
                    $("table.cv-right-short").toggle(ts);
                    $("table.cv-right-long").toggle(ts);
                    $("#employment_history_1").toggle();
                    $("#employment_history_2").toggle();
                });

                $("#employment_history_2").click(function(){
                    $("table.cv-right-short").toggle(ts);
                    $("table.cv-right-long").toggle(ts);
                    $("#employment_history_2").toggle();
                    $("#employment_history_1").toggle();
                });

                TopManuDisplay("cv");
                $("div.right-bar-social_media").hide();
            });
       });


       Displayer("#link-learning_path","Learning path");
       Displayer("#menu-top-learning_path","Learning path");

       Displayer("#link-projects","Projects");
       Displayer("#menu-top-projects","Projects");

       Displayer("#link-cv","Curriculum Vitae");
       Displayer("#menu-top-cv","Curriculum Vitae");

       Displayer("#link-at","Contact");
       Displayer("#menu-top-at","Contact");

       Displayer("#menu-top-home","Home");
       Displayer(".background_ja1","Author of this site...");
       Displayer(".header-linkedin","My Linked In profile");
       Displayer(".header-github","My GitHub profile");
       Displayer(".footer-tech-info","Tech info");
       Displayer(".footer-info","Info");


        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

            function scrollFunction() {

                if (document.body.scrollTop > 200|| document.documentElement.scrollTop > 200) {
                    //document.getElementById("myBtn").style.display = "block";
                    $("myBtn").css("display","block");

                } else {
                    //document.getElementById("myBtn").style.display = "none";
                    $("myBtn").css("display","none");
                  }
        };

        // When the user clicks on the button, scroll to the top of the document
        $("#myBtn").click(function() {
            document.body.scrollTop = 0; // For Chrome, Safari and Opera
            document.documentElement.scrollTop = 0; // For IE and Firefox
        });


    });
});
