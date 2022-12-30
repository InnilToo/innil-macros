// Thank you Freeze#2689 for making this
// Select a token and run the macro, it will search the "library" compendium and change the icons on the original actor on the sidebar (not on the token's sheet).

if (!token) return;
const key = "key-of-your-catalog"; // insert the key of your catalog, for example: "innil-catalogs.catalog-of-features-monster"
const pack = game.packs.get(key);
const items = await pack.getDocuments();
const creature = game.actors.get(token.document.actorId); // this would update the library actor not the synthetic one on the canvas
for (let creatureItem of creature.items) {
	const baseItem = items.find((i) => i.name === creatureItem.name);
	if (!baseItem) continue;
	await creatureItem.update({ img: baseItem.img });
}
