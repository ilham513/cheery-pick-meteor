sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let cherry: Sprite = null
let projectile: Sprite = null
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
let mySprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(5000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 2 2 . . . 
        . . . . . . . . . . 2 5 2 2 2 . 
        . . . . . 2 2 2 2 2 2 5 5 5 2 . 
        . . 2 . 2 2 2 2 2 2 2 2 2 5 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 5 2 2 5 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 5 2 2 2 . . 
        2 2 2 5 5 5 5 2 2 2 5 2 5 2 2 . 
        2 5 2 2 2 2 5 5 2 2 2 2 5 2 2 2 
        2 2 2 2 5 2 2 2 2 2 5 2 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 5 2 2 2 2 2 2 2 2 . . . . 
        . . 2 2 5 5 5 2 2 . . . . . . . 
        . . . 2 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 50)
    projectile.x = randint(0, scene.screenWidth())
})
game.onUpdateInterval(500, function () {
    cherry = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
    cherry.setPosition(randint(0, 160), randint(0, 120))
})
