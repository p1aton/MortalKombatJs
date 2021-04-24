import logs from './../logs.js';
import { HIT, ATTACK } from './../attackConst.js';
import { createPlayer, playerWin, randomHP, createReloadButton, createElement} from './../createPlayer.js';
import {Game, $formFight, $arenas} from './module/game.js';

// const $randomButton = document.querySelector('.button');
const $chat = document.querySelector('.chat');



export function enemyAttack() {
  const hit = ATTACK[randomHP(3) - 1];
  const defence = ATTACK[randomHP(3) - 1];

  return {
    value: randomHP(HIT[hit]),
    hit,
    defence,
  }
}


export function playerAttack() {
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