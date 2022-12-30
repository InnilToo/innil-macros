// Display all Player Charactes' Languages

const characters = game.users.map((i) => i.character).filter((i) => !!i);
const content = characters.reduce((acc, c) => {
	const lang = c.system.traits.languages.value
		.map((i) => i.capitalize())
		.join(", ");
	let name = c.name;
	return acc + `<p><strong>${name}:</strong></br>${lang}</p>`;
}, ``);

await ChatMessage.create({
	whisper: [game.user.id],
	content: "<h2>Languages</h2>" + content,
	user: game.user.id,
});
