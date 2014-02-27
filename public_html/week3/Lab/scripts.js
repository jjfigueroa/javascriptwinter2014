

var t = "title";
var arr = []; 
arr.push({ "title": "nike nike nike", "desc" : "boots"});
arr.push({ "title": "reebok reebok reebok", "desc" : "sneakers"});
arr.push({ "title": "ralph_lauren polo", "desc" : "tennis_shoes"});
arr.push({ "title": "vans vans vans vans ", "desc" : "slipper"});
arr.push({ "title": "moccasins moccasins moccasins", "desc" : "shoes"});
console.log(arr[3]["title"]); 

var rand = (Math.floor( Math.random()*arr.length));
var ad = document.getElementById("ad");
ad.innerHTML = arr[rand]["title"] + " " + arr[rand]["desc"] ;
document.getElementById("title").innerHTML = arr[rand]["title"].substr(0,10) + '...';
// ad.innerHTML = arr[rand].title + " " + arr[rand].desc ;
//ad.innerHTML = arr[rand][t]  ;
