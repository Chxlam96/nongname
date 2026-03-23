const catLeft = document.getElementById("catLeft");
const heart = document.getElementById("heart");
const text = document.getElementById("text");
const questionBox = document.getElementById("questionBox");
const send = document.getElementById("send");
const answer = document.getElementById("answer");
const choice = document.getElementById("choice");
const pinkHeart = document.getElementById("pinkHeart");
const brokenHeart = document.getElementById("brokenHeart");
const centerImg = document.getElementById("centerImg");
const bottomText = document.getElementById("bottomText");


// เริ่ม
setTimeout(() => {
  text.innerText = "กดๆๆๆๆๆๆ";
}, 2000);


// กดหัวใจแรก
heart.onclick = () => {
  catLeft.style.left = "45%";

  setTimeout(() => {
    heart.style.display = "none";
    catLeft.style.display = "none";
    text.innerText = "";

    document.body.style.background = "#e6ccff";

    setTimeout(() => {
      questionBox.style.display = "block";
    }, 2000);

  }, 2000);
};


// ส่งคำตอบ (เจ้าของเว็บดูใน console)
send.onclick = () => {
  console.log("คำตอบ:", answer.value);

  questionBox.style.display = "none";
  document.body.style.background = "#ffd6eb";

  choice.style.display = "block";

  setTimeout(() => {
    text.innerText = "กดๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ";
  }, 2000);
};


// เลือกหัวใจดี
pinkHeart.onclick = () => {
  choice.style.display = "none";
  text.innerText = "";
  bottomText.innerText = "";
  document.body.style.background = "#d2b48c";

  centerImg.style.display = "block";

  // รถ + สั่น
  centerImg.src = "https://media.discordapp.net/attachments/1015271508173664328/1485554637296898158/3245a61beaa08395.png?ex=69c24a11&is=69c0f891&hm=9548b7dac58e20f912e1fd546996af92214aa029c224cc0be54b3f3ad59ddd6a&=&format=webp&quality=lossless&width=864&height=864";
  shake();

  // แมว
  setTimeout(() => {
    centerImg.src = "https://media.discordapp.net/attachments/1015271508173664328/1485554636705239121/081c7b7428935541.png?ex=69c24a11&is=69c0f891&hm=9e71f8cbf1a9b53751e28e393fd3589b0ce78c363a5097e7c2f8fd9a57db269d&=&format=webp&quality=lossless&width=864&height=864";
  }, 2000);

  // ดอกไม้
  setTimeout(() => {
    centerImg.src = "https://media.discordapp.net/attachments/1015271508173664328/1485554636139135027/99d9dd78eb050cd0.png?ex=69c24a11&is=69c0f891&hm=168497a875ab0b1192cb30f5d2bdd1166149e85734e86c2648e12de37bb3edc2&=&format=webp&quality=lossless";
  }, 4000);
};


// เลือกหัวใจแตก
brokenHeart.onclick = () => {
  choice.style.display = "none";
  text.innerText = "";
  bottomText.innerText = "";
  document.body.style.background = "#d2b48c";

  centerImg.style.display = "block";

  centerImg.src = "https://media.discordapp.net/attachments/1015271508173664328/1485559250242633738/ef937ed92c12e0aa.jpg?ex=69c24e5d&is=69c0fcdd&hm=effbc301ed9e0235ca83e11437562c85a8640617f3422f5333cd228102905ffa&=&format=webp";

  setTimeout(() => {
    centerImg.src = "https://media.discordapp.net/attachments/1015271508173664328/1485559478928805898/29.jpg?ex=69c24e94&is=69c0fd14&hm=4cc7decf72c51e90219e3f405c2e63fe2c74e5ef193d603de27022d1cc113ee2&=&format=webp&width=544&height=968";
  }, 2000);

  setTimeout(() => {
    centerImg.src = "https://media.discordapp.net/attachments/1015271508173664328/1485554638261325885/Untitled-2.png?ex=69c24a12&is=69c0f892&hm=aead9933703b4a240dfc23468dca77a9e8b2d04f496a03471cf583c45a0555bd&=&format=webp&quality=lossless&width=864&height=864";
    bottomText.innerText = "ฟวยยยย💢";
  }, 4000);
};


// เอฟเฟคสั่น (ไม่หลุดกลาง)
function shake() {
  let i = 0;
  const interval = setInterval(() => {
    const move = i % 2 === 0 ? 10 : -10;

    centerImg.style.transform =
      `translate(-50%, -50%) translateX(${move}px)`;

    i++;

    if (i > 10) {
      clearInterval(interval);
      centerImg.style.transform = "translate(-50%, -50%)";
    }
  }, 100);
}
