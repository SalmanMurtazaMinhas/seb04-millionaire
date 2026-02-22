const introMusic = document.querySelector('#intro')
const spinMusic = document.querySelector('#spin')
const rightAnsMusic = document.querySelector('#right-ans')
const wrongAnsMusic = document.querySelector('#wrong-ans')
const BackgroundMusic = document.querySelector('#background')
const box = document.querySelectorAll('.box')
console.log(box)





const question = document.querySelector('.question')
const ans1 = document.querySelector('.ans1')
const ans2 = document.querySelector('.ans2')
const ans3 = document.querySelector('.ans3')
const ans4 = document.querySelector('.ans4')


const allQuestion = [
  ////////////////////////////// Round 1

    {
    question : "What is lifting state up?",
    Answers: ["Moving state to a child component","Removing state","Moving state to a common parent component","Using props instead of state"]
  },
  {
    question : "What is Salmans Favorite saying?",
    Answers : ["Good Luck guys","I am here to help you","Good Morning, I am so gratefult to be your instructor","six seeeeeven"]
  },
  {
    question : "Which of the following is not a react hook we have seen",
    Answers: ["useContext","useEffect","useReact","useState"]
  },
  ///////////////////////////////// Round 2

   {
    question : "What is the main advantage of using Context API?",
    Answers: ["Faster rendering","Avoiding prop drilling","As a complete alternative to useState","To Save a value in the browser"]
  },
  {
    question : "Did Zainab almost drown once?",
    Answers : ["Yes","No","Maybe","All of the Above"]
  },
  {
    question : "Does Zainab eats tomatos as if they are apples...?",
    Answers : ["Yes","No","Maybe","All of the Above"]
  },
  ///////////////////////////////////////// Round 3
  {
    question : "How do you pass data from a parent to a child component?",
    Answers: ["Using state","Using props","Using hooks","Using context only"]
  },
  {
    question : "How to connect to MongoDB using Mongoose?",
    Answers: ["mongodb.connect()","mongodb.require()","mongoose.connect()","mongoose.require()"]
  },
  {
    question : "Which package is used for React Routing?",
    Answers: ["react","react-dom","react-router","routing-react"]
  },
  ////////////////////////////////////// Extra Round 4
  {
    question : "A car maker makes many different models, but a particular car model is built only by a single car maker. what is the database relationship between car and maker? ",
    Answers: ["One-to-one","One-to-many","Many-to-many","None"]
  },
  {
    question : "Which of the following command is used to install the Node.js express module?",
    Answers: ["$ npm install express","$ node install express","$ install express","None"]
  },
  // {
  //   question : "What is the way to store local variables that can be accessed within the application?",
  //   Answers: ["Using Config file","Using database","Using app.locals","Using app.storage"]
  // },
  {
    question : "Which of the following statement is correct? ",
    Answers: ["JS is Server Side Language","JS is the Client Side Language","JS is both Server Side and Client Side Language","None"]
  },
  //////////////////////////////////////////////// Extra Extra Round 5
    {
    question : "MongoDB stores documents in _.",
    Answers: ["Store","Collections","Indexes","None"]
  },

  {
    question : "Which of the following shortcut command is used to kill a process in Node.js?",
    Answers: ["Ctrl + B","Ctrl + V","Ctrl + C","Ctrl + D"]
  },
    {
    question : "Express.js is written in which of the following language?",
    Answers : ["HTML","Node","JavaScript","Express"]
  },
]

function resetQuestion() {
  question.innerHTML= ''
  ans1.innerHTML = ''
  ans2.innerHTML = ''
  ans3.innerHTML = ''
  ans4.innerHTML = ''
  ans1.style.backgroundColor = "#23327d";
  ans2.style.backgroundColor = "#23327d";
  ans3.style.backgroundColor = "#23327d";
  ans4.style.backgroundColor = "#23327d";
  BackgroundMusic.pause()
  BackgroundMusic.currentTime = 0
}

function displayQuestions() {
    introMusic.pause()
    introMusic.currentTime = 0
    BackgroundMusic.play()
    // question.innerHTML= ''
    ans1.innerHTML = ''
    ans2.innerHTML = ''
    ans3.innerHTML = ''
    ans4.innerHTML = ''

    spinMusic.play()

  let element = document.getElementsByTagName('div');
  console.log(element)
  ans1.style.backgroundColor = "#23327d";
  ans2.style.backgroundColor = "#23327d";
  ans3.style.backgroundColor = "#23327d";
  ans4.style.backgroundColor = "#23327d";


  console.log(allQuestion[0].question)
  console.log(allQuestion[0].Answers)
  
  question.innerHTML=allQuestion[0].question

  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 
  
  y=[0,1,2,3]

  const shuffledArray = shuffle(y); 
  setTimeout(() =>{
    ans1.innerHTML = allQuestion[0].Answers[shuffledArray[0]]
  },6000)
  setTimeout(() =>{
    ans2.innerHTML = allQuestion[0].Answers[shuffledArray[1]]
  },8000)
  setTimeout(() =>{
    ans3.innerHTML = allQuestion[0].Answers[shuffledArray[2]]
  },10000)
  setTimeout(() =>{
    ans4.innerHTML = allQuestion[0].Answers[shuffledArray[3]]
  },12000)

  setTimeout(() =>{
  allQuestion.shift()
  },12000)
  
}

function checkAns(param, div) {
  let element = document.getElementsByClassName(div);
  if(param == 'Yes' || param == 'Yes' || param == 'useReact' || param == 'to' || param == 'six seeeeeven' || param == 'A JavaScript library for building user interfaces' || param == 'JS is both Server Side and Client Side Language' || param == 'Using props' || param == 'Moving state to a common parent component' || param == 'Avoiding prop drilling' || param == 'react-router' || param == 'Ctrl + C' || param == 'Node.js' || param == 'MongoDB' || param == 'node server.js' || param == 'JavaScript' || param == 'JS is both Server Side and Client Side Language' || param == 'One-to-many' || param == '$ npm install express' || param == 'Authentication middleware' || param == 'Collections' || param == 'Using app.locals' || param == 'mongoose.connect()' || param == 'Ctrl + C' || param == 'npm'){
    element[0].style.backgroundColor = "green";
    wrongAnsMusic.pause()
    wrongAnsMusic.currentTime = 0
    rightAnsMusic.play()
  } 
  else {
    element[0].style.backgroundColor = "red";
    rightAnsMusic.pause()
    rightAnsMusic.currentTime = 0
    wrongAnsMusic.play()
  }
}


  
    let items = [
         'Terminal Alligators', 'Lamma' , "Undefined", 'NMAZON' , 'The Merge Warriors', 'Azyai'
    ];

    // document.querySelector(".info").textContent = items.join(" ");
  
    const doors = document.querySelectorAll(".door");
    document.querySelector("#spinner").addEventListener("click", spin);
    document.querySelector("#spinner").addEventListener("click", ()=>{
      introMusic.play()
      setTimeout(()=>{
        BackgroundMusic.play()
      },26000)
    });
    document.querySelector("#reseter").addEventListener("click", init);
    document.querySelector("#reseter").addEventListener("click", ()=>{
      // BackgroundMusic.play()
    });
  
    async function spin() {
      init(false, 1, 2);
      for (const door of doors) {
        const boxes = door.querySelector(".boxes");
        const duration = parseInt(boxes.style.transitionDuration);
        boxes.style.transform = "translateY(0)";
        await new Promise((resolve) => setTimeout(resolve, duration * 1000));
      }
    }
  
    function init(firstInit = true, groups = 1, duration = 1) {
      for (const door of doors) {
        if (firstInit) {
          door.dataset.spinned = "0";
        } else if (door.dataset.spinned === "1") {
          return;
        }
  
        const boxes = door.querySelector(".boxes");
        const boxesClone = boxes.cloneNode(false);
  
        const pool = ["[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]"];
        // const pool = ["🪙"];
        if (!firstInit) {
          const arr = [];
          for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
              arr.push(...items);
            }
            
          pool.push(...shuffle(arr));
  
          boxesClone.addEventListener(
            "transitionstart",
            function () {
              door.dataset.spinned = "1";
              this.querySelectorAll(".box").forEach((box) => {
                box.style.filter = "blur(1px)";
              });
            },
            { once: true }
          );
  
          boxesClone.addEventListener(
            "transitionend",
            function () {
              this.querySelectorAll(".box").forEach((box, index) => {
                box.style.filter = "blur(0)";
                if (index > 0) this.removeChild(box);
              });
            },
            { once: true }
          );
        }
        // console.log(pool);
  
        for (let i = pool.length - 1; i >= 0; i--) {
          const box = document.createElement("div");
          box.classList.add("box");
          box.style.width = door.clientWidth + "px";
          box.style.height = door.clientHeight + "px";
          box.textContent = pool[i];
          boxesClone.appendChild(box);
        }
        boxesClone.style.transitionDuration = `${duration > 100 ? duration : 1}s`;
        boxesClone.style.transform = `translateY(-${
          door.clientHeight * (pool.length - 1)
        }px)`;
        door.replaceChild(boxesClone, boxes);
        // console.log(door);
      }
    }
  
    function shuffle([...arr]) {
      let m = arr.length;
      while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
        console.log(arr)
        items = arr
        // items.pop()

      return arr.splice(-1, 1);
    }
  
    init();
  ;
  
