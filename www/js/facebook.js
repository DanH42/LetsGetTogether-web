var login = function () 
{
    if (!window.cordova) 
    {
        var appId = '904187232938501';
        facebookConnectPlugin.browserInit(appId);
    }

    facebookConnectPlugin.login( ["email"], 
        function (response) 
        { 
            console.log(JSON.stringify(response)); 
            apiTest();
        },
        function (response) 
        { 
            console.log(JSON.stringify(response));
        }
    );
}
var apiTest = function () 
{
    facebookConnectPlugin.api( "me/?fields=id,name", ["user_birthday"],
    function (response) { 
        console.log(JSON.stringify(response));        

        document.getElementById('login-name').value = response.name;
        document.getElementById('login-id').value = response.id;
        document.getElementById('login-name').setAttribute('ng-value', 'hehehe');

        JSON.stringify(response);
    },
    function (response) { 
        alert(JSON.stringify(response));
    });
}
var logout = function () 
{
    facebookConnectPlugin.logout(
    function (response) { alert(JSON.stringify(response)) },
    function (response) { alert(JSON.stringify(response)) });
}