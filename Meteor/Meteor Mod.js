/*Meteorites Mod*/
/*By: Andr3w246*/
/*Don't use or copy any parts of this mod without my perrmission!*/

//Items
ModPE.setItem(500, "fireworks_charge", 0, "Normal Meteorite Spawner");
ModPE.setItem(501, "fireball", 0, "Fire Meteorite Spawner");
ModPE.setItem(502, "snowball", 0, "Ice Meteorite Spawner");
ModPE.setItem(503, "ender_pearl", 0, "Weird Meteorite Spawner");
ModPE.setItem(504, "slimeball", 0, "Melon Meteorite Spawner");
ModPE.setItem(505, "blaze_powder", 0, "Asteroid Spawner");
ModPE.setItem(506, "snowball", 0, "Comet Spawner");

//Meteorites Stuff
function useItem(x, y, z, itemId, blockId, side)
{
if(getCarriedItem()==500){
var meteor= Level.spawnMob(x, y+50, z, 39);
Entity.setNameTag(meteor, "Meteorite");
Entity.setFireTicks(meteor, 999);
Entity.setRenderType(meteor, 18);
}
if(getCarriedItem()==501){
var meteor2= Level.spawnMob(x, y+50, z, 39);
Entity.setNameTag(meteor2, "Fmeteorite");
Entity.setFireTicks(meteor2, 999);
Entity.setRenderType(meteor2, 18);
}
if(getCarriedItem()==502){
var meteor3= Level.spawnMob(x, y+50, z, 39);
Entity.setNameTag(meteor3, "Imeteorite");
Entity.setFireTicks(meteor3, 999);
Entity.setRenderType(meteor3, 18);
}
if(getCarriedItem()==503){
var meteor4= Level.spawnMob(x, y+50, z, 39);
Entity.setNameTag(meteor4, "Wmeteorite");
Entity.setFireTicks(meteor4, 999);
Entity.setRenderType(meteor4, 18);
}
if(getCarriedItem()==504){
var meteor5= Level.spawnMob(x, y+50, z, 39);
Entity.setNameTag(meteor5, "Smeteorite");
Entity.setFireTicks(meteor5, 999);
Entity.setRenderType(meteor5, 18);
}
if(getCarriedItem()==505){
var meteor6= Level.spawnMob(x, y+50, z, 39);
Entity.setNameTag(meteor6, "Asteroid");
Entity.setFireTicks(meteor6, 999);
Entity.setRenderType(meteor6, 2);
}
if(getCarriedItem()==506){
var meteor7= Level.spawnMob(x, y+50, z, 39);
Entity.setNameTag(meteor7, "Comet");
Entity.setFireTicks(meteor7, 999);
Entity.setRenderType(meteor7, 2);
}
}

function deathHook(murderer, victim){
var name= Entity.getNameTag(victim);
if(name=="Meteorite"){
var x= Entity.getX(victim);
var y= Entity.getY(victim);
var z= Entity.getZ(victim);
explode(x, y, z, 3.5);
Level.setTile(x, y-3, z, 48, 0);
Entity.remove(victim);
}
if(name=="Fmeteorite"){
var x= Entity.getX(victim);
var y= Entity.getY(victim);
var z= Entity.getZ(victim);
explode(x, y, z, 3.5);
Level.setTile(x, y-3, z, 87, 0);
Level.setTile(x+1, y-3, z, 51, 0);
Level.setTile(x-1, y-3, z, 51, 0);
Level.setTile(x, y-3, z+1, 51, 0);
Level.setTile(x, y-3, z-1, 51, 0);
Level.setTile(x, y-2, z, 51, 0);
Entity.remove(victim);
}
if(name=="Imeteorite"){
var x= Entity.getX(victim);
var y= Entity.getY(victim);
var z= Entity.getZ(victim);
explode(x, y, z, 3.5);
Level.setTile(x, y-3, z, 174, 0);
Level.setTile(x+1, y-3, z, 79, 0);
Level.setTile(x-1, y-3, z, 79, 0);
Level.setTile(x, y-3, z+1, 79, 0);
Level.setTile(x, y-3, z-1, 79, 0);
Level.setTile(x, y-2, z, 79, 0);
Level.setTile(x, y-4, z, 79, 0);
Entity.remove(victim);
}
if(name=="Wmeteorite"){
var x= Entity.getX(victim);
var y= Entity.getY(victim);
var z= Entity.getZ(victim);
explode(x, y, z, 3.5);
Level.setTile(x, y-3, z, 89, 0);
Level.setTile(x+1, y-3, z, 121, 0);
Level.setTile(x-1, y-3, z, 121, 0);
Level.setTile(x, y-3, z+1, 121, 0);
Level.setTile(x, y-3, z-1, 121, 0);
Level.setTile(x, y-4, z, 121, 0);
Level.setTile(x, y-2, z, 121, 0);
Entity.remove(victim);
}
if(name=="Smeteorite"){
var x= Entity.getX(victim);
var y= Entity.getY(victim);
var z= Entity.getZ(victim);
explode(x, y, z, 3.5);
Level.setTile(x, y-3, z, 103, 0);
Level.setTile(x, y-2, z, 103, 0);
Level.setTile(x+1, y-3, z, 103, 0);
Level.setTile(x-1, y-3, z, 103, 0);
Level.setTile(x, y-3, z+1, 103, 0);
Level.setTile(x, y-3, z-1, 103, 0);
Level.setTile(x, y-4, z, 103, 0);
Entity.remove(victim);
}
if(name=="Asteroid"){
var x= Entity.getX(victim);
var y= Entity.getY(victim);
var z= Entity.getZ(victim);
explode(x, y, z, 10);
Entity.remove(victim);
Level.setTile(x, y-5, z, 48, 0);
Level.setTile(x-1, y-5, z, 4, 0);
Level.setTile(x, y-5, z-1, 48, 0);
Level.setTile(x-1, y-5, z-1, 48, 0);
Level.setTile(x, y-4, z, 4, 0);
Level.setTile(x-1, y-4, z, 48, 0);
Level.setTile(x, y-4, z-1, 4, 0);
Level.setTile(x-1, y-4, z-1, 4, 0);
Level.setTile(x, y-3, z, 51, 0);
Level.setTile(x-1, y-3, z, 51, 0);
Level.setTile(x, y-3, z-1, 51, 0);
Level.setTile(x-1, y-3, z-1, 51, 0);
}
if(name=="Comet"){
var x= Entity.getX(victim);
var y= Entity.getY(victim);
var z= Entity.getZ(victim);
explode(x, y, z, 10);
Entity.remove(victim);
Level.setTile(x, y-5, z, 79);
Level.setTile(x, y-4, z, 79);
Level.setTile(x-1, y-5, z, 79);
Level.setTile(x, y-5, z-1, 79);
Level.setTile(x-1, y-5, z-1, 79);
Level.setTile(x-1, y-4, z, 79);
Level.setTile(x, y-4, z-1, 79);
Level.setTile(x-1, y-4, z-1, 79);
}
}

//Creative Stuff
Player.addItemCreativeInv(500, 1);
Player.addItemCreativeInv(501, 1);
Player.addItemCreativeInv(502, 1);
Player.addItemCreativeInv(503, 1);
Player.addItemCreativeInv(504, 1);
Player.addItemCreativeInv(505, 1);
Player.addItemCreativeInv(506, 1);
