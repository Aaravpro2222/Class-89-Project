var LocalStorage_P1 = localStorage.getItem("p1_name")
var LocalStorage_P2 = localStorage.getItem("p2_name")
document.getElementById("p1").innerHTML = LocalStorage_P1 +  " :"
document.getElementById("p2").innerHTML = LocalStorage_P2 +  " :"

var Score_P1 = 0
var Score_P2 = 0
document.getElementById("p1_score").innerHTML = Score_P1
document.getElementById("p2_score").innerHTML = Score_P2
document.getElementById ("player_question").innerHTML = "Question Turn - " + LocalStorage_P1
document.getElementById("player_answer").innerHTML = "Answer Turn - " + LocalStorage_P2

function SendNumber(){
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number1 + " X " + number2 + "</h4>"
input_box = "<br>Answer : <input type='text' id = 'input_check_box'>";
check_button = "<br><br> <button class='btn btn-info' onclick='Check()'>Check</button>";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML= row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}
