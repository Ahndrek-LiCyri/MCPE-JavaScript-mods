/*Special Minerals Mod*/
/*By: Andr3w246*/
/*Don't copy any parts of this mod!*/

//Minerals
ModPE.setItem(500, "quartz", 0, "Netherite");
ModPE.setItem(501, "ruby", 0, "Redinite");
ModPE.setItem(502, "nether_wart", 0, "Creepium");
ModPE.setItem(503, "nether_star", 0, "Blockium");
ModPE.setItem(504, "blaze_powder", 0, "Blazium");
ModPE.setItem(505, "fireworks_charge", 0, "Rockite");
ModPE.setItem(506, "ender_pearl", 0, "Endrium");
ModPE.setItem(507, "ender_eye", 0, "Enderite");
ModPE.setItem(508, "cauldron", 0, "Iridium");
ModPE.setItem(509, "ghast_tear", 0, "Ghastium");

//Mineral Blocks
Block.defineBlock(23, "Netherite Block", ["grass", 0], 1, 0, 0);
Block.setDestroyTime(23, 2.5);
Block.setExplosionResistance(23, 5);
Block.setColor(23, [0x555555]);
Block.defineBlock(25, "Redinite Block", ["iron_block", 0], 1, 0, 0);
Block.setDestroyTime(25, 1.5);
Block.setExplosionResistance(25, 7.5);
Block.setColor(25, [0xFF0000]);
Block.defineBlock(28, "Creepium Block", ["stonebrick", 0], 1, 0, 0);
Block.setDestroyTime(28, 5);
Block.setExplosionResistance(28, 1);
Block.setColor(28, [0x04B404]);
Block.defineBlock(29, "Blockium Block", ["quartz_block", 5], 1, 0, 0);
Block.setDestroyTime(29, 2.5);
Block.setExplosionResistance(29, 5);
Block.setColor(29, [0x00FFFF]);
Block.defineBlock(33, "Blazium Block", ["quartz_block", 6], 1, 0, 0);
Block.setDestroyTime(33, 3);
Block.setExplosionResistance(33, 7.5);
Block.setColor(33, [0xFE9A2E]);
Block.defineBlock(34, "Rockite Block", ["stone_slab", 0], 1, 0, 0);
Block.setDestroyTime(34, 2.5);
Block.setExplosionResistance(34, 6);
Block.setColor(34, [0x777777]);
Block.defineBlock(36, "Endrium Block", ["stonebrick", 3], 1, 0, 0);
Block.setDestroyTime(36, 3);
Block.setExplosionResistance(36, 5);
Block.setColor(36, [0x3A718F]);
Block.defineBlock(55, "Enderite Block", ["end_stone", 0], 1, 0, 0);
Block.setDestroyTime(55, 3.5);
Block.setExplosionResistance(55, 7.5);
Block.setColor(55, [0x5FE81F]);
Block.defineBlock(69, "Iridium Block", ["ice", 0], 1, 0, 0);
Block.setDestroyTime(69, 2.5);
Block.setExplosionResistance(69, 4);
Block.setColor(69, [0x29AF7]);
Block.defineBlock(70, "Ghastium Block", ["emerald_block", 0], 1, 0, 0);
Block.setDestroyTime(70, 3);
Block.setExplosionResistance(70, 5);
Block.setColor(70, [0x9F34E2]);

//Block Recipies
Item.addShapedRecipe(23, 1, 0, ["qqq","qqq","qqq"], ["q", 500, 0]);
Item.addShapedRecipe(25, 1, 0, ["vvv","vvv","vvv"], ["v", 501, 0]);
Item.addShapedRecipe(28, 1, 0, ["ccc","ccc","ccc"], ["c", 502, 0]);
Item.addShapedRecipe(29, 1, 0, ["aaa","aaa","aaa"], ["a", 503, 0]);
Item.addShapedRecipe(33, 1, 0, ["eee","eee","eee"], ["e", 504, 0]);
Item.addShapedRecipe(34, 1, 0, ["iii","iii","iii"], ["i", 505, 0]);
Item.addShapedRecipe(36, 1, 0, ["ooo","ooo","ooo"], ["o", 506, 0]);
Item.addShapedRecipe(55, 1, 0, ["uuu","uuu","uuu"], ["u", 507, 0]);
Item.addShapedRecipe(69, 1, 0, ["yyy","yyy","yyy"], ["y", 508, 0]);
Item.addShapedRecipe(70, 1, 0, ["zzz","zzz","zzz"], ["z", 509, 0]);

//Item Recipies
Item.addShapedRecipe(500, 9, 0, ["b","",""], ["b", 23, 0]);
Item.addShapedRecipe(501, 9, 0, ["b","",""], ["b", 25, 0]);
Item.addShapedRecipe(502, 9, 0, ["b","",""], ["b", 28, 0]);
Item.addShapedRecipe(503, 9, 0, ["b","",""], ["b", 29, 0]);
Item.addShapedRecipe(504, 9, 0, ["b","",""], ["b", 33, 0]);
Item.addShapedRecipe(505, 9, 0, ["b","",""], ["b", 34, 0]);
Item.addShapedRecipe(506, 9, 0, ["b","",""], ["b", 36, 0]);
Item.addShapedRecipe(507, 9, 0, ["b","",""], ["b", 55, 0]);
Item.addShapedRecipe(508, 9, 0, ["b","",""], ["b", 69, 0]);
Item.addShapedRecipe(509, 9, 0, ["b","",""], ["b", 70, 0]);

function destroyBlock(x, y, z, side){
var b= getTile(x, y, z);
if(b==1){
var Min= Math.round(Math.random()*20)
var Luck= 500+Min
if(Luck<510){
Level.dropItem(x, y, z, 0, Luck, 1, 0);
}else if(Luck>=510){
//Nothing
}
}
}
