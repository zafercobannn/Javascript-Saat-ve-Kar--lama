let sname = prompt("Adınızı giriniz : ")

let userName = document.querySelector("#userName")

userName.innerHTML = `${sname}`


function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = showTime(m);
  s = showTime(s);
  document.querySelector("#myClock").innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function showTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
