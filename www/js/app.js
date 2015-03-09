/*
var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();  
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        
        if((typeof(localStorage.visit) == 'undefined') || (localStorage.visit) == 0){
            localStorage.visit = 0; //init localstorage
            
        }
        else {
             window.location="dashboard.html";
        }     
    } 
     
}
*/