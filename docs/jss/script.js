// display current date

var currentDay = moment().format("dddd, MMMM, Do");
$("#currentDay").text(currentDay);

// function to set color based on if hour is in past present or future

function setHour() {
    //set current hour (military time)
    var currentHour = moment().hour();

        // Loop through grid rows based on id
        $(".time-block").each(function() {

            // assign each row an hour based on id (military time)
            var rowHour = parseInt($(this).attr("id"));

            // compare row hour to current hour and assign class
            if (currentHour > rowHour) {
                $(this).addClass("past");
            }
            else if (currentHour < rowHour) {
                $(this).addClass("future");
            }
            else if (currentHour === rowHour) {
                $(this).addClass("present");
            }
        })
    }

// call function 
setHour();

// add event listener on save button when clicked to save 
// description to local storage

$(".saveBtn").on("click", function() {

    // save text area on timeblock of clicked button
    var description = $(this).siblings(".description").val();

    // save time
    var time = $(this).parent().attr("id");

    // save description into local storage
    localStorage.setItem(time, description);
})

// load saved description from local storage

$(".time-block").children(".description").each(function() {
    console.log(this);
    $(this).val(localStorage.getItem($(this).parent().attr("id")));
})
