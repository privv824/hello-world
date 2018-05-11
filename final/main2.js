$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == '1' ) {
    img = 'photos/rickandmorty/rick.png';
  } else if ( key == '2' ) {
    img = 'photos/rickandmorty/morty.png';
  } else if ( key == '3' ) {
    img = 'photos/rickandmorty/summer.png';
  }  else if ( key == '4' ) {
    img = 'photos/rickandmorty/jerry.png';
  }  else if ( key == '5' ) {
    img = 'photos/rickandmorty/poopybutthole.png';
  }  else if ( key == '6' ) {
    img = 'photos/rickandmorty/scaryterry.gif';
  }  else if ( key == '7' ) {
    img = 'photos/rickandmorty/squanchy.png';
  }  else if ( key == '8' ) {
    img = 'photos/rickandmorty/mr.png';
  } else if ( key == '9' ) {
    img = 'photos/rickandmorty/birdperson.png';
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
      audio = new Audio("photos/rickandmorty/rick.mp3");
      break;
    case "2":
      audio = new Audio("photos/rickandmorty/morty.mp3");
      break;
    case "3":
      audio = new Audio("photos/rickandmorty/summer.mp3");
      break;
    case "4":
      audio = new Audio("photos/rickandmorty/jerry.mp3");
      break;
    case "5":
      audio = new Audio("photos/rickandmorty/poopybutthole.mp3");
      break;
    case "6":
      audio = new Audio("photos/rickandmorty/scaryterry.mp3");
      break;
    case "7":
      audio = new Audio("photos/rickandmorty/squanchy.mp3");
      break;
    case "8":
      audio = new Audio("photos/rickandmorty/mr.mp3");
      break;
    case "9":
      audio = new Audio("photos/rickandmorty/birdperson.mp3");
      break;
  }

  audio.play();
};