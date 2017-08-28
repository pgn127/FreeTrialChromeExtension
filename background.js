// var rule1 = {
//         // conditions: [
//         //   new chrome.declarativeContent.PageStateMatcher({
//         //       pageUrl: { hostEquals: 'www.google.com', schemes: ['https'] },
//         //       css: ["input[type='password']"]
//         //   })
//         // ],
//         actions: [ new chrome.declarativeContent.ShowPageAction() ]
//       };


//
// //
// chrome.runtime.onInstalled.addListener(function(details) {
//       chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//         chrome.declarativeContent.onPageChanged.addRules([rule1]);
//       });
//     });
//

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        // When a page contains a <video> tag...
        new chrome.declarativeContent.PageStateMatcher({
          css: ["input"]
        })
      ],
      // ... show the page action.
      actions: [new chrome.declarativeContent.ShowPageAction() ]
    }]);
  });
});
//     // show the popup when the user clicks on the page action.
    chrome.pageAction.onClicked.addListener(function(tab) {
        chrome.pageAction.show(tab.id);
    });

    // chrome.pageAction.onClicked.addListener(function(tab) {
    //   chrome.tabs.executeScript(null, {file: 'content.js'},  function(result){
    //         chrome.tabs.sendMessage(tab.id, {action: 'go'},
    //             function(response){
    //                 console.log(response);
    //         });
    //   });
    // });

// omnibox get users action from the omnibox
// chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
//     suggest([
//       {content: "color-divs", description: "Make everything red"}
//     ]);
// });
//
// chrome.omnibox.onInputEntered.addListener(function(text) {
//     if(text == "color-divs") colorDivs();
// });
//
//
// // listening for an event / one-time requests
// // coming from the popup
// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
//     switch(request.type) {
//         case "color-divs":
//             colorDivs();
//         break;
//     }
//     return true;
// });
//
// // listening for an event / long-lived connections
// // coming from devtools
// chrome.extension.onConnect.addListener(function (port) {
//     port.onMessage.addListener(function (message) {
//         switch(port.name) {
//             case "color-divs-port":
//                 colorDivs();
//             break;
//         }
//     });
// });
//
// // send a message to the content script
// //, set one time request listeniner which will
// var colorDivs = function() {
//     chrome.tabs.getSelected(null, function(tab){
//         chrome.tabs.sendMessage(tab.id, {type: "colors-div", color: "#F00"});
//         // setting a badge
//         chrome.browserAction.setBadgeText({text: "red!"});
//     });
// }
//
//
// // One time requests, coming from popup happens only once, you send a messag eand wait for an answer
// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
//     switch(request.type) {
//         case "dom-loaded":
//             alert(request.data.myProperty);
//         break;
//     }
//     return true;
// });
//
//
// //long lived connections for persistent communication
// chrome.runtime.onConnect.addListener(function(port) {
//     if(port.name == "my-channel"){
//         port.onMessage.addListener(function(msg) {
//             // do some stuff here
//         });
//     }
// });
