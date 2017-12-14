var speech;
window.onload = function(){
	speech = new p5.SpeechRec();
	speech.onResult = function(){
		//speech.resultString에 글꼴 주기
		document.body.innerHTML = "You said: <h2>"+speech.resultString+"</h2>";
		document.body.innerHTML += "<div><button onclick=\"listen()\">Click to listen again</button></div>";
	}
	speech.start();
};
function listen(){
	speech.start();	
}
