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
    var balls;


    function create() {
        //  This will run in Canvas mode, so let's gain a little speed and display
        //game.renderer.clearBeforeRender = false;
        //game.renderer.roundPixels = true;

        /* Setup physics */
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.defaultRestitution = 0.9;

        //  A spacey background
        game.add.tileSprite(500, 500, game.width, game.height, 'space');
        //game.add.tileSprite(0, 0, 100000, 100000, 'space');
        game.world.setBounds(0, 0, 1000, 1000);

        //  Our player ship
        player.create(game);

            balls = game.add.group();
    balls.enableBody = true;
    balls.physicsBodyType = Phaser.Physics.P2JS;

    for (var i = 0; i < 50; i++)
    {
        var ball = balls.create(game.world.randomX, game.world.randomY, 'ball');
        ball.body.setCircle(16);
    }

        /* Game input */
        cursors = game.input.keyboard.createCursorKeys();
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);


    }

    function update() {
        //player.ship.body.setZeroVelocity();

        if (cursors.left.isDown) {
            //player.ship.body.angularVelocity = -3;
            player.ship.body.rotateLeft(80);
        } else if (cursors.right.isDown) {
            player.ship.body.rotateRight(80);
        } else {
            player.ship.body.setZeroRotation();
        }

        if (cursors.up.isDown) {
            player.ship.body.thrust(400);
        } else if (cursors.down.isDown) {
            player.ship.body.reverse(0);
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
