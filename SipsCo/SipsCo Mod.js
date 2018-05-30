/*SipsCo Mod*/

/*SipsCo Mod*/
/*By: Andr3w246*/

//Dirts
Block.defineBlock(23, "Refined Dirt", ["dirt", 0], 2, 0, 0);
Block.setDestroyTime(23, 1);
Block.setExplosionResistance(23, 10);
Block.setColor(23, [0x888888]);
Block.defineBlock(25, "Healing Dirt", ["dirt", 0], 2, 0, 0);
Block.setDestroyTime(25, 0.1);
Block.setColor(25, [0xFF0000]);
Block.defineBlock(28, "Double Compressed Dirt", ["dirt", 0], 2, 0, 0);
Block.setDestroyTime(28, 1.5);
Block.setExplosionResistance(28, 20);
Block.setColor(28, [0x555555]);
Block.defineBlock(29, "Spicy Dirt", ["dirt", 0], 2, 0, 0);
Block.setDestroyTime(29, 0.1);
Block.setColor(29, [0xFE9A2E]);
Block.defineBlock(33, "Cactus Dirt", ["dirt", 0], 2, 0, 0);
Block.setDestroyTime(33, 0.1);
Block.setColor(33, [0x00FF00]);


function useItem(x, y, z, itemId, blockId, side)
{
if(blockId==25){
Player.setHealth(20);
}
if(blockId==29){
Entity.setFireTicks(getPlayerEnt(), 5);
}
if(blockId==33){
Player.setHealth(Entity.getHealth(getPlayerEnt())-2)
Level.playSoundEnt(getPlayerEnt(), "random.hurt", 100, 100);
}

}

function attackHook(attacker, victim)
{

}

function modTick()
{

}

function procCmd(command)
{
var cmd = command.split(" ");

}

function newLevel()
{

}

function leaveGame()
{

}

