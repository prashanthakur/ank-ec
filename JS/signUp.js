function signIn() {
    window.location.href="../HTML/signIn.html";
  }
                   
  
  let user=document.getElementById('name');
  let Email=document.getElementById('Email');
  let Password=document.getElementById('Password')
  let Password1=document.getElementById('Password1');
  let btn=document.getElementById('signup');
  
  function createAccount(e){ 
  
     e.preventDefault();
  
   let name=user.value;
   let email=Email.value;
   let password=Password.value;
   let password1=Password1.value;
   let cart = [];
  
   if(name != '' || email != '' || password != '' || password1 != ''){
      const users=JSON.parse(localStorage.getItem('users')) || [];
      const userExists=users.find(u=>u.email===email);
      if(userExists) {
        alert('User already exists')
      }
      if(password === password1){
        const newUser={name , email ,password,cart};
        users.push(newUser);
     localStorage.setItem('users',JSON.stringify(users));
     alert("Please Login to continue...");
      window.reload();
      }else{alert('Password not match')}
    
   }else{alert('Fileds required')}
  }