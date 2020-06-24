const url = new URL(window.location.href);
const docID = url.searchParams.get('id');

const db=firebase.firestore();
db.collection('events').doc(docID)
  .get()
  .then(function(doc) {
    if (doc.exists) {
        M.AutoInit();
        document.getElementById("matchsport").innerHTML=doc.get("sport");
        document.getElementById("matchtosswinner").innerHTML=doc.get("tosswinner");
        document.getElementById("matchteam1").innerHTML=doc.get("team1");
        document.getElementById("matchteam2").innerHTML=doc.get("team2");
        document.getElementById("matchteam1score").innerHTML=doc.get("team1score");
        document.getElementById("matchteam2score").innerHTML=doc.get("team2score");
        document.getElementById("matchtime").innerHTML=doc.get("time");
        document.getElementById("matchdate").innerHTML=doc.get("date");
        if((doc.get("sport")=="badminton")||(doc.get("sport")=="chess")||(doc.get("sport")=="table tennis"))
        {
        document.getElementById("players").style.display="block";
        document.getElementById("matchplayer1").innerHTML=doc.get("player1");
        document.getElementById("matchplayer2").innerHTML=doc.get("player2");
        }
        else
        {
        document.getElementById("players").style.display="none";
        }
    } else {
      
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
