/*Mo'Decor Mod*/
/*By: Andr3w246*/
/*Copyright: Andr3w246 (c) 2015*/

//Shower Variables
var sof= 0
var bf= 0
var sx= 0
var sy= 0
var sz= 0
//Sink Variables
var Sof= 0
var bf2= 0
var Sx= 0
var Sy= 0
var Sz= 0
//Smoke Stack Variables
var Ssof= 0
var bf3= 0
var Ssx= 0
var Ssy= 0
var Ssz= 0

//blockCreation
function cnb(id, name, texture, damage, destroy, type, render, tf){
Block.defineBlock(id, name, [texture, damage], type, tf, render);
Block.setDestroyTime(id, destroy);
}

//New Blocks
cnb(23, "Shower", "brewing_stand_base", 0, 5, 1, 0, true);
cnb(25, "Drain", "piston_inner", 0, 5, 1, 0, true);
Block.defineBlock(28, "Ceiling Lamp", [["redstone_lamp_off", 0], ["redstone_lamp_off", 0], ["repeater_off", 0], ["repeater_off", 0], ["repeater_off", 0], ["repeater_off", 0]], 3, false, 0);
Block.setDestroyTime(28, 2.5);
Block.setShape(28, 0.25, 0.75, 0.25, 0.75, 1, 0.75);
Block.defineBlock(29, "Ceiling Lamp", [["redstone_lamp_on", 0], ["redstone_lamp_on", 0], ["repeater_off", 0], ["repeater_off", 0], ["repeater_off", 0], ["repeater_off", 0]], 3, false, 0);
Block.setDestroyTime(29, 2.5);
Block.setShape(29, 0.25, 0.75, 0.25, 0.75, 1, 0.75);
Block.setLightLevel(29, 13);
Block.defineBlock(33, "Toilet", [["iron_block", 0], ["cauldron_top", 0], ["iron_block", 0], ["iron_block", 0], ["iron_block", 0], ["iron_block", 0]], 1, false, 0);
Block.setDestroyTime(33, 5);
Block.setShape(33, 0, 0, 0, 1, 0.8, 1);
Block.setLightOpacity(33, 0);
Block.defineBlock(34, "Sink", [["iron_block", 0], ["piston_inner", 0], ["iron_block", 0], ["iron_block", 0], ["iron_block", 0], ["iron_block", 0]], 1, false, 0);
Block.setDestroyTime(34, 5);
Block.setLightOpacity(34, 0);
cnb(36, "Wooden Shelve", "log", 0, 2.5, 3, 0, false);
Block.setShape(36, 0, 0.9, 0, 1, 1, 1); Block.setLightOpacity(36, 0);
cnb(55, "Wooden Table Stand", "log", 0, 2.5, 3, 0, false);
Block.setShape(55, 0.4, 0, 0.4, 0.6, 1, 0.6); Block.setLightOpacity(55, 0);
cnb(69, "Wooden Table Top", "log", 0, 2.5, 3, 0, false);
Block.setShape(69, 0, 0, 0, 1, 1/16, 1); Block.setLightOpacity(69, 0);
cnb(70, "Glass Table Top", "glass", 0, 2.5, 20, 0, false);
Block.setShape(70, 0, 0, 0, 1, 1/16, 1); Block.setLightOpacity(70, 0); Block.setRenderLayer(70, 1);
cnb(72, "Blinds", "log", 1, 2.5, 3, 0, false);
Block.setShape(72, 0.25, 0.25, 0.25, 0.75, 0.75, 0.75); Block.setLightOpacity(72, 0);
cnb(75, "blinds_x", "itemframe_background", 0, 2.5, 3, 0, false);
Block.setShape(75, 0, 0, 0.9, 1, 1, 1);
cnb(76, "blinds_z", "itemframe_background", 0, 2.5, 3, 0, false);
Block.setShape(76, 0.9, 0, 0, 1, 1, 1);
cnb(77, "blinds_x2", "itemframe_background", 0, 2.5, 3, 0, false);
Block.setShape(77, 0, 0, 0, 1, 1, 0.1);
cnb(84, "blinds_z2", "itemframe_background", 0, 2.5, 3, 0, false);
Block.setShape(84, 0, 0, 0, 0.1, 1, 1);
cnb(90, "blinds_xOpen", "cauldron_bottom", 0, 2.5, 3, 0, false);
Block.setShape(90, 0, 0, 0.9, 1, 1, 1); Block.setLightOpacity(90, 0); Block.setRenderLayer(90, 1);
cnb(93, "blinds_zOpen", "cauldron_bottom", 0, 2.5, 3, 0, false);
Block.setShape(93, 0.9, 0, 0, 1, 1, 1); Block.setLightOpacity(93, 0); Block.setRenderLayer(93, 1);
cnb(94, "blinds_x2Open", "cauldron_bottom", 0, 2.5, 3, 0, false);
Block.setShape(94, 0, 0, 0, 1, 1, 0.1); Block.setLightOpacity(94, 0); Block.setRenderLayer(94, 1);
cnb(113, "blinds_z2", "cauldron_bottom", 0, 2.5, 3, 0, false);
Block.setShape(113, 0, 0, 0, 0.1, 1, 1); Block.setLightOpacity(113, 0); Block.setRenderLayer(113, 1);
Block.defineBlock(115, "Furnace Steam Vent", [["iron_bars", 0], ["piston_inner", 0], ["iron_block", 0], ["iron_block", 0], ["iron_block", 0], ["iron_block", 0]], 1, false, 0); Block.setShape(115, 0, 0.75, 0, 1, 1, 1); Block.setLightOpacity(115, 0); Block.setDestroyTime(115, 5);
cnb(116, "steamVent_pipe", "iron_block", 0, 5, 1, 0, false);
Block.setShape(116, 0.25, 0, 0.25, 0.75, 1, 0.75); Block.setLightOpacity(116, 0);
Block.defineBlock(117, "Clay Flower Pot", [["clay", 0], ["dirt", 0], ["clay", 0], ["clay", 0], ["clay", 0], ["clay", 0]], 3, false, 0); Block.setShape(117, 0.2, 0, 0.2, 0.8, 1, 0.8); Block.setLightOpacity(117, 0); Block.setDestroyTime(117, 2.5);
Block.defineBlock(118, "Brick Flower Pot", [["brick", 0], ["dirt", 0], ["brick", 0], ["brick", 0], ["brick", 0], ["brick", 0]], 3, false, 0); Block.setShape(118, 0.2, 0, 0.2, 0.8, 1, 0.8); Block.setLightOpacity(118, 0); Block.setDestroyTime(118, 2.5);
Block.defineBlock(119, "Quartz Flower Pot", [["quartz_block", 0], ["dirt", 0], ["quartz_block", 0], ["quartz_block", 0], ["quartz_block", 0], ["quartz_block", 0]], 3, false, 0); Block.setShape(119, 0.2, 0, 0.2, 0.8, 1, 0.8); Block.setLightOpacity(119, 0); Block.setDestroyTime(119, 2.5);
cnb(122, "White Fence", "log", 4, 2.5, 3, 11, false); Block.setLightOpacity(122, 0);
Block.defineBlock(123, "Smoke Stack (wood)", [["planks", 0], ["piston_inner", 0], ["planks", 0], ["planks", 0], ["planks", 0], ["planks", 0]], 3, false, 0); Block.setShape(123, 0.15, 0, 0.15, 0.85, 1, 0.85); Block.setLightOpacity(123, 0); Block.setDestroyTime(123, 2.5);

//Crafting
Item.addShapedRecipe(23, 1, 0, ["iii","0i0","000"], ["i", 265, 0]);
Item.addShapedRecipe(25, 1, 0, ["a0a","a0a","aaa"], ["a", 4, 0]);
Item.addShapedRecipe(28, 2, 0, ["0i0","grg","000"], ["i", 265, 0, "g", 20, 0, "r", 331, 0]);
Item.addShapedRecipe(33, 1, 0, ["000","s0s","sds"], ["s", 4, 0, "d", 25, 0]);
Item.addShapedRecipe(34, 1, 0, ["0i0","s0s","sss"], ["i", 265, 0, "s", 4, 0]);
Item.addShapedRecipe(36, 3, 0, ["ww0","000","000"], ["w", 17, 0]);
Item.addShapedRecipe(55, 2, 0, ["000","0w0","0w0"], ["w", 17, 0]);
Item.addShapedRecipe(69, 1, 0, ["000","www","000"], ["w", 17, 0]);
Item.addShapedRecipe(70, 1, 0, ["000","ggg","000"], ["g", 20, 0]);
Item.addShapedRecipe(72, 4, 0, ["0r0","www","0r0"], ["r", 331, 0, "w", 17, 0]);
Item.addShapedRecipe(115, 1, 0, ["000","iii","iti"], ["i", 265, 0, "t", 101, 0]);
Item.addShapedRecipe(117, 2, 0, ["000","cdc","0c0"], ["c", 82, 0, "d", 3, 0]);
Item.addShapedRecipe(118, 2, 0, ["000","bdb","0b0"], ["b", 45, 0, "d", 3, 0]);
Item.addShapedRecipe(119, 2, 0, ["000", "qdq","0q0"], ["q", 155, 0, "d", 3, 0]);
Item.addShapedRecipe(122, 8, 0, ["000","wsw","wsw"], ["w", 17, 2, "s", 280, 0]);
Item.addShapedRecipe(123, 1, 0, ["pip","p0p","p0p"], ["p", 5, 0, "i", 265, 0]);

function useItem(x, y, z, itemId, blockId, side){
if(blockId==23&&sof==0){
sx= x
sy= y
sz= z
sof= 1
}
if(blockId==23&&sof==1&&bf==1){
sof= 0
bf= 0
}
if(blockId==28){
Level.setTile(x, y, z, 29, 0);
}
if(blockId==29){
Level.setTile(x, y, z, 28, 0);
}
if(blockId==33){
Level.addParticle(ParticleType.splash, x+0.5, y+1, z+0.5, 0, 0, 0, 100);
Level.addParticle(ParticleType.splash, x+0.5, y+1, z+0.5, 0, 0, 0, 100);
Level.addParticle(ParticleType.splash, x+0.5, y+1, z+0.5, 0, 0, 0, 100);
var noise= Math.random()*1000
Level.playSound(x, y, z, "random.eat", 0.5, noise);
Level.playSound(x, y, z, "random.burp", 0.25, noise);
}
if(blockId==34&&Sof==0){
Sx= x
Sy= y
Sz= z
Sof= 1
}
if(blockId==34&&Sof==1&&bf2==1){
Sof= 0
bf2= 0
}
//Blinds Stuff
if(itemId==72&&blockId==20){
if(side==2){
Level.setTile(x, y, z-1, 75);
}
if(side==3){
Level.setTile(x, y, z+1, 77);
}
if(side==4){
Level.setTile(x-1, y, z, 76);
}
if(side==5){
Level.setTile(x+1, y, z, 84);
}
Entity.setCarriedItem(getPlayerEnt(), 72, Player.getCarriedItemCount()-1, 0);
}
if(blockId==75){
Level.setTile(x, y, z, 90);
}
if(blockId==76){
Level.setTile(x, y, z, 93);
}
if(blockId==77){
Level.setTile(x, y, z, 94);
}
if(blockId==84){
Level.setTile(x, y, z, 113);
}
if(blockId==90){
Level.setTile(x, y, z, 75);
}
if(blockId==93){
Level.setTile(x, y, z, 76);
}
if(blockId==94){
Level.setTile(x, y, z, 77);
}
if(blockId==113){
Level.setTile(x, y, z, 84);
}
if(blockId==115){
var c= Level.getTile(x, y+1, z);
if(c==0){
Level.setTile(x, y+1, z, 116);
}
}
if(blockId==117||blockId==118||blockId==119&&itemId==37){
Level.setTile(x, y+1, z, 37);
Entity.setCarriedItem(getPlayerEnt(), 37, Player.getCarriedItemCount()-1, 0);
}
if(blockId==123&&Ssof==0){
Ssx= x
Ssy= y
Ssz= z
Ssof= 1
}
if(blockId==123&&Ssof==1&&bf3==1){
Ssof= 0
bf3= 0
}
}

function modTick(){
if(sof==1){
bf= 1
Level.addParticle(ParticleType.splash, sx+0.5, sy-0.5, sz+0.5, 0, -1, 0, 100);
Level.addParticle(ParticleType.splash, sx+0.5, sy-0.5, sz+0.5, 0, -1, 0, 100);
Level.addParticle(ParticleType.splash, sx+0.5, sy-0.5, sz+0.5, 0, -1, 0, 100);
Level.addParticle(ParticleType.splash, sx+0.75, sy-0.5, sz+0.5, 0, -1, 0, 100);
Level.addParticle(ParticleType.splash, sx+0.5, sy-0.5, sz+0.75, 0, -1, 0, 100);
Level.addParticle(ParticleType.splash, sx+0.25, sy-0.5, sz+0.5, 0, -1, 0, 100);
Level.addParticle(ParticleType.splash, sx+0.5, sy-0.5, sz+0.25, 0, -1, 0, 100);
Level.addParticle(ParticleType.splash, sx+0.75, sy-0.5, sz+0.5, 0, -1, 0, 100);
Level.addParticle(ParticleType.splash, sx+0.5, sy-0.5, sz+0.75, 0, -1, 0, 100);
Level.addParticle(ParticleType.splash, sx+0.25, sy-0.5, sz+0.5, 0, -1, 0, 100);
Level.addParticle(ParticleType.splash, sx+0.5, sy-0.5, sz+0.25, 0, -1, 0, 100);
Level.addParticle(ParticleType.splash, sx+0.75, sy-0.5, sz+0.5, 0, -1, 0, 100);
Level.addParticle(ParticleType.splash, sx+0.5, sy-0.5, sz+0.75, 0, -1, 0, 100);
Level.addParticle(ParticleType.splash, sx+0.25, sy-0.5, sz+0.5, 0, -1, 0, 100);
Level.addParticle(ParticleType.splash, sx+0.5, sy-0.5, sz+0.25, 0, -1, 0, 100);
}
if(Sof==1){
bf2= 1
Level.addParticle(ParticleType.splash, Sx+0.5, Sy+1, Sz+0.5, 0, 0, 0, 100);
}
if(Ssof==1){
bf3= 1
Level.addParticle(ParticleType.smoke, Ssx+0.5, Ssy+1, Ssz+0.5, 0, 0.1, 0, 200);
}
}
