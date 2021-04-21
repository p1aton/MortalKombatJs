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

const logs = {
  start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
  end: [
    'Результат удара [playerWins]: [playerLose] - труп',
    '[playerLose] погиб от удара бойца [playerWins]',
    'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
  ],
  hit: [
    '[time], [playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага. [-player.hp], [hp/100]',
    '[time], [playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника. [-player.hp], [hp/100]',
    '[time], [playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента. [-player.hp], [hp/100]',
    '[time], [playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента. [-player.hp], [hp/100]',
    '[time], [playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента. [-player.hp], [hp/100]',
    '[time], [playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага. [-player.hp], [hp/100]',
    '[time], [playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника. [-player.hp], [hp/100]',
    '[time], [playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника. [-player.hp], [hp/100]',
    '[time], [playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника. [-player.hp], [hp/100]',
    '[time], [playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника. [-player.hp], [hp/100]',
    '[time], [playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника. [-player.hp], [hp/100]',
    '[time], [playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага. [-player.hp], [hp/100]',
    '[time], [playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента. [-player.hp], [hp/100]',
    '[time], [playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника. [-player.hp], [hp/100]',
    '[time], [playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента. [-player.hp], [hp/100]',
    '[time], [playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента. [-player.hp], [hp/100]',
    '[time], [playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника. [-player.hp], [hp/100]',
    '[time], [playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага. [-player.hp], [hp/100]',
  ],
  defence: [
    '[time], [playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
    '[time], [playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
    '[time], [playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
    '[time], [playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
    '[time], [playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
    '[time], [playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
    '[time], [playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
    '[time], [playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
  ],
  draw: 'Ничья - это тоже победа!'
};

const player1 = {
  player: 1,
  name: 'Sonya',
  hp: 100,
  elHP,
  renderHP,
  renderProgressbarHP,
  changeHP,
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
  elHP,
  renderHP,
  renderProgressbarHP,
  changeHP,
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
    drawLogs('draw');
  }

  return $winnerTitle;
}


function randomHP(num) {
  return Math.ceil(Math.random() * num);
}


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
  
  const text = logs[switchLook(type)][randomHP(logs[type].length)- 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name).replace('[time]', date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds()).replace('[-player.hp]', '- '+ hits).replace('[hp/100]', damage+'/100');
  
  const el = `<p>${text}</p>`;
  $chat.insertAdjacentHTML('afterbegin', el);
  
}


function startLogs(type, player1, player2) {
  const date = new Date();

  const start = logs[type].replace('[player1]', player1.name).replace('[player2]', player2.name).replace('[time]', date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds());

  const el = `<p>${start}</p>`;
  $chat.insertAdjacentHTML('afterbegin', el);
}

function endLogs(type, playerWins, playerLose) {

  const end = logs[type][randomHP(logs[type].length)- 1].replace('[playerWins]', playerWins).replace('[playerLose]', playerLose)

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
    generateLogs('defence', player2, player1)
  }

  if (player.hit !== enemy.defence) {
    player2.changeHP(player.value);
    player2.renderHP();
    generateLogs('hit', player1, player2, player.value, player2.hp)
    generateLogs('defence', player1, player2)
  }

  showResult();

  console.log('####: enemy', enemy);
  console.log('####: player', player);

})


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

startLogs('start', player1, player2);


