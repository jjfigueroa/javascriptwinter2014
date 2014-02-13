/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var userdata = {};
userdata.email = "";
userdata.username = "";

var emailObj = document.getElementById('email');
function setEmail() {
userdata.email =  emailObj.value;
    
}
emailObj.addEventListener('blur',setEmail);

function showResults() {
    console.clear();
    console.log(userdata);
}

var results = document.getElementById('showResults');

results.addEventListener("click", showResults);





