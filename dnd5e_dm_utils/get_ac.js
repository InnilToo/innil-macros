// Display all Player Charactes' Armor Class

const characters = game.users.map(i => i.character).filter(i => !!i);
const content = characters.reduce((acc, c) => {
    let ac = c.system.attributes.ac.value;
    let name = c.name;
    return acc + `<p><strong>${name}:</strong> ${ac}</p>`;
}, ``);

await ChatMessage.create({
    whisper: [game.user.id],
    content: "<h2>Armor Class</h2>" + content,
    user: game.user.id
});