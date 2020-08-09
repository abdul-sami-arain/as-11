var questionArray = [
    {
        question:"how much time does light take to reach at earth?" ,
        options:['2 min','3 min', '6 min' ,'8 min'], 
        answer:'8 min'
    },
    {
        question:"how many continents are there in world?" ,
        options:['2','8', '7' ,'9'], 
        answer:'7'
    },
    {
        question:"how many oceans are there in world?" ,
        options:['2','4', '7' ,'9'], 
        answer:'4'
    },
    {
        question:"how much area does Pakistan have?" ,
        options:['4567257sq.km','8688578sq.km', '4625272sq.km' ,'none of these'], 
        answer:'none of these'
    },
    {
        question:"which is massive population country in world" ,
        options:['China','England', 'Pakistan' ,'India'], 
        answer:'China'
    }
]   

function showQuestion(e){


    var questionElement = document.getElementById("questionElement")

    questionElement.innerHTML=questionArray[e].question


    var optionElement = document.getElementsByClassName("optionElement")

    for(var i=0 ; i < optionElement.length ; i++){
             optionElement[i].innerHTML=questionArray[e].options[i]
    }


    showProgress()
}

var questionCount=0

var score = 0 
var questionIndex=1 

function showProgress() {
    var currentQuestionNumber = questionIndex++;
    var element = document.getElementById("top");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + questionArray.length;
};



function nextQuestion(){
    
     
    questionCount++;
    correct()
    showQuestion(questionCount);
    

}

function activeClass(e){

    removeActive()
    e.classList.add('active')

}

function removeActive(){

 var active = document.getElementsByClassName('active')
 for(i=0;i<active.length;i++){
     active[i].classList.remove('active')
 }

}

function correct(){

    var active = document.getElementsByClassName('active')
    if(active[0].innerHTML== questionArray[0].answer){
        score+=10
    } 
    else if(active[0].innerHTML== questionArray[1].answer){
        score+=10
    }
    else if(active[0].innerHTML== questionArray[2].answer){
        score+=10
    }
    else if(active[0].innerHTML== questionArray[3].answer){
        score+=10
    }
    else if(active[0].innerHTML== questionArray[4].answer){
        score+=10
    }

}

function finish(){
    alert("Your score is" + score)
}
