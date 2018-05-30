/*50LinesMod*/
/*By: Andr3w246*/
/*Only used 35 Lines to make!*/
ModPE.setItem(460, "blaze_rod", 0, "Flame Trail");
ModPE.setItem(461, "blaze_rod", 0, "Heart Trail");
ModPE.setItem(462, "blaze_rod", 0, "Sparkle Trail");
ModPE.setItem(463, "blaze_rod", 0, "Redstone Trail");
ModPE.setItem(464, "blaze_rod", 0, "Ultimate Trail");
Player.addItemCreativeInv(460, 1);
Player.addItemCreativeInv(461, 1);
Player.addItemCreativeInv(462, 1);
Player.addItemCreativeInv(463, 1);
Player.addItemCreativeInv(464, 1);
function modTick(){
var x= getPlayerX()
var y= getPlayerY()
var z= getPlayerZ()
if(getCarriedItem()==460){
Level.addParticle(ParticleType.flame, x, y-1.5, z, 0, 0, 0, 25);
}
if(getCarriedItem()==461){
Level.addParticle(ParticleType.heart, x, y-1.5, z, 0, 0, 0, 1);
}
if(getCarriedItem()==462){
Level.addParticle(ParticleType.crit, x, y-1.5, z, 0, 0, 0, 2.5);
}
if(getCarriedItem()==463){
Level.addParticle(ParticleType.redstone, x, y-1.5, z, 0, 0, 0, 2.5);
}
if(getCarriedItem()==464){
Level.addParticle(ParticleType.flame, x, y-1, z, 0, 0, 0, 25);
Level.addParticle(ParticleType.heart, x, y, z, 0, 0, 0, 1);
Level.addParticle(ParticleType.crit, x, y-1.5, z, 0, 0, 0, 2.5);
Level.addParticle(ParticleType.redstone, x, y-0.5, z, 0, 0, 0, 2.5);
}}
