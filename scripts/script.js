// Challenge Part (Random Background Colour) Starts Here

function randomColour() {
  let colours = [
    "#F28D35",
    "#7C3AED",
    "#22C55E",
    "#FF4D6D",
    "#1E40AF",
    "#FACC15",
    "#A855F7",
    "#14B8A6",
    "#E11D48",
    "#FF6B6B",
    "#4C51BF",
    "#48BB78",
    "#ED8936",
    "#9F7AEA",
    "#38B2AC",
  ];
  let random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

document
  .getElementById("btn-randomize-color")
  .addEventListener("click", function () {
    document.getElementById("body").className = "";
    document
      .getElementById("body")
      .classList.add("bg-[" + randomColour() + "]");
  });

// Challenge Part (Random Background Colour) Ends Here

// Challenge Part (Jumping into Blog Page) Starts Here

document.getElementById("goto-blogs").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// Challenge Part (Jumping into Blog Page) Ends Here

// Challenge Part (Get Current Date) Starts Here

const weekDays = ["Sun,", "Mon,", "Tue,", "Wed,", "Thu,", "Fri,", "Sat,"];
const fullDate = new Date();
let day = fullDate.getDay();
document.getElementById("current-day").innerHTML = weekDays[day];

const monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = fullDate.getMonth();
document.getElementById("month").innerHTML = monthName[month];

let date = fullDate.getDate();
document.getElementById("date").innerHTML = date;

let year = fullDate.getFullYear();
document.getElementById("year").innerHTML = year;

// Challenge Part (Get Current Date) Ends Here

// Challenge Part (Completed Task Button with Alert) Ends Here

const allCompletedButtons = document.querySelectorAll(".btn-completed");
let countClick = 0;
for (let allCompletedButton of allCompletedButtons) {
  allCompletedButton.addEventListener("click", function (event) {
    alert("Board Updated Successfully");

    // Decrease the Currently Assigned Task Value
    const assignedTask = getInnerTextById("task-assigned-currently");
    document.getElementById("task-assigned-currently").innerText = Math.max(0, assignedTask - 1);

    // Add and Update the Total Completed Task Value
    const totalCompletedTask = getInnerTextById("total-task-completed");
    document.getElementById("total-task-completed").innerText = totalCompletedTask + 1;

    // Disable The Completed Button after the Task is Completed
    event.target.disabled = true;

    // Add the Activity Log History with Real Time
    const realTime = new Date();
    let clickTime = realTime.toLocaleTimeString();
    const history = document.getElementById("history");
    const p = document.createElement("p");
    const taskTitle = allCompletedButton.parentElement.parentElement.parentElement.childNodes[3].innerText;
    p.innerText = `You have Completed The Task ${taskTitle} at ${clickTime}`;
    p.className = "mb-7 p-3 bg-[#F4F7FF] rounded-lg";
    history.appendChild(p);

    // Add Extra Alert
    const allTaskCompleted = allCompletedButtons.length;
    countClick = countClick + 1;
    if (countClick === allTaskCompleted) {
      alert("Congrates!!! You have completed all current task");
    }
  });
}

// Challenge Part (Completed Task Button with Alert) Starts Here
