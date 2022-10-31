// Display all Player Charactes' Passive Perception

const characters = game.users.map(i => i.character).filter(i => !!i);
const content = characters.reduce((acc, c) => {
    let pp = c.system.skills.prc.passive;
    let name = c.name;
    return acc + `<p><strong>${name}:</strong> ${pp}</p>`;
}, ``);

await ChatMessage.create({
    whisper: [game.user.id],
    content: "<h2>Passive Perceptions</h2>" + content,
    user: game.user.id
});