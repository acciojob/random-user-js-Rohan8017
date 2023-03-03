//your code here
const rootElement = document.getElementById('root');
const changeUserButton = document.getElementById('getUser');
window.onload=()=>getUser();
function getUser(){
  fetch("https://randomuser.me/api/")
    .then((data) => data.json())
    .then((result) => {
      const profile = result.results[0];
      rootElement.innerHTML = `<div>
      <img src=${profile.picture.large} alt='profile picture'/>
      <h2>${profile.name.first} ${profile.name.last}</h2>
      <div class="showhide age">${profile.dob.age}</div>
      <div class="showhide email">${profile.email}</div>
      <div class="showhide phone">${profile.phone}</div>
      <div>`
      const showHide = document.querySelectorAll('.showhide');
      const showDiv = document.querySelectorAll('.show');
      showDiv.forEach((button) => {
        button.addEventListener('click', (e) => {
          triggeredButton=e.target.innerText.toLowerCase();
          showHide.forEach((button)=>{
            if(button.classList.contains(`${triggeredButton}`)){
              button.classList.remove('showhide');
            }else{
              button.classList.add('showhide');
            }
          })
  
        })
      })
  
    })
}
changeUserButton.addEventListener('click',getUser);