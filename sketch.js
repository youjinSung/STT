var speech;
var font = 'Helvetica';

window.onload = function(){
	speech = new p5.SpeechRec();
	speech.onResult = function(){
		text=speech.resultString
		textFont(font);
		document.body.innerHTML = "You said: <h2>"+speech.resultString+"</h2>";
		document.body.innerHTML += "<div><button onclick=\"listen()\">Click to listen again</button></div>";
	}
	speech.start();
};
function listen(){
	speech.start();	
}
