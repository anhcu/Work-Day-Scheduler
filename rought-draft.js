// //save & text comment 
// // var saveButton = document.getElementById("save");
// // var comment = document.getElementById("text")

// // comment.textContent= localStorage.getItem('comment') 
// // var textArea = localStorage.getItem('comment') 
// // console.log(textArea)

// //saveButton.addEventListener("click", () => {
//   //  console.log('work')
//     // console.log('comment',comment.value)
// //localStorage.setItem("comment", comment.value);
// //});


// // //date and time 
// var now = moment().format('MMMM Do YYYY, h:mm:a');
// document.getElementById("currentDay").innerHTML = now

// //     contenet.textContent= localStorage.getItem(theTime, theContent);
// // var contenet = localStorage.getItem(theTime, theContent);
// // console.log(contenet)


// //document.ready allows for the methods within the scope of it - to be envoked once the 
// // page has fully loaded on the browser 
// $(document).ready (function(){ 

// // logic 
// //transitioning Vanilla JS logic to Jquery Logic
// //variables that will be used for Jquery logic
// //theTime will equate to the id of the parent ( currnt row)




// //TO add event listener to the buttons (all buttons)
// $(".save").click(function() {
//     var theTime =  $(this).parent().attr("id");
//     var theContent =  $(this).siblings(".content").val();
//     console.log(theTime)
//     console.log(theContent)

//     // theContent.textContent= localStorage.getItem(theTime, theContent)
//     // var textarea= localStorage.getItem(theTime, theContent)
//     // console.log('getItem')

//   //grab the value along with the time assciate with the note 
//  localStorage.setItem(theTime, theContent);
// // localStorage.getItem(theTime, JSON.stringify(theContent));



// // thecontent = localStorage.getItem(theTime) 
// // var textArea = JSON.parse(theContent); 
// // console.log(textArea)

//  // comment.textContent= localStorage.getItem('comment') 
// // var textArea = localStorage.getItem('comment') 
// // console.log(textArea)



// //  comment.textContent= localStorage.getItem('comment') 
//  // var textArea = localStorage.getItem('comment') 

// });














// // comment.textContent= localStorage.getItem('comment') 
// // var textArea = localStorage.getItem('comment') 
// // console.log(textArea)

// //saveButton.addEventListener("click", () => {
//   //  console.log('work')
//     // console.log('comment',comment.value)
// //localStorage.setItem("comment", comment.value);




// //create a conditional method that will alter the DOM based on the current time
// // if the time has past - add the past class  and vice versa withthe present class
// function timeChanged () {
//     //grab the current time of the user using moment CDN 
//   var theUsersCurrentTime = moment().hours();
//   console.log(theUsersCurrentTime)

//   //logic that will impact the hours one by one (using a DRY method)
//   $(".row").each(function(){
     
//     //grab the id of the rows and the value
//     var theTimeRow = parseInt($(this).attr("id").split("-")[0])
//     var theTimeRow = parseInt($(this).attr("id").split("-")[1])
//    console.log(parseInt)

//     //check the status
// if (theTimeRow < theUsersCurrentTime) {
//     // addClass is method by JQuery 
//     // the past styling will be added to the designated row
//     $(this).addClass("past");
// }
// else if (theTimeRow === theUsersCurrentTime){ 
//     $(this).removeClass("past");
//     $(this).addClass("present");
// }else
//     $(this).removeClass("past");
//     $(this).removeClass("present");
//     $(this).addClass("future");
 
//    })
// }
// //by placing this within the scope f document.ready() - the timeChanged function 
// //witll automatically execute once the page loads 
// timeChanged()

// })