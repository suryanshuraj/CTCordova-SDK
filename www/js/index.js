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

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById("login").addEventListener("click",onLogin);
document.getElementById("push").addEventListener("click",pushEvent);
document.getElementById("inbox").addEventListener("click",openInbox);
document.getElementById("native").addEventListener("click",nativeDisplay);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    CleverTap.setDebugLevel(3);
    CleverTap.createNotificationChannel("36", "Channel36", "Cordova test", 5, true);
    CleverTap.initializeInbox();

}
function onLogin(){

    CleverTap.onUserLogin ({
                    'Name': 'Suryanshu Raj',
        //            'Identity': '9999999',
                    "Phone no.": +917992375591,
                    'Email': 'cordovatest@test.com'

                });
}
function pushEvent(){

    CleverTap.recordEventWithName("cordovatestevent");
}
function openInbox(){

    CleverTap.showInbox({"navBarTitle":"App Inbox","navBarColor":"#eab215"});
}
function nativeDisplay(){

     CleverTap.getAllDisplayUnits(function(val) {
        document.getElementById("nativemsg").innerHTML =JSON.stringify(val[0].content[0].message.text).replace(/['"]+/g, '');
        document.getElementById("nativetitle").innerHTML =JSON.stringify(val[0].content[0].title.text).replace(/['"]+/g, '');
        console.log("Native Display units are "+JSON.stringify(val[0].content[0].message.text));
    });
}

