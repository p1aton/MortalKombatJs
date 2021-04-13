const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button')

const player1 = {
  player: 1,
  name: 'Sonya',
  hp: 100,
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
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Chainsaw', 'Chakram', 'Cleaver'],
  attack: function (name) {
    console.log(name + ' ' + 'Fight...')
  }
}

function changeHP(player) {
  console.log("🚀 ~ file: main.js ~ line 27 ~ changeHP ~ player", player)
  const $playerLife = document.querySelector('.player' + player.player + ' .life');

  player.hp -= randomHP(20);

  $playerLife.style.width = player.hp + '%';


  if (player.hp <= 0) {

    player.hp = 0;
    $randomButton.disabled = true;
    player.hp === player1.hp ? $arenas.appendChild(playerWin(player2.name)) : $arenas.appendChild(playerWin(player1.name));
  }
}

function playerWin(name) {
  const $winnerTitle = createElement('div', 'winnerTitle');
  $winnerTitle.innerText = name + ' win';

  return $winnerTitle;
}


function playerLose(name) {
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = name + ' lose';

  return $loseTitle;
}

function randomHP(num) {
  return Math.ceil(Math.random() * num);
}

$randomButton.addEventListener('click', function () {
  console.log('Click')

  changeHP(player1);
  changeHP(player2);

})

function createElement(tag, className) {
  $tag = document.createElement(tag);

  if (className) {

    $tag.classList.add(className);

  }

  return $tag;
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
