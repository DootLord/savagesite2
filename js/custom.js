$(document).ready(function () {
    // setTimeout(function () {
    //     M.toast({ html: "Scroll down to see more!", class: "green" });
    // }, 2500);

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
});


var leftAnimText = ["After spending over five years studying the art of the edit and all the intricacies that it comes with I have been fortunate enough to begin a career in the industry.Working inside of Davinci Resolve alongside powerhouse names and companies in the Influencer space such as Tru3Ta1ent, Simply History, BearBubb, MoonzyCat, InTheBlack Media Consulting and other significant bodies, I am able to excel at the editing, sound mixing and color grading stages to deliver you an edit you'll be proud of. "];
var rightAnimText = [];


fetch("animText.json").then(response => response.json()).then(json => initAnimTable(json));

function initAnimTable(data) {
    var listLeft = document.getElementById("list-left");
    var listRight = document.getElementById("list-right");

    // For this we hope that the length of data.left is the same as data.right
    for (var i = 0; data.left.length > i; i++) {
        listLeft.children[i].setAttribute("animText", data.left[i]);
        listRight.children[i].setAttribute("animText", data.right[i]);

        listLeft.children[i].onclick = fadeOutList;
    }
}

// function fadeOutList(e) {
//     var listLeft = document.getElementById("list-left").children;
//     var listRight = document.getElementById("list-right").children;
//     var speed = 125;

//     var animText = e.path[0].getAttribute("animText");
//     for (var i = 0; listLeft.length > i; i++) {
//         setTimeout((listItem) => {
//             listItem.classList.add("animate__fadeOutLeft")
//         }, speed * i, listLeft[i])
//     }

//     for (var i = 0; listRight.length > i; i++) {
//         setTimeout((listItem) => {
//             listItem.classList.add("animate__fadeOutRight")
//         }, speed * i, listRight[i])
//     }
// }

// function fadeInList() {
//     var listLeft = document.getElementById("list-left").children;
//     var listRight = document.getElementById("list-right").children;
//     var speed = 125;

//     // var animText = e.path[0].getAttribute("animText");
//     for (var i = listLeft.length - 1; 0 > i; i--) {
//         console.log(i);
//         setTimeout((listItem) => {
//             listItem.classList.add("animate__fadeInLeft")
//         }, speed * i, listLeft[i])
//     }

//     for (var i = listLeft.length - 1; i > 0; i--) {
//         setTimeout((listItem) => {
//             listItem.classList.add("animate_fadeInRight")
//         }, speed * i, listRight[i])
//     }
// }

// $(".quote-select").change(function () {
//     var validQuery = true;
//     var queryIssue = false;
//     var resultValue = 0;
//     $(".quote-select").each(function (index) {
//         if ($(this).val() == null) {
//             validQuery = false
//             return false;
//         }

//         switch($(this).val()) {
//             case "time":
//                 resultValue = "A meeting will be required to discuss pricing due to the length of the video."
//                 queryIssue = true;
//                 return false;
//                 break;
//             case "graphic":
//                 resultValue = "A meeting will be required to discuss pricing due to the requirements of graphic effects."
//                 queryIssue = true;
//                 return false;
//                 break;
//             default:
//                 resultValue = resultValue + parseInt($(this).val());
//                 break;
//         }
//     });

//     if(validQuery && queryIssue) {
//         $("#result").text(resultValue);
//     } else if(validQuery) {
//         $("#result").text("Quote Price: £" + resultValue);
//     }
// })