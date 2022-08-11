var ran;

function guess() {
    var num1 = document.getElementById("user").value;
    if (num1 == "") {
        alert('숫자를 입력하세요');
    }
    else if (num1 == ran) {
        alert('정답입니다.');
    }
    else {
        if (ran > num1) {
            alert(num1 + '보다 큽니다.');
        }
        else {
            alert(num2 + '보다 작습니다.');
        }
    }
    document.getElementById("guesses").value;
}

function gameReset() {
    ran = Math.floor(Math.random() * 100 + 1);
    count = 1;
    document.getElementById("area").innerHTML = "";
    document.getElementById("result").value = "";
    document.getElementById("guesses").value = "";
    document.getElementById("user").value = "";
}

window.onload = function () {
    document.getElementById("resetbtn").addEventListener('click', function () {
        gameReset();
    });
    gameReset();
}