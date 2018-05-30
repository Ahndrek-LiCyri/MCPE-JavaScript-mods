/*Many Ores Mod*/
/*By: Andr3w246*/
/*Version: 0.2.0*/
/*Don't use or copy any parts of this mod without my perrmission!*/
/*Please don't modify the script! Thanks.*/

//Scrpit Change Log
//v0.1.0: Release
//v0.1.1: Added newLevel function, changed "Skeleton Ore" to "Bone Ore", Removed Herobrine :D
//v0.2.0: Added ore generation(Thanks to grimorb40!), fixed Version #, Bugs where squished

//Ores Setup
Block.defineBlock(23, "Gunpowder Ore", ["grass", 0], 1, 0, 0);
Block.setDestroyTime(23, 2.5);
Block.setExplosionResistance(23, 10);
Block.setColor(23, [0x555555]);
Player.addItemCreativeInv(23, 1);
Block.defineBlock(25, "Ice Ore", ["quartz_block", 0], 1, 0, 0);
Block.setDestroyTime(25, 2.5);
Block.setExplosionResistance(25, 10);
Block.setColor(25, [0x7CF5DF]);
Player.addItemCreativeInv(25, 1);
Block.defineBlock(28, "Melon Ore", ["cake_bottom", 0], 1, 0, 0);
Block.setDestroyTime(28, 2.5);
Block.setExplosionResistance(28, 10);
Block.setColor(28, [0x00F78A]);
Player.addItemCreativeInv(28, 1);
Block.defineBlock(29, "Bone Ore", ["stone", 4], 1, 0, 0);
Block.setDestroyTime(29, 2.5);
Block.setExplosionResistance(29, 10);
Block.setColor(29, [0xA5A1A1]);
Player.addItemCreativeInv(29, 1);
Block.defineBlock(33, "Leather Ore", ["stone_slab", 0], 1, 0, 0);
Block.setDestroyTime(33, 2.5);
Block.setExplosionResistance(33, 10);
Block.setColor(33, [0xAE6109]);
Player.addItemCreativeInv(33, 1);

//Mining the Ores
function destroyBlock(x, y, z, side){
var game= Level.getGameMode();
if(game==0){
var id= getTile(x, y, z);
if(id==23){
preventDefault();
Level.destroyBlock(x, y, z, 0);
var num= Math.round(Math.random()*4+1);
Level.dropItem(x+0.5, y+0.5, z+0.5, 0, 289, num, 0);
}
if(id==25){
preventDefault();
Level.destroyBlock(x, y, z, 0);
var num= Math.round(Math.random()*2+1);
Level.dropItem(x+0.5, y+0.5, z+0.5, 0, 79, num, 0);
}
if(id==28){
preventDefault();
Level.destroyBlock(x, y, z, 0);
var num= Math.round(Math.random()*4+1);
Level.dropItem(x+0.5, y+0.5, z+0.5, 0, 360, num, 0);
}
if(id==29){
preventDefault();
Level.destroyBlock(x, y, z, 0);
var num= Math.round(Math.random()*2+1);
Level.dropItem(x+0.5, y+0.5, z+0.5, 0, 352, num, 0);
}
if(id==33){
preventDefault();
Level.destroyBlock(x, y, z, 0);
var num= Math.round(Math.random()*4+1);
Level.dropItem(x+0.5, y+0.5, z+0.5, 0, 334, num, 0);
}}
else if(game==1){
//Nothing
}
}

//newLevel Function
function newLevel()
{
print("Please wait for the lag to stop. It is most of the ore generating!");
print("Please wait for the lag to stop. It is most of the ore generating!");
print("Please wait for the lag to stop. It is most of the ore generating!");
clientMessage(ChatColor.YELLOW+"Many Ores Mod:"+ChatColor.BLUE+" Version 0.2.0");
clientMessage(ChatColor.YELLOW+"By: Andr3w246"+ChatColor.GREEN+" HAVE FUN!");
}

//Ore generation (Thanks to grimorb40!)
var loaded=false; 
var ores=[
 	{id:23,minY:0,maxY:50,rarity:25},//add more of these for more ore spawnings
 	{id:25,minY:40,maxY:60,rarity:17},
     {id:28,minY:25,maxY:50,rarity:12},
     {id:29,minY:10,maxY:25,rarity:19},
     {id:33,minY:25,maxY:50,rarity:21},
 	];
 function leaveGame(){
 	loaded=false;
 	}
 function modTick(){
 	var cx=Math.round(Player.getX()/16);
 	var cz=Math.round(Player.getZ()/16);
 	if(!loaded && Level.getTile(parseInt(Player.getX()),parseInt(Player.getY())-2,parseInt(Player.getZ()))!=0)
 		loaded=true;
 	if(loaded){
 		for(var i=0;i<ores.length;i++){
 			for(var x=-1;x<1;x++){
 				for(var z=-1;z<1;z++){
 					if(Level.getTile((cx+x)*16,1,(cz+z)*16)!=4)
 						Generate(cx+x,cz+z,ores[i].id,ores[i].minY,ores[i].maxY,ores[i].rarity);
 					}
 				}
 			}
 		for(var x=-1;x<1;x++){
 			for(var z=-1;z<1;z++){
 				if(Level.getTile((cx+x)*16,1,(cz+z)*16)!=4)
 					Level.setTile((cx+x)*16,1,(cz+z)*16,4);
 				}
 			}
 		}
 	}
 function Generate(cx,cz,id,minY,maxY,rarity){
 	for(var x=cx*16;x<(cx+1)*16-1;x++){
 		for(var z=cz*16;z<(cz+1)*16-1;z++){
 			for(var y=minY;y<maxY;y++){
 				if(Math.floor(Math.random()*rarity*10)==9 && Level.getTile(x,y,z)==1)
 					Level.setTile(x,y,z,id);
 				if(Math.floor(Math.random()*rarity*10)==9 && Level.getTile(x+1,y,z)==1)
 					Level.setTile(x+1,y,z,id);
 				if(Math.floor(Math.random()*rarity*10)==9 && Level.getTile(x,y+1,z)==1)
 					Level.setTile(x,y+1,z,id);
 				if(Math.floor(Math.random()*rarity*10)==9 && Level.getTile(x,y,z+1)==1)
 					Level.setTile(x,y,z+1,id);
 				}
 			}
 		}
 	}