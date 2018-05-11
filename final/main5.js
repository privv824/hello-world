$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == '1' ) {
    img = 'photos/bobsburgers/bob.png';
  } else if ( key == '2' ) {
    img = 'photos/bobsburgers/linda.png';
  } else if ( key == '3' ) {
    img = 'photos/bobsburgers/gene.png';
  }  else if ( key == '4' ) {
    img = 'photos/bobsburgers/louise.png';
  }  else if ( key == '5' ) {
    img = 'photos/bobsburgers/tina.png';
  }  else if ( key == '6' ) {
    img = 'photos/bobsburgers/teddy.png';
  }  else if ( key == '7' ) {
    img = 'photos/bobsburgers/jimmy.png';
  }  else if ( key == '8' ) {
    img = 'photos/bobsburgers/zeke.png';
  } else if ( key == '9' ) {
    img = 'photos/bobsburgers/jocelyn.png';
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
      audio = new Audio("photos/bobsburgers/bob.mp3");
      break;
    case "2":
      audio = new Audio("photos/bobsburgers/linda.mp3");
      break;
    case "3":
      audio = new Audio("photos/bobsburgers/gene.mp3");
      break;
    case "4":
      audio = new Audio("photos/bobsburgers/louise.mp3");
      break;
    case "5":
      audio = new Audio("photos/bobsburgers/tina.mp3");
      break;
    case "6":
      audio = new Audio("photos/bobsburgers/teddy.mp3");
      break;
    case "7":
      audio = new Audio("photos/bobsburgers/jimmy.mp3");
      break;
    case "8":
      audio = new Audio("photos/bobsburgers/zeke.mp3");
      break;
    case "9":
      audio = new Audio("photos/bobsburgers/jocelyn.mp3");
      break;
  }

  audio.play();
};