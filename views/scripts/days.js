//Getting recent dates for order

let date_container = document.querySelector("#dateBox");
let delivery = document.getElementById("date");
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

let day = Number(dd);
let month = Number(mm);
let monthObj = {
    1: "Jan",
    2: "Feb",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "Aug",
    9: "Sept",
    10: "Oct",
    11: "Nov",
    12: "Dec"
}

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day_index = 0;

for (let i = 0; i < 14; i++) {
    let div = document.createElement("div");
    div.innerHTML = `<span>${days[day_index]},<span> ${monthObj[month]} ${day}`;

    if (day == 30) {
        day = 1;
        month++;
    }
    else
        day++;

    if (day_index == 6)
        day_index = 0;
    else
        day_index++;

    div.addEventListener("click", function () {
        div.style.backgroundColor = "#fffad1"
        div.style.borderLeft = "5px solid blue"
        date.innerHTML = div.innerHTML;


    })

    date_container.append(div);
}