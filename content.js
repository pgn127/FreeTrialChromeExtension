//USES OF CONTENT SCRIPT,
//use content script when extension needs to interact with web pages. Content script is javascript that executes in context of a page thats been loaded into browsser
//think of content script as part of loaded page, not as part of extension it was packeged with
//content scripts can read details of the web pages the browser visits, and make changes to it, but cannot modify dom of its parent extension background page, only read and modify DOM for the displayed webpage
//can exchange massages with its parent extension

//defaults to running at document idle (sometime between onload and document_end)
// In the case of "document_idle", the browser chooses a time to inject scripts between "document_end" and immediately after the window.onload event fires. The exact moment of injection depends on how complex the document is and how long it is taking to load, and is optimized for page load speed.
// In the case of "document_start", the files are injected after any files from css, but before any other DOM is constructed or any other script is run.
//
// In the case of "document_end", the files are injected immediately after the DOM is complete, but before subresources like images and frames have loaded.
// 
// var additionalInfo = {
//   "title": document.title,
//   "selection": window.getSelection().toString()
// };
//
// chrome.runtime.connect().postMessage(additionalInfo);

// lISTENER FOR one time request, how you would get info about the current pagesdom and use it inside background script (which normally doesnt have access to this data)
// window.addEventListener("load", function() {
//     chrome.extension.sendMessage({
//         type: "dom-loaded",
//         data: {
//             myProperty: "value"
//         }
//     });
// }, true);
//
//
// //content script listens for a message selects all the divs on curren tpage and changes their backgroudn color, NOTE: the object which is attached to the listener
// chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
//     switch(message.type) {
//         case "colors-div":
//             var divs = document.querySelectorAll("div");
//             if(divs.length === 0) {
//                 alert("There are no any divs in the page.");
//             } else {
//                 for(var i=0; i&lt;divs.length; i++) {
//                     divs[i].style.backgroundColor = message.color;
//                 }
//             }
//         break;
//     }
// });
// //Long lived connections
// //use this type of messagine for persistent communication channel
// var port = chrome.runtime.connect({name: "my-channel"});
// port.postMessage({myProperty: "value"});
// port.onMessage.addListener(function(msg) {
//     // do some stuff here
// });
