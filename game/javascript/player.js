var player = {
    /* The Phaser sprite object */
    ship: undefined,
    /* The create setup function
        @param {Phaser.Game} game - Phaser game object
    */
    canon: new projectile(projectileType.laserSmall, 40),
    create: function (game) {

        this.ship = game.add.sprite(500, 500, 'ship');
        this.ship.anchor.set(0.5);

        game.physics.p2.enable(this.ship, true);
        this.ship.body.setCircle(28);
        this.ship.body.mass = 8;
        game.camera.follow(this.ship);


        this.canon.create(game, this.ship);
    },
    update: function () {

    },
    fire: function () {
        this.canon.fire();
    }
}
