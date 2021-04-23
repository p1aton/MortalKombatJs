import logs from './logs.js';
import { player1, player2 } from './player.js';
import { createPlayer, playerWin, randomHP, createReloadButton, createElement, showResult } from './createPlayer.js';
import { HIT, ATTACK } from './attackConst.js'


// const $randomButton = document.querySelector('.button');
const $chat = document.querySelector('.chat');
export const $formFight = document.querySelector('.control');
export const $arenas = document.querySelector('.arenas');



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

function getTime() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function getTextLog(type, playerName1, playerName2, hits, damage) {
  switch (type) {
    case 'start':
      return logs[type]
        .replace('[player1]', playerName1)
        .replace('[player2]', playerName2)
        .replace('[time]', getTime());
      break;
    case 'hit':
      return logs[type][randomHP(logs[type].length - 1) - 1]
        .replace('[playerKick]', playerName1)
        .replace('[playerDefence]', playerName2)
        .replace('[time]', getTime())
        .replace('[-player.hp]', '- ' + hits)
        .replace('[hp/100]', damage + '/100');
      break;
    case 'defence':
      return logs[type][randomHP(logs[type].length - 1) - 1]
        .replace('[playerKick]', playerName1)
        .replace('[playerDefence]', playerName2)
        .replace('[time]', getTime())
      break;
    case 'end':
      return logs[type][randomHP(logs[type].length - 1) - 1]
        .replace('[playerWins]', playerName1)
        .replace('[playerLose]', playerName2)
      break;
    case 'draw':
      return logs[type]
      break;

  }
}


export function generateLogs(type, player1 = {}, player2 = {}, hits, damage) {


  const text = getTextLog(type, player1.name, player2.name, hits, damage);

  const el = `<p>${text}</p>`;
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


export function init() {

  $arenas.appendChild(createPlayer(player1));
  $arenas.appendChild(createPlayer(player2));

  generateLogs('start', player1, player2)
}

init();


