/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var LOGIN = {
    // Application Constructor
    initialize: function() {
        
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
     
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        
        //console.log("SSSS "+LOGIN.check_pre_auth());
        //$("#mydebug").text( window.localStorage["username"] + " / " + window.localStorage["password"] );
        
        //alert(LOGIN.check_pre_auth());
        var loggato = LOGIN.check_pre_auth();
        //alert(loggato);
         
        if(loggato){
             //alert("auto login");
             var form = $("#login_form");
             $("#login_username", form).val(window.localStorage["username"]);
             $("#login_password", form).val(window.localStorage["password"]);
             LOGIN.abstract_login();
             /*$.mobile.changePage("dashboard.html");*/
        }
        else{/*NON AUTO LOGIN   */ 
              //alert("non auto login");
              LOGIN.handle_login();
            
             
        }               
    },
    
    check_pre_auth: function () {
        if( typeof(window.localStorage["username"]) != "undefined" && typeof(window.localStorage["password"]) != "undefined") {
            return true;
        }
        return false;
    },
    
    abstract_login: function(){
           var form      = $("#login_form");
           var $username = $("#login_username", form).val();
           var $password = $("#login_password", form).val();
           //alert($username);
           if($username != '' && $password != '') {
               $.post( "http://www.ntionline.it/login/app_login", { username: $username, password: $password}, function( json_result ) {
                    //console.log(json_result);
                    //return;
                    //window.location="dashboard.html";
                    if(json_result.logged_in == 1) {
                         //store
                         window.localStorage["username"] = $username;
                         window.localStorage["password"] = $password;
                         window.localStorage["codcli"] = json_result.codcli;
                         window.localStorage["email"] = json_result.email;
                         //$.mobile.changePage("dashboard.html");
                         window.location = "tracking.html";
                     } else {
                        //navigator.notification.alert("Login fallito", function() {}, "Attenzione", "OK");
                        alert("Login fallito");
                     }
               }, "json"); 
               
           } else {
                //navigator.notification.alert("Inserire username e password", function() {}, "Attenzione", "OK");
                alert("Inserire username e password");
                
           }
            return false;
    },
    
    handle_login: function()
    {
        $("#login_go").click(function(){
           LOGIN.abstract_login();
       }) 
    },
    
    handle_logout: function()
    {
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("password");
        window.localStorage.removeItem("codcli");
        window.localStorage.removeItem("email");
        window.localStorage.clear();
        window.location = "index.html"; 
    }
    
    
};
