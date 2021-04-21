import {player1, player2 } from './player.js';
import {generateLogs, $formFight, init, $arenas} from './main.js'







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

function showResult() {

  if (player1.hp === 0 || player2.hp === 0) {
    $formFight.disabled = true;
    createReloadButton();
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWin(player2.name))
    generateLogs('end', player2, player1);
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWin(player1.name))
    generateLogs('end', player1, player2);
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWin())
  }

}


export { createPlayer, playerWin, randomHP, createReloadButton, createElement, showResult};