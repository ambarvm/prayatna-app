const playerNamesElement = document.querySelector('#player-names');

function onSportChange({ value: selectedSport }) {
	const individualSports = ['badminton', 'chess', 'table tennis'];

	if (individualSports.includes(selectedSport)) {
		playerNamesElement.style.display = 'block';
	} else {
		playerNamesElement.style.display = 'none';
	}
}
