$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == '1' ) {
    img = 'photos/futurama/fry.png';
  } else if ( key == '2' ) {
    img = 'photos/futurama/leela.png';
  } else if ( key == '3' ) {
    img = 'photos/futurama/bender.png';
  }  else if ( key == '4' ) {
    img = 'photos/futurama/farnsworth.png';
  }  else if ( key == '5' ) {
    img = 'photos/futurama/doctor.png';
  }  else if ( key == '6' ) {
    img = 'photos/futurama/zapp.png';
  }  else if ( key == '7' ) {
    img = 'photos/futurama/hedonism.png';
  }  else if ( key == '8' ) {
    img = 'photos/futurama/robotdevil.png';
  } else if ( key == '9' ) {
    img = 'photos/futurama/nibbler.png';
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
      audio = new Audio("photos/futurama/fry.mp3");
      break;
    case "2":
      audio = new Audio("photos/futurama/leela.mp3");
      break;
    case "3":
      audio = new Audio("photos/futurama/bender.mp3");
      break;
    case "4":
      audio = new Audio("photos/futurama/farnsworth.mp3");
      break;
    case "5":
      audio = new Audio("photos/futurama/zoidberg.mp3");
      break;
    case "6":
      audio = new Audio("photos/futurama/zapp.mp3");
      break;
    case "7":
      audio = new Audio("photos/futurama/hedonism.mp3");
      break;
    case "8":
      audio = new Audio("photos/futurama/robotdevil.mp3");
      break;
    case "9":
      audio = new Audio("photos/futurama/nibbler.mp3");
      break;
  }

  audio.play();
};