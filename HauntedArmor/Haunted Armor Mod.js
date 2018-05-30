/*Haunted Armor Mod*/
ModPE.setItem(500, "spawn_egg", 0, "Spawn Leather Ghost");
ModPE.setItem(501, "spawn_egg", 0, "Spawn Chain Ghost");
ModPE.setItem(502, "spawn_egg", 0, "Spawn Iron Ghost");
ModPE.setItem(503, "spawn_egg", 0, "Spawn Gold Ghost");
ModPE.setItem(504, "spawn_egg", 0, "Spawn Diamond Ghost");
Player.addItemCreativeInv(500, 1, 0);
Player.addItemCreativeInv(501, 1, 0);
Player.addItemCreativeInv(502, 1, 0);
Player.addItemCreativeInv(503, 1, 0);
Player.addItemCreativeInv(504, 1, 0);

function deathHook(murderer, victim)
{
if(Entity.getNameTag(victim)== "Leather Ghost"){
preventDefault();
var x= Entity.getX(victim);
var y= Entity.getY(victim);
var z= Entity.getZ(victim);
Level.dropItem(x, y, z, 1, 299, 1, 0);
}
if(Entity.getNameTag(victim)== "Chain Ghost"){
preventDefault();
var x= Entity.getX(victim);
var y= Entity.getY(victim);
var z= Entity.getZ(victim);
Level.dropItem(x, y, z, 1, 303, 1, 0);
}
if(Entity.getNameTag(victim)== "Iron Ghost"){
preventDefault();
var x= Entity.getX(victim);
var y= Entity.getY(victim);
var z= Entity.getZ(victim);
Level.dropItem(x, y, z, 1, 307, 1, 0);
}
if(Entity.getNameTag(victim)== "Gold Ghost"){
preventDefault();
var x= Entity.getX(victim);
var y= Entity.getY(victim);
var z= Entity.getZ(victim);
Level.dropItem(x, y, z, 1, 315, 1, 0);
}
if(Entity.getNameTag(victim)== "Diamond Ghost"){
preventDefault();
var x= Entity.getX(victim);
var y= Entity.getY(victim);
var z= Entity.getZ(victim);
Level.dropItem(x, y, z, 1, 311, 1, 0);
}
}

function useItem(x, y, z, itemId, blockId, side)
{
if(getCarriedItem()==500){
Player.clearInventorySlot(Player.getSelectedSlotId());
LG= Level.spawnMob(x+0.5, y+1, z+0.5, 32, "armor/cloth_1.png");
Entity.setHealth(LG, 25);
Entity.setNameTag(LG, "Leather Ghost");
}
if(getCarriedItem()==501){
Player.clearInventorySlot(Player.getSelectedSlotId());
CG= Level.spawnMob(x+0.5, y+1, z+0.5, 32, "armor/chain_1.png");
Entity.setHealth(CG, 27);
Entity.setNameTag(CG, "Chain Ghost");
}
if(getCarriedItem()==502){
Player.clearInventorySlot(Player.getSelectedSlotId());
IG= Level.spawnMob(x+0.5, y+1, z+0.5, 32, "armor/iron_1.png");
Entity.setHealth(IG, 30);
Entity.setNameTag(IG, "Iron Ghost");
}
if(getCarriedItem()==503){
Player.clearInventorySlot(Player.getSelectedSlotId());
GG= Level.spawnMob(x+0.5, y+1, z+0.5, 32, "armor/gold_1.png");
Entity.setHealth(GG, 35);
Entity.setNameTag(GG, "Gold Ghost");
}
if(getCarriedItem()==504){
Player.clearInventorySlot(Player.getSelectedSlotId());
DG= Level.spawnMob(x+0.5, y+1, z+0.5, 32, "armor/diamond_1.png");
Entity.setHealth(DG, 40);
Entity.setNameTag(DG, "Diamond Ghost");
}
}
