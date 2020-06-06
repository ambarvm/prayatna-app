const db = firebase.firestore();

const playerNamesElement = document.querySelector('#player-names');
let includePlayerNames = false;

function onSportChange(event) {
	const individualSports = ['badminton', 'chess', 'table tennis'];
	const selectedSport = event.target.value;

	if (individualSports.includes(selectedSport)) {
		playerNamesElement.style.display = 'block';
		includePlayerNames = true;
	} else {
		playerNamesElement.style.display = 'none';
		includePlayerNames = false;
	}
}

function addEvent() {
	db.collection('events')
		.add({
			team1: document.getElementById('SelectTeam1').value,
			team2: document.getElementById('SelectTeam2').value,
			date: document.getElementById('date').value,
			time: document.getElementById('time').value,
			sport: document.getElementById('sport-select').value,
			player1: includePlayerNames
				? document.getElementById('player1').value
				: null,
			player2: includePlayerNames
				? document.getElementById('player2').value
				: null,
		})
		.then(function (docRef) {
			console.log('Document written with ID: ', docRef.id);
			M.toast({
				html: 'Form is submitted',
				classes: 'rounded',
				displayLength: 1000,
			});
			document.getElementById('form').reset();
		})
		.catch(function (error) {
			console.error('Error adding document: ', error);
			M.toast({
				html: 'Something Went Wrong',
				classes: 'rounded',
				displayLength: 1000,
			});
		});
}

document.querySelector('#submit-btn').addEventListener('click', addEvent);
document
	.querySelector('#sport-select')
	.addEventListener('change', onSportChange);

M.AutoInit();

function editid()
{
	
	var e=document.getElementById("checkid").value;
	let db=firebase.firestore();
	var docRef = db.collection("events").doc("e");

	docRef.get().then(function(doc) {
    	if (doc.exists) 
    	{
		document.getElementById("SelectTeam1").value=doc.get("team1");
		document.getElementById("SelectTeam2").value=doc.get("team2");
		document.getElementById("date").value=doc.get("date");
		document.getElementById("time").value=doc.get("time");
		document.getElementById("sport-select").value=doc.get("sport");
		document.getElementById("player1").value=doc.get("player1");
		document.getElementById("player2").value=doc.get("player2");
		M.AutoInit();
		
		var a,b,c,d,e,f,g;
		
		a=document.getElementById("SelectTeam1").value;
		b=document.getElementById("SelectTeam2").value;
		c=document.getElementById("date").value;
		d=document.getElementById("time").value;
		e=document.getElementById("sport-select").value;
		f=document.getElementById("player1").value;
		g=document.getElementById("player2").value;
		
		db.collection("events").doc("e").update({
			team1:a,
			team2:b,
			date:c,
			time:d,
			sport:e,
			player1:f,
			player2:g
		})
		
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
	}).catch(function(error) {
    console.log("Error getting document:", error);
	});
}
document.querySelector('#edit').addEventListener('click', editid);
