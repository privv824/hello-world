$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == '1' ) {
    img = 'photos/southpark/cartman.png';
  } else if ( key == '2' ) {
    img = 'photos/southpark/kyle.png';
  } else if ( key == '3' ) {
    img = 'photos/southpark/stan.png';
  }  else if ( key == '4' ) {
    img = 'photos/southpark/kenny.png';
  }  else if ( key == '5' ) {
    img = 'photos/southpark/randy.png';
  }  else if ( key == '6' ) {
    img = 'photos/southpark/garrison.png';
  }  else if ( key == '7' ) {
    img = 'photos/southpark/tweek.png';
  }  else if ( key == '8' ) {
    img = 'photos/southpark/mackey.png';
  } else if ( key == '9' ) {
    img = 'photos/southpark/principal.png';
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
      audio = new Audio("photos/southpark/cartman.mp3");
      break;
    case "2":
      audio = new Audio("photos/southpark/kyle.mp3");
      break;
    case "3":
      audio = new Audio("photos/southpark/stan.mp3");
      break;
    case "4":
      audio = new Audio("photos/southpark/kenny.mp3");
      break;
    case "5":
      audio = new Audio("photos/southpark/randy.mp3");
      break;
    case "6":
      audio = new Audio("photos/southpark/garrison.mp3");
      break;
    case "7":
      audio = new Audio("photos/southpark/tweek.mp3");
      break;
    case "8":
      audio = new Audio("photos/southpark/mackey.mp3");
      break;
    case "9":
      audio = new Audio("photos/southpark/principal.mp3");
      break;
  }

  audio.play();
};