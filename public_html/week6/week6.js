/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* print to the screen = ecco */

//xml http request


	var xhr = new XMLHttpRequest();
var content = document.getElementById('content');
var showResults = document.getElementById('showResults');
var url = "demo.php?page=";
                var step = 1;

                showResults.addEventListener('click',makeAJAXCall);

function callback() {
var response = xhr.responseText;

content.innerHTML += response;
                        step++;
                        
                       

}


xhr.onreadystatechange = function() {

if (xhr.readyState==4 && xhr.status==200) {
callback();
}
};


                function makeAJAXCall(){
                    if ( step < 5 ) {
                        xhr.open('GET', url+step, true);
                        xhr.send();
                    }
                }


                window.addEventListener('load',makeAJAXCall);

function scrollCheck()  {
    if ( (window.innerHeight + window.scrollY) >= document.body.offsetHeight)
        makeAJAXCall();
}


window.addEventListener('scroll',scrollCheck);


/*
var statusCodes = {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            208: "Already Reported",
            226: "IM Used",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            306: "Reserved",
            307: "Temporary Redirect",
            308: "Permanent Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Request Entity Too Large",
            414: "Request-URI Too Long",
            415: "Unsupported Media Type",
            416: "Requested Range Not Satisfiable",
            417: "Expectation Failed",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Unassigned",
            426: "Upgrade Required",
            427: "Unassigned",
            428: "Precondition Required",
            429: "Too Many Requests",
            430: "Unassigned",
            431: "Request Header Fields Too Large",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates (Experimental)",
            507: "Insufficient Storage",
            508: "Loop Detected",
            509: "Unassigned",
            510: "Not Extended",
            511: "Network Authentication Required"
        };
*/







