// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2Room2":
            case "level2Room1":return tiles.createTilemap(hex`0a00080006020000000000000000070300111300000000000703000c0d00000000000504000f0e00121314000000000b10000106021506020000000009070a060703000000000907070705041617180108070707`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest1,sprites.builtin.oceanSand13,sprites.builtin.oceanSand5,sprites.builtin.oceanSand7,sprites.builtin.oceanSand9,sprites.builtin.oceanSand8,sprites.builtin.oceanSand15,sprites.builtin.coral0,sprites.builtin.coral1,sprites.builtin.coral2,sprites.builtin.coral5,sprites.dungeon.chestClosed,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7], TileScale.Sixteen);
            case "Level2Start":
            case "Level2Start1":return tiles.createTilemap(hex`0a00080000000000000000000000000000000000000000000000000d0000000000000607000200000000101101050003000000000e0f02040000000000000c000300000000000000080912010101010508090a0b`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . 2 . . . . . . 
. . . 2 . . . . . . 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 . 
. . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.oceanSand6,sprites.builtin.oceanSand10,sprites.builtin.oceanSand12,sprites.builtin.oceanSand15,sprites.builtin.oceanSand7,sprites.builtin.coral1,sprites.builtin.coral5,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorLockedEast,sprites.builtin.oceanSand4,myTiles.tile2,myTiles.tile3,sprites.builtin.coral4,sprites.dungeon.chestClosed,sprites.builtin.oceanSand5], TileScale.Sixteen);
            case "level1Blocked":
            case "level1":return tiles.createTilemap(hex`0a00080000000000000000000000000000000b0a0000000000000005020300000000000000090807000000000000000601040000000000000000000000000000100000000c0c0c000000020202020202030d0f0e`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . 2 2 2 . . . . 
. . . 2 2 2 . . . . 
. . . 2 2 2 . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.builtin.coral2,sprites.builtin.coral1,sprites.builtin.coral0,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles6,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "wrapLeft":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
