export const player1 = {
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

export const player2 = {
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

export function elHP() {
  console.log("🚀 ~ file: main.js ~ line 27 ~ changeHP ~ player", this)
  return document.querySelector('.player' + this.player + ' .life ');
}

export function renderProgressbarHP() {
  return this.elHP().style.width = this.hp + '%';

}

export function renderHP() {
  this.elHP();
  this.renderProgressbarHP();

}

export function changeHP(num) {

  this.hp -= num;

  if (this.hp <= 0) {
    this.hp = 0;
  }

}