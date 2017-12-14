var speech;
window.onload = function(){
	speech = new p5.SpeechRec();
	speech.onResult = function(){
		document.body.innerHTML = "You said: <h2>"+speech.resultString+"</h2>";
		document.body.innerHTML += "<div><button onclick=\"listen()\">Click to listen again</button></div>";
	}
	speech.start();
};
function listen(){
	speech.start();	
}
