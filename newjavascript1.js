var elemID = "#disp";



$().ready(function() {
    var left;
    var top;
    for(var i=0; i<10 ; i++) {
        left= Math.floor((Math.random()*1000)+1);
        top= Math.floor((Math.random()*800)+1);
        $(elemID).append(
           "<div id='" + i + "' class='b' style='top:"
   + top + "px;left :" + left+ "px;'>"+ i + "</div>");
 
           

        }
    });
 



