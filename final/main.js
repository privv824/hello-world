

$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == '1' ) {
    img = 'photos/familyguy/peter.png';
  } else if ( key == '2' ) {
    img = 'photos/familyguy/lois.png';
  } else if ( key == '3' ) {
    img = 'photos/familyguy/stewie.png';
  }  else if ( key == '4' ) {
    img = 'photos/familyguy/quagmire.png';
  }  else if ( key == '5' ) {
    img = 'photos/familyguy/meg.png';
  }  else if ( key == '6' ) {
    img = 'photos/familyguy/consuela.png';
  }  else if ( key == '7' ) {
    img = 'photos/familyguy/adam.png';
  }  else if ( key == '8' ) {
    img = 'photos/familyguy/herbert.png';
  } else if ( key == '9' ) {
    img = 'photos/familyguy/bruce.png';
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
      audio = new Audio("photos/familyguy/peter.mp3");
      break;
    case "2":
      audio = new Audio("photos/familyguy/lois.mp3");
      break;
    case "3":
      audio = new Audio("photos/familyguy/stewie.mp3");
      break;
    case "4":
      audio = new Audio("photos/familyguy/quagmire.mp3");
      break;
    case "5":
      audio = new Audio("photos/familyguy/meg.mp3");
      break;
    case "6":
      audio = new Audio("photos/familyguy/consuela.mp3");
      break;
    case "7":
      audio = new Audio("photos/familyguy/adam.mp3");
      break;
    case "8":
      audio = new Audio("photos/familyguy/herbet.mp3");
      break;
    case "9":
      audio = new Audio("photos/familyguy/bruce.mp3");
      break;
  }

  audio.play();
};