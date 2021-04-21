import logs from './logs.js';
import {player1, player2 } from './player.js';

const $arenas = document.querySelector('.arenas');
// const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');

const $chat = document.querySelector('.chat');

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}


const ATTACK = ['head', 'body', 'foot'];


function playerWin(name) {
  const $winnerTitle = createElement('div', 'winnerTitle');
  if (name) {
    $winnerTitle.innerText = name + ' win';
  } else {
    $winnerTitle.innerText = 'draw'
    drawLogs('draw');
  }

  return $winnerTitle;
}


function randomHP(num) {
  return Math.ceil(Math.random() * num);
}


function createElement(tag, className) {
  const $tag = document.createElement(tag);

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



function enemyAttack() {
  const hit = ATTACK[randomHP(3) - 1];
  const defence = ATTACK[randomHP(3) - 1];

  return {
    value: randomHP(HIT[hit]),
    hit,
    defence,
  }
}


function playerAttack() {
  const attack = {};

  for (let item of $formFight) {
    if (item.checked && item.name === 'hit') {
      attack.value = randomHP(HIT[item.value]);
      attack.hit = item.value;
    }

    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }

    item.checked = false;
  }

  return attack;

}

function showResult() {

  if (player1.hp === 0 || player2.hp === 0) {
    $formFight.disabled = true;
    createReloadButton();
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWin(player2.name))
    endLogs('end', player2.name, player1.name);
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWin(player1.name))
    endLogs('end', player1.name, player2.name);
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWin())
  }

}

function switchLook(type) {
  switch(type) {
    case 'hit':
      return type;
    case 'defence':
      return type;

  }
}

function generateLogs(type, player1, player2, hits, damage) {
  const date = new Date();
  
  const text = logs[switchLook(type)][randomHP(logs[type].length)- 1]
    .replace('[playerKick]', player1.name)
    .replace('[playerDefence]', player2.name)
    .replace('[time]', date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds())
    .replace('[-player.hp]', '- '+ hits)
    .replace('[hp/100]', damage+'/100');
  
  const el = `<p>${text}</p>`;
  $chat.insertAdjacentHTML('afterbegin', el);
  
}


function startLogs(type, player1, player2) {
  const date = new Date();

  const start = logs[type]
    .replace('[player1]', player1.name)
    .replace('[player2]', player2.name)
    .replace('[time]', date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds());

  const el = `<p>${start}</p>`;
  $chat.insertAdjacentHTML('afterbegin', el);
}

function endLogs(type, playerWins, playerLose) {

  const end = logs[type][randomHP(logs[type].length)- 1]
    .replace('[playerWins]', playerWins)
    .replace('[playerLose]', playerLose)

  const el = `<p>${end}</p>`;
  $chat.insertAdjacentHTML('afterbegin', el);
}

function drawLogs(type) {
  const draw = logs[type]

  const el = `<p>${draw}</p>`;
  $chat.insertAdjacentHTML('afterbegin', el);
}

$formFight.addEventListener('submit', function (e) {
  e.preventDefault();

  const enemy = enemyAttack();
  const player = playerAttack();


  if (enemy.hit !== player.defence) {
    player1.changeHP(enemy.value);
    player1.renderHP();
    generateLogs('hit', player2, player1, enemy.value, player1.hp)
  } else {
    generateLogs('defence', player2, player1)
  }

  if (player.hit !== enemy.defence) {
    player2.changeHP(player.value);
    player2.renderHP();
    generateLogs('hit', player1, player2, player.value, player2.hp)
  } else {
    generateLogs('defence', player1, player2)
  }

  showResult();

  console.log('####: enemy', enemy);
  console.log('####: player', player);

})


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

startLogs('start', player1, player2);