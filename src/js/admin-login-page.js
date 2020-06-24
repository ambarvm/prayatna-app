function toggleSignIn() {
      if (firebase.auth().currentUser) {
        
        firebase.auth().signOut();
     
      } else {
        var email = document.getElementById('email_inline').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
         if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
     
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    
          var errorCode = error.code;
          var errorMessage = error.message;
      
          if (errorCode === 'auth/wrong-password') {
              M.toast({html: 'Wrong Password!', classes: 'rounded',displayLength: 1000});
            
          } else {
          
             M.toast({html: 'User not registered!', classes: 'rounded',displayLength: 1000});
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
       
        });
      
      }
      document.getElementById('quickstart-sign-in').disabled = true;
    }


   function initApp() {
    
      firebase.auth().onAuthStateChanged(function(user) {
      
        if (user) {
     
        } else {
         
          document.getElementById('quickstart-sign-in').textContent = 'Sign in';
         
        }
     
        document.getElementById('quickstart-sign-in').disabled = false;
     
      });
    

      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
    }

    window.onload = function() {
      initApp();
    };
