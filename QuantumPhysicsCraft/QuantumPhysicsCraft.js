/*QuantumPhysicsCraft*/
/*By: Andr3w246*/
/*Ver: BYB-01*/
/*Copyright Andr3w246 (c), 2015*/

//Variables
var universe= 0
var qcX= 0
var qcY= 0
var qcZ= 0
var BC= 0

//New Stuff
ModPE.setItem(500, "ruby" , 0, "Quantum Flux", 64);
ModPE.setItem(501, "gunpowder", 0, "Quantum Dust", 64);
ModPE.setItem(502, "blaze_rod", 0, "Qunatum Breaker", 1);
Item.addShapedRecipe(502, 1, 0, ["0q0","0s0","0q0"], ["q", 501, 0, "s", 280, 0]);
Block.defineBlock(23, " Quantum Block", ["grass",0], 1, true, 0);
Block.setLightOpacity(23, 0);
Block.setDestroyTime(23, -1);
Block.defineBlock(25, "Quantum Particle Catcher", ["brewing_stand_base", 0], 1, true, 0);
Block.setDestroyTime(25, 5);
Item.addShapedRecipe(25, 1, 0, ["i0i","iri","ggg"], ["i", 265, 0, "r", 331, 0, "g", 266, 0]);
//Basic Quantum Armor set
Item.defineArmor(503, "helmet", 2, "Quantum Helmet", "armor/quantum_1.png", 3, 100, ArmorType.helmet);
Item.addShapedRecipe(503, 1, 0, ["dfd","f0f","000"], ["d", 501, 0, "f", 500, 0]);
Item.defineArmor(504, "chestplate", 2, "Quantum Chestplate", "armor/quantum_1.png", 4, 100, ArmorType.chestplate);
Item.addShapedRecipe(504, 1, 0, ["f0f","dbd","fff"], ["f", 500, 0, "d", 501, 0, "b", 23, 0]);
Item.defineArmor(505, "leggings", 2, "Quantum Leggings", " armor/quantum_2.png", 2, 100, ArmorType.leggings);
Item.addShapedRecipe(505, 1, 0, ["fdf","f0f","d0d"], ["f", 500, 0, "d", 501, 0]);
Item.defineArmor(506, "boots", 2, "Quantum Boots", "armor/quantum_1.png", 1, 100, ArmorType.boots);
Item.addShapedRecipe(506, 1, 0, ["000","f0f","d0d"], ["f", 500, 0, "d", 501, 0]);
//Normal Quantum Armor set
Item.defineArmor(507, "helmet", 3, "Adv. Quantum Helmet", "armor/advtum_1.png", 5, 250, ArmorType.helmet);
Item.addShapedRecipe(507, 1, 0, ["0b0","bhb","0b0"], ["b", 23, 0, "h", 503, 0]);
Item.defineArmor(508, "chestplate", 3, "Adv. Quantum Chestplate", "armor/advtum_1.png", 6, 250, ArmorType.chestplate);
Item.addShapedRecipe(508, 1, 0, ["0b0","bcb","ddd"], ["b", 23, 0, "c", 504, 0, "d", 501, 0]);
Item.defineArmor(509, "leggings", 3, "Adv. Quantum Leggings", " armor/advtum_2.png", 4, 250, ArmorType.leggings);
Item.addShapedRecipe(509, 1, 0, ["0b0","bpb","d0d"], ["b", 23, 0, "p", 505, 0, "d", 501, 0]);
Item.defineArmor(510, "boots", 3, "Adv. Quantum Boots", "armor/advtum_1.png", 3, 250, ArmorType.boots);
Item.addShapedRecipe(510, 1, 0, ["0b0","bBb","0d0"], ["b", 23, 0, "B", 506, 0, "d", 501, 0]);


function modTick(){
var r1= Math.random()
var nr1= Math.random()
var ax= r1+nr1
var r2= Math.random()*2
var r3= Math.random()
var nr3= Math.random()
var az= r3+ nr3
Level.addParticle(ParticleType.enchantmenttable, qcX-0.5+ax, qcY+r2, qcZ-0.5+az, 0, 0, 0, 1000);

//QuantunUpdater
var block= Player.getPointedBlockId();
if(block==25){
qcX= Player.getPointedBlockX()
qcY= Player.getPointedBlockY()
qcZ= Player.getPointedBlockZ()
}

//QuantumArmor Updater
var slot1= Player.getArmorSlot(0)
var slot2= Player.getArmorSlot(1)
var slot3= Player.getArmorSlot(2)
var slot4= Player.getArmorSlot(3)
if(slot1==503&&slot2==504&&slot3==505&&slot4==506){
Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 20, 0, false, true);
}
if(slot1==507&&slot2==508&&slot3==509&&slot4==510){
Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 20, 1, false, true);
Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 20, 0, false, true);
Entity.addEffect(getPlayerEnt(), MobEffect.jump, 20, 1, false, true);
}
}

function useItem(x, y, z, itemId, blockId, side){
if(itemId==502&&blockId==23){
Level.destroyBlock(x, y, z, 1);
}
if(blockId==25&&itemId!=0){
preventDefault();
Entity.setCarriedItem(getPlayerEnt(), Player.getCarriedItem(), Player.getCarriedItemCount()-1, Player.getCarriedItemData());
var ran1= Math.random()*100
if(ran1>=50){
clientMessage("§2You got something back!");
var ran2= Math.random()*100
var ran3= Math.random()*4+1
if(ran2>=0&&ran2<75){
Level.dropItem(qcX+0.5, qcY+1, qcZ+0.5, 0, 500, ran3, 0);
}
if(ran2>=75.1&&ran2<90){
Level.dropItem(qcX+0.5, qcY+1, qcZ+0.5, 0, 501, ran3, 0);
}
if(ran2>=90.1&&ran2<=100){
Level.dropItem(qcX+0.5, qcY+1, qcZ+0.5, 0, 23, 1, 0);
}
}
if(ran1<50){
clientMessage("§4You got back nothing! :(");
}
}
if(blockId==25&&itemId==0){
clientMessage("§4You must be holding a item!");
}

if(itemId==500){
if(blockId==1){
Entity.setCarriedItem(getPlayerEnt(), Player.getCarriedItem(), Player.getCarriedItemCount()-1, Player.getCarriedItemData());
var ores= [4, 13, 15, 14, 16, 21, 73, 56, 129, 153]
var ran= Math.round(Math.random()*9+1)
Level.setTile(x, y, z, ores[ran]);
}
}
}
