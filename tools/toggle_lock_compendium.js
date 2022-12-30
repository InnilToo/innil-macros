// Toggles the lock state of all compendiums.

for (let p of game.packs) await p.configure({ locked: !p.locked });
