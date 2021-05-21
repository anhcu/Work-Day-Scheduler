// //date and time 
var now = moment().format('MMMM Do YYYY, h:mm:a');
document.getElementById("currentDay").innerHTML = now

function timeChanged () {
    //grab the current time of the user using moment CDN 
  var currentTime = moment().hours();
  console.log(currentTime)

  //logic that will impact the hours one by one (using a DRY method)
  $(".row").each(function(){
     
    //grab the id of the rows and the value
    var tabID = parseInt($(this).attr("id"))
//     var theTimeRow = parseInt($(this).attr("id").split("-")[1])
//    console.log(parseInt)

    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");

    //check the status
if (tabID < currentTime) {
    $(this).addClass("past");
}
else if (tabID === currentTime){ 
    $(this).addClass("present");
}else
    $(this).addClass("future");
   })
}

function LoadFromLocalStorage(){
    tabs.forEach(tab => {
        const textArea = document.getElementById('txtArea' + tab.id)
        var value = localStorage.getItem(tab.id) 
        if(value != null){
            textArea.innerText = value      
        }
      })  
}

function LoadTabs(){
    tabs.forEach(tab => {
        const parentDiv = document.getElementById('tabContainer')
        const childDiv = document.createElement('div')
        childDiv.id = tab.id;
        childDiv.classList.add('row')

        const labelDiv = document.createElement('div')
        labelDiv.innerText = tab.value
        labelDiv.classList.add('col-sm-1')
        labelDiv.classList.add('hour')

        const textArea = document.createElement('textarea')
        textArea.id = 'txtArea' + tab.id
        textArea.classList.add('col-sm-9')
        textArea.classList.add('content') 

        const button = document.createElement('button')
        button.innerHTML  ='<i class="far fa-save"></i>'
        button.classList.add('saveBtn')
        button.classList.add('col-sm-2')
        button.classList.add('save')

        childDiv.appendChild(labelDiv)
        childDiv.appendChild(textArea)
        childDiv.appendChild(button)
        parentDiv.appendChild(childDiv)
      })
}

$(document).ready (function(){ 
    LoadTabs();
    timeChanged();
    LoadFromLocalStorage();

    $(".save").click(function() {
        var theTime =  $(this).parent().attr("id");
        var theContent =  $(this).siblings(".content").val();
        localStorage.setItem(theTime, theContent);
    });
})

const tabs = [
    {
    id: 9,
    value: '9am'
  },
  {
      id: 10,
      value: '10am'
  },
  {
      id: 11,
      value: '11am'
  },
  {
      id: 12,
      value: '12pm'
  },
  {
      id: 13,
      value: '1pm'
  },
  {
      id: 14,
      value: '2pm'
  },
  {
      id: 15,
      value: '3pm'
  },
  {
      id: 16,
      value: '4pm'
  },
  {
      id: 17,
      value: '5pm'
  }
 
]