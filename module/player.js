

export class Player {
  constructor(props) {
    console.log(props);

    this.player = props.player;
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;

  }
  elHP = () => {
    console.log("🚀 ~ file: main.js ~ line 27 ~ changeHP ~ player", this)
    return document.querySelector('.player' + this.player + ' .life ');
  }

  renderProgressbarHP = () => {
    return this.elHP().style.width = this.hp + '%';

  }

  renderHP = () => {
    this.elHP();
    this.renderProgressbarHP();

  }

  changeHP = (num) => {

    this.hp -= num;

    if (this.hp <= 0) {
      this.hp = 0;
    }

  }
}



export default Player;