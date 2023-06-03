class AlignAnimations extends Phaser.Scene {

    
    constructor ()
    {
        super();
    };

   
preload () {

    
    this.load.spritesheet('animation', 'assets/sprites/spritesheet.png', {frameWidth: 24, frameHeight: 24});
};


create () {

    this.anims.create({
        key: 'move',
        frames: this.anims.generateFrameNumbers('animation'),
        frameRate: 2,
        repeat: -1
    });

    const sprites = []

    for (let i = 0; i < 240; i++) {
        sprites.push(this.add.sprite(0, 0, 'animation').play('move'));     
    }    

    Phaser.Actions.GridAlign(sprites, {
        width: 24,
        cellWidth: 30,
        cellHeight: 30,
        x: 50,
        y: 100
    });
};

};


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: AlignAnimations

 };

 // creación del juego 
 const game = new Phaser.Game(config);
