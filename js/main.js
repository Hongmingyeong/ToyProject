let img = document.getElementById("img");
let score = document.getElementById("score");
let user_score = document.getElementById("user_score");
let computer_score = document.getElementById("computer_score");
let scissors = document.getElementById("scissors");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let reset_btn = document.getElementById("reset_btn");
let end_btn = document.getElementById("end_btn");

let imgArray = new Array();
imgArray[0] = "images/보.png";
imgArray[1] = "images/바위.png";
imgArray[2] = "images/가위.png";

function imagetime() {
  a = Math.floor(Math.random() * 3);
  img.src = imgArray[a];
}

setInterval(imagetime, 120);

let a;
let userscore = 0;
let computerscore = 0;

//가위를 클릭한 경우
scissors.onclick = () => {
  clearInterval(); // setInterval() 호출을 취소
  //승리하는 경우(컴퓨터 : 보를 낸 경우 )
  if (a == 0) {
    alert("승리");
    userscore++;
    user_score.textContent = userscore;
  } else if (a == 2) {
    //(컴퓨터 : 가위 낸 경우)
    alert("무승부");
  } //(컴퓨터 : 묵 낸 경우)
  else {
    alert("패배");
    computerscore++;
    computer_score.textContent = computerscore;
  }
};

//바위를 클릭한 경우
rock.onclick = () => {
  clearInterval();
  if (a == 0) {
    // (컴퓨터 : 보를 낸 경우)
    alert("패배");
    computerscore++;
    computer_score.textContent = computerscore;
  } else if (a == 2) {
    //(컴퓨터 : 가위낸 경우)
    alert("승리");
    userscore++;
    user_score.textContent = userscore;
  } //(컴퓨터 : 묵 낸경우)
  else {
    alert("무승부");
  }
};
//보를 클릭한 경우
paper.onclick = () => {
  clearInterval();
  if (a == 0) {
    // (컴퓨터 : 보를 낸 경우)
    alert("무승부");
  } else if (a == 2) {
    //(컴퓨터 : 가위낸 경우)
    alert("패배");
    computerscore++;
    computer_score.textContent = computerscore;
  } //(컴퓨터 : 묵 낸경우)
  else {
    alert("승리");
    userscore++;
    user_score.textContent = userscore;
  }
};

//다시 시작하기 클릭한 경우
reset_btn.onclick = () => {
  let check = confirm("다시 시작하시겠습니까?");
  if (check == true) {
    location.reload();
  }
};

//게임종료 클릭한 경우
end_btn.onclick = () => {
  let check = confirm("게임을 종료하시겠습니까?");
  if (check == true) {
    alert("게임 승리 : " + userscore + " 게임 패배 : " + computerscore);
    location.reload();
  }
};
