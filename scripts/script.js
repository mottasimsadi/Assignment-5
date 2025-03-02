// Challenge Part Starts Here

// Random Background Colour
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

// Challenge Part Ends Here

// Challenge Part Starts Here

// Jumping into Blog Page

document.getElementById("goto-blogs").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// Challenge Part Ends Here

// Challenge Part Starts Here

// Get Current Date
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

// Challenge Part Ends Here
