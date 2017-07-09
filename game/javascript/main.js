function startGame() {
    'use strict';
    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.Auto, 'game-container', {
        preload: preload,
        create: create,
        update: update,
        render: render
    });

    function preload() {
        game.load.image('space', 'assets/skies/deep-space.jpg');
        game.load.image('bullet', 'game/graphics/bullets.png');
        game.load.image('ship', 'game/graphics/ship.png');
    }
    var cursors;



    function create() {
        //  This will run in Canvas mode, so let's gain a little speed and display
        game.renderer.clearBeforeRender = false;
        game.renderer.roundPixels = true;

        //  We need arcade physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //  A spacey background
        game.add.tileSprite(50000, 50000, game.width, game.height, 'space');
        //game.add.tileSprite(0, 0, 100000, 100000, 'space');
        player.create(game);

        //  Our player ship
        game.world.setBounds(0,0, 100000, 100000);

        //  Game input
        cursors = game.input.keyboard.createCursorKeys();
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);


    }

    function update() {
        if (cursors.up.isDown) {
            game.physics.arcade.accelerationFromRotation(player.ship.rotation, 200, player.ship.body.acceleration);
        } else {
            player.ship.body.acceleration.set(0);
        }

        if (cursors.left.isDown) {
            player.ship.body.angularVelocity = -300;
        }
        else if (cursors.right.isDown) {
            player.ship.body.angularVelocity = 300;
        }
        else {
            player.ship.body.angularVelocity = 0;
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            player.fire();
        }

        //screenWrap(player.ship);

        //bullets.forEachExists(screenWrap, this);
        //render();
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
            game.debug.spriteBounds(player.ship);
    }

}
