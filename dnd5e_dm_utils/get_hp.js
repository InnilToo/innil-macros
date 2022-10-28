// gets the Hit Points of each actor that is selected by a player

const characters = game.users.map(i => i.character).filter(i => !!i);
const content = characters.reduce((acc, c) => {
    let hp_value = c.system.attributes.hp.value;
    let hp_max = c.system.attributes.hp.max;
    let hp_temp = c.system.attributes.hp.temp;
    let name = c.name;
    return acc + `<p><strong>${name}:</strong> (${hp_temp}+)${hp_value}/${hp_max}</p>`;
}, ``);
await ChatMessage.create({
    whisper: [game.user.id],
    content: "<h2>Hit Points</h2>" + content,
    user: game.user.id
});