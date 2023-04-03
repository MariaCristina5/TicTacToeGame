document.getElementById("cell1").addEventListener('click', ()=>{
  cell_1();
  myFunc();
})
document.getElementById("cell2").addEventListener('click', ()=>{
  cell_2();
  myFunc();
})
document.getElementById("cell3").addEventListener('click', ()=>{
  cell_3();
  myFunc();
})
document.getElementById("cell4").addEventListener('click', ()=>{
  cell_4();
  myFunc();
})
document.getElementById("cell5").addEventListener('click', ()=>{
  cell_5();
  myFunc();
})
document.getElementById("cell6").addEventListener('click', ()=>{
  cell_6();
  myFunc();
})
document.getElementById("cell7").addEventListener('click', ()=>{
  cell_7();
  myFunc();
})
document.getElementById("cell8").addEventListener('click', ()=>{
  cell_8();
  myFunc();
})
document.getElementById("cell9").addEventListener('click', ()=>{
  cell_9();
  myFunc();
})
document.getElementById("newgame-btn").onclick = gameReset;

function myFunc() {
  let cellOne,
    cellTwo,
    cellThree,
    cellFour,
    cellFive,
    cellSix,
    cellSeven,
    cellEight,
    cellNine;
  cellOne = document.getElementById("cell1").value;
  cellTwo = document.getElementById("cell2").value;
  cellThree = document.getElementById("cell3").value;
  cellFour = document.getElementById("cell4").value;
  cellFive = document.getElementById("cell5").value;
  cellSix = document.getElementById("cell6").value;
  cellSeven = document.getElementById("cell7").value;
  cellEight = document.getElementById("cell8").value;
  cellNine = document.getElementById("cell9").value;

  if (
    (cellOne == "x" || cellOne == "X") &&
    (cellTwo == "x" || cellTwo == "X") &&
    (cellThree == "x" || cellThree == "X")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player X won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell4").disabled = true;
    document.getElementById("cell5").disabled = true;
    document.getElementById("cell6").disabled = true;
    document.getElementById("cell7").disabled = true;
    document.getElementById("cell8").disabled = true;
    document.getElementById("cell9").disabled = true;
    
    } else if (
    (cellOne == "x" || cellOne == "X") &&
    (cellFour == "x" || cellFour == "X") &&
    (cellSeven == "x" || cellSeven == "X")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player X won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell2").disabled = true;
    document.getElementById("cell3").disabled = true;
    document.getElementById("cell5").disabled = true;
    document.getElementById("cell6").disabled = true;
    document.getElementById("cell8").disabled = true;
    document.getElementById("cell9").disabled = true;
  } else if (
    (cellSeven == "x" || cellSeven == "X") &&
    (cellEight == "x" || cellEight == "X") &&
    (cellNine == "x" || cellNine == "X")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player X won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell1").disabled = true;
    document.getElementById("cell2").disabled = true;
    document.getElementById("cell3").disabled = true;
    document.getElementById("cell4").disabled = true;
    document.getElementById("cell5").disabled = true;
    document.getElementById("cell6").disabled = true;
  } else if (
    (cellThree == "x" || cellThree == "X") &&
    (cellSix == "x" || cellSix == "X") &&
    (cellNine == "x" || cellNine == "X")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player X won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell1").disabled = true;
    document.getElementById("cell2").disabled = true;
    document.getElementById("cell4").disabled = true;
    document.getElementById("cell5").disabled = true;
    document.getElementById("cell7").disabled = true;
    document.getElementById("cell8").disabled = true;
  } else if (
    (cellOne == "x" || cellOne == "X") &&
    (cellFive == "x" || cellFive == "X") &&
    (cellNine == "x" || cellNine == "X")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player X won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell2").disabled = true;
    document.getElementById("cell3").disabled = true;
    document.getElementById("cell4").disabled = true;
    document.getElementById("cell6").disabled = true;
    document.getElementById("cell7").disabled = true;
    document.getElementById("cell8").disabled = true;
  } else if (
    (cellThree == "x" || cellThree == "X") &&
    (cellFive == "x" || cellFive == "X") &&
    (cellSeven == "x" || cellSeven == "X")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player X won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell1").disabled = true;
    document.getElementById("cell2").disabled = true;
    document.getElementById("cell4").disabled = true;
    document.getElementById("cell6").disabled = true;
    document.getElementById("cell8").disabled = true;
    document.getElementById("cell9").disabled = true;
  } else if (
    (cellTwo == "x" || cellTwo == "X") &&
    (cellFive == "x" || cellFive == "X") &&
    (cellEight == "x" || cellEight == "X")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player X won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell1").disabled = true;
    document.getElementById("cell3").disabled = true;
    document.getElementById("cell4").disabled = true;
    document.getElementById("cell6").disabled = true;
    document.getElementById("cell7").disabled = true;
    document.getElementById("cell9").disabled = true;
  } else if (
    (cellFour == "x" || cellFour == "X") &&
    (cellFive == "x" || cellFive == "X") &&
    (cellSix == "x" || cellSix == "X")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player X won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell1").disabled = true;
    document.getElementById("cell2").disabled = true;
    document.getElementById("cell3").disabled = true;
    document.getElementById("cell7").disabled = true;
    document.getElementById("cell8").disabled = true;
    document.getElementById("cell9").disabled = true;

    //Checking of player x finish
  } else if (
    (cellOne == "o" || cellOne == "O") &&
    (cellTwo == "o" || cellTwo == "O") &&
    (cellThree == "o" || cellThree == "O")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player O won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell4").disabled = true;
    document.getElementById("cell5").disabled = true;
    document.getElementById("cell6").disabled = true;
    document.getElementById("cell7").disabled = true;
    document.getElementById("cell8").disabled = true;
    document.getElementById("cell9").disabled = true;
  } else if (
    (cellOne == "o" || cellOne == "O") &&
    (cellFour == "o" || cellFour == "O") &&
    (cellSeven == "o" || cellSeven == "O")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player O won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell2").disabled = true;
    document.getElementById("cell3").disabled = true;
    document.getElementById("cell5").disabled = true;
    document.getElementById("cell6").disabled = true;
    document.getElementById("cell8").disabled = true;
    document.getElementById("cell9").disabled = true;
  } else if (
    (cellSeven == "o" || cellSeven == "O") &&
    (cellEight == "o" || cellEight == "O") &&
    (cellNine == "o" || cellNine == "O")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player O won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell1").disabled = true;
    document.getElementById("cell2").disabled = true;
    document.getElementById("cell3").disabled = true;
    document.getElementById("cell4").disabled = true;
    document.getElementById("cell5").disabled = true;
    document.getElementById("cell6").disabled = true;
  } else if (
    (cellThree == "o" || cellThree == "O") &&
    (cellSix == "o" || cellSix == "O") &&
    (cellNine == "o" || cellNine == "O")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player O won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell1").disabled = true;
    document.getElementById("cell2").disabled = true;
    document.getElementById("cell4").disabled = true;
    document.getElementById("cell5").disabled = true;
    document.getElementById("cell7").disabled = true;
    document.getElementById("cell8").disabled = true;
  } else if (
    (cellOne == "o" || cellOne == "O") &&
    (cellFive == "o" || cellFive == "O") &&
    (cellNine == "o" || cellNine == "O")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player O won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell2").disabled = true;
    document.getElementById("cell3").disabled = true;
    document.getElementById("cell4").disabled = true;
    document.getElementById("cell6").disabled = true;
    document.getElementById("cell7").disabled = true;
    document.getElementById("cell8").disabled = true;
  } else if (
    (cellThree == "o" || cellThree == "O") &&
    (cellFive == "o" || cellFive == "O") &&
    (cellSeven == "o" || cellSeven == "O")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player O won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell1").disabled = true;
    document.getElementById("cell2").disabled = true;
    document.getElementById("cell4").disabled = true;
    document.getElementById("cell6").disabled = true;
    document.getElementById("cell8").disabled = true;
    document.getElementById("cell9").disabled = true;
  } else if (
    (cellTwo == "o" || cellTwo == "O") &&
    (cellFive == "o" || cellFive == "O") &&
    (cellEight == "o" || cellEight == "O")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player O won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell1").disabled = true;
    document.getElementById("cell3").disabled = true;
    document.getElementById("cell4").disabled = true;
    document.getElementById("cell6").disabled = true;
    document.getElementById("cell7").disabled = true;
    document.getElementById("cell9").disabled = true;
  } else if (
    (cellFour == "o" || cellFour == "O") &&
    (cellFive == "o" || cellFive == "O") &&
    (cellSix == "o" || cellSix == "O")
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.querySelector('.pop-up-container').style.display = 'block';
    document.querySelector(".won-text").innerHTML = "Player O won";
    document.querySelector("#close-btn").addEventListener('click', () => {
      document.querySelector('.pop-up-container').style.display = "none";
  });

    document.getElementById("cell1").disabled = true;
    document.getElementById("cell2").disabled = true;
    document.getElementById("cell3").disabled = true;
    document.getElementById("cell7").disabled = true;
    document.getElementById("cell8").disabled = true;
    document.getElementById("cell9").disabled = true;

    //The logic behind the tie match
  } else if (
    (cellOne == "X" || cellOne == "O") &&
    (cellTwo == "X" || cellTwo == "O") &&
    (cellThree == "X" || cellThree == "O") &&
    (cellFour == "X" || cellFour == "O") &&
    (cellFive == "X" || cellFive == "O") &&
    (cellSix == "X" || cellSix == "O") &&
    (cellSeven == "X" || cellSeven == "O") &&
    (cellEight == "X" || cellEight == "O") &&
    (cellNine == "X" || cellNine == "O")
  ) {
    document.getElementById("print").innerHTML = "Match Tie";
  } else {
    //Printing Result
    if (flag == 1) {
      document.getElementById("print").innerHTML = "Player X turn";
    } else {
      document.getElementById("print").innerHTML = "Player O turn";
    }
  }
}

//function to reset the game
function gameReset() {
  location.reload();
  document.getElementById("cell1").value = "";
  document.getElementById("cell2").value = "";
  document.getElementById("cell3").value = "";
  document.getElementById("cell4").value = "";
  document.getElementById("cell5").value = "";
  document.getElementById("cell6").value = "";
  document.getElementById("cell7").value = "";
  document.getElementById("cell8").value = "";
  document.getElementById("cell9").value = "";
}

flag = 1;
//functios cheking for player's turn
function cell_1() {
  if (flag == 1) {
    document.getElementById("cell1").value = "X";
    document.getElementById("cell1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("cell1").value = "O";
    document.getElementById("cell1").disabled = true;
    flag = 1;
  }
}

function cell_2() {
  if (flag == 1) {
    document.getElementById("cell2").value = "X";
    document.getElementById("cell2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("cell2").value = "O";
    document.getElementById("cell2").disabled = true;
    flag = 1;
  }
}

function cell_3() {
  if (flag == 1) {
    document.getElementById("cell3").value = "X";
    document.getElementById("cell3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("cell3").value = "O";
    document.getElementById("cell3").disabled = true;
    flag = 1;
  }
}

function cell_4() {
  if (flag == 1) {
    document.getElementById("cell4").value = "X";
    document.getElementById("cell4").disabled = true;
    flag = 0;
  } else {
    document.getElementById("cell4").value = "O";
    document.getElementById("cell4").disabled = true;
    flag = 1;
  }
}

function cell_5() {
  if (flag == 1) {
    document.getElementById("cell5").value = "X";
    document.getElementById("cell5").disabled = true;
    flag = 0;
  } else {
    document.getElementById("cell5").value = "O";
    document.getElementById("cell5").disabled = true;
    flag = 1;
  }
}

function cell_6() {
  if (flag == 1) {
    document.getElementById("cell6").value = "X";
    document.getElementById("cell6").disabled = true;
    flag = 0;
  } else {
    document.getElementById("cell6").value = "O";
    document.getElementById("cell6").disabled = true;
    flag = 1;
  }
}

function cell_7() {
  if (flag == 1) {
    document.getElementById("cell7").value = "X";
    document.getElementById("cell7").disabled = true;
    flag = 0;
  } else {
    document.getElementById("cell7").value = "O";
    document.getElementById("cell7").disabled = true;
    flag = 1;
  }
}

function cell_8() {
  if (flag == 1) {
    document.getElementById("cell8").value = "X";
    document.getElementById("cell8").disabled = true;
    flag = 0;
  } else {
    document.getElementById("cell8").value = "O";
    document.getElementById("cell8").disabled = true;
    flag = 1;
  }
}

function cell_9() {
  if (flag == 1) {
    document.getElementById("cell9").value = "X";
    document.getElementById("cell9").disabled = true;
    flag = 0;
  } else {
    document.getElementById("cell9").value = "O";
    document.getElementById("cell9").disabled = true;
    flag = 1;
  }
}
