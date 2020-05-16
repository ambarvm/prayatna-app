<!DOCTYPE html>

<html lang="en">

<head>
	<?php include('../components/common-head.php') ?>
	<link rel="stylesheet" href="./css/new-match.css">

	<title>New Match | Prayatna App</title>
</head>

<body>
	<?php include('../components/navbar.php') ?>

	<main>
		<form class="col s12 container new-match-form" id="form">

			<div class="row team-input">
				<label>Team 1</label>
				<select id="SelectTeam1">
					<option selected disabled>Select Team 1</option>
					<option value="spartans">Spartans</option>
					<option value="vikings">Vikings</option>
					<option value="renegades">Renegades</option>
				</select>
			</div>

			<div class="row team-input">
				<label>Team 2</label>
				<select id="SelectTeam2">
					<option selected disabled>Select Team 2</option>
					<option value="spartans">Spartans</option>
					<option value="vikings">Vikings</option>
					<option value="renegades">Renegades</option>
				</select>
			</div>

			<div class="row">
				<div class="input-field col s6">
					<input id="date" type="text" class="validate datepicker">
					<label for="date">Match Date</label>
				</div>
				<div class="input-field col s6">
					<input id="time" type="text" class="validate timepicker">
					<label for="time">Match Time</label>
				</div>
			</div>

			<div class="row">
				<div class="input-field col s12">
					<select id="sport-select" onchange="onSportChange(this)">
						<option selected disabled>Select the sport</option>
						<option value="badminton">Badminton</option>
						<option value="chess">Chess</option>
						<option value="table tennis">Table tennis</option>
						<option value="cricket">Cricket</option>
						<option value="football">Football</option>
						<option value="volleyball">Volleyball</option>
						<option value="basketball">Basketball</option>
					</select>
					<label for="sport-select">Sport</label>
				</div>
			</div>

			<div id="player-names" class="row" style="display: none;">
				<div class="input-field col s6">
					<label for="player1">Player 1's Name</label>
					<input id="player1" type="text">
				</div>
				<div class="input-field col s6">
					<label for="player2">Player 2's Name</label>
					<input id="player2" type="text">
				</div>
			</div>
			<button class="btn waves-effect center-block" type="button" onclick="addEvent()">Submit</button>
		</form>
	</main>
	<?php include('../components/footer.php') ?>

	<!-- Scripts -->
	<?php include('../components/common-scripts.php') ?>
	<script src="./js/new-match.js"></script>
</body>

</html>
