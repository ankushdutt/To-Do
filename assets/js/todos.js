$("ul").on("click", "li", function () {
    $(this).toggleClass("completed")
})

$("ul").on("click", "span", function () {
    $(this).parent().fadeOut(500, function () {
        $(this).remove()
    })
})

$("input").on("keypress", function(event) {
    if(event.which===13) {
        var rem=$(this).val()
        $(this).val("")
        $("ul").append("<li><span><i class='material-icons'>delete_sweep</i></span> "+rem + "</li>")
    }
})

$("#add").on("click", function() {
    $("input").fadeToggle()
})

$("#add").hover(function() {
    $(this).toggleClass("onhover")
})



