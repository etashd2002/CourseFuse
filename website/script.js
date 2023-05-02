function showDiv() {
	var selectValue = document.getElementById("mySelect").value;

	if (selectValue === "default") {
		document.getElementById("option1Div").style.display = "none";
		document.getElementById("option2Div").style.display = "none";
		document.getElementById("option3Div").style.display = "none";
	} else if (selectValue === "option1") {
		document.getElementById("option1Div").style.display = "block";
		document.getElementById("option2Div").style.display = "none";
		document.getElementById("option3Div").style.display = "none";
	} else if (selectValue === "option2") {
		document.getElementById("option1Div").style.display = "none";
		document.getElementById("option2Div").style.display = "block";
		document.getElementById("option3Div").style.display = "none";
	} else if (selectValue === "option3") {
		document.getElementById("option1Div").style.display = "none";
		document.getElementById("option2Div").style.display = "none";
		document.getElementById("option3Div").style.display = "block";
	}
}
