/*BTTF Mod*/
/*By: Andr3w246*/
/*Universal Studios owns Back To The Future, so please don't be a butthead with this Mod!*/
/*Please do not post this Mod on other websites, including personal and other forum sites*/
/*Ver: BF_01*/

//Variables
var timeStart= 0
var speedTime= 0
var ticker= 0
var speed= 0
var cart= null

//useItem
function useItem(x, y, z, itemId, blockId, side){
if(itemId==328){
preventDefault();
cart= Level.spawnMob(x, y+2, z, EntityType.MINECART);
Entity.rideAnimal(getPlayerEnt(), cart);
speedTime= 1
timeStart= Level.getTime()
}
}

//Timer
function modTick(){
if(speedTime==1){
ModPE.showTipMessage("Speed: "+speed+" Time: "+Level.getTime());
ticker++
if(ticker==1){
ticker= 0
speed++
}
if(speed>=60){
Level.addParticle(ParticleType.smoke, getPlayerX(), getPlayerY()-1, getPlayerZ(), 0, 0, 0, 250);
}
if(speed>=70){
Level.addParticle(ParticleType.smoke2, getPlayerX(), getPlayerY()-1, getPlayerZ(), 0, 0, 0, 250);
}
if(speed>=88){
clientMessage("Warp Achieved!");
speedTime= 0
ticker= 0
speed= 0
Level.setTime(timeStart-2500);
setPosition(cart, getPlayerX(), getPlayerY()+1, getPlayerZ());
clientMessage("Current Time: "+Level.getTime());
}
}
}