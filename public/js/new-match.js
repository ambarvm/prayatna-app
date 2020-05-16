const db = firebase.firestore();

const playerNamesElement = document.querySelector('#player-names');
let includePlayerNames = false;

function onSportChange({ value: selectedSport }) {
	const individualSports = ['badminton', 'chess', 'table tennis'];

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
			player1: includePlayerNames ? document.getElementById('player1').value : null,
			player2: includePlayerNames ? document.getElementById('player2').value : null,
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
