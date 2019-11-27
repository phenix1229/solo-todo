const inputBox = document.querySelector('.todo-input');
const today = new Date();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]


const createObject = function(){
    const todoStamp = {
        usrInput: inputBox.value,
        day : weekdays[today.getDay()],
        month : months[today.getMonth()],
        date : today.getDate(),
        year : today.getFullYear(),
    }
    return todoStamp;
}