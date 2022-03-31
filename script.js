let questions = [
    {
        //0
        question:
          "№1 When you are in a community you usually prefer",
        answerOne: "A) participate in a general conversation or",
        answerSecond: "B) talking with each separately",
    },
    {
        //1
        question: "№2 You consider yourself more ",
        answerOne: "A) realistic or",
        answerSecond: "B) prone to theorizing",
    },
    {
        //2
        question: "№3 In your opinion, which one is worse?",
        answerOne: "A) “living in a dream world”» or",
        answerSecond: "B) «all goes according to the plan»",
    },
    {
        //3
        question: "№4 You are more impressed by",
        answerOne: "A) solid principles or",
        answerSecond: "B) strong emotions",
    },
    {
        //4
        question: "№5 You are more attracted  ",
        answerOne: "A) persuasive or  ",
        answerSecond: "B) sentimental ",
    },
    {
        //5
        question:
          "№6 When you are in a community you usually prefer",
        answerOne: "A) participate in a general conversation or",
        answerSecond: "B) talking with each separately",
    },
    {
        //6
        question: "№7 You consider yourself more ",
        answerOne: "A) realistic or",
        answerSecond: "B) prone to theorizing",
    },
    {
        //7
        question: "№8 In your opinion, which one is worse?",
        answerOne: "A) “living in a dream world”» or",
        answerSecond: "B) «all goes according to the plan»",
    },
    {
        //8
        question: "№9 You are more impressed by",
        answerOne: "A) solid principles or",
        answerSecond: "B) strong emotions",
    },
    {
        //9
        question: "№10 You are more attracted  ",
        answerOne: "A) persuasive or  ",
        answerSecond: "B) sentimental ",
    }
];
var quiz = document.getElementById('quiz')
var startbtn = document.getElementById('btn')
var start = document.getElementById('start');
var check1 = document.getElementById("check1");
var check2 = document.getElementById("check2");

let count = 0

function display(){
    
    start.style.display = 'none'
    quiz.style.display = 'flex'
    
};



function list(){
    if(count >= 0){
         
         var  check3 = check1.checked
         var  check4 = check2.checked
   
         if(check3 || check4){
           var color = document.getElementById(`${count-1}`)
            color.style.background = 'green';
             
         };
         
     };
 }
 
function all(){
     if(count == 9 ) {
        
        var  check3 = check1.checked;
         var  check4 = check2.checked;

         if(check3 || check4){
            document.getElementById(`${count-1}`).style.background = 'green';
                  
          };
    };
    
};


function change(){

    
    count++; 
    if (count >= questions.length ){
        count = questions.length-1;
    }
    
    console.log(count);

    let question = questions[count].question;
    let answerone = questions[count].answerOne;
    let answersecond = questions[count].answerSecond;

    document.getElementById('h1').innerText = question;
    document.getElementById('label1').innerText = answerone;
    document.getElementById('label2').innerText = answersecond;
   
    list()
    submit()
    all()
};
function submit(){
    check1.checked = false;
    check2.checked = false;
};
    
function click(){
    
    let question = questions[count].question;
    let answerone = questions[count].answerOne;
    let answersecond = questions[count].answerSecond;

    document.getElementById('h1').innerText = question;
    document.getElementById('label1').innerText = answerone;
    document.getElementById('label2').innerText = answersecond;
};
function before(){

    count--;
    if(count < 0){
        count = 0
        alert("Can't go more backward")
    };
    let question1 = questions[count].question;
    let answerone1 = questions[count].answerOne;
    let answersecond1 = questions[count].answerSecond;
   
    document.getElementById('h1').innerText = question1;
    document.getElementById('label1').innerText = answerone1;
    document.getElementById('label2').innerText = answersecond1;




    submit()
};


