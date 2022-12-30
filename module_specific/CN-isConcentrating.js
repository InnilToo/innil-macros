// Modules required: Item Macro and Concentration Notifier

const isConc = CN.isActorConcentratingOnItem(actor, item);
if (isConc) return CN.redisplayCard(actor);
return item.use();
