function startGame() {
    'use strict';
    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.Auto, 'game-container', {
        preload: preload,
        create: create,
        update: update,
        render: render
    });

    function preload() {
        game.load.image('space', 'game/graphics/background/notch.png');
        game.load.image('bullet', 'game/graphics/bullets.png');
        game.load.image('ship', 'game/graphics/ship.png');
        game.load.image('asteroid', 'game/graphics/background/g39.png');
    }
    var cursors;
    var asteroids = new asteroid();

    function create() {
        //  This will run in Canvas mode, so let's gain a little speed and display
        //game.renderer.clearBeforeRender = false;
        //game.renderer.roundPixels = true;

        /* Setup physics */
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.defaultRestitution = 0.9;

        //  A spacey background
        //game.add.tileSprite(0, 0, game.width, game.height, 'space');
        game.add.tileSprite(0, 0, 4096, 2160, 'space');
        game.world.setBounds(0, 0, 10000, 10000);

        asteroids.create(game);
        //  Our player ship
        player.create(game);
        player.ship.body.damping = 0.3;
        

        /* Game input */
        cursors = game.input.keyboard.createCursorKeys();
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);


    }

    function update() {
        

        if (cursors.left.isDown) {
            //player.ship.body.angularVelocity = -3;
            player.ship.body.rotateLeft(40);
        } else if (cursors.right.isDown) {
            player.ship.body.rotateRight(40);
        } else {
            player.ship.body.setZeroRotation();
        }

        if (cursors.up.isDown) {
            player.ship.body.thrust(1800);
        } else if (cursors.down.isDown) {
            player.ship.body.reverse(0);
        }
        else {
           // player.ship.body.setZeroVelocity();
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            player.fire();
        }
    }

    function screenWrap(sprite) {

        if (sprite.x < 0) {
            sprite.x = game.width;
        } else if (sprite.x > game.width) {
            sprite.x = 0;
        }

        if (sprite.y < 0) {
            sprite.y = game.height;
        } else if (sprite.y > game.height) {
            sprite.y = 0;
        }

    }

    function render() {
        // game.debug.spriteBounds(player.ship);
    }
}
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }
