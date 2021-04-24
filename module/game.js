import Player from './player.js';
import { createPlayer, playerWin, randomHP, createReloadButton, createElement} from './../createPlayer.js';
import { generateLogs, enemyAttack, playerAttack } from './../utils.js';



export const $formFight = document.querySelector('.control');
export const $arenas = document.querySelector('.arenas');

export class Game {
  start = () => {

    const player1 = new Player({
      player: 1,
      name: 'Sonya',
      hp: 100,
      img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',

    })

    const player2 = new Player({
      player: 2,
      name: 'Scorpion',
      hp: 100,
      img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',

    })

    generateLogs('start', player1, player2);

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

  }
}

