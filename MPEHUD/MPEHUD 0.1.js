/*MPEHUD*/
/*By: Andr3w246*/
/*Do not post this Mon on any website without owner permission*/
/*Do not use part(s) of this mod without owner permission*/

//Variables
var version= "MPEHUD_0.1"
var Cords= [ ]
var health= 0
var healthText= " "
var hunger= 0
var hungerText= 0

function modTick(){
   if(Level.canSeeSky(getPlayerX(), getPlayerY(), getPlayerZ())==true){
      Cords= [Math.round(getPlayerX()), Math.round(getPlayerY()), Math.round(getPlayerZ())]
   }else{
      Cords= ["?","?","?"]
   }
   health= Entity.getHealth(getPlayerEnt());
   hunger= Player.getHunger();

   if(health>=20&&health>16){
      healthText= "§aVery Healthy"
   }
   if(health<=16&&health>12){
      healthText= "§2Healthy"
   }
   if(health<=12&&health>8){
      healthText= "§eMinorly Injured"
   }
   if(health<=8&&health>5){
      healthText= "§6Injured"
   }
   if(health<=5&&health>3){
      healthText= "§4Majorly Injured"
   }
   if(health<=3&&health>0){
      healthText= "§cAlmost Dead"
   }
   if(health==0){
      healthText= "§cDEAD"
   }

   if(hunger>=20&&hunger>16){
      hungerText= "§aFull"
   }
   if(hunger<=16&&hunger>13){
      hungerText= "§2Peckish"
   }
   if(hunger<=13&&hunger>10){
      hungerText= "§eSlightly Hungry"
   }
   if(hunger<=10&&hunger>7){
      hungerText= "§6Hungry"
   }
   if(hunger<=7&&hunger>1){
      hungerText= "§4Very Hungry"
   }
   if(hunger<=1){
      hungerText= "§cStarving"
   }

   ModPE.showTipMessage("§fX/Y/Z: ["+Cords+"], Health: "+healthText+"§f Hunger: "+hungerText+"");
}
