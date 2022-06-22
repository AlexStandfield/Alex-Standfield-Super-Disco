let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let hour = dayjs().hour();

let getDayOfWeek = () => {
    $("#currentDay").text(daysOfWeek[dayjs().day()] + ", " + months[dayjs().month()] + " " + dayjs().date());
};

$("textarea").each(function() {
    if ($(this).hasClass("time-" + hour)) {
        $(this).addClass("present");
        $(this).parent().prevAll().addClass("past");
        $(this).parent().nextAll().addClass("future");
    } else if (hour > 17) {
        $("textarea").parent().addClass("past");
    } else if (hour < 9) {
        $("textarea".parent().addClass("future"));
    }
});

getDayOfWeek();