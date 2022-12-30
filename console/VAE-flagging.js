// Flag Visual Active Effect to give it 'intro' and 'content'

const item = game.items.getName("ITEMNAME");
const effect = item.effects.find((e) => e.label === "EFFECTNAME");
await effect.setFlag("visual-active-effects", "data", {
	intro: "TEXT",
	content: "TEXT",
});
