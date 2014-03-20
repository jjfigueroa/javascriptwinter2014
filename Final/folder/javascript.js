/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var doc1 = document.getElementById("agreeLink1");
var doc2 = document.getElementById("agreeLink2");
var doc1click = false;
var doc2click = false;
var scrollDone = false;

doc1.onclick = function() {
doc1click = true;
doc1.style.color='red';
checkAll();
};
doc2.onclick = function() {
doc2click = true;
doc2.style.color='red';
checkAll();
};

var objDiv = document.getElementById("agreeScroll");
objDiv.onscroll = function (event) {

if ( objDiv.scrollTop === (objDiv.scrollHeight-objDiv.offsetHeight) ){
    scrollDone = true;
    checkAll();
}
    };
    
   //activating the radio buttons
function checkAll(){
  if (doc1click === true && doc2click === true && scrollDone === true){
            document.getElementById("notagree").disabled = false;
            document.getElementById("agree").disabled = false;
      return true;      
    } else {
        return false;
    }
        
};
var showOnSubmit = document.getElementById("submitAgreement");

//
showOnSubmit.onclick = function(e){
    //stopping the form from submitting itself to the same page
    e.preventDefault();
    alert("functionsCalled");
    document.getElementById("page").style.display = "none";
    if (document.getElementById("notagree").checked){
        document.getElementById("disagreed").style.display = "block";
    }else if (document.getElementById("agree").checked){
        document.getElementById("agreed").style.display = "block";
    }
        
    
}



//var form = document.getElementById("mainform");
//  form.onsubmit(function(e){
//      
//  e.preventDefault(); 
//  document.getElementById("page").style.display = "none";
//  if(document.getElementById("agree").checked){
//  document.getElementById("agreed").style.display = "block";
//      
//  }else if (document.getElementById("notagree").checked){
//  document.getElementById("disagreed").style.display = "block";
//      
//  }
//});


            
        