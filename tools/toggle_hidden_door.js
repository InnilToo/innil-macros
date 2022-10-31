// Toggles the open/closed state of hidden door.

const wallIds = ["hiddenDoorId"];   // replace the hiddenDoorId with an ID of a hidden door, can enter multiple IDs each in "" separated by , ["id1", "id2", "id3"]
const { CLOSED, OPEN } = CONST.WALL_DOOR_STATES;
const { SECRET } = CONST.WALL_DOOR_TYPES;
const secretDoors = canvas.scene.walls.filter(w => {
    return wallIds.includes(w.id);
});
const updates = secretDoors.map(w => {
    return { _id: w.id, ds: w.ds === CLOSED ? OPEN : CLOSED };
});
await canvas.scene.updateEmbeddedDocuments("Wall", updates);