function asteroid() {
    this.asteroids = undefined;

    /* The create setup function
        @param {Phaser.Game} game - Phaser game object
    */
    this.create = function (game) {
        this.asteroids = game.add.group();
        this.asteroids.enableBody = true;
        this.asteroids.physicsBodyType = Phaser.Physics.P2JS;

        for (var i = 0; i < 20; i++) {
            var randomAsteroid = game.rnd.integerInRange(1, 4);

            if (randomAsteroid == asteroidType.stoneSmall) {
                var ball = this.asteroids.create(game.world.randomX, game.world.randomY, 'asteroid');

                //ball.anchor.set(getRandomIntInclusive(0, 1), getRandomIntInclusive(0, 1));
                ball.body.angularVelocity = game.rnd.realInRange(-4, 6);
                ball.body.setCircle(35, true);
                ball.body.mass = 100;
                ball.scale.setTo(0.3, 0.3);
                
            }
            if (randomAsteroid == asteroidType.stoneSmall) {
                var ball = this.asteroids.create(game.world.randomX, game.world.randomY, 'asteroid');

                //ball.anchor.set(getRandomIntInclusive(0, 1), getRandomIntInclusive(0, 1));
                ball.body.angularVelocity = game.rnd.realInRange(-4, 6);
                ball.body.setCircle(12, true);
                ball.body.mass = 10;
                ball.scale.setTo(0.1, 0.1);
                
            }

        }
    }
    this.update = function () {

    }
}

var asteroidType = {
    /* No projectile */
    none: 0,

    /* A small stone asteroid */
    stoneSmall: 1,
    /* A medium stone asteroid */
    stoneMedium: 2,
    /* A large stone asteroid */
    stoneLarge: 3,
    /* A extra large stone asteroid */
    stoneExtraLarge: 4
}
