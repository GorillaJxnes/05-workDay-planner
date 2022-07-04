$(document).ready(function(){
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-1 .description").val(localStorage.getItem("hour-1"))
$("#hour-2 .description").val(localStorage.getItem("hour-2"))
$("#hour-3 .description").val(localStorage.getItem("hour-3"))
$("#hour-4 .description").val(localStorage.getItem("hour-4"))
$("#hour-5 .description").val(localStorage.getItem("hour-5"))
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr("id");
            localStorage.setItem(time, value);
            $(".notification").addClass('show')
                setTimeout(function(){
                    $(".notification").removeClass("show");
                }, 5000);
    })
    function updater(){
        var currentTime = moment().hours();
            $('.time-block').each(function(){
                var blockHour = parseInt($(this).attr("#currentDay").split("-")[1])
                if(blockHour < currentTime){
                    $(this).removeClass("#future");
                    $(this).removeClass("#present");
                    $(this).addClass("#past");
                }
                else if(blockHour === currentTime){
                    $(this).removeClass("#past");
                    $(this).removeClass("#present")
                    $(this).addClass("#future")
                }
                else {
                    $(this).removeClass("#past")
                    $(this).removeClass("#present")
                    $(this).addClass("#future")
                }
            })
    }
    })