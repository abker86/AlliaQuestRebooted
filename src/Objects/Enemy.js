export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {
        this.load.spritesheet('ship', 'assets/spaceship.png', { frameWidth: 176, frameHeight: 96 });
    }

    create() {
        const ship = this.add.sprite(640, 360, 'ship');

        ship.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('ship', { start: 0, end: 2 }),
            frameRate: 15,
            repeat: -1
        });

        ship.play('fly');

        this.cursors = this.input.keyboard.createCursorKeys();
        this.ship = ship;
    }

    update() {
        if (this.cursors.up.isDown) {
            this.ship.y -= 4;
        } else if (this.cursors.down.isDown) {
            this.ship.y += 4;
        }

        if (this.cursors.left.isDown) {
            this.ship.x -= 4;
        } else if (this.cursors.right.isDown) {
            this.ship.x += 4;
        }
    }
}
