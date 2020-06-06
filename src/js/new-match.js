const db = firebase.firestore();

const playerNamesElement = document.querySelector('#player-names');
const formInputs = {
	team1: document.getElementById('SelectTeam1'),
	team2: document.getElementById('SelectTeam2'),
	date: document.getElementById('date'),
	time: document.getElementById('time'),
	sport: document.getElementById('sport-select'),
	player1: document.getElementById('player1'),
	player2: document.getElementById('player2'),
};

let includePlayerNames = false;

const url = new URL(window.location.href);
const docID = url.searchParams.get('id');
let editMode = !!docID;

if (docID) {
	loadFormData(docID);
}

function onSportChange(event) {
	const individualSports = ['badminton', 'chess', 'table tennis'];
	const selectedSport = event.target.value;

	if (individualSports.includes(selectedSport)) {
		playerNamesElement.style.display = 'block';
		includePlayerNames = true;
	} else {
		playerNamesElement.style.display = 'none';
		includePlayerNames = false;
		formInputs.player1.value = '';
		formInputs.player2.value = '';
		M.updateTextFields();
	}
}

async function addEvent() {
	const formData = {};

	for (const key in formInputs) {
		if (formInputs.hasOwnProperty(key)) {
			formData[key] = formInputs[key].value;
		}
	}

	try {
		const events = db.collection('events');

		if (editMode) {
			await events.doc(docID).set(formData);
			console.log(`Doc updated at ${docID}`);
		} else {
			const docRef = await events.add(formData);
			console.log(`Doc added at ${docRef.id}`);
		}

		M.toast({
			html: 'Form is submitted',
			classes: 'rounded',
			displayLength: 1000,
		});
		document.getElementById('form').reset();
	} catch (error) {
		console.error('Error adding document: ', error);

		M.toast({
			html: 'Something Went Wrong',
			classes: 'rounded',
			displayLength: 1000,
		});
	}
}

async function loadFormData(docID) {
	const docRef = db.collection('events').doc(docID);

	const doc = await docRef.get();

	if (doc.exists) {
		for (const key in formInputs) {
			if (formInputs.hasOwnProperty(key)) {
				formInputs[key].value = doc.get(key);
			}
		}
		M.AutoInit();
		M.updateTextFields();
	} else {
		editMode = false;
	}
}

document.querySelector('#submit-btn').addEventListener('click', addEvent);
formInputs.sport.addEventListener('change', onSportChange);
