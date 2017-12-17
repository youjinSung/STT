var myP;
function setup() {
  //createCanvas(windowWidth, windowHeight);
  
	noCanvas();
  //function preload() {
  	//myFont = loadFont('assets/AvenirNextLTPro-Demi.otf');}
  var speech;
  speech = new p5.SpeechRec();
  speech.onResult = function() {
    
    //textFont(myFont);
    myP = createP(speech.resultString);
    
    document.body.innerHTML += "<div><button onclick=\"listen()\">Click to listen again</button></div>";
  }
  speech.start();
}

function listen() {
  speech.start();
}
