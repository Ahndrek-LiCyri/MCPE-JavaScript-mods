/*Bitcoin Miner Mod*/
/*By: Andr3w246*/
/*Don't use parts of this mod without my perrmission*/

//New Stuff
Block.defineBlock(23, "Bitcoin Ore", ["quartz_block", 4], 4, true, 0);
Block.setDestroyTime(23, 2.5);
Block.setExplosionResistance(23, 5);
Block.setColor(23, [0xF7FE2E]);

ModPE.setItem(500, "gold_nugget", 0, "Bitcoin");
Item.addFurnaceRecipe(23, 500, 500);
ModPE.setItem(501, "blaze_rod", 0, "Bitcoin Stick");
Item.addShapedRecipe(501, 1, 0, ["c","c",""], ["c", 500, 0]);
ModPE.setItem(502, "sword", 3, "Bitcoin Sword");
Item.setMaxDamage(502, 100);
Item.addShapedRecipe(502, 1, 0, ["0c0", "csc", "0s0"], ["c", 500, 0, "s", 501, 0]);
ModPE.setItem(503, "pickaxe", 3, "Bitcoin Pickaxe");
Item.addShapedRecipe(503, 1, 0, ["ccc","0s0", "0s0"], ["c", 500, 0, "s", 501, 0]);
Item.setMaxDamage(503, 100);
ModPE.setFoodItem(504, "experience_bottle", 0, 5, "Instant Food");
Item.addShapedRecipe(504, 1, 0, ["cgc","gsg","cgc"], ["c", 500, 0, "g", 20, 0, "s", 295, 0]);

function attackHook(attacker, victim) {
if(Player.getCarriedItem() == 502) {
if(Player.getCarriedItemData() < 99)
Entity.setCarriedItem(attacker, 502, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
else {
Level.playSoundEnt(attacker, "random.break", 100, 100);
Player.clearInventorySlot(Player.getSelectedSlotId());}
Entity.setHealth(victim, 1);
} } 

function useItem(x, y, z, itemId, blockId, side)
{
if(Player.getCarriedItem()==503){
if(Player.getCarriedItemData() < 99)
Entity.setCarriedItem(getPlayerEnt(), 503, Player.getCarriedItemCount(), Player.getCarriedItemData()+1);
else{
Level.playSoundEnt(getPlayerEnt(), "random.break", 100, 100);
Player.clearInventorySlot(Player.getSelectedSlotId());}
Level.destroyBlock(x, y, z, 1);
} }