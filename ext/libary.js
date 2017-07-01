function TopManuDisplay(content) {

        switch(content){

          case "at":
                $("#menu-top-at").hide(ts);
                $("#menu-top-learning_path").show(ts);
                $("#menu-top-cv").show(ts);
                $("#menu-top-projects").show(ts);
                break;

          case "learning_path":
                $("#menu-top-at").show(ts);
                $("#menu-top-learning_path").hide(ts);
                $("#menu-top-cv").show(ts);
                $("#menu-top-projects").show(ts);
                break;

          case "cv":
                $("#menu-top-at").show(ts);
                $("#menu-top-learning_path").show(ts);
                $("#menu-top-cv").hide(ts);
                $("#menu-top-projects").show(ts);
                break;

          case "projects":
                $("#menu-top-at").show(ts);
                $("#menu-top-learning_path").show(ts);
                $("#menu-top-cv").show(ts);
                $("#menu-top-projects").hide(ts);
                break;
}};



function CleanSite(){

          $("h3.content-title").html("");
          $("p.content-paragraph").html("");
          $("table.content-paragraph").html("");
          $("div.content-wraper").html("<h3 class='content-title'></h3><p class='content-paragraph'><table class='content-paragraph'></table></p>");
          $("div.div-cv").html("<div class='row cv'><div class='col-xs-12 col-sm-12 col-md-4 cv-left'></div><div class='col-xs-12 col-sm-12 col-md-8 cv-right'><p class='cv-right'></p> <table class='cv-right-short'></table><table class='cv-right-long'></table><p class='edu'></p><table class='table-education'></table></div></div>");
          $("div.background").css("display","block");
          $("div.right-bar-social_media").show();
          $("div.menu-displayer").show();
};


function Displayer(MenuItem,DisplayerText){

    $(MenuItem).mouseenter(function(){
        $('h3.menu-displayer').text(DisplayerText);
        $(MenuItem).mouseleave(function(){
        $('h3.menu-displayer').text("|");
    });
  });


};
