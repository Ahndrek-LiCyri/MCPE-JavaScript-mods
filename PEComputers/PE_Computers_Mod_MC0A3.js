/*PE Computers Mod*/
/*By: Andr3w246*/
/*OS(ver): MC_0A3*/
/*Copyright Andr3w246, 2015*/
/*The "coding" isn't a real coding language, it is a made up one.*/

//Variables
var compOn= false
var menuPos= -1
var exitMess= "Goodbye!"
var Version= "MC_0A3"
var num= 0
var gnum= 0
var plyr= getPlayerEnt()

//Special Functions
function Settings(){
clientMessage(" ");
clientMessage("§5Settings");
clientMessage("§a'/Setings ExitMess': "+" §6Edit Exit Message");
clientMessage("§a'/Settings Leave': "+"§6Leave Settings Menu");
menuPos= 1
}
function Menu(){
clientMessage(" ");
clientMessage("§5Menu directory");
clientMessage("§a/off: "+"§6Turn the computer off");
clientMessage("§a/app: "+"§6See all avalable applications");
clientMessage("§a/app <appName>: "+"§6Launch application");
menuPos= 0
}
function LeaveEditor(){
print("Quit Editor");
Settings();
}
function apps(){
clientMessage(" ");
clientMessage("§5Avalable applications:");
clientMessage("§aWebMiner: "+"§6Internet explore-like program");
clientMessage("§aSettings: "+"§6User settings for computer");
clientMessage("§aNumGuesser: "+"§6Test game for MC_0A2 OS");
}
function startInternet(){
clientMessage(" ");
clientMessage("§5[WebMiner]");
clientMessage("§dVer: Alpha_0.1");
clientMessage("§aAvalable sites: [tester.mpe],[timeday.mpe]");
clientMessage("§aType '/web <website>' to go there or '/quit' to leave");
clientMessage("§aOnly use the avalable websites!");
menuPos= 4
}
function testerWeb(){
clientMessage(" ");
clientMessage("§5[WebMiner]");
clientMessage("§d{www.tester.mpe}");
clientMessage("Testing internet...");
clientMessage("Done! Internet works!");
}
function timeDay(){
clientMessage(" ");
clientMessage("§5[WebMiner]");
clientMessage("§d{www.timeday.mpe}");
clientMessage("§3Shows ticks of in-game time");
clientMessage("§3The time is: "+ChatColor.GREEN+Level.getTime())
}
function NumGameMenu(){
clientMessage(" ");
clientMessage("§3Welcome to NumGuesser!");
clientMessage("§3This game is simple! :D");
clientMessage("§3The machine will make a number...");
clientMessage("§3and you guess what it is!");
clientMessage("§3Type '/Go' to start!");
menuPos= 3
}
function RanNum(){
clientMessage(" ");
clientMessage("§5Picking a # between 0-1000...");
clientMessage("§5Done! Use '/Ans <Your Num>'");
clientMessage("§5to pick your num!");
num= Math.round(Math.random()*1000);
}
function ReturnNum(){
clientMessage(" ");
clientMessage("§5Your number is: "+"§8"+Gnum);
clientMessage("§5The number was: "+"§8"+num);
if(Gnum==num){
clientMessage(" ");
clientMessage("§aCongrats! You got the number! Have a prize!");
clientMessage("§3Please type '/quit' to leave");
clientMessage("§3Type '/Go' to play again!");
addItemInventory(388, 1, 0);
}
else if(Gnum>=num){
var overNum= Gnum-num
clientMessage(" ");
clientMessage("§3Your number was "+"§5over"+"§3 by: "+overNum);
clientMessage("§3Please type '/quit' to leave");
clientMessage("§3Type '/Go' to play again!");
}
else if(Gnum<=num){
var underNum= num-Gnum
clientMessage(" ");
clientMessage("§3Your number was "+"§5under"+"§3 by: "+underNum);
clientMessage("§3Please type '/quit' to leave");
clientMessage("§3Type '/Go' to play again!");
}
}

//Computer Blocks
Block.defineBlock(23, "Tower", [["piston_bottom", 0], ["piston_inner", 0], ["brewing_stand_base", 0], ["brewing_stand_base", 0], ["brewing_stand_base", 0], ["brewing_stand_base", 0]], 0, false, 0);
Block.setDestroyTime(23, 2.5);
Block.setExplosionResistance(23, 5);
Block.setShape(23, 0.25, 0, 0, 0.75, 1, 1);
Block.defineBlock(25, "Computer Screen", [["redstone_block", 0], ["furnace", 3], ["cauldron_top", 0], ["furnace", 2], ["furnace", 2], ["furnace", 2]], 1, true, 0);
Block.setDestroyTime(25, 2.5);
Block.setExplosionResistance(25, 5);
Block.defineBlock(28, "Keyboard", [["furnace", 3], ["command_block", 0], ["furnace", 3], ["furnace", 3], ["furnace", 3], ["furnace", 3]], 0, false, 0);
Block.setDestroyTime(28, 2.5);
Block.setExplosionResistance(28, 5);
Block.setShape(28, 0, 0, 0, 1, 1.5/16, 1);
Block.defineBlock(29, "internet Port", [["iron_block", 0], ["iron_block", 0], ["iron_block", 0], ["iron_block", 0], ["redstone_lamp_off", 0], ["redstone_block", 0]], 0, false, 0);
Block.setDestroyTime(29,2.5);
Block.setExplosionResistance(29, 5);
Block.setShape(29, 0.75, 0.25, 0.25, 1, 0.75, 0.75);
ModPE.setItem(511, "item_frame", 0, "Computer");
Player.addItemCreativeInv(511, 1, 0);

//Crafting recipies
Item.addShapedRecipe(25, 1, 0, ["crc","cgc","ccc"], ["c", 4, 0, "g", 20, 0, "r", 331, 0]);
Item.addShapedRecipe(23, 1, 0, ["iri","rrr","iii"], ["i", 265, 0, "r", 331, 0]);
Item.addShapedRecipe(28, 1, 0, ["000","wsc","rrr"], ["w", 158, 0, "s", 44, 0, "c", 44, 3, "r", 331, 0]);
Item.addShapedRecipe(29, 1, 0, ["grg","rgG","GGG"], ["g", 266, 0, "r", 331, 0, "G", 20, 0]);
Item.addShapedRecipe(511, 1, 0, ["tmi","0k0","000"], ["t", 23, 0, "m", 25, 0, "i", 29, 0, "k", 28, 0]);

//Turn on the computer
function useItem(x, y, z, itemId, blockId, side){
if(itemId == 25 || itemId == 23 || itemId == 28 || itemId == 29){
preventDefault();
ModPE.showTipMessage("Please craft a computer to start");
}
if(itemId == 511){
amount = Player.getCarriedItemCount();
setTile(x, y+1, z, 28);
setTile(x, y+1, z+1, 25);
setTile(x+1, y+1, z+1, 23);
setTile(x-1, y+1, z+1, 29);
if(amount==1){
Entity.setCarriedItem(getPlayerEnt(), 0, 0, 0, 0);
}
else {
Entity.setCarriedItem(getPlayerEnt(), 511, amount-1, 0, 0);
}
}
if(blockId==28 && getTile(x, y, z+1)==25 && getTile(x+1, y, z+1)==23 && getTile(x-1, y, z+1)==29){
ModPE.showTipMessage("Computer started. Use '/start' to use");
compOn= true
}
}

function destroyBlock(x, y, z, side){
if(getTile(x, y, z)==28){
setTile(x, y, z, 0);
setTile(x, y, z+1, 0);
setTile(x+1, y, z+1, 0);
setTile(x-1, y, z+1, 0);
Level.dropItem(x, y, z, 0, 511, 1);
}
else if(getTile(x, y, z)==25){
setTile(x, y, z, 0);
setTile(x, y, z-1, 0);
setTile(x+1, y, z, 0);
setTile(x-1, y, z, 0);
Level.dropItem(x, y, z, 0, 511, 1);
}
else if(getTile(x, y, z)==23){
setTile(x, y, z, 0);
setTile(x-1, y, z, 0);
setTile(x-1, y, z-1, 0);
setTile(x-2, y, z, 0);
Level.dropItem(x, y, z, 0, 511, 1);
}
else if(getTile(x, y, z)==29){
setTile(x, y, z, 0);
setTile(x+1, y, z, 0);
setTile(x+1, y, z-1, 0);
setTile(x+2, y, z, 0);
Level.dropItem(x, y, z, 0, 511, 1);
}
}

//Use the computer
function procCmd(command){
var cmd = command.split(" ");
if(cmd[0]=="start"&&compOn==false){
clientMessage("Your computer isn't on!");
}
else if(cmd[0]=="start"&&compOn==true&&menuPos==-1){
clientMessage("§aWelcome to the MCOS computer");
clientMessage("§aBy: Andr3w246 inc.");
clientMessage("§aCurrent OS Version: "+ChatColor.YELLOW+Version);
clientMessage("§aHave fun, and type '/menu'!");
menuPos= 0
}
if(cmd[0]=="menu"&&compOn==true&&menuPos==0){
Menu();
}
if(cmd[0]=="off"&&compOn==true&&menuPos>=0){
clientMessage(" ");
clientMessage("§3Computer has turned off");
clientMessage("§3All systems are off");
clientMessage(exitMess);
compOn= false
menuPos= -1
}
if(cmd[0]=="app"&&compOn==true&&menuPos==0){
apps();
}
if(cmd[0]=="app"&&cmd[1]=="WebMiner"&&compOn==true&&menuPos==0){
startInternet();
}
if(cmd[0]=="web"&&cmd[1]=="tester.mpe"&&compOn==true&&menuPos==4){
testerWeb();
}
if(cmd[0]=="web"&&cmd[1]=="timeday.mpe"&&compOn==true&&menuPos==4){
timeDay();
}
if(cmd[0]=="quit"&&compOn==true&&menuPos==4){
print("Quit WebMiner");
Menu();
}
if(cmd[0]=="app"&&cmd[1]=="NumGuesser"&&compOn==true&&menuPos==0){
NumGameMenu();
}
if(cmd[0]=="Go"&&compOn==true&&menuPos==3){
RanNum();
}
if(cmd[0]=="Ans"&&compOn==true&&menuPos==3){
Gnum= cmd[1]
ReturnNum();
}
if(cmd[0]=="quit"&&compOn==true&&menuPos==3){
print("Quit NumGuesser");
Menu();
}
if(cmd[0]=="app"&&cmd[1]=="Settings"&&compOn==true&&menuPos==0){
Settings();
}
if(cmd[0]=="Settings"&&cmd[1]=="ExitMess"&&compOn==true&&menuPos==1){
clientMessage(" ");
clientMessage("§aEditing 'ExitMess.txt'");
clientMessage("§5Type '/Edit Quit' to exit without changing text");
clientMessage("§5Type'/SetText <your text>'to set text and exit");
clientMessage("§5text can only be 1 word, no spaces!");
menuPos= 2
}
if(cmd[0]=="SetText"&&compOn==true&&menuPos==2){
clientMessage(" ");
clientMessage("§5'ExitMess.txt' set to: ");
clientMessage(cmd[1]);
LeaveEditor();
exitMess= cmd[1]
}
if(cmd[0]=="Edit"&&cmd[1]=="Quit"&&compOn==true&&menuPos==2){
print("Quit Editor");
LeaveEditor();
}
if(cmd[0]=="Settings"&&cmd[1]=="Leave"&&compOn==true&&menuPos==1){
print("Quit Settings");
menuPos= 0
Menu();
}
}

//Leaving world
function leaveGame(){
menuPos= -1
compOn= false
print("Computer auto shut-off. All data has been saved.");
print("Computer auto shut-off. All data has been saved.");
}
