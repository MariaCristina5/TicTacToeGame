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
    cellOne == "x" ||
    (cellOne == "X" && cellTwo == "x") ||
    (cellTwo == "X" && cellThree == "x") ||
    cellThree == "X"
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.getElementById("print").innerHTML = "Player X won";

    document.getElementById("cell4").disable = true;
    document.getElementById("cell5").disable = true;
    document.getElementById("cell6").disable = true;
    document.getElementById("cell7").disable = true;
    document.getElementById("cell8").disable = true;
    document.getElementById("cell9").disable = true;
  }

  if (
    cellOne == "x" ||
    (cellOne == "X" && cellFour == "x") ||
    (cellFour == "X" && cellSeven == "x") ||
    cellSeven == "X"
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.getElementById("print").innerHTML = "Player X won";

    document.getElementById("cell2").disable = true;
    document.getElementById("cell3").disable = true;
    document.getElementById("cell5").disable = true;
    document.getElementById("cell6").disable = true;
    document.getElementById("cell8").disable = true;
    document.getElementById("cell9").disable = true;
  }

  if (
    cellSeven == "x" ||
    (cellSeven == "X" && cellEight == "x") ||
    (cellEight == "X" && cellNine == "x") ||
    cellNine == "X"
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.getElementById("print").innerHTML = "Player X won";

    document.getElementById("cell1").disable = true;
    document.getElementById("cell2").disable = true;
    document.getElementById("cell3").disable = true;
    document.getElementById("cell4").disable = true;
    document.getElementById("cell5").disable = true;
    document.getElementById("cell6").disable = true;
  }

  if (
    cellThree == "x" ||
    (cellThree == "X" && cellSix == "x") ||
    (cellSix == "X" && cellNine == "x") ||
    cellNine == "X"
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.getElementById("print").innerHTML = "Player X won";

    document.getElementById("cell1").disable = true;
    document.getElementById("cell2").disable = true;
    document.getElementById("cell4").disable = true;
    document.getElementById("cell5").disable = true;
    document.getElementById("cell7").disable = true;
    document.getElementById("cell8").disable = true;
  }

  if (
    cellOne == "x" ||
    (cellOne == "X" && cellFive == "x") ||
    (cellFive == "X" && cellNine == "x") ||
    cellNine == "X"
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.getElementById("print").innerHTML = "Player X won";

    document.getElementById("cell2").disable = true;
    document.getElementById("cell3").disable = true;
    document.getElementById("cell4").disable = true;
    document.getElementById("cell6").disable = true;
    document.getElementById("cell7").disable = true;
    document.getElementById("cell8").disable = true;
  }

  if (
    cellThree == "x" ||
    (cellThree == "X" && cellFive == "x") ||
    (cellFive == "X" && cellSeven == "x") ||
    cellSeven == "X"
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.getElementById("print").innerHTML = "Player X won";

    document.getElementById("cell1").disable = true;
    document.getElementById("cell2").disable = true;
    document.getElementById("cell4").disable = true;
    document.getElementById("cell6").disable = true;
    document.getElementById("cell8").disable = true;
    document.getElementById("cell9").disable = true;
  }

  if (
    cellTwo == "x" ||
    (cellTwo == "X" && cellFive == "x") ||
    (cellFive == "X" && cellEight == "x") ||
    cellEight == "X"
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.getElementById("print").innerHTML = "Player X won";

    document.getElementById("cell1").disable = true;
    document.getElementById("cell3").disable = true;
    document.getElementById("cell4").disable = true;
    document.getElementById("cell6").disable = true;
    document.getElementById("cell7").disable = true;
    document.getElementById("cell9").disable = true;
  }

  if (
    cellFour == "x" ||
    (cellFour == "X" && cellFive == "x") ||
    (cellFive == "X" && cellSix == "x") ||
    cellSix == "X"
  ) {
    //de afisat intr-un fel un text un container in care sa mentioneze ca a invins jucatorul
    document.getElementById("print").innerHTML = "Player X won";

    document.getElementById("cell1").disable = true;
    document.getElementById("cell2").disable = true;
    document.getElementById("cell3").disable = true;
    document.getElementById("cell7").disable = true;
    document.getElementById("cell8").disable = true;
    document.getElementById("cell9").disable = true;
  }
}
