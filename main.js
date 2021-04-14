const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $root = document.querySelector('.root');


const player1 = {
  player: 1,
  name: 'Sonya',
  hp: 100,
  elHP: elHP,
  renderHP: renderHP,
  renderProgressbarHP: renderProgressbarHP,
  changeHP: changeHP,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['Bomb', 'Bojutsu', 'Axe'],
  attack: function (name) {
    console.log(name + ' ' + 'Fight...')
  }
}

const player2 = {
  player: 2,
  name: 'Scorpion',
  hp: 100,
  elHP: elHP,
  renderHP: renderHP,
  renderProgressbarHP: renderProgressbarHP,
  changeHP: changeHP,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Chainsaw', 'Chakram', 'Cleaver'],
  attack: function (name) {
    console.log(name + ' ' + 'Fight...')
  }
}

function elHP() {
  console.log("🚀 ~ file: main.js ~ line 27 ~ changeHP ~ player", this)
  return document.querySelector('.player' + this.player + ' .life ');
}

function renderProgressbarHP() {
  return this.elHP().style.width = this.hp + '%';

}

function renderHP() {
  this.elHP();
  this.renderProgressbarHP();

}

function changeHP(num) {

  this.hp -= num;

  if (this.hp <= 0) {
    this.hp = 0;
  }

}

function playerWin(name) {
  const $winnerTitle = createElement('div', 'winnerTitle');
  if (name) {
    $winnerTitle.innerText = name + ' win';
  } else {
    $winnerTitle.innerText = 'draw'
  }

  return $winnerTitle;
}


function randomHP(num) {
  return Math.ceil(Math.random() * num);
}

$randomButton.addEventListener('click', function () {
  console.log('Click')

  player1.changeHP(randomHP(20));
  player2.changeHP(randomHP(20));

  player1.renderHP();
  player2.renderHP();

  if (player1.hp === 0 || player2.hp === 0) {
    $randomButton.disabled = true;
    createReloadButton();
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWin(player2.name))
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWin(player1.name))
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWin())
  }


})

function createElement(tag, className) {
  $tag = document.createElement(tag);

  if (className) {

    $tag.classList.add(className);

  }

  return $tag;
}


function createReloadButton() {

  const $reloadDiv = createElement('div', 'reloadWrap');
  $arenas.appendChild($reloadDiv);
  
  const $reloadWrap = createElement('button', 'button')
  $reloadWrap.innerText = 'Restart';

  $reloadDiv.appendChild($reloadWrap);

  $reloadWrap.addEventListener('click', function () {
    console.log('Click2');
    
    window.location.reload();
    
    
  })

}


function createPlayer(object) {
  const $player = createElement('div', 'player' + object.player);

  const $progressbar = createElement('div', 'progressbar');
  $player.appendChild($progressbar);

  const $life = createElement('div', 'life');
  $life.style.width = '100%';
  $life.innerText = object.hp;
  $progressbar.appendChild($life);

  const $name = createElement('div', 'name');
  $name.innerText = object.name;
  $progressbar.appendChild($name);

  const $character = createElement('div', 'character');
  $player.appendChild($character);

  const $img = createElement('img');
  $img.src = object.img;
  $character.appendChild($img);

  return $player;

}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));


