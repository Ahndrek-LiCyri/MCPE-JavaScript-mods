/*Mo'Trees v1.1*/

//Red Wood Blocks 
Block.defineBlock(23, "Red Wood Log", [["log",1],["log",1],["log",0],["log",0],["log",0],["log",0]], 17, 0, 0); 
Block.setColor(23, [0x610B0B]); 
Block.setDestroyTime(23, 1); 
Block.defineBlock(25, "Red Wood Plank", ["planks", 0], 5, 0, 0); 
Block.setColor(25, [0x610B0B]); 
Block.setDestroyTime(25, 1); 
Block.defineBlock(28, "Red Wood Leaf", ["leaves", 1], 18, 0, 0); 
Block.setColor(28, [0x04B404 ]); 
Block.setDestroyTime(28, 1); 

//Cherry Tree Blocks 
Block.defineBlock(29, "Cherry Log", [["log",1],["log",1],["log",0],["log",0],["log",0],["log",0]], 17, 0, 0); 
Block.setColor(29, [0xFF0000]); 
Block.setDestroyTime(29, 1); 
Block.defineBlock(33, "Cherry Wood Plank", ["planks", 0], 5, 0, 0); 
Block.setColor(33, [0xFF0000]); 
Block.setDestroyTime(33, 1); 
Block.defineBlock(34, "Cherry Tree Leaf", ["leaves", 0], 18, 0, 0); 
Block.setColor(34, [0x82FA58]); 
Block.setDestroyTime(34, 1); 

//Walnut Tree Blocks 
Block.defineBlock(36, "Walnut Log", [["log",1],["log",1],["log",0],["log",0],["log",0],["log",0]], 17, 0, 0); 
Block.setColor(36, [0x8A4B08]); 
Block.setDestroyTime(36, 1); 
Block.defineBlock(55, "Walnut Wood Plank", ["planks", 0], 5, 0, 0); 
Block.setColor(55, [0x8A4B08]); 
Block.setDestroyTime(55, 1); 
Block.defineBlock(69, "Walnut Tree Leaf", ["leaves", 3], 18, 0, 0); 
Block.setColor(69, [0xBEF781]); 
Block.setDestroyTime(69, 1); 

//Palm Tree Blocks 
Block.defineBlock(70, "Palm Log", [["log",7],["log",7],["log",6],["log",6],["log",6],["log",6]], 17, 0, 0); 
Block.setColor(70, [0xF4FA58]); 
Block.setDestroyTime(70, 1); 
Block.defineBlock(72, "Palm Wood Plank", ["planks", 0], 5, 0, 0); 
Block.setColor(72, [0xF4FA58]); 
Block.setDestroyTime(72, 1); 
Block.defineBlock(75, "Palm Tree Leaf", ["leaves", 1], 18, 0, 0); 
Block.setColor(75, [0x80FF00]); 
Block.setDestroyTime(75, 1); 

//Maple Tree Blocks 
Block.defineBlock(76, "Maple Log", [["log",3],["log",3],["log",2],["log",2],["log",2],["log",2]], 17, 0, 0); 
Block.setColor(76, [0x504303]); 
Block.setDestroyTime(76, 1); 
Block.defineBlock(77, "Maple Wood Plank", ["planks", 0], 5, 0, 0); 
Block.setColor(77, [0x504303]); 
Block.setDestroyTime(77, 1); 
Block.defineBlock(84, "Maple Tree Leaf", ["leaves", 1], 18, 0, 0); 
Block.setColor(84, [0xFF8000]); 
Block.setDestroyTime(84, 1); 

//Lemon Tree Blocks 
Block.defineBlock(116, "Lemon Wood", [["log", 1], ["log",1], ["log", 0], ["log", 0], ["log", 0], ["log", 0]], 17, 0, 0); 
Block.setColor(116, [0xA8B60B]); 
Block.setDestroyTime(116, 1); 
Block.defineBlock(117, "Lemon Wood Planks", ["planks", 0], 5, 0, 0); 
Block.setColor(117, [0xA8B60B]); 
Block.setDestroyTime(117, 1); 
Block.defineBlock(118, "Lemon Tree Leaf", ["leaves", 1], 18, 0, 0); 
Block.setColor(118, [0xBEF781]); 
Block.setDestroyTime(118, 1); 

//Balsa Wood Blocks
Block.defineBlock(122, "Balsa Log", [["log", 5], ["log", 5], ["log", 4], ["log", 4], ["log", 4], ["log", 4]], 17, 0, 0);
Block.setColor(122, [0x7E8384]);
Block.setDestroyTime(122, 1);
Block.defineBlock(123, "Balsa Wood Planks", ["planks", 2], 5, 0, 0);
Block.setColor(123, [0x7E8384]);
Block.setDestroyTime(123, 1);
Block.defineBlock(124, "Balsa Tree Leaf", ["leaves", 0], 18, 0, 0);
Block.setColor(124, [0xC1FD5A]);
Block.setDestroyTime(124, 1);

//Saplings 
Block.defineBlock(93, "Red Wood Sapling", ["sapling", 0], 6, 0, 0); 
Block.setColor(93, [0x610B0B]); 
Block.defineBlock(94, "Cherry Wood Sapling", ["sapling", 0], 6, 0, 0); 
Block.setColor(94, [0xFF0000]); 
Block.defineBlock(97, "Walnut Tree Sapling", ["sapling", 0], 6, 0, 0); 
Block.setColor(97, [0x8A4B08]); 
Block.defineBlock(113, "Palm Tree Sapling", ["sapling", 0], 6, 0, 0); 
Block.setColor(113, [0xF4FA58]); 
Block.defineBlock(115, "Maple Tree Sapling", ["sapling", 0], 6, 0, 0); 
Block.setColor(115, [0x504303]); 
Block.defineBlock(119, "Lemon Tree Sapling", ["sapling", 0], 6, 0, 0); 
Block.setColor (119, [0xA8B60B]); 
Block.defineBlock(125, "Balsa Wood Sapling", ["sapling", 0], 6, 0, 0);
Block.setColor (125, [0x7E8384]);

//Tree Items 
ModPE.setFoodItem(460, "seeds_melon", 0, 1, "Walnuts"); 
ModPE.setFoodItem(461, "ruby", 0, 1, "Cherry"); 
ModPE.setItem(462, "blaze_rod", 0, "Grafter"); 
ModPE.setFoodItem(463, "rotten_flesh", 0, 1, "Maple Seed"); 
ModPE.setFoodItem(464, "flower_pot", 0, 1, "Coconut"); 
ModPE.setFoodItem(465, "gold_nugget", 0, 1, "Lemon"); 

//Crafting recipies 
Item.addShapedRecipe(25, 4, 0, ["L", "", ""], ["L", 23, 0]); 
Item.addShapedRecipe(33, 4, 0, ["P", "", ""], ["P", 29, 0]); 
Item.addShapedRecipe(55, 4, 0, ["A", "", ""], ["A", 36, 0]); 
Item.addShapedRecipe(72, 4, 0, ["O", "", ""], ["O", 70, 0]); 
Item.addShapedRecipe(77, 4, 0, ["B", "", ""], ["B", 76, 0]); 
Item.addShapedRecipe(117, 4, 0, ["Y", "", ""], ["Y", 116, 0]); 
Item.addShapedRecipe(123, 4, 0, ["S", "", ""], ["S", 122, 0]);
Item.addShapedRecipe(460, 2, 0, ["D", "", ""], ["D", 69, 0]); 
Item.addShapedRecipe(461, 2, 0, ["C", "", ""], ["C", 34, 0]); 
Item.addShapedRecipe(463, 2, 0, ["Q", "", ""], ["Q", 84, 0]); 
Item.addShapedRecipe(464, 2, 0, ["T", "", ""], ["T", 75, 0]); 
Item.addShapedRecipe(465, 2, 0, ["L", "", ""], ["L", 118, 0]);

//Sapling Recipies
Item.addShapedRecipe(93, 1, 0, ["a", "a", "a"], ["a", 18, 0]);
Item.addShapedRecipe(94, 1, 0, ["b", "B", "b"], ["b", 18, 0, "B", 6, 0]);
Item.addShapedRecipe(97, 1, 0, ["c", "cdc", "c"], ["c", 18, 0, "d", 94, 0]);
Item.addShapedRecipe(113, 1, 0, ["e", "fgf", "e"], ["e", 18, 0, "f", 17, 0, "g", 12, 0]);
Item.addShapedRecipe(115, 1, 0, ["hhh", "iii", "j"], ["h", 18, 0, "i", 17, 0, "j", 6, 0]);
Item.addShapedRecipe(119, 1, 0, ["k", "l", "m"], ["k", 18, 0, "l", 35, 4, "m", 6, 0]);
Item.addShapedRecipe(125, 1, 0, ["n", "n", "o"], ["n", 18, 2, "o", 6, 2]);

//Sapling Recipies (Leaves)
Item.addShapedRecipe(93, 1, 0, ["A", "", ""], ["A", 28, 0]);
Item.addShapedRecipe(94, 1, 0, ["B", "", ""], ["B", 34, 0]);
Item.addShapedRecipe(97, 1, 0, ["C", "", ""], ["C", 69, 0]);
Item.addShapedRecipe(113, 1, 0, ["D", "", ""], ["D", 75, 0]);
Item.addShapedRecipe(115, 1, 0, ["E", "", ""], ["E", 84, 0]);
Item.addShapedRecipe(119, 1, 0, ["F", "", ""], ["F", 118, 0]);
Item.addShapedRecipe(125, 1, 0, ["G", "", ""], ["G", 124, 0]);

function useItem(x, y, z, itemId, blockId, side)
{
//Red Wood Spawn 
if (itemId==351, blockId==93){ 
Level.setTile(x, y, z, 23); Level.setTile(x, y+1, z, 23); Level.setTile(x, y+2, z, 23); Level.setTile(x, y+3, z, 23); Level.setTile(x, y+4, z, 23); Level.setTile(x, y+5, z, 23); Level.setTile(x, y+6, z, 23); Level.setTile(x, y+7, z, 23); Level.setTile(x, y+8, z, 23); Level.setTile(x, y+9, z, 23); Level.setTile(x, y+11, z, 28); Level.setTile(x, y+10, z, 28); Level.setTile(x+1, y+10, z, 28); Level.setTile(x-1, y+10, z, 28); Level.setTile(x, y+10, z+1, 28); Level.setTile(x, y+10, z-1, 28); Level.setTile(x+1, y+10, z+1, 28); Level.setTile(x-1, y+10, z+1, 28); Level.setTile(x+1, y+10, z-1, 28); Level.setTile(x-1, y+10, z-1, 28); Level.setTile(x+1, y+9, z, 28); Level.setTile(x-1, y+9, z, 28); Level.setTile(x, y+9, z+1, 28); Level.setTile(x, y+9, z-1, 28); Level.setTile(x+1, y+9, z+1, 28); Level.setTile(x-1, y+9, z+1, 28); Level.setTile(x+1, y+9, z-1, 28); Level.setTile(x-1, y+9, z-1, 28); Level.setTile(x+1, y+8, z, 28); Level.setTile(x-1, y+8, z, 28); Level.setTile(x, y+8, z+1, 28); Level.setTile(x, y+8, z-1, 28); Level.setTile(x+1, y+8, z+1, 28); Level.setTile(x-1, y+8, z+1, 28); Level.setTile(x+1, y+8, z-1, 28); Level.setTile(x-1, y+8, z-1, 28);} 

//Cherry Tree Spawn 
if (itemId==351, blockId==94){ 
Level.setTile(x, y, z, 29); Level.setTile(x, y+1, z, 29); Level.setTile(x, y+2, z, 29); Level.setTile(x, y+3, z, 29); Level.setTile(x, y+4, z, 29); Level.setTile(x+1, y+4, z, 34); Level.setTile(x-1, y+4, z, 34); Level.setTile(x, y+4, z+1, 34); Level.setTile(x, y+4, z-1, 34); Level.setTile(x, y+5, z, 34); Level.setTile(x+1, y+5, z, 34); Level.setTile(x-1, y+5, z, 34); Level.setTile(x, y+5, z+1, 34); Level.setTile(x, y+5, z-1, 34); Level.setTile(x+1, y+5, z+1, 34); Level.setTile(x-1, y+5, z+1, 34); Level.setTile(x+1, y+5, z-1, 34); Level.setTile(x-1, y+5, z-1, 34); Level.setTile(x, y+6, z, 34); Level.setTile(x+1, y+6, z, 34); Level.setTile(x-1, y+6, z, 34); Level.setTile(x, y+6, z+1, 34); Level.setTile(x, y+6, z-1, 34); } 

//Walnut Tree Spawn 
if (itemId==351, blockId==97) { 
Level.setTile(x, y, z, 36); Level.setTile(x, y+1, z, 36); Level.setTile(x, y+2, z, 36); Level.setTile(x, y+3, z, 36); Level.setTile(x, y+4, z, 36); Level.setTile(x, y+5, z, 69); Level.setTile(x+1, y+3, z, 69); Level.setTile(x+2, y+3, z, 69); Level.setTile(x-1, y+3, z, 69); Level.setTile(x-2, y+3, z, 69); Level.setTile(x, y+3, z+1, 69); Level.setTile(x, y+3, z+2, 69); Level.setTile(x, y+3, z-1, 69); Level.setTile(x, y+3, z-2, 69); Level.setTile(x+1, y+3, z+1, 69); Level.setTile(x-1, y+3, z+1, 69); Level.setTile(x+1, y+3, z-1, 69); Level.setTile(x-1, y+3, z-1, 69); Level.setTile(x+1, y+4, z, 69); Level.setTile (x-1, y+4, z, 69); Level.setTile (x, y+4, z+1, 69); Level.setTile (x, y+4, z-1, 69);} 

//Palm Tree Spawn 
if (itemId==351, blockId==113){ 
Level.setTile(x, y, z, 70); Level.setTile(x, y+1, z, 70); Level.setTile(x, y+2, z, 70); Level.setTile(x, y+3, z, 70); Level.setTile(x, y+4, z, 70); Level.setTile(x+1, y+5, z, 75); Level.setTile(x+2, y+5, z, 75); Level.setTile(x-1, y+5, z, 75); Level.setTile(x-2, y+5, z, 75); Level.setTile(x, y+5, z+1, 75); Level.setTile(x, y+5, z+2, 75); Level.setTile(x, y+5, z-1, 75); Level.setTile(x, y+5, z-2, 75); Level.setTile(x+1, y+5, z+1, 75); Level.setTile(x-1, y+5, z+1, 75); Level.setTile(x+1, y+5, z-1, 75); Level.setTile(x-1, y+5, z-1, 75); Level.setTile(x, y+5, z, 75); Level.setTile(x+2, y+4, z+2, 75); Level.setTile (x-2, y+4, z+2, 75); Level.setTile(x+2, y+4, z-2, 75); Level.setTile (x-2, y+4, z-2, 75); Level.setTile(x+3, y+4, z, 75); Level.setTile (x-3, y+4, z, 75); Level.setTile (x, y+4, z+3, 75); Level.setTile (x, y+4, z-3, 75);} 

//Maple Tree Spawn 
if (itemId==351, blockId==115){ 
Level.setTile(x, y, z, 76); Level.setTile(x, y+1, z, 76); Level.setTile(x, y+2, z, 76); Level.setTile (x, y+3, z, 76); Level.setTile (x, y+4, z, 76); Level.setTile(x+1, y+5, z+1, 76); Level.setTile(x-1, y+5, z+1, 76); Level.setTile(x+1, y+5, z-1, 76); Level.setTile(x-1, y+5, z-1, 76); Level.setTile(x, y+6, z, 84); Level.setTile (x+1, y+6, z, 84); Level.setTile (x-1, y+6, z, 84); Level.setTile (x, y+6, z+1, 84); Level.setTile (x, y+6, z-1, 84); Level.setTile (x+1, y+6, z+1, 84); Level.setTile (x-1, y+6, z+1, 84); Level.setTile (x+1, y+6, z-1, 84); Level.setTile (x-1, y+6, z-1, 84); Level.setTile(x+2, y+6, z, 84); Level.setTile(x-2, y+6, z, 84); Level.setTile(x, y+6, z+2, 84); Level.setTile(x, y+6, z-2, 84); Level.setTile(x+2, y+6, z+1, 84); Level.setTile(x+2, y+6, z-1, 84); Level.setTile(x+1, y+6, z+2, 84); Level.setTile(x-1, y+6, z+2, 84); Level.setTile(x+1, y+6, z-2, 84); Level.setTile(x-1, y+6, z-2, 84); Level.setTile(x+2, y+5, z+2, 84); Level.setTile(x-2, y+5, z+2, 84); Level.setTile(x+2, y+5, z-2, 84); Level.setTile(x-2, y+5, z-2, 84); Level.setTile(x+3, y+5, z, 84); Level.setTile(x-3, y+5, z, 84); Level.setTile(x, y+5, z+3, 84); Level.setTile(x, y+5, z-3, 84);}

//Lemon Tree Spawn
 if (itemId==351, blockId==119){ Level.setTile(x, y, z, 116); Level.setTile(x, y+1, z, 116); Level.setTile(x, y+2, z, 116); Level.setTile(x, y+3, z, 116); Level.setTile(x, y+4, z, 118); Level.setTile(x+1, y+3, z, 118); Level.setTile(x-1, y+3, z, 118); Level.setTile(x, y+3, z+1, 118); Level.setTile(x, y+3, z-1, 118); Level.setTile(x+1, y+2, z, 118); Level.setTile(x-1, y+2, z, 118); Level.setTile(x, y+2, z+1, 118); Level.setTile(x, y+2, z-1, 118);}

//Balsa Wood Spawn
if (itemId==351, blockId==125){ Level.setTile(x, y, z, 122);Level.setTile (x, y+1, z, 122);Level.setTile(x, y+2, z, 122);Level.setTile (x, y+3, z, 122);Level.setTile(x, y+4, z, 122);Level.setTile(x, y+5, z, 124);Level.setTile(x+1, y+4, z, 124);Level.setTile (x-1, y+4, z, 124);Level.setTile(x, y+4, z+1, 124);Level.setTile (x, y+4, z-1, 124);}
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
if(cmd[0] == "Tree"){
clientMessage("All saplings Given!");
addItemInventory(93, 64, 0);
addItemInventory(94, 64, 0);
addItemInventory(97, 64, 0);
addItemInventory(113, 64, 0);
addItemInventory(115, 64, 0);
addItemInventory(119, 64, 0);}

}

function newLevel()
{
clientMessage("Mo'Trees Mod By: Andr3w246");
clientMessage("Use /Tree to get all saplings!");
clientMessage("Current Version: 1.1");

}

function leaveGame()
{

}

