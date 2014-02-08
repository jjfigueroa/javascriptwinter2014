





/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function checkLength(field,fieldErr,message) {
    if ( field.value.length > 0 ) {
        field.className = "good";
        fieldErr.innerHTML = "";
        fieldErr.className = "valid";
        
      
    } else {
        
        field.className = "bad";
        fieldErr.innerHTML = message;
        fieldErr.className = "error";
    
    }
    
}


function submitForm() {
alert("gothere");    
    var fullname = document.getElementById("name");
    var fullnameErr = document.getElementById("err_name");
    var email =  document.getElementById("email");
    var emailErr = document.getElementById("err_email");
    var comments = document.getElementById("comments");
    var commentsErr = document.getElementById("err_comments");
    
    
   
    checkLength(fullname,fullnameErr,"full name is not entered");
    
    checkLength(email,emailErr,"email is not entered");
    
   //checkLength(comments,commentsErr,"a comment is not entered");
        
    var alphaRegex = /^([0-9a-zA-Z]+[-._+&amp;])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/;
    if(alphaRegex.test(email.value)){
         email.className = "good";
        emailErr.innerHTML = "";
        emailErr.className = "valid";
        
    } else {
         email.className = "bad";
        emailErr.innerHTML = "email not valid";
        emailErr.className = "error";
        
       
    }
  if (comments.value.length < 150 && comments.value.length > 0 )
  {
      comments.className = "good";
        commentsErr.innerHTML = "";
        commentsErr.className = "valid";
  } else {
          
        comments.className = "bad";
        commentsErr.innerHTML = "comments exceed 150 or empty";
       commentsErr.className = "error";
        
        
      }




}


document.getElementById("submit").onclick = function(){submitForm()};

