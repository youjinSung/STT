var speak;
window.onload = function(){
	speak = new p5.Speech();
};
function changeRate(ref){
	speak.setRate(ref.value);
}
function changePitch(ref){
	speak.setPitch(ref.value);
}
function changeVolume(ref){
	speak.setVolume(ref.value);
}
function say(){
	if( typeof speak != undefined) {
		var userText = document.getElementById("message").value;
		speak.speak(userText);
	} else {
		alert("Not Supported By Browser");
	}
}