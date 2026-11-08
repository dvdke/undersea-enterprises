namespace SpriteKind {
    export const Interactive = SpriteKind.create()
    export const tool = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // CHEST OPENING
    if (tiles.tileAtLocationEquals(player1.tilemapLocation(), sprites.dungeon.chestClosed)) {
        tiles.setTileAt(tiles.getTileLocation(0, 6), assets.tile`myTile`)
        shovel = sprites.create(assets.image`Shovel`, SpriteKind.tool)
        shovel.setPosition(10, 90)
    }
    if (shovelfollow == true) {
        column = Math.floor(player1.x / 16)
        row = Math.floor(player1.y / 16)
        dirtLocation = tiles.getTileLocation(column, row + 1)
        if (tiles.tileAtLocationEquals(dirtLocation, sprites.builtin.forestTiles5) || tiles.tileAtLocationEquals(dirtLocation, sprites.builtin.forestTiles6) || tiles.tileAtLocationEquals(dirtLocation, sprites.builtin.forestTiles7)) {
            tiles.setWallAt(dirtLocation, false)
            tiles.setTileAt(dirtLocation, assets.tile`transparency16`)
            dugLocations.push(dirtLocation)
        }
    }
})
function Define_tutorialMovement2_Pass () {
    tutorialMovement2 = "Well Done! You can continue"
}
function HelpMenu () {
    Tutorial_Texts_Define()
    helpMenu = miniMenu.createMenuFromArray([
    miniMenu.createMenuItem("How to advance Dialogue"),
    miniMenu.createMenuItem("How to Move"),
    miniMenu.createMenuItem("How to use Abilities"),
    miniMenu.createMenuItem("Back To Main Menu")
    ])
    miniMenu.setTitle(helpMenu, "Help Pages")
    miniMenu.setDimensions(helpMenu, 140, 120)
    helpMenu.setPosition(80, 80)
    miniMenu.onButtonPressed(helpMenu, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            miniMenu.close(helpMenu)
            game.showLongText(tutorial1, DialogLayout.Center)
            HelpMenu()
        } else if (selectedIndex == 1) {
            miniMenu.close(helpMenu)
            game.showLongText(tutorialMovement1, DialogLayout.Center)
            HelpMenu()
        } else if (selectedIndex == 2) {
            miniMenu.close(helpMenu)
            game.showLongText(tutorialAbilities, DialogLayout.Center)
            HelpMenu()
        } else if (selectedIndex == 3) {
            miniMenu.close(helpMenu)
            Main_Menu()
        }
    })
}
function Broadcast_Send (Message: string) {
    Broadcast_String = Message
}
function Tutorial_Texts_Define () {
    tutorial1 = "Welome To Undersea Enterprises! To advance dialogue or pop-ups, press A or move the joystick down on the controller, or you can press z or the down arrow on your keyboard"
    tutorialMovement1 = "To move press the right or left arrows. To jump, press up."
    tutorialAbilities = "To interact with an object or to attack, press x on your keyboard, or B on your controller."
    tutorialComplete = "Tutorial Complete!"
}
function Main_Menu () {
    startingMenu = miniMenu.createMenuFromArray([
    miniMenu.createMenuItem("Play Game"),
    miniMenu.createMenuItem("Help"),
    miniMenu.createMenuItem("Credits"),
    miniMenu.createMenuItem("Settings"),
    miniMenu.createMenuItem("Tutorial"),
    miniMenu.createMenuItem("Exit Game")
    ])
    miniMenu.setTitle(startingMenu, "UNDERSEA ENTERPRISES")
    miniMenu.setDimensions(startingMenu, 125, 120)
    startingMenu.setPosition(80, 80)
    miniMenu.onButtonPressed(startingMenu, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            Broadcast_Send("play game")
            miniMenu.close(startingMenu)
        } else if (selectedIndex == 1) {
            Broadcast_Send("help")
            miniMenu.close(startingMenu)
        } else if (selectedIndex == 2) {
            Broadcast_Send("credits")
            miniMenu.close(startingMenu)
        } else if (selectedIndex == 3) {
            Broadcast_Send("settings")
            miniMenu.close(startingMenu)
        } else if (selectedIndex == 4) {
            Broadcast_Send("tutorial")
            miniMenu.close(startingMenu)
        } else if (selectedIndex == 5) {
            Broadcast_Send("Exit Game")
            miniMenu.close(startingMenu)
        } else {
            miniMenu.close(startingMenu)
        }
    })
}
function Define_tutorialMovement2_Fail () {
    tutorialMovement2 = "Please Retry the test."
}
let Credits2 = ""
let playerLocation: tiles.Location = null
let startingMenu: Sprite = null
let tutorialComplete = ""
let Broadcast_String = ""
let tutorialAbilities = ""
let tutorialMovement1 = ""
let tutorial1 = ""
let helpMenu: Sprite = null
let tutorialMovement2 = ""
let dugLocations: tiles.Location[] = []
let dirtLocation: tiles.Location = null
let row = 0
let column = 0
let shovelfollow = false
let shovel: Sprite = null
let player1: Sprite = null
let dirtLocation2 = null
let playerTile = null
let column2 = 0
let row2 = 0
let currentLocation = null
let nextLocation = null
Main_Menu()
scene.setBackgroundImage(assets.image`bg`)
player1 = sprites.create(assets.image`transparent1`, SpriteKind.Player)
shovel = sprites.create(assets.image`transparent`, SpriteKind.tool)
game.onUpdate(function () {
    playerLocation = player1.tilemapLocation()
    for (let location of dugLocations) {
        if (playerLocation.column == location.column && playerLocation.row == location.row) {
            game.gameOver(true)
        }
    }
})
forever(function () {
    if (controller.anyButton.isPressed()) {
        controller.moveSprite(player1, 100, 100)
    }
})
forever(function () {
    if (Broadcast_String == "play game") {
        Broadcast_String = "0"
        dugLocations = []
        music.setVolume(120)
        music.play(pianoRoll.createSong(assets.song`intro`), music.PlaybackMode.InBackground)
        player1 = sprites.create(assets.image`fisk`, SpriteKind.Player)
        tiles.setCurrentTilemap(tilemap`level1Blocked`)
        tiles.placeOnTile(player1, tiles.getTileLocation(8, 3))
    }
})
forever(function () {
    if (tiles.tileAtLocationEquals(player1.tilemapLocation(), assets.tile`myTile`)) {
        shovelfollow = true
    }
    if (shovelfollow == true) {
        shovel.setPosition(player1.x - 10, player1.y - 10)
    }
})
forever(function () {
    if (Broadcast_String == "credits") {
        Broadcast_String = "0"
        Credits2 = "Undersea Enterprises A game by David Kelly made with Arcade MakeCode"
        story.printCharacterText("A game by David Kelly made with MakeCode Arcade", "Undersea Enterprises")
        Main_Menu()
    }
})
forever(function () {
    if (Broadcast_String == "help") {
        Broadcast_String = "0"
        HelpMenu()
    }
})
forever(function () {
    if (Broadcast_String == "settings") {
        Broadcast_String = "0"
    }
})
forever(function () {
    if (Broadcast_String == "tutorial") {
        Broadcast_String = "0"
        Tutorial_Texts_Define()
        game.showLongText(tutorial1, DialogLayout.Full)
        game.showLongText(tutorialMovement1, DialogLayout.Center)
        game.showLongText(tutorialAbilities, DialogLayout.Center)
        game.showLongText(tutorialComplete, DialogLayout.Center)
        Main_Menu()
    }
})
forever(function () {
    if (Broadcast_String == "exit game") {
        Broadcast_String = "0"
    }
})
