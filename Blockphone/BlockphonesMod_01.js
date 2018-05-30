//BlockphonesMod
//By: Andr3w246
//Do not distribute this mod without permission and do not use ad links to link to the forum post

//Variables
var Volume= 0.5
var playSounds= 1
var name= " "
var sounds= null
//Setup
 function playMedia(m){
 	if (playSounds){
      if(sounds==null){
 		   try{
 		    	sounds = new android.media.MediaPlayer;
 		    	sounds.setDataSource(new android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/"+m);
 		    	sounds.prepare();
 		       sounds.setLooping(true);
 	    		sounds.setVolume(Volume, Volume);
 	    		sounds.start();
 	    	}catch (e){
 	    		clientMessage(ChatColor.RED+"Could not play music because of the following error:");
             clientMessage(e);
 		    	clientMessage(ChatColor.RED+"Please make sure you typed in the name correctly and that it is a mp3 file and that it is in the right folder!");
             sounds= null
             name= " "
 	       }
    	}
     else if(sounds!=null){
        clientMessage(ChatColor.YELLOW+"You can only play one song at a time! To stop a song, type '/stop'!");
     }
   }
 }

function modTick(){
   if(sounds!=null){
      ModPE.showTipMessage("Music playing, Song: §6"+name+".mp3");
   }
}

function procCmd(command){
   var cmd = command.split(" ");
   if(cmd[0]=="play"){
      if(cmd[1]!=null){
         if(playSounds==1){
            clientMessage(ChatColor.GREEN+"Playing song '"+cmd[1]+".mp3'!");
            playMedia(cmd[1]+".mp3");
            name= cmd[1]
         }
      }
      if(cmd[1]==null){
         clientMessage(ChatColor.RED+"Error: You must input the name of a mp3 (name only)!");
      }
   }

   if(cmd[0]=="stop") {
      sounds.stop();
      sounds= null
      name= " "
      clientMessage(ChatColor.GREEN+"Music was stopped!");
   }
}

function leaveGame(){
   if(sounds!=null){
      sounds.stop();
      sounds= null
   }
}
