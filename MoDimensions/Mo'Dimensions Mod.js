/*Mo'Dimensions Mod*/
/*By: Andr3w246*/
/*Ver: 0.0.1*/
/*Copyright Andr3w246,  2015*/
/*Don't use any parts of this mod without my permission!*/

//Variables
var Px= 0
var Py= 0
var Pz= 0
var dim= 0
var ores= [14, 15, 16, 21, 56, 73, 129]

//New Blocks
Block.defineBlock(23, "Compressed Stone", ["piston_bottom", 0], 1, 0, 0);
Block.setDestroyTime(23, 5);
Item.addShapedRecipe(23, 1, 0, ["sss","sss","sss"], ["s", 1, 0]);

//New Unobtainable Blocks
Block.defineBlock(25, "block_stonePortal", ["cobblestone", 0], 0, false, 0);
Block.setLightOpacity(25, -1);
Block.setShape(25, 0, 0, 0.3, 1, 1, 0.6);
Block.setDestroyTime(25, 0.01);
Block.setColor(25, [0x67A19]);
Block.setLightLevel(25, 8);
Block.setRenderLayer(25, 1);

//New Items
ModPE.setItem(461, "blaze_rod", 0, "Portal Starter");
Item.addShapedRecipe(461, 1, 0, ["grg","isi","0s0"], ["g", 266, 0, "r", 331, 0, "i", 265, 0, "s", 280, 0]);

function useItem(x, y, z, itemId, blockId, side){
//Starter Uses
if(itemId==461&&blockId==23){
var c1= Level.getTile(x+1, y, z);
var c2= Level.getTile(x-1, y, z);
var c3= Level.getTile(x+1, y+1, z);
var c4= Level.getTile(x-1, y+1, z);
var c5= Level.getTile(x, y+2, z);
var c6= Level.getTile(x+1, y+2, z);
var c7= Level.getTile(x-1, y+2, z);
if(c1==23&&c2==23&&c3==23&&c4==23&&c5==23&&c6==23&&c7==23){
Level.setTile(x, y+1, z, 25)
}
}
//StonePortal Use
var check= Level.getTile(x, 8, z);
if(blockId==25&&dim==0&&y>20&&check!=0){
createStoneDim(x, 6, z);
dim= 1
Px= x
Py= y+4
Pz= z
}
if(blockId==25&&dim==0&&y>20&&check==0){
setPosition(getPlayerEnt(), x, 8, z);
dim= 1
Px= x
Py= y+4
Pz= z
}
if(blockId==25&&dim==1&&y<20){
setPosition(getPlayerEnt(), Px, Py, Pz);
dim= 0
}
}

//CustomFunctions
function stoneRoofDecrotive(x, y, z){
var pick= Math.round(Math.random()*2);
if(pick==1){
Level.setTile(x, y, z, 4);
Level.setTile(x+1, y, z, 4);
Level.setTile(x-1, y, z, 4);
Level.setTile(x, y, z+1, 4);
Level.setTile(x, y, z-1, 4);
Level.setTile(x, y-1, z, 4);
Level.setTile(x, y-2, z, 4);
}
if(pick==2){
Level.setTile(x, y, z, 48);
Level.setTile(x+1, y, z, 48);
Level.setTile(x-1, y, z, 48);
Level.setTile(x, y, z+1, 48);
Level.setTile(x, y, z-1, 48);
Level.setTile(x, y-1, z, 48);
Level.setTile(x, y-2, z, 48);
}
}

function createStoneDim(x, y, z){
setPosition(getPlayerEnt(), x, 8, z);
/*Internal Space*/
for(a=0; a<30; a++){
for(b=0; b<30; b++){
for(c=0; c<15; c++){
Level.setTile(x-15+a, 2+c, z-15+b, 0);
}}}
/*Floor+Ores*/
for(d=0; d<30; d++){
for(e=0; e<30; e++){
for(f=0; f<5; f++){
var luck= Math.random()*100
if(luck<95){
Level.setTile(x-15+d, 1+f, z-15+e, 4);
}
else if(luck>95){
var block= ores[Math.floor(Math.random()*ores.length)];
Level.setTile(x-15+d, 1+f, z-15+e, block);
}
}}}
/*BedrockFloor*/
for(g=0; g<30; g++){
for(h=0; h<30; h++){
Level.setTile(x-15+g, 0, z-15+h, 7);
}}
/*Roof*/
for(i=0; i<30; i++){
for(j=0; j<30; j++){
for(k=0; k<2; k++){
Level.setTile(x-15+i, 16+k, z-15+j, 4);
var luck= Math.random()*100
if(luck>=97.5){
stoneRoofDecrotive(x-15+i, 15, z-15+j);
}
}}}
/*BedrockRoof*/
for(l=0; l<30; l++){
for(m=0; m<30; m++){
Level.setTile(x-15+l, 18, z-15+m, 7);
}}
/*Walls(Inside Layer)*/
for(n=0; n<30; n++){
for(o=0; o<16; o++){
Level.setTile(x-15+n, 1+o, z-16, 4);
}}
for(n=0; n<30; n++){
for(o=0; o<16; o++){
Level.setTile(x-15+n, 1+o, z+15, 4);
}}
for(n=0; n<30; n++){
for(o=0; o<16; o++){
Level.setTile(x-16, 1+o, z-15+n, 4);
}}
for(n=0; n<30; n++){
for(o=0; o<16; o++){
Level.setTile(x+15, 1+o, z-15+n, 4);
}}
/*Walls(Outside Layer)*/
for(n=0; n<32; n++){
for(o=0; o<17; o++){
Level.setTile(x-15+n, 1+o, z-17, 7);
}}
for(n=0; n<32; n++){ 
for(o=0; o<17; o++){ 
Level.setTile(x-15+n, 1+o, z+16, 7); 
}} 
for(n=0; n<32; n++){ 
for(o=0; o<17; o++){ 
Level.setTile(x-17, 1+o, z-15+n, 7); 
}} 
for(n=0; n<32; n++){
for(o=0; o<17; o++){
Level.setTile(x+16, 1+o, z-15+n, 7);
}}
/*PortalBack*/
Level.setTile(x, 6, z-15, 23);
Level.setTile(x+1, 6, z-15, 23);
Level.setTile(x-1, 6, z-15, 23);
Level.setTile(x+1, 7, z-15, 23);
Level.setTile(x, 7, z-15, 25);
Level.setTile(x-1, 7, z-15, 23);
Level.setTile(x+1, 8, z-15, 23);
Level.setTile(x, 8, z-15, 23);
Level.setTile(x-1, 8, z-15, 23);
}
