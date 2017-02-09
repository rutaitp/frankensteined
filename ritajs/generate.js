var headlines;
var markov;
var newHeadline;
var newT;

function preload() {
	headlines = loadStrings('text/text.txt');
}

function setup() {
	noCanvas();

	//turn list to string
	newT = headlines.toString();
	// console.log(newT);

	//create the Markov generator
	markov = new MarkovGenerator(5, 2000);

	//feed the text into a Markov chain
	markov.feed(newT);

	for (var i=0; i<10; i++) {
		//generate some text and show it
		newHeadline = markov.generate();
		console.log(newHeadline);
	}	
}