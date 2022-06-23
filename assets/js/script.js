let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let hour = dayjs().hour();

let notes = [];

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

$("button").on("click", function() {
    $("textarea").each(function() {
        console.log($(this).val());
        notes.push($(this).val());
        localStorage.setItem("notes", JSON.stringify(notes));
        console.log(notes)
        console.log(localStorage.getItem("notes"));
        
    })
});

$("textarea").each(function() {
    notes = JSON.parse(localStorage.getItem("notes"));
    console.log(notes);
    let v = 9;
    if (notes) {
        for(let i = 0; i < notes.length; i++) {
            if ($(this).hasClass("time-" + v)) {
               $(this).text(notes[i]);
               console.log(i, v)
            }
            v++
        }
    } else {
        notes = [];
    }
    notes = [];
});

if (dayjs().hour() === 1) {
    localStorage.clear();
};

getDayOfWeek();