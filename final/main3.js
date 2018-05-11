$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == '1' ) {
    img = 'photos/simpsons/homer.png';
  } else if ( key == '2' ) {
    img = 'photos/simpsons/bart.png';
  } else if ( key == '3' ) {
    img = 'photos/simpsons/marge.png';
  }  else if ( key == '4' ) {
    img = 'photos/simpsons/lisa.png';
  }  else if ( key == '5' ) {
    img = 'photos/simpsons/moe.png';
  }  else if ( key == '6' ) {
    img = 'photos/simpsons/ralph.png';
  }  else if ( key == '7' ) {
    img = 'photos/simpsons/krusty.png';
  }  else if ( key == '8' ) {
    img = 'photos/simpsons/grandpa.png';
  } else if ( key == '9' ) {
    img = 'photos/simpsons/nelson.png';
  }

  // etc.

  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
  } else {
    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
});

var audio;

document.onkeypress = function (e) {
  switch(e.key) {
    case "1":
      audio = new Audio("photos/simpsons/homer.mp3");
      break;
    case "2":
      audio = new Audio("photos/simpsons/bart.mp3");
      break;
    case "3":
      audio = new Audio("photos/simpsons/marge.mp3");
      break;
    case "4":
      audio = new Audio("photos/simpsons/lisa.mp3");
      break;
    case "5":
      audio = new Audio("photos/simpsons/moe.mp3");
      break;
    case "6":
      audio = new Audio("photos/simpsons/ralph.mp3");
      break;
    case "7":
      audio = new Audio("photos/simpsons/krusty.mp3");
      break;
    case "8":
      audio = new Audio("photos/simpsons/grandpa.mp3");
      break;
    case "9":
      audio = new Audio("photos/simpsons/nelson.mp3");
      break;
  }

  audio.play();
};