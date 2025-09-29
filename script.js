const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showTime, 10);
});

const showTime = () => {
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();

      hour = hour<10 ? `0${hour}` : hour;
      min = min<10 ? `0${min}` : min;
      second = second<10 ? `0${second}` : second;

    time.innerHTML = `${hour} :${min} :${second} `;

    timeformat.innerHTML = hour>12 ? "PM" : "AM";
}
