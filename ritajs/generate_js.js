var trumpSpeech;
var frankensteinText;

function preload() {
  trumpSpeech = loadStrings('text/speech.txt');
  frankensteinText  = loadStrings('text/frankenstein.txt');
}

function setup() {
  // console.log(trumpSpeech);
  // console.log(frankensteinText);

  noCanvas();

  //work with trump's speech
  var trumpSpeechString = trumpSpeech.toString();
  var tokens = trumpSpeechString.split(/(\W+)/);

  var posdict = {};

  for (var i = 0; i < tokens.length; i++) {
    var pos = RiTa.getPosTags(tokens[i]);
    //look for the first element to put into dictionary
    var first = pos[0];
    //if element first doesn't exist yet, create it as an array
    if (!posdict[first]) {
      posdict[first] = [];
    }
    //and push all the words that belong to it inside of it
    posdict[first].push(tokens[i]);
  }

  //work with frankenstein text
  var frankensteinTextString = frankensteinText.toString();
  var frankensteinTokens = frankensteinTextString.split(/(\W+)/);


  var posdictFrankenstein = {};

  for (var i = 0; i < frankensteinTokens.length; i++) {
    var frankensteinPos = RiTa.getPosTags(frankensteinTokens[i]);
    //look for the first element to put into dictionary
    var first = frankensteinPos[0];
    //if element first doesn't exist yet, create it as an array
    if (!posdictFrankenstein[first]) {
      posdictFrankenstein[first] = [];
    }
    //and push all the words that belong to it inside of it
    posdictFrankenstein[first].push(frankensteinTokens[i]);
  }

  //GENERATE NEW SPEECH
  var trumpSpeechNew = '';

  for (var i = 0; i < tokens.length; i++) {
    var frankensteinPos = RiTa.getPosTags(frankensteinPos[i]);
    var trumpPos = RiTa.getPosTags(tokens[i]);
    var first = trumpPos[0];
    if (first == 'nn') {
      // pick a random noun from posdictFrankenstein['n']
      trumpSpeechNew += random(posdictFrankenstein['nn']);
    } else if (first == 'jj') {
      // pick a random noun from posdictKen['n']
      trumpSpeechNew += random(posdictFrankenstein['jj']);
    } else if (first == 'dt') {
      trumpSpeechNew += random(posdictFrankenstein['dt']);
    } else if (first == 'uh') {
      trumpSpeechNew += random(posdictFrankenstein['uh']);
    } else if (first == 'vb') {
      trumpSpeechNew += random(posdictFrankenstein['vb']);
    } else {
      trumpSpeechNew += tokens[i];  
    }
  }

  console.log(trumpSpeechNew);

}