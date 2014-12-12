// Settings
FacebookInAppBrowser.settings.appId = '904187232938501';
FacebookInAppBrowser.settings.redirectUrl = 'http://localhost/get2gether/www/';
FacebookInAppBrowser.settings.permissions = 'email';

// Optional
FacebookInAppBrowser.settings.timeoutDuration = 7500;

// Login(accessToken will be stored trough localStorage in 'accessToken');
FacebookInAppBrowser.login({
    send: function() {
        console.log('login opened');
    },
    success: function(access_token) {
        console.log('done, access token: ' + access_token);
    },
    denied: function() {
        console.log('user denied');
    },
    timeout: function(){
        console.log('a timeout has occurred, probably a bad internet connection');
    },
    complete: function(access_token) {
        console.log('window closed');
        if(access_token) {
            console.log(access_token);
        } else {
            console.log('no access token');
        }
    },
    userInfo: function(userInfo) {
        if(userInfo) {
            console.log(JSON.stringify(userInfo));
        } else {
            console.log('no user info');
        }
    }
});

// Invite friends
// FacebookInAppBrowser.invite('Get to know my app!', function(response) {
//     if(response) {
//         alert('success');
//     }
// });

// // Same logic of callbacks
// FacebookInAppBrowser.getInfo(function(response) {
//     if(response) {
//         var name = response.name,
//             id = response.id,
//             gender = response.gender;

//         // check the response object to see all available data like email, first name, last name, etc
//         console.log(JSON.stringify(response));
//     }
// });

// FacebookInAppBrowser.getPermissions(function(permissions) {
//     if(permissions) {
//         console.log(permissions.publish_actions, permissions);
//     }
// });

// FacebookInAppBrowser.post({name: 'My post',
//                            link: 'http://frop.me',
//                            message: 'Try this out',
//                            picture: 'http://caiovaccaro.com.br/wp-content/uploads/2013/10/frop01.jpg',
//                            description: 'Sent trough mobile app'}, function(response) {
//                                if(response) {
//                                    console.log('post successful');
//                                }
//                            });
// // Share urls
// FacebookInAppBrowser.share({
//     href: 'https://developers.facebook.com/docs/'
// }, function(response) {
//     if (response) {
//         alert('success');
//     }
// });

// // Share open graph actions
// FacebookInAppBrowser.share({
//     action_type: 'og.likes',
//     action_properties: JSON.stringify({
//         object:'https://developers.facebook.com/docs/',
//     })
// }, function(response) {
//     if (response) {
//         alert('success');
//     }
// });
// // please note that you could get errors like:
// // "User is already associated to the object type, article, on a unique action..."
// // if you try to re-like something already liked by the user

// // Logout
// FacebookInAppBrowser.logout(function() {
//     alert('bye');
// });