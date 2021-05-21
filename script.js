//save & text comment 
// var saveButton = document.getElementById("save");
// var comment = document.getElementById("text")

// comment.textContent= localStorage.getItem('comment') 
// var textArea = localStorage.getItem('comment') 
// console.log(textArea)

//saveButton.addEventListener("click", () => {
  //  console.log('work')
    // console.log('comment',comment.value)
//localStorage.setItem("comment", comment.value);
//});

// //date and time (nned to display)
var date = new Date();
var currentDay = date.toDateString();
// var time = date.toLocaleTimeString();
document.getElementById("currentDay").innerHTML = currentDay


//document.ready allows for the methods within the scope of it - to be envoked once the 
// page has fully loaded on the browser 
$(document).ready (function(){ 
// logic 
//transitioning Vanilla JS logic to Jquery Logic
//variables that will be used for Jquery logic
//theTime will equate to the id of the parent ( currnt row)

//TO add event listener to the buttons (all buttons)
$(".save").click(function() {
    var theTime =  $(this).parent().attr("id");
var theContent =  $(this).siblings(".content").val();
    console.log('working')
  //grab the value along with the time assciate with the note 
 localStorage.setItem(theTime, theContent);
});



// content.textContent= localStorage.getItem('content') 
// var textArea = localStorage.getItem('comment') 
// console.log(textArea)

//saveButton.addEventListener("click", () => {
  //  console.log('work')
    // console.log('comment',comment.value)
//localStorage.setItem("comment", comment.value);




//create a conditional method that will alter the DOM based on the current time
// if the time has past - add the past class  and vice versa withthe present class
function timeChanged () {
    //grab the current time of the user using moment CDN 
  var theUsersCurrentTime = moment().hours();
  console.log(theUsersCurrentTime)

  //logic that will impact the hours one by one (using a DRY method)
  $(".row").each(function(){
     
      //grab the id of the rows and the value
      var theTimeRow = parseInt($(this).attr("id").split("-")[1])


      //check the status
if (theTimeRow < theUsersCurrentTime) {
    // addClass is method by JQuery 
    // the past styling will be added to the designated row
    $(this).addClss("past");
}
else if (theTimeRow === theUsersCurrentTime){ 
    $(this).removeClass("past");
    $(this).addClass("present");
}else
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  })
}
//by placing this within the scope f document.ready() - the timeChanged function 
//witll automatically execute once the page loads 
timeChanged()

})




