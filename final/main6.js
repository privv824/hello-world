$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == '1' ) {
    img = 'photos/spongebob/spongebob.png';
  } else if ( key == '2' ) {
    img = 'photos/spongebob/gary.png';
  } else if ( key == '3' ) {
    img = 'photos/spongebob/patrick.png';
  }  else if ( key == '4' ) {
    img = 'photos/spongebob/krabs.png';
  }  else if ( key == '5' ) {
    img = 'photos/spongebob/squidward.png';
  }  else if ( key == '6' ) {
    img = 'photos/spongebob/sandy.png';
  }  else if ( key == '7' ) {
    img = 'photos/spongebob/plankton.png';
  }  else if ( key == '8' ) {
    img = 'photos/spongebob/fred.png';
  } else if ( key == '9' ) {
    img = 'photos/spongebob/chocolate.png';
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
      audio = new Audio("photos/spongebob/spongebob.mp3");
      break;
    case "2":
      audio = new Audio("photos/spongebob/gary.mp3");
      break;
    case "3":
      audio = new Audio("photos/spongebob/patrick.mp3");
      break;
    case "4":
      audio = new Audio("photos/spongebob/krabs.mp3");
      break;
    case "5":
      audio = new Audio("photos/spongebob/squidward.mp3");
      break;
    case "6":
      audio = new Audio("photos/spongebob/sandy.mp3");
      break;
    case "7":
      audio = new Audio("photos/spongebob/plankton.mp3");
      break;
    case "8":
      audio = new Audio("photos/spongebob/fred.mp3");
      break;
    case "9":
      audio = new Audio("photos/spongebob/chocolate.mp3");
      break;
  }

  audio.play();
};