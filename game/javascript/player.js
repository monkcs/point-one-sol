var player = {
    /* The Phaser sprite object */
    ship: undefined,
    /* The create setup function
        @param {Phaser.Game} game - Phaser game object
    */
    canon: new projectile(projectileType.laserSmall, 40),
    create: function (game) {

        this.ship = game.add.sprite(50000,50000, 'ship');
        this.ship.anchor.set(0.5);
                //  and its physics settings
        game.physics.enable(this.ship, Phaser.Physics.ARCADE);
        game.camera.follow(this.ship);

        this.ship.body.drag.set(100);
        this.ship.body.maxVelocity.set(9000);
        this.canon.create(game, this.ship);
    },
    update : function () {

    },
    fire: function () {
        this.canon.fire();
    }
}
