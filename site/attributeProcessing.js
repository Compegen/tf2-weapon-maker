////////////////////////////////////////////////////////////////////////////////////////////////////
// SETS TABLE VALUES ///////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
	var percentage = "percentage", additive = "additive", absolute = "absolute";
	
	var i, o, c = ["percentageAttributes", "additiveAttributes", "absoluteAttributes"];
	for (o in c)
	{
		console.log(c[o]+"List");
		var currentElement = document.getElementById(c[o]+"List");
		for(i in tfattributes[c[o]])			
		{
			var opt = document.createElement("option");
			opt.value = [tfattributes[c[o]][i].state, tfattributes[c[o]][i].phyVal, tfattributes[c[o]][i].techVal];
			
			if(tfattributes[c[o]][i].state == "+") { opt.id = "positiveColor"}
			if(tfattributes[c[o]][i].state == "-") { opt.id = "negativeColor"}
			
			opt.innerHTML = "(" + tfattributes[c[o]][i].state + ") : " + tfattributes[c[o]][i].techVal;
			currentElement.appendChild(opt);
		}
	}
	
function getWepName() {
				var wepName = document.getElementById("weaponNameInput");
				//console.log(wepName);
				document.getElementById("weaponName").innerHTML = wepName.value;
			}
	
function getAttribute(typeset) {
	
	//Make sure valid inputs are given
	var tNum = typeset+"Number";
	var tList = typeset+"AttributesList";
	
	if (typeset == "absolute") { entry = 1;} 
	else { var entry = Number(document.getElementById(typeset+"Number").value) }
	var fileDot = entry;
	
	//console.log(document.getElementById(tList));
	if(document.getElementById(typeset+"AttributesList").value == "none"){ alert("No input given!"); return; }
	if( isNaN(entry) || entry <= 0){ alert("Invalid value given!"); return;}
	
	var attrHolder = document.createElement("p");
	var selected = document.getElementById(typeset+"AttributesList").value;
	
	selected = selected.split(","); //We want the stored_at, state, and phyVal all seperated
	//console.log(selected);
	
	var techID = selected[2];

	//FOR PERCENTAGE//
	if(typeset == "percentage") { entry = (entry*100) + "%";}
	//console.log(entry);
	selected[1] = selected[1].replace("&s", entry);
	if( selected[0] == '+') { 
	
		attrHolder.innerHTML = selected[1];
		attrHolder.id = [fileDot, techID];
		document.getElementById("positiveStats").appendChild(attrHolder);
		
	} else if( selected[0] == "-") { 

		attrHolder.innerHTML = selected[1];
		attrHolder.id = [fileDot, techID];
		document.getElementById("negativeStats").appendChild(attrHolder);
		
	} else { 
		
		attrHolder.innerHTML = selected[1];
		attrHolder.id = [fileDot, techID];
		document.getElementById("neutralStats").appendChild(attrHolder);
	}
	return;
}

function generateOutput () {
	
}