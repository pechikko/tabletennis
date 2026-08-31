let score1 = 0;
let score2 = 0;
let game1 = 0;
let game2 = 0;

const button1 = document.getElementById("button1");
const minus1 = document.getElementById("minus1");
//const playerName1 = document.getElementById("playername1");
//const nameInput1 = document.getElementById("nameinput1");
//const changeName1 = document.getElementById("changename1");
const scoreDisplay1 = document.getElementById("score1");
const server1 = document.getElementById("server1");
const server2 = document.getElementById("server2");

scoreDisplay1.addEventListener("click",function () {

score1++;

scoreDisplay1.textContent = score1

updateServer();

})

minus1.addEventListener("click",function () {
if (score1 > 0) {
    score1--;
    scoreDisplay1.textContent = score1;
    updateServer();
}
});

//changeName1.addEventListener("click", function () {
//    playerName1.textContent = nameInput1.value;
//})

const button2 = document.getElementById("button2");
const minus2 = document.getElementById("minus2");
//const playerName2 = document.getElementById("playername2");
//const nameInput2 = document.getElementById("nameinput2");
//const changeName2 = document.getElementById("changename2");
//const resetbutton = document.getElementById("resetbutton");
const scoreDisplay2 = document.getElementById("score2");

scoreDisplay2.addEventListener("click",function () {

score2++;

scoreDisplay2.textContent = score2;

updateServer();

})

minus2.addEventListener("click",function () {
if (score2 > 0) {
    score2--;
    scoreDisplay2.textContent = score2;
    updateServer();
}
});

//changeName2.addEventListener("click", function () {
//    playerName2.textContent = nameInput2.value;
//})

//resetbutton.addEventListener("click", function () {
//    score1 = 0;
//    score2 = 0;
//    scoreDisplay1.textContent = score1;
//    scoreDisplay2.textContent = score2;
//   updateServer();
//})

function updateServer() {
    const total= score1 + score2;

    if (Math.floor(total/2)%2 === 0) {
        server1.textContent = "➤";
        server2.textContent = "";
    } else {
        server1.textContent = "";
        server2.textContent = "➤";
    }
}

updateServer();

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click",function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none"
    }
});

const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click",function () {
    score1 = 0;
    score2 = 0;
    
    scoreDisplay1.textContent = score1;
    scoreDisplay2.textContent = score2;
    
    updateServer();

    menu.style.display = "none";
    
});

const changeName1Button = document.getElementById("changeName1Button");
const changeName2Button = document.getElementById("changeName2Button");
const playerName1 = document.getElementById("playerName1");
const playerName2 = document.getElementById("playerName2");

changeName1Button.addEventListener("click",function () {
const newName = prompt("プレイヤー1の名前を入力してください");

if (newName !== null && newName !== "") {
    playerName1.textContent = newName;
}

menu.style.display = "none";
});

changeName2Button.addEventListener("click",function () {
const newName = prompt("プレイヤー2の名前を入力してください");

if (newName !== null && newName !== "") {
    playerName2.textContent = newName;
}

menu.style.display = "none";
});

const gameDisplay1 = document.getElementById("game1");
const gameDisplay2 = document.getElementById("game2");

const gamePlus1 = document.getElementById("gamePlus1");
const gameMinus1 = document.getElementById("gameMinus1");

const gamePlus2 = document.getElementById("gamePlus2");
const gameMinus2 = document.getElementById("gameMinus2");

gamePlus1.addEventListener("click",function () {

game1++;

gameDisplay1.textContent = game1;

})

gameMinus1.addEventListener("click",function () {
if (game1 > 0) {
    game1--;
    gameDisplay1.textContent = game1;
}
});

gamePlus2.addEventListener("click",function () {

game2++;

gameDisplay2.textContent = game2;

})

gameMinus2.addEventListener("click",function () {
if (game2 > 0) {
    game2--;
    gameDisplay2.textContent = game2;
}
});

document.addEventListener("click", function (event) {
    if (
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        menu.style.display = "none";
    }
});