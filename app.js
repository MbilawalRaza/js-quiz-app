var mainDiv= document.querySelector('.main-div')
var form= document.querySelector('.form')
var h1Name = document.querySelector('.set-name')
var h1Email = document.querySelector('.set-email')
var h1RollNo = document.querySelector('.set-rollno')
var h1Institute= document.querySelector('.set-institute')
var ques = document.getElementById('ques')
var resultDiv = document.querySelector('.result')
var tQues = document.getElementById('tQues')
var cAns= document.getElementById('cAns')
var wAns = document.getElementById('wAns')
var tNum= document.getElementById('tNum')
var quesOption = document.getElementById('quesOptions').children
var nextBtn = document.getElementById('btn')
var quesArray = [

  {
    num: '1',
    question: 'javascript is a ??',
    options: {
      a: 'programming language',
      b: 'Assembly language',
      c: 'High level language',
      d: 'scripted language'
    },
    answer: 'scripted language'
  
  },
  {
    num: '2',
    question: 'css stand for?',
    options: {
      a: 'Cascading style sheet',
      b: 'cat style sheet',
      c: 'cute style sheet',
      d: 'copy style sheet'
    },
    answer:'Cascading style sheet'
  
  }
  ,{
    num: '3',
    question: 'HTML stand for?',
    options: {
      a: 'High text markup language',
      b: 'hyper truma mental language',
      c: 'Hyper text markup language',
      d: 'high text made language'
    },
    answer: 'Hyper text markup language'
  
  }
]


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

ques.innerHTML= quesArray[quesCount].question
quesOption[0].innerHTML=quesArray[quesCount].options.a
quesOption[1].innerHTML=quesArray[quesCount].options.b
quesOption[2].innerHTML=quesArray[quesCount].options.c
quesOption[3].innerHTML=quesArray[quesCount].options.d
 nextBtn.style.display = 'none'

}
var quesCount = 0
var totalQues = quesArray.length
var correctAns = 0
var wrongAns = 0
var total = 0

function nextQues(){

if(quesCount< quesArray.length-1){
quesCount = quesCount+1

ques.innerHTML = quesArray[quesCount].question
quesOption[0].innerHTML =quesArray[quesCount].options.a
quesOption[1].innerHTML =quesArray[quesCount].options.b
quesOption[2].innerHTML =quesArray[quesCount].options.c
quesOption[3].innerHTML =quesArray[quesCount].options.d
 nextBtn.style.display = 'none'

}
else{

resultDiv.style.display = 'block'
    mainDiv.style.display = 'none'
      nextBtn.style.display = 'none'
      tQues.innerHTML = totalQues
    cAns.innerHTML = correctAns
    wAns.innerHTML = wrongAns
    tNum.innerHTML = total
}
for(var liOption of quesOption){
  liOption.classList.remove('bg-[red]', 'bg-[green]', 'text-white','pointer-events-none')
}

nextBtn.style.display = 'none'
}
function selectOption(element){
  console.log(element)


  if(element.innerHTML == quesArray[quesCount].answer){
    console.log('correct')
    element.classList.add('bg-[green]', 'text-white')
    correctAns = correctAns + 1
    total = total + 10
  }else{
    console.log('wrong')
    element.classList.add('bg-[red]', 'text-white')
    wrongAns = wrongAns + 1

    for(var liOption of quesOption){
      if(liOption.innerHTML === quesArray[quesCount].answer){
        liOption.classList.add('bg-[green]')
      }
    }

  }

  for(var liOption of quesOption){
    liOption.classList.add('pointer-events-none')
  }

  nextBtn.style.display = 'block'





}
