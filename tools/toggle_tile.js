// Toggles the visibility state of a tile.

const tileDoc = canvas.scene.tiles.get("tilleId");  // replace the tilleId with an ID of a tile, can enter multiple IDs each in "" separated by , ["id1", "id2", "id3"]
await tileDoc.update({ hidden: !tileDoc.hidden });