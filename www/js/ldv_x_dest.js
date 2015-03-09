var LDV_X_DEST = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
         $("#user_name").html(window.localStorage["username"] + "("+window.localStorage["codcli"]+")");
         
         $("#start_search").click(function(){
            LDV_X_DEST.start_search();    
         })
         
    },
    
    start_search: function()
    {
        /*alert(window.localStorage["codcli"]);
        return;*/
       
        $.soap({
            url: 'http://93.51.203.187:8080/soap_serv',//dev
            method: 'ANAGRAFICA_CLIENTE',
            appendMethodToURL: false,      
            
            data: {
                codcli: "'"+window.localStorage["codcli"]+"'"
            },
            enableLogging: false,
            success: function (soapResponse) {
                // do stuff with soapResponse
                // if you want to have the response as JSON use soapResponse.toJSON();
                // or soapResponse.toString() to get XML string
                // or soapResponse.toXML() to get XML DOM
                alert(soapResponse)
            },
            error: function (SOAPResponse) {
                // show error
                alert("Soap error");
            }
        });
        
        
        
    }
}