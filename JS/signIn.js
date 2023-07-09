function signUp() {
    window.location.href="../HTML/signUp.html";
 }
function signIn() {

 let Email=document.getElementById('Email');
 let Password=document.getElementById('Password');

 let email=Email.value;
 let password=Password.value;
 
 const allUsers = JSON.parse(localStorage.getItem('users')) ;
 const userExists= allUsers.find(u=>u.email===email && u.password===password );
     
 if(userExists){
     localStorage.setItem('isLogin', true);
     window.location.href="../HTML/dashboard.html";
     localStorage.setItem('curr_user', JSON.stringify(userExists));
 }
 
 else{
      alert("Please Enter Correct Inputs");
 }
}