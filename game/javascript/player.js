var player = {
    /* The Phaser sprite object */
    ship: undefined,
    /* The create setup function
        @param {Phaser.Game} game - Phaser game object
    */
    canon: new projectile(projectileType.laserSmall, 40),
    create: function (game) {

        this.ship = game.add.sprite(50000, 50000, 'ship');
        this.ship.anchor.set(0.5);

        //  Create our physics body - a 28px radius circle. Set the 'false' parameter below to 'true' to enable debugging
        game.physics.p2.enable(this.ship, true);
        this.ship.body.setCircle(28);

        game.camera.follow(this.ship);


        this.canon.create(game, this.ship);
    },
    update: function () {

    },
    fire: function () {
        this.canon.fire();
    }
}
