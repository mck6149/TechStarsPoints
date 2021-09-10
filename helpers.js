let podium = function(name1, name2, name3){
	// find how big largest name is to size podium accordingly
 	var longestName = Math.max(name1.length, name2.length, name3.length);
 	
	// pad whitespace onto shorter names so they are same length as longest
  	for(let i = 0; i < arguments.length; i++){
  		var currName = arguments[i];
    	
		if(currName.length < longestName + 2){ // plus 2 for spacing purposes
    		var difference = longestName - currName.length;
      		arguments[i] =  " ".repeat( Math.floor(difference/2) ) + arguments[i] + " ".repeat( Math.ceil(difference/2) );
    	}
	}
  
  	let pad = " ".repeat(longestName);
  	var podiumTop = "@" + "-".repeat(longestName) + "@";
  
  	// build podium from top down.
 	var podium = "";
  	podium += "   " + pad + name1 + "\n"; 				 
  	podium += "  " + pad + podiumTop + "\n"; 	
  	podium += " " + name2 + " |" + pad + "|\n"; 			
  	podium += podiumTop + "|" + pad + "|\n";		
  	podium += "|" + pad + "||" + pad + "| " + name3 + "\n";
  	podium += "|" + pad + "||" + pad + "|" + podiumTop + "\n";
  	podium += "|" + pad + "||" + pad + "||" + pad + "|\n";
  	podium += "|" + pad + "||" + pad + "||" + pad + "|\n";
  
  	return podium;
}
//console.log(podium("Benjamin", "Max", "Walter"))

exports.podium = podium;
