var x,y,z,p,q,m,n;
function createnewform()
{
x=document.getElementById("SelectTeam1").value;
y=document.getElementById("SelectTeam2").value;
z=document.getElementById("date").value;
p=document.getElementById("time").value;
q=document.getElementById("sport-select").value;
m=document.getElementById("player1").value;
n=document.getElementById("player2").value;
let db=firebase.firestore();
db.collection("events").add({
    team1:x,
    team2:y,
    date:z,
    time:p,
    sport:q,
    player1:m,
    player2:n
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}

