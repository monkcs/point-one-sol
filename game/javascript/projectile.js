function projectile(type, maxNumber) {
    /* The Phaser sprite object */
    this.shots = undefined;
    this.shot = undefined;
    /* The type of projectile */
    this.type = type;
    /* The max number of shots possible to fire at once */
    this.maxNumber = maxNumber;
    /* Th enumber of damage points */
    this.damagePoints = undefined;

    this.shotTime = 0;
    this._game = undefined;
    this._ship = undefined;

    /* The create setup function
        @param {Phaser.Game} game - Phaser game object
    */
    this.create = function (game, ship) {
        this._game = game;
        this._ship = ship;

        this.shots = game.add.group();
        this.shots.enableBody = true;
        this.shots.physicsBodyType = Phaser.Physics.ARCADE;

        /* Setup different settings depending on projectile type */
        if (this.type == projectileType.laserSmall) {
            this.shots.createMultiple(this.maxNumber, 'bullet');
            this.shots.setAll('anchor.x', 0.5);
            this.shots.setAll('anchor.y', 0.5);
            this.damagePoints = 2;
        }
        if (this.type == projectileType.laserMedium) {
            this.shots.createMultiple(this.maxNumber, 'bullet');
            this.shots.setAll('anchor.x', 0.5);
            this.shots.setAll('anchor.y', 0.5);
            this.damagePoints = 8;
        }
        if (this.type == projectileType.laserLarge) {
            this.shots.createMultiple(this.maxNumber, 'bullet');
            this.shots.setAll('anchor.x', 0.5);
            this.shots.setAll('anchor.y', 0.5);
            this.damagePoints = 20;
        }
        if (this.type == projectileType.laserExtraLarge) {
            this.shots.createMultiple(this.maxNumber, 'bullet');
            this.shots.setAll('anchor.x', 0.5);
            this.shots.setAll('anchor.y', 0.5);
            this.damagePoints = 40;
        }
    }
    this.update = function () {

    }
    /* Fire a shot */
    this.fire = function () { 
        if (this._game.time.now > this.shotTime) {
            this.shot = this.shots.getFirstExists(false);
            if (this.shot) {
                this.shot.reset(this._ship.body.x, this._ship.body.y);
                this.shot.lifespan = 5000;
                this.shot.rotation = this._ship.rotation;
                this._game.physics.arcade.velocityFromRotation(this._ship.rotation, 650, this.shot.body.velocity);
                this.shotTime = this._game.time.now + 50;
            }
        }

    }
}

var projectileType = {
    /* No projectile */
    none: 0,

    /* A small laser shot */
    laserSmall: 1,
    /* A medium laser shot */
    laserMedium: 2,
    /* A large laser shot */
    laserLarge: 3,
    /* A extra large laser shot */
    laserExtraLarge: 4,

    /* A small plasma shot */
    plasmaSmall: 5,
    /* A medium plasma shot */
    plasmaMedium: 6,
    /* A large plasma shot */
    plasmaLarge: 7,
    /* A extra large plasma shot */
    plasmaExtraLarge: 8,

    /* A small target following shot */
    tailSmall: 9,
    /* A medium target following shot */
    tailMedium: 10,
    /* A large target following shot */
    tailLarge: 11,
    /* A extra large target following shot */
    tailExtraLarge: 12

}
