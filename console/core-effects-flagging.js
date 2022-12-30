// Flag an effect as a core statusId so it doesn't need a duration but won't be passive

const item = game.items.getName("ITEMNAME");
const effect = item.effects.find((e) => e.label === "EFFECTNAME");
await effect.setFlag("core", "statusId", "CUSTOMID");
