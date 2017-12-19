function setup() {

  noCanvas();

  var speech;
  speech = new p5.SpeechRec();
  speech.onResult = function() {
    

    this.body.style.color='red';
    
    document.body.innerHTML ="<h2>"+speech.resultString+"</h2>";
    document.body.innerHTML += "<div><button onclick=\"listen()\">Click to listen again</button></div>";
  }
  speech.start();
}

function listen() {
  speech.start();
}
