var mainDiv= document.querySelector('.main-div')
var form= document.querySelector('.form')
var h1Name = document.querySelector('.set-name')
var h1Email = document.querySelector('.set-email')
var h1RollNo = document.querySelector('.set-rollno')
var h1Institute= document.querySelector('.set-institute')

function startQuiz(){
    var userName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var rollNo = document.getElementById("rollno").value;
    var institute = document.getElementById("institute").value;
//    if(!userName||!email||!rollNo||!institute){
// alert('required field are missing');
// return


// }
mainDiv.style.display = 'block'
  form.style.display = 'none'
h1Name.innerHTML= userName
h1Email.innerHTML=email
h1RollNo.innerHTML= rollNo
h1Institute.innerHTML=institute 
}