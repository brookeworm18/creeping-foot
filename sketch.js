var song;

function preload(){
	song= loadSound("Mr_Badger.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(31, 33, 147);
	song.loop();  
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
	angleMode(DEGREES);

}

function draw() {
	var X = width/2;
	var Y = height/2;
  background(31, 33, 147);
	
  var rms = analyzer.getLevel();
	var NormRms = rms/.2 
  fill(0);
	ellipse(X, Y, 50+rms*800, 260-rms*700);
	ellipse(X, Y+100, 50+rms*800, 260-rms*700);
	ellipse(X+30, Y-140, 20+rms*100, 10+rms*200);
	ellipse(X, Y-140, 5+rms*100, 5+rms*200);
		ellipse(X-23, Y-135, 3+rms*80, 3+rms*160);
	ellipse(X-40, Y-130, 2+rms*70, 2+rms*140);
	ellipse(X-55, Y-120, rms*50, rms*100);
  stroke(0);
}
