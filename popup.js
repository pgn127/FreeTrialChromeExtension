// popup.js
//popup contains a single button and once user clicks it it sends message to backgorund script
window.onload = function() {
//     document.getElementById("submit_btn").onclick = function() {
//
// //         jQuery.ajax({
// //             type: "POST",
// //             url: "http://localhost:3000/sendEmail",
// //             data: {email: 'pam@aol.com', date: '', clientId: clientId},
// //             success: function(data) {
// //                 console.log(data);
// //             }
// // });
//         // chrome.extension.sendMessage({
//         //     type: "color-divs"
//         // });
//     }
document.getElementById("submit_btn").onclick = function(event) {
    // $("#submit_btn").submit(function(event) {
        // alert( "Handler for .submit() called." );
        /* stop form from submitting normally */
        chrome.extension.sendMessage({
                    type: "color-divs"
                });

      /* get the action attribute from the <form action=""> element */
    //   var $form = $( this ),
    //       url = $form.attr( 'action' );

    //   var email = $('input[name=email]').val()
    //   var exp_date = $('input[name=exp]').val()
    //   var freq = $('input[name=frequency]').val()
    //   $.ajax({
    //         type: "post",
    //         url: "http://localhost:3000/sendEmail",
    //         data: {email: email, expiration_date: exp_date, frequency: freq},
    //         // contentType: "application/x-www-form-urlencoded",
    //         success: function(res) {
    //             alert("data saved")
    //         },
    //         error: function(err) {
    //             alert('error')
    //             // console.log(err);
    //         }
    //     })
    //     event.preventDefault();
    }
// )

}


// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById("btn-detect").addEventListener("click", function() {
//     var inputText = document.getElementById("text").value;
//     chrome.i18n.detectLanguage(inputText, function(result) {
//         var languages =  "Languages: \n";
//         for (var i = 0; i < result.languages.length; i++) {
//            languages += result.languages[i].language + " ";
//            languages += result.languages[i].percentage + "\n";
//         }
//
//         var is_reliable = "\nReliable? \n" + result.isReliable + "\n";
//         alert(languages + is_reliable);
//     });
//   });
// });
