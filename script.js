"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Anh xin lỗi bé ,Anh hứa hongg làm bé buồn nữa đouuu :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}
function generateMessage(noCount) {
  const messages = [
    "Không Bao Giờ",
    "Anh bicc lỗi rồi ạa",
    "Mong bé tha lỗi choo anhh :((",
    "Anhh saii rồi ạ",
    "Bé đừng giận anhh nữa nhoo",
    "Anhhh xin lỗilỗi bé nhắm nhunnn đóoooo",
  ];
  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Protest Riot', sans-serif;
  background: linear-gradient(135deg, #f5b5fc, #ffe6e6);
}

.container {
  text-align: center;
}

.cat-img {
  width: 300px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.title span {
  font-size: 18px;
  display: block;
  margin-top: 10px;
}

.buttons button {
  padding: 10px 20px;
  margin: 10px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease;
}

#yesBtn {
  background-color: #ff7eb9;
  color: white;
}

#noBtn {
  background-color: #ccc;
  color: black;
  position: absolute;
}
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
  alert('xin lỗi bé nhìu lắm á hihi!');
});
