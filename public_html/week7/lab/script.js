/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


       
                    $("a").mouseover(function() {
    $(this).css('color', 'blue');
   
}).mouseout(function() {
    $(this).css('color', 'black');
});
 
                 $("#navb1").click(function() {
                 $("#nav2,#nav3,#nav4").hide();
                 $("#nav1").fadeIn("slow");
                 
             });
            
                   $("#navb2").click(function() {
                 $("#nav1,#nav3,#nav4").hide();
                  $("#nav2").fadeIn("slow");
                   });
             
                   $("#navb3").click(function() {
                 $("#nav1,#nav2,#nav4").hide();
                  $("#nav3").fadeIn("slow");
             });
                   $("#navb4").click(function() {
                 $("#nav1,#nav2,#nav3").hide();
                  $("#nav4").fadeIn("slow");
             });
     
