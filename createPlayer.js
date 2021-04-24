import { generateLogs, enemyAttack, playerAttack } from './utils.js';
import {Game, $formFight, $arenas} from './module/game.js';




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


function playerWin(name) {
  const $winnerTitle = createElement('div', 'winnerTitle');
  if (name) {
    $winnerTitle.innerText = name + ' win';
  } else {
    $winnerTitle.innerText = 'draw'
    generateLogs('draw');
  }

  return $winnerTitle;
}


function randomHP(num) {
  return Math.ceil(Math.random() * num);
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

function createElement(tag, className) {
  const $tag = document.createElement(tag);

  if (className) {

    $tag.classList.add(className);

  }

  return $tag;
}




export { createPlayer, playerWin, randomHP, createReloadButton, createElement};