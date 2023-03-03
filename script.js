//your code here
const showImg = document.getElementById('show-img');
const showName = document.getElementById('showName');
const showAge = document.querySelector('.age');
const showEmail = document.querySelector('.email');
const showPhone = document.querySelector('.phone');
const changeUserButton = document.getElementById('getUser');
const showHide = document.querySelectorAll('.showhide');
const showDiv = document.querySelectorAll('.show');
window.onload=()=>getUser();
function getUser(){
  fetch("https://randomuser.me/api/")
    .then((data) => data.json())
    .then((result) => {
      const profile = result.results[0];
      showImg.src=profile.picture.large;
      showName.innerHTML=`<h2>${profile.name.first} ${profile.name.last}</h2>`
      showAge.innerText=profile.dob.age;
      showEmail.innerText=profile.email;
      showPhone.innerText=profile.phone;
      showHide.forEach((button)=>{
        button.classList.add('showhide')
      })
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