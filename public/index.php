<!DOCTYPE html>

<html lang="en">
<meta name = "viewport" content="width=device-width,initial-scale=1">      
<link rel = "stylesheet" href = "https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<script type = "text/javascript" src = "https://code.jquery.com/jquery-2.1.1.min.js"></script>           
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<head>
	<?php include('../components/common-head.php') ?>
	<link rel="stylesheet" href="./css/index.css">

	<title>Prayatna App</title>
</head>

<body class="container">
	<?php include('../components/navbar.php') ?>

	<main>
		<h1 class="center">🏏Prayatna App</h1>
	</main>
	  <div class = "row">
         <form class = "col s12">

        <div class = "row">
            <label>Select inputs from team 1 and team 2</label>
               <select>
                  <optgroup label = "Team 1">
                     <option value = "1">Spartans</option>
                     <option value = "2">Vikings</option>
                     <option value = "3">Renegades</option>
                  </optgroup>
                  
                  <optgroup label = "Team 2">
                     <option value = "4">Vipers</option>
                     <option value = "5">Battlehawks</option>
                     <option value = "6">Dementors</option>
                  </optgroup>
               </select>
       </div>
       <div class = "row">
            <label>Select the teams</label>
               <select>
                  <option value ="1">Spartans</option>
                  <option value ="2">Renegades</option>
                  <option value ="3">Dementors</option>
		  <option value ="4">Battlehawks</option>
		  <option value ="5">Vikings</option>
               </select>               
       </div>
            

      <div class="row">
        <div class="input-field col s6">
          <input id="date" type="text" class="validate datepicker">
          <label for="date">Select date</label>
        </div>
        <div class="input-field col s6">
          <input id="time" type="text" class="validate timepicker">
          <label for="time">Select time</label>
        </div>
      </div>


      <div class = "row">
	    <div class="col s12">
               <select id="player" onchange="sports()">
		  <option value ="1">Select the sport</option>
                  <option value ="2">Badminton</option>
                  <option value ="3">Chess</option>
                  <option value ="4">Table tennis</option>
		  <option value ="5">Cricket</option>
                  <option value ="6">Football</option>
                  <option value ="7">Volleyball</option>
                  <option value ="8">Basketball</option>
               </select>  
	    </div>
      </div>

      <div class="row">
        <div class="input-field col s6">
          <input id="player1" placeholder="Type player 1" type="text">
        </div>
        <div class="input-field col s6">
          <input id="player2" placeholder="Type player 2" type="text">
        </div>
      </div>
 </form>
</div>
<p class="center" id="Player"></p>
	<?php include('../components/footer.php') ?>

	<!-- Scripts -->
	<?php include('../components/common-scripts.php') ?>
	<script src="./js/index.js"></script>
</body>
</html>
