
//CSV Import stuff

let dataArray=[];
let fileUploaded=false;

function cleanCSV(csvArray){
	csvArray.splice(0,2);
	csvArray.forEach(function(value, index){
		let dataString = value[0]
		if(dataString.charAt(0) === ","){
			dataArray.splice(index,csvArray.length-1);
		}
	});
	console.log(dataArray);

}

function closeModal(id){
	let modal = document.getElementById(id);
	closeModal.syle.display="none";
}

function errorHandler(event){
	if(event.target.error.name==="NotReadableError"){
		alert("Cannot read file!")
	}
}


function getAsText(fileToRead) {
	var reader = new FileReader();
	// Read file into memory as UTF-8      
	reader.readAsText(fileToRead);
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
  }

function handleFiles(files){
	
	if(window.FileReader){
		getAsText(files[0]);
		fileUploaded = true;
	}
	else{
		alert("FileReader not supported in browser");
	}
}

function loadHandler(event){
	let csv = event.target.result;
	processData(csv);
}

function openModal(id){
	let modal = document.getElementById(id);
	closeModal.syle.display="block";
}

function processData(csv){
	let allTextLines = csv.split(/\r\n|\n/);
	
	for(let i=0; i <allTextLines.length; i++){
		let row = allTextLines[i].split(";");

		let column = [];

		for(let j=0; j<row.length; j++){
			column.push(row[j]);
		}

		dataArray.push(column);
	}
	validateData();
}

function validateData(){
	if(!fileUploaded){
		openModal('errorModal');
	}
	else if(dataArray.length === 0){
		openModal("emptyList");
	}
	else{
		//clean up string
		cleanCSV(dataArray);
		
		//Call Plotly stuff here
	}
}

//make make object out of each row
//use string split with a limit of 5 (everything else is trash)
string.split()

//plotly stuff
var burndown = document.getElementById('burndown');;

	Plotly.plot( burndown, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
	margin: { t: 0 } } );


	// get sprint start date
	// get sprint end date
	// get number of days in sprint
	