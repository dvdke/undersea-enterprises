namespace SpriteKind {
    export const Interactive = SpriteKind.create()
    export const tool = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // CHEST OPENING LEVEL 1
    if (tiles.tileAtLocationEquals(player1.tilemapLocation(), sprites.dungeon.chestClosed) && currentLevel == 1) {
        tiles.setTileAt(tiles.getTileLocation(0, 6), assets.tile`myTile`)
        shovel = sprites.create(assets.image`Shovel`, SpriteKind.tool)
        shovel.setPosition(10, 90)
    }
    // CHEST OPENING LEVEL 2
    if (tiles.tileAtLocationEquals(player1.tilemapLocation(), sprites.dungeon.chestClosed) && currentLevel == 2 && currentRoom == 1) {
        tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`myTile`)
        key = sprites.create(assets.image`key`, SpriteKind.tool)
        key.setPosition(155, 40)
    }
    // CHEST OPENING LEVEL 2 ROOM 2
    if (currentLevel == 2 && currentRoom == 2 &&
        !level2Room2ChestOpened &&
        tiles.tileAtLocationEquals(
            player1.tilemapLocation(), sprites.dungeon.chestClosed)) {

            tiles.setTileAt(tiles.getTileLocation(9, 4), assets.tile`myTile`)
    level2Room2ChestOpened = true

    keyfollow = false
    if (key) {
        key.destroy()
    }

    shovel.setImage(assets.image`Shovel`)
    shovelfollow = true
    level2Room2LootCollected = true
    }
    // SHOVEL DIGGING LOGIC
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
    // KEY UNLOCKING LOGIC
    if (currentLevel == 2 && keyfollow && currentRoom == 1) {
        playerTile = player1.tilemapLocation()
        for (let lockLocation of tiles.getTilesByType(sprites.dungeon.doorLockedEast)) {
            columnDistance = Math.abs(playerTile.column - lockLocation.column)
            rowDistance = Math.abs(playerTile.row - lockLocation.row)
            if (columnDistance + rowDistance == 1) {
                tiles.setWallAt(lockLocation, false)
                tiles.setTileAt(lockLocation, assets.tile`transparency16`)
                break;
            }
        }
    }
})
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
    tutorial1 = "Welcome To Undersea Enterprises! To advance dialogue or pop-ups, press A or move the joystick down on the controller, or you can press z or the down arrow on your keyboard"
    tutorialMovement1 = "To move press the right or left arrows. To jump, press up."
    tutorialAbilities = "To interact with chests doors or dig below you, press x on your keyboard, or B on your controller."
    tutorialComplete = "Tutorial Complete!"
}
function Main_Menu () {
    startingMenu = miniMenu.createMenuFromArray([
    miniMenu.createMenuItem("Play Game"),
    miniMenu.createMenuItem("Help"),
    miniMenu.createMenuItem("Credits"),
    miniMenu.createMenuItem("Tutorial")
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
            Broadcast_Send("tutorial")
            miniMenu.close(startingMenu)
        } else {
            miniMenu.close(startingMenu)
        }
    })
}
function Start_Level_Two () {
    currentLevel = 2
    dugLocations = []
    shovelfollow = false
    shovel.setImage(assets.image`transparent`)
    player1.setVelocity(0, 0)
    tiles.setCurrentTilemap(tilemap`Level2Start`)
    tiles.placeOnTile(player1, tiles.getTileLocation(4, 5))
    game.showLongText("Level Two", DialogLayout.Center)
    currentRoom = 1
}
function Start_Level_Two_Room_Two() {
    currentRoom = 2
    player1.setVelocity(0, 0)
    tiles.setCurrentTilemap(tilemap`level2Room2`)
    tiles.placeOnTile(player1, tiles.getTileLocation(0,4))
}
let level2Room2LootCollected = false
let level2Room2ChestOpened = false
let currentRoom = 0
let playerLocation: tiles.Location = null
let startingMenu: Sprite = null
let tutorialComplete = ""
let Broadcast_String = ""
let tutorialAbilities = ""
let tutorialMovement1 = ""
let tutorial1 = ""
let helpMenu: Sprite = null
let rowDistance = 0
let columnDistance = 0
let playerTile: tiles.Location = null
let keyfollow = false
let dugLocations: tiles.Location[] = []
let dirtLocation: tiles.Location = null
let row = 0
let column = 0
let shovelfollow = false
let key: Sprite = null
let currentLevel = 0
let shovel: Sprite = null
let player1: Sprite = null
currentRoom = 0
keyfollow = false
level2Room2ChestOpened = false
level2Room2LootCollected = false

Main_Menu()
music.stopAllSounds()
scene.setBackgroundImage(assets.image`bg`)
player1 = sprites.create(assets.image`transparent1`, SpriteKind.Player)
shovel = sprites.create(assets.image`transparent`, SpriteKind.tool)

game.onUpdate(function () {
    if (currentLevel == 1) {
        playerLocation = player1.tilemapLocation()
        for (let location of dugLocations) {
            if (playerLocation.column == location.column && playerLocation.row == location.row) {
                Start_Level_Two()
                break;
            }
        }
    } else if (currentLevel == 2 && currentRoom == 1) {
        playerLocation = player1.tilemapLocation()

        if (playerLocation.column == 9 &&
            playerLocation.row == 5) { 
            Start_Level_Two_Room_Two()
        }
    }
    playerLocation = player1.tilemapLocation()

    if (currentLevel == 2 && currentRoom == 2 && level2Room2ChestOpened == true && level2Room2LootCollected == true && playerLocation.row == 7 && (playerLocation.column == 2 || playerLocation.column == 3 || playerLocation.column == 4)) {
        // Player finishes the game
        music.stopAllSounds()
        game.over(true)
    }
})
forever(function () {
    if (Broadcast_String == "play game") {
        Broadcast_String = "0"
        currentRoom = 0
        keyfollow = false
        level2Room2ChestOpened = false
        level2Room2LootCollected = false
        shovelfollow = false
        currentLevel = 1
        shovel.setImage(assets.image`transparent`)
        dugLocations = []
        music.setVolume(120)
        music.play(pianoRoll.createSong(assets.song`intro`), music.PlaybackMode.LoopingInBackground)
        player1.setImage(assets.image`fisk`)
        player1.setVelocity(0, 0)
        controller.moveSprite(player1, 100, 100)
        tiles.setCurrentTilemap(tilemap`level1Blocked`)
        tiles.placeOnTile(player1, tiles.getTileLocation(8, 3))
    }
})
forever(function () {
    if (currentLevel == 1 && tiles.tileAtLocationEquals(player1.tilemapLocation(), assets.tile`myTile`)) {
        shovelfollow = true
    }
    if (shovelfollow == true) {
        shovel.setPosition(player1.x - 10, player1.y - 10)
    }
})
forever(function () {
    if (currentLevel == 2 && currentRoom == 1 && tiles.tileAtLocationEquals(player1.tilemapLocation(), assets.tile`myTile`)) {
        keyfollow = true
    }
    if (keyfollow == true) {
        key.setPosition(player1.x - 10, player1.y - 10)
    }
})
forever(function () {
    if (Broadcast_String == "credits") {
        Broadcast_String = "0"
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