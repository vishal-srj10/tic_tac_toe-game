function chooseXorO() {
 
    // Setting DOM to all boxes or input field
    var b1, b1, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
     
 
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
    document.getElementById('print').innerHTML = "Player X Won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X Won');
}
else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
    document.getElementById('print').innerHTML = "Player X Won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;

    window.alert('Player X Won');
}
else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('print').innerHTML = "Player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    window.alert('Player X Won');
}
else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('print').innerHTML = "Player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    window.alert('Player X Won');
}
else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('print').innerHTML = "Player X Won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    window.alert('Player X Won');
}
else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
    document.getElementById('print').innerHTML = "Player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X Won');
}
else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
    document.getElementById('print').innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X Won');
}
else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
    document.getElementById('print').innerHTML = "Player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X Won');
}

// Checking of Player X finsh
// Checking for Player 0 starts, Is player 0 Won or
// not and after that disabled all the other fields
else if ((b1 == '0' || b1 == '0') && (b2 == '0' || b2 == '0') && (b3 == '0' || b3 == '0')) {
    document.getElementById('print').innerHTML = "Player O Won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player O Won');
}
else if ((b1 == '0' || b1 == '0') && (b4 == '0' || b4 == '0') && (b7 == '0' || b7 == '0')) {
    document.getElementById('print').innerHTML = "Player O Won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player O Won');
}
else if ((b7 == '0' || b7 == '0') && (b8 == '0' || b8 == '0') && (b9 == '0' || b9 == '0')) {
    document.getElementById('print').innerHTML = "Player O Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    alert('Player O Won');
}
else if ((b3 == '0' || b3 == '0') && (b6 == '0' || b6 == '0') && (b9 == '0' || b9 == '0')) {
    document.getElementById('print').innerHTML = "Player 0 Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    alert('Player O Won' , 'success');
}
else if ((b1 == '0' || b1 == '0') && (b5 == '0' || b5 == '0') && (b9 == '0' || b9 == '0')) {
    document.getElementById('print').innerHTML = "Player 0 Won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    alert('Player O Won');
}
else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||  b5 == '0') && (b7 == '0' || b7 == '0')) {
    document.getElementById('print').innerHTML = "Player O Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
     alert('Player O Won');
}
else if ((b2 == '0' || b2 == '0') && (b5 == '0' || b5 == '0') && (b8 == '0' || b8 == '0')) {
    document.getElementById('print').innerHTML = "Player O Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
     alert('Player O Won');
}
else if ((b4 == '0' || b4 == '0') && (b5 == '0' || b5 == '0') && (b6 == '0' || b6 == '0')) {
    document.getElementById('print').innerHTML = "Player 0 Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert('Player O Won');
}


// Checking of Player 0 finsh
    // Here, Checking about Tie
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X' || b2 == '0') && (b3 == 'X' || b3 == '0')
     && (b4 == 'X' || b4 == '0') && (b5 == 'X' || b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' || b8 == '0') && (b9 == 'X' || b9 == '0'))
         {
            document.getElementById('print').innerHTML = "Match Tie";
            alert('Match Tie');
        }
    else {
 
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print').innerHTML = "Player O Turn";
        }
    }
}
 
// Function to reset game
function reset() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
 
}
 
// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function checkturn3() {
    if (flag == 1) {
        document.getElementById("b1").value= "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
        document.getElementById("b1").style.color='#CC1F1F';
    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
        document.getElementById("b1").style.color='green';
    }
}
 
function checkturn4() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
        document.getElementById("b2").style.color='#CC1F1F';
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
        document.getElementById("b2").style.color='green';
    }
}
 
function checkturn5() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
        document.getElementById("b3").style.color='#CC1F1F';
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
        document.getElementById("b3").style.color='green';
    }
}
 
function checkturn6() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
        document.getElementById("b4").style.color='#CC1F1F';
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
        document.getElementById("b4").style.color='green';
    }
}
 
function checkturn7() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
        document.getElementById("b5").style.color='#CC1F1F';
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
        document.getElementById("b5").style.color='green';
    }
}
 
function checkturn8() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
        document.getElementById("b6").style.color='#CC1F1F';
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
        document.getElementById("b6").style.color='green';
    }
}
 
function checkturn9() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
        document.getElementById("b7").style.color='#CC1F1F';
    }
    else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
        document.getElementById("b7").style.color='green';
    }
}
 
function checkturn10() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
        document.getElementById("b8").style.color='#CC1F1F';
    }
    else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
        document.getElementById("b8").style.color='green';
    }
}
 
function checkturn11() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
        document.getElementById("b9").style.color='#CC1F1F';
    }
    else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;     
        document.getElementById("b9").style.color='green';
    }
}


  