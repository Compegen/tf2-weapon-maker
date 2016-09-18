
////////////////////////////////////////////////////////////////////////////////////////////////////
// SETS PERCENTAGE TABLE VALUES ////////////////////////////////////////////////////////////////////
	var currentElement = document.getElementById("percentageAttributeList");
	var i;
	for(i in tfattributes.percentageAttributes) {
		var opt = document.createElement("option");
		//console.log(tfattributes.percentageAttributes[i].techVal);
		opt.value = [tfattributes.percentageAttributes[i].stored_at, tfattributes.percentageAttributes[i].state, tfattributes.percentageAttributes[i].phyVal];
		
		opt.innerHTML = "(" + tfattributes.percentageAttributes[i].state + ") : " + tfattributes.percentageAttributes[i].techVal;
		currentElement.appendChild(opt);
	}
	console.log("perc_table_set");
	
////////////////////////////////////////////////////////////////////////////////////////////////////
// SETS ADDITIVE TABLE VALUES //////////////////////////////////////////////////////////////////////
	currentElement = document.getElementById("additiveAttributeList");
	for(i in tfattributes.additiveAttributeListibutes) {
		var opt = document.createElement("option");
		//console.log(tfattributes.additiveAttributeListibutes[i].techVal);
		opt.value = [tfattributes.percentageAttributes[i].state, tfattributes.percentageAttributes[i].phyVal, tfattributes.percentageAttributes[i].techVal];
		console.log(opt.value);
		
		opt.innerHTML = "(" + tfattributes.additiveAttributeListibutes[i].state + ") : " + tfattributes.additiveAttributeListibutes[i].techVal;
		currentElement.appendChild(opt);
	}
	console.log("add_table_set");
	
////////////////////////////////////////////////////////////////////////////////////////////////////
// SETS ADDITIVE TABLE VALUES //////////////////////////////////////////////////////////////////////
	currentElement = document.getElementById("absoluteAttributeList");
	for(i in tfattributes.absoluteAttributeListibutes) {
		var opt = document.createElement("option");
		//console.log(tfattributes.absoluteAttributeListibutes[i].techVal);
		opt.value = [tfattributes.absoluteAttributeListibutes[i].stored_at, tfattributes.absoluteAttributeListibutes[i].state, tfattributes.absoluteAttributeListibutes[i].phyVal];
		
		opt.innerHTML = "(" + tfattributes.absoluteAttributeListibutes[i].state + ") : " + tfattributes.absoluteAttributeListibutes[i].techVal;
		currentElement.appendChild(opt);
	}
	console.log("abs_table_set");

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
	
function getWepName() {
				var wepName = document.getElementById("weaponNameInput");
				console.log(wepName);
				document.getElementById("weaponName").innerHTML = wepName.value;
			}
	
function getPerAttribute() {
	
	//Make sure valid inputs are given
	var entry = Number(document.getElementById("percentNumber").value)
	if(document.getElementById("percentageAttributeList").value == "none"){ alert("No input given!"); return; }
	if( isNaN(entry) || entry <= 0){ alert("Invalid value given!"); return;}
	
	var attrHolder = document.createElement("p");
	var selected = document.getElementById("percentageAttributeList").value;
	
	selected = selected.split(","); //We want the stored_at, state, and phyVal all seperated
	
	var techID = [entry, tfattributes.percentageAttributes[selected[0]].techVal];

	//FOR PERCENTAGE//
	selected[2] = selected[2].replace("&s", (entry*100) +"%");
	if( selected[1] == '+') { 
	
		attrHolder.innerHTML = selected[2];
		attrHolder.id = techID;
		document.getElementById("positiveStats").appendChild(attrHolder);
		
	} else if( selected[1] == "-") { 

		attrHolder.innerHTML = selected[2];
		attrHolder.id = techID;
		document.getElementById("negativeStats").appendChild(attrHolder);
		
	} else { 
		
		attrHolder.innerHTML = selected[2];
		attrHolder.id = techID;
		document.getElementById("neutralStats").appendChild(attrHolder);
	}
}

function getAddAttribute() {
	
	//Make sure valid inputs are given
	var entry = Number(document.getElementById("additiveNumber").value)
	if(document.getElementById("additiveAttributeList").value == "none"){ alert("No input given!"); return; }
	if( isNaN(entry) || entry <= 0){ alert("Invalid value given!"); return;}
	
	var attrHolder = document.createElement("p");
	var selected = document.getElementById("additiveAttributeList").value;
	
	selected = selected.split(","); //We want the stored_at, state, and phyVal all seperated
	
	var techID = [entry, tfattributes.additiveAttributeListibutes[selected[0]].techVal];

	//FOR PERCENTAGE//
	selected[2] = selected[2].replace("&s", entry);
	if( selected[1] == '+') { 
	
		attrHolder.innerHTML = selected[2];
		attrHolder.id = techID;
		document.getElementById("positiveStats").appendChild(attrHolder);
		
	} else if( selected[1] == "-") { 

		attrHolder.innerHTML = selected[2];
		attrHolder.id = techID;
		document.getElementById("negativeStats").appendChild(attrHolder);
		
	} else { 
		
		attrHolder.innerHTML = selected[2];
		attrHolder.id = techID;
		document.getElementById("neutralStats").appendChild(attrHolder);
	}
}

function getAbsAttribute() {
	
	//Make sure valid inputs are given
	var entry = 1;
	if(document.getElementById("absoluteAttributeList").value == "none"){ alert("No input given!"); return; }
	if( isNaN(entry) || entry <= 0){ alert("Invalid value given!"); return;}
	
	var attrHolder = document.createElement("p");
	var selected = document.getElementById("absoluteAttributeList").value;
	
	selected = selected.split(","); //We want the stored_at, state, and phyVal all seperated
	
	var techID = [entry, tfattributes.absoluteAttributeListibutes[selected[0]].techVal];

	//FOR ABSOLUTE//
	//selected[1] = selected[1].replace("&s", entry);
	if( selected[1] == '+') { 
	
		attrHolder.innerHTML = selected[2];
		attrHolder.id = techID;
		document.getElementById("positiveStats").appendChild(attrHolder);
		
	} else if( selected[1] == "-") { 

		attrHolder.innerHTML = selected[2];
		attrHolder.id = techID;
		document.getElementById("negativeStats").appendChild(attrHolder);
		
	} else { 
		
		attrHolder.innerHTML = selected[2];
		attrHolder.id = techID;
		document.getElementById("neutralStats").appendChild(attrHolder);
	}
}