// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   let inp = document.querySelector("input");
//   let qrimg=document.querySelector("img");
//   let b = inp.value;
//   let a = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
//   let c = a.concat(b);
// qrimg.src=c;
// qrimg.className='qr'

// });
let btn = document.querySelector("button");
let qrDiv = document.getElementById("qrDiv");
btn.addEventListener("click", () => {
  let inp = document.querySelector("input");
  let qrimg = document.querySelector("img");
  let b = inp.value;
  if (inp.value == "") {
    alert("Please Enter URL");
  } else {
    let a = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    let c = a.concat(b);
    let qrDiv = document.getElementById("qrDiv");
    qrDiv.className = "qr";
    let qrImg = document.querySelector("img");
    qrImg.className = "qr";
    qrImg.src = c;
    qrDiv.appendChild(qrImg);
  }
});
