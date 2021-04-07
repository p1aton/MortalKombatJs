const player1 = {
  name: 'Sonya',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['Bomb', 'Bojutsu', 'Axe'], 
  attack: function(name) {
    console.log(name + ' ' + 'Fight...')
  }
}

const player2 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Chainsaw', 'Chakram', 'Cleaver'], 
  attack: function(name) {
    console.log(name + ' ' + 'Fight...')
  }
}

player1.attack(player1.name);

function createPlayer(player, object) {
  const $player1 = document.createElement('div');
  $player1.classList.add(player);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  $player1.appendChild($progressbar);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = '100%';
  $life.innerText = object.hp
  $progressbar.appendChild($life);

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = object.name;
  $progressbar.appendChild($name);

  const $character = document.createElement('div');
  $character.classList.add('character');
  $player1.appendChild($character);

  const $img = document.createElement('img');
  $img.src = object.img;
  $character.appendChild($img)

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player1)
  
}

createPlayer('player1', player1);
createPlayer('player2', player2);