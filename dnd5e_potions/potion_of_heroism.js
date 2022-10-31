// Modules required: Item Macro or Effect Macro
// depending on where you want to put it
// If used with Effect Macro I recommend also using Effective Transferral

// Give actor 10 TEMP HP unless they already have more.
const currTemp = actor.getRollData().attributes.hp.temp ?? 0;
await actor.update({ "data.attributes.hp.temp": Math.max(currTemp, 10) });