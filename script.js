let showButtonEl = document.getElementById('showButton');
let selectRoleInputEl = document.getElementById('selectRole');
let dailyPlanContainer = document.getElementById('dailyPlanContainer');
let roadmapContainer = document.getElementById('roadmapContainer');
let progress = JSON.parse(localStorage.getItem("progress")) || {};
let dailyPlanCard = document.getElementById('dailyPlanCard');
let dailyprogress = JSON.parse(localStorage.getItem('dailyProgress')) || {};
let streakData = JSON.parse(localStorage.getItem("streakData")) || {};

const roadmaps = {
  fullstack: {
    title: "Full Stack Developer Roadmap",
    duration: "3–6 months",

    topicsList: ["HTML","CSS","JavaScript","React","Node.js","MongoDB","Projects"],

    phases: [
      {
        phase: "Phase 1: Web Fundamentals",
        duration: "2–3 weeks",

        dailyPlan: [
          { day: 1, tasks: ["HTML basics","Tags","Practice"] },
          { day: 2, tasks: ["Forms","Semantic HTML","Revise"] },
          { day: 3, tasks: ["CSS basics","Colors","Fonts"] },
          { day: 4, tasks: ["Flexbox & Grid","Layout","Practice"] },
          { day: 5, tasks: ["JS basics","Variables","Loops"] },
          { day: 6, tasks: ["DOM","Events","Update UI"] },
          { day: 7, tasks: ["Mini project","Responsive","Improve"] }
        ],

        topics: [
          "HTML Basics (tags, forms, semantic HTML)",
          "CSS Basics (box model, flexbox, grid)",
          "JavaScript Basics (variables, loops, functions)",
          "DOM Manipulation",
          "Basic Projects (calculator, landing page)"
        ],
        resources: [
          "HTML & CSS - freeCodeCamp / YouTube",
          "JavaScript Basics - Apna College / CodeWithHarry"
        ]
      },

      {
        phase: "Phase 2: Advanced JavaScript + Git",
        duration: "2–3 weeks",
        topics: [
          "ES6 features (let, const, arrow functions)",
          "Promises & Async/Await",
          "Fetch API",
          "Error Handling",
          "Git & GitHub basics",
          "Mini project (weather app / notes app)"
        ],
        resources: [
          "JavaScript Advanced - YouTube (Namaste JS)",
          "Git & GitHub - official GitHub docs / YouTube"
        ]
      },

      {
        phase: "Phase 3: Frontend Framework (React)",
        duration: "3–4 weeks",
        topics: [
          "React basics (components, JSX)",
          "Props & State",
          "Hooks (useState, useEffect)",
          "Routing (React Router)",
          "Basic React projects"
        ],
        resources: [
          "React JS - official docs + YouTube",
          "React crash course (freeCodeCamp)"
        ]
      },

      {
        phase: "Phase 4: Backend Development",
        duration: "3–4 weeks",
        topics: [
          "Node.js basics",
          "Express.js framework",
          "REST APIs",
          "Middleware concept",
          "Authentication basics"
        ],
        resources: [
          "Node.js - official docs",
          "Express.js tutorial - YouTube"
        ]
      },

      {
        phase: "Phase 5: Database",
        duration: "2–3 weeks",
        topics: [
          "MongoDB basics",
          "CRUD operations",
          "Mongoose ODM",
          "Database connection with Node.js"
        ],
        resources: [
          "MongoDB University (free)",
          "YouTube tutorials"
        ]
      },

      {
        phase: "Phase 6: Full Stack Projects",
        duration: "3–4 weeks",
        topics: [
          "Connect frontend + backend",
          "Authentication system",
          "CRUD full stack app",
          "Deployment (Netlify / Vercel)",
          "Portfolio project building"
        ],
        resources: [
          "Full stack project tutorials",
          "Deployment guides"
        ]
      }
    ]
  },
  webDev: {
  title: "Web Developer Roadmap",
  duration: "2–4 months",
  topicsList: ["HTML","CSS","JavaScript","Responsive"],

  phases: [
    {
      phase: "Phase 1: HTML & CSS",
      duration: "2 weeks",

      dailyPlan: [
          { day: 1, tasks: ["HTML basics","Tags","Practice"] },
          { day: 2, tasks: ["Forms","Semantic HTML","Revise"] },
          { day: 3, tasks: ["CSS basics","Colors","Fonts"] },
          { day: 4, tasks: ["Flexbox","Layout","Practice"] },
          { day: 5, tasks: ["Grid","Responsive","Test"] },
          { day: 6, tasks: ["Build page","Improve UI","Fix"] },
          { day: 7, tasks: ["Mini project","Responsive","Deploy"] }
        ],


      topics: [
        "HTML structure",
        "Forms & semantic tags",
        "CSS basics",
        "Flexbox & Grid"
      ],
      resources: [
        "freeCodeCamp HTML/CSS",
        "YouTube tutorials"
      ]
    },
    {
      phase: "Phase 2: JavaScript",
      duration: "3 weeks",
      topics: [
        "Variables, loops, functions",
        "DOM manipulation",
        "Events",
        "Mini projects"
      ],
      resources: [
        "Apna College JS",
        "Namaste JavaScript"
      ]
    },
    {
      phase: "Phase 3: Projects",
      duration: "2–3 weeks",
      topics: [
        "Landing pages",
        "Portfolio website",
        "Responsive design"
      ],
      resources: [
        "Frontend Mentor",
        "YouTube project builds"
      ]
    }
  ]
  },
  devops: {
    title: "DevOps Engineer Roadmap",
    duration: "4–6 months",
    topicsList: ["Linux","Git","CI/CD","Docker","AWS"],

    phases: [
      {
        phase: "Phase 1: Basics",
        duration: "2–3 weeks",

        dailyPlan: [
          { day: 1, tasks: ["Linux basics","Commands","Practice"] },
          { day: 2, tasks: ["CLI usage","Navigation","Practice"] },
          { day: 3, tasks: ["Networking basics","Concepts","Learn"] },
          { day: 4, tasks: ["Git basics","Commit","Push"] },
          { day: 5, tasks: ["GitHub workflow","Repo","Practice"] },
          { day: 6, tasks: ["CI/CD intro","Concept","Learn"] },
          { day: 7, tasks: ["Mini setup","Pipeline","Test"] }
        ],


        topics: [
          "Linux basics",
          "Command line",
          "Networking fundamentals"
        ],
        resources: [
          "Linux Journey",
          "YouTube tutorials"
        ]
      },
      {
        phase: "Phase 2: Version Control",
        duration: "1 week",
        topics: [
          "Git basics",
          "GitHub workflows"
        ],
        resources: [
          "GitHub docs",
          "YouTube"
        ]
      },
      {
        phase: "Phase 3: CI/CD",
        duration: "2–3 weeks",
        topics: [
          "CI/CD pipelines",
          "GitHub Actions",
          "Jenkins basics"
        ],
        resources: [
          "Jenkins tutorials",
          "GitHub Actions docs"
        ]
      },
      {
        phase: "Phase 4: Cloud",
        duration: "3–4 weeks",
        topics: [
          "AWS basics",
          "Deployment",
          "Docker basics"
        ],
        resources: [
          "AWS free tier",
          "Docker docs"
        ]
      }
    ]
  },
  "ai/ml": {
    title: "AI/ML Roadmap",
    duration: "5–7 months",
    topicsList: ["Python","NumPy","Pandas","ML","Projects"],


    phases: [
      {
        phase: "Phase 1: Programming",
        duration: "3–4 weeks",

        dailyPlan: [
          { day: 1, tasks: ["Python basics","Syntax","Practice"] },
          { day: 2, tasks: ["Variables","Loops","Practice"] },
          { day: 3, tasks: ["Functions","Modules","Practice"] },
          { day: 4, tasks: ["NumPy basics","Arrays","Practice"] },
          { day: 5, tasks: ["Pandas","DataFrames","Practice"] },
          { day: 6, tasks: ["Data cleaning","Handle data","Test"] },
          { day: 7, tasks: ["Mini project","Dataset","Analyze"] }
        ],


        topics: [
          "Python basics",
          "Data structures",
          "NumPy & Pandas"
        ],
        resources: [
          "Python (CodeWithHarry)",
          "Kaggle"
        ]
      },
      {
        phase: "Phase 2: Math Basics",
        duration: "3 weeks",
        topics: [
          "Linear Algebra",
          "Probability",
          "Statistics"
        ],
        resources: [
          "Khan Academy",
          "YouTube"
        ]
      },
      {
        phase: "Phase 3: Machine Learning",
        duration: "4–6 weeks",
        topics: [
          "Supervised learning",
          "Regression",
          "Classification"
        ],
        resources: [
          "Andrew Ng Course",
          "Coursera"
        ]
      },
      {
        phase: "Phase 4: Projects",
        duration: "4 weeks",
        topics: [
          "Build ML models",
          "Kaggle competitions",
          "Deploy models"
        ],
        resources: [
          "Kaggle",
          "YouTube"
        ]
      }
    ]
  },
  mernstack: {
    title: "MERN Stack Developer Roadmap",
    duration: "4–6 months",
    topicsList: ["React","Node","MongoDB","Fullstack"],

    phases: [
      {
        phase: "Phase 1: Frontend",
        duration: "3–4 weeks",

        dailyPlan: [
          { day: 1, tasks: ["HTML","CSS","Practice"] },
          { day: 2, tasks: ["JavaScript basics","Practice"] },
          { day: 3, tasks: ["React basics","Components"] },
          { day: 4, tasks: ["Props & State","Practice"] },
          { day: 5, tasks: ["Hooks","Practice"] },
          { day: 6, tasks: ["Mini React app","Build"] },
          { day: 7, tasks: ["Improve UI","Fix bugs"] }
        ],


        topics: [
          "HTML, CSS",
          "JavaScript",
          "React basics"
        ],
        resources: [
          "freeCodeCamp",
          "React docs"
        ]
      },
      {
        phase: "Phase 2: Backend",
        duration: "3–4 weeks",
        topics: [
          "Node.js",
          "Express",
          "APIs"
        ],
        resources: [
          "Node docs",
          "YouTube"
        ]
      },
      {
        phase: "Phase 3: Database",
        duration: "2–3 weeks",
        topics: [
          "MongoDB",
          "Mongoose",
          "CRUD"
        ],
        resources: [
          "MongoDB University",
          "YouTube"
        ]
      },
      {
        phase: "Phase 4: Full Project",
        duration: "3–4 weeks",
        topics: [
          "Full stack app",
          "Authentication",
          "Deployment"
        ],
        resources: [
          "YouTube projects",
          "Vercel/Netlify"
        ]
      }
    ]
  },
  dataAnalyst: {
  title: "Data Analyst Roadmap",
  duration: "3–5 months",
  topicsList: ["Excel","SQL","Visualization","Projects"],

  phases: [
    {
      phase: "Phase 1: Basics",
      duration: "2–3 weeks",

      dailyPlan: [
          { day: 1, tasks: ["Excel basics","Sheets","Practice"] },
          { day: 2, tasks: ["Data cleaning","Fix data","Format"] },
          { day: 3, tasks: ["Statistics","Mean/Median","Practice"] },
          { day: 4, tasks: ["SQL basics","Queries","Practice"] },
          { day: 5, tasks: ["Joins","Examples","Practice"] },
          { day: 6, tasks: ["Charts","Graphs","Visualize"] },
          { day: 7, tasks: ["Mini project","Analyze","Report"] }
        ],


      topics: [
        "Excel",
        "Data cleaning",
        "Basic statistics"
      ],
      resources: [
        "Excel tutorials",
        "YouTube"
      ]
    },
    {
      phase: "Phase 2: Tools",
      duration: "3–4 weeks",
      topics: [
        "SQL",
        "Power BI / Tableau",
        "Data visualization"
      ],
      resources: [
        "SQL tutorials",
        "Power BI docs"
      ]
    },
    {
      phase: "Phase 3: Projects",
      duration: "3–4 weeks",
      topics: [
        "Real datasets",
        "Dashboards",
        "Reports"
      ],
      resources: [
        "Kaggle",
        "YouTube"
      ]
    }
  ]
  },
  android: {
    title: "Android Developer Roadmap",
    duration: "4–6 months",
    topicsList: ["Java","Kotlin","Android","Firebase"],


    phases: [
      {
        phase: "Phase 1: Basics",
        duration: "2–3 weeks",

        dailyPlan: [
            { day: 1, tasks: ["Java basics","Syntax","Practice"] },
            { day: 2, tasks: ["OOP concepts","Practice"] },
            { day: 3, tasks: ["Android Studio setup","Run app"] },
            { day: 4, tasks: ["Layouts","XML","Practice"] },
            { day: 5, tasks: ["Activities","Navigation"] },
            { day: 6, tasks: ["UI components","Practice"] },
            { day: 7, tasks: ["Mini app","Build"] }
          ],


        topics: [
          "Java/Kotlin basics",
          "OOP concepts",
          "Android Studio setup"
        ],
        resources: [
          "Kotlin official docs",
          "YouTube tutorials"
        ]
      },
      {
        phase: "Phase 2: UI Development",
        duration: "3–4 weeks",
        topics: [
          "Layouts & XML",
          "Activities & Intents",
          "UI components"
        ],
        resources: [
          "Android docs",
          "YouTube"
        ]
      },
      {
        phase: "Phase 3: Advanced",
        duration: "3–4 weeks",
        topics: [
          "APIs integration",
          "Firebase basics",
          "App architecture"
        ],
        resources: [
          "Firebase docs",
          "YouTube"
        ]
      }
    ]
  },
  uiux: {
    title: "UI/UX Designer Roadmap",
    duration: "2–4 months",
    topicsList: ["Design","Figma","UX","Case Study"],

    phases: [
      {
        phase: "Phase 1: Basics",
        duration: "2 weeks",

        dailyPlan: [
            { day: 1, tasks: ["Design principles","Learn"] },
            { day: 2, tasks: ["Color theory","Practice"] },
            { day: 3, tasks: ["Typography","Practice"] },
            { day: 4, tasks: ["Figma basics","Design"] },
            { day: 5, tasks: ["Wireframes","Create"] },
            { day: 6, tasks: ["Prototype","Test"] },
            { day: 7, tasks: ["Case study","Upload"] }
          ],


        topics: [
          "Design principles",
          "Color theory",
          "Typography"
        ],
        resources: [
          "Google UX course",
          "YouTube"
        ]
      },
      {
        phase: "Phase 2: Tools",
        duration: "2–3 weeks",
        topics: [
          "Figma basics",
          "Wireframing",
          "Prototyping"
        ],
        resources: [
          "Figma tutorials",
          "YouTube"
        ]
      },
      {
        phase: "Phase 3: Projects",
        duration: "3–4 weeks",
        topics: [
          "App design",
          "Website UI",
          "Case studies"
        ],
        resources: [
          "Behance",
          "Dribbble"
        ]
      }
    ]
  },
  cybersecurity: {
  title: "Cybersecurity Roadmap",
  duration: "4–6 months",
  topicsList: ["Networking","Linux","Security","Hacking"],


  phases: [
    {
      phase: "Phase 1: Basics",
      duration: "2–3 weeks",

      dailyPlan: [
          { day: 1, tasks: ["Networking basics","Concepts"] },
          { day: 2, tasks: ["Linux fundamentals","Commands"] },
          { day: 3, tasks: ["Security basics","Learn"] },
          { day: 4, tasks: ["Tools intro","Kali Linux"] },
          { day: 5, tasks: ["Scanning","Practice"] },
          { day: 6, tasks: ["Vulnerabilities","Learn"] },
          { day: 7, tasks: ["Practice labs","TryHackMe"] }
        ],


      topics: [
        "Networking basics",
        "Linux fundamentals",
        "Security concepts"
      ],
      resources: [
        "Cybrary",
        "YouTube"
      ]
    },
    {
      phase: "Phase 2: Ethical Hacking",
      duration: "3–4 weeks",
      topics: [
        "Penetration testing",
        "Vulnerabilities",
        "Tools (Kali Linux)"
      ],
      resources: [
        "TryHackMe",
        "Hack The Box"
      ]
    },
    {
      phase: "Phase 3: Advanced",
      duration: "3–4 weeks",
      topics: [
        "Web security",
        "Cryptography",
        "Security tools"
      ],
      resources: [
        "OWASP",
        "YouTube"
      ]
    }
  ]
  },
  cloud: {
    title: "Cloud Engineer Roadmap",
    duration: "4–6 months",
    topicsList: ["Cloud","AWS","Docker","Deployment"],

    phases: [
      {
        phase: "Phase 1: Basics",
        duration: "2–3 weeks",
        dailyPlan: [
            { day: 1, tasks: ["Cloud basics","Concepts"] },
            { day: 2, tasks: ["Networking","Basics"] },
            { day: 3, tasks: ["Linux","Commands"] },
            { day: 4, tasks: ["AWS intro","Setup"] },
            { day: 5, tasks: ["EC2","Launch"] },
            { day: 6, tasks: ["S3","Upload"] },
            { day: 7, tasks: ["Deploy app","Test"] }
          ],

        topics: [
          "Cloud concepts",
          "Networking basics",
          "Linux"
        ],
        resources: [
          "AWS basics",
          "YouTube"
        ]
      },
      {
        phase: "Phase 2: AWS",
        duration: "3–4 weeks",
        topics: [
          "EC2",
          "S3",
          "IAM"
        ],
        resources: [
          "AWS docs",
          "Free tier practice"
        ]
      },
      {
        phase: "Phase 3: Deployment",
        duration: "3–4 weeks",
        topics: [
          "App deployment",
          "Docker basics",
          "CI/CD"
        ],
        resources: [
          "Docker docs",
          "YouTube"
        ]
      }
    ]
  }
};

function updateStreak(selectedRole){
  let today = new Date().toDateString();

  if(!streakData[selectedRole]){
    streakData[selectedRole] = {
      currentStreak: 0,
      lastCompletedDate : null
    };
  }

  let roleStreak = streakData[selectedRole];

  if(roleStreak.lastCompletedDate === today){
    return;
  }

  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday = yesterday.toDateString();

  if(roleStreak.lastCompletedDate === yesterday){
    roleStreak.currentStreak += 1;
  }else{
    roleStreak.currentStreak = 1;
  }

  roleStreak.lastCompletedDate = today;

  localStorage.setItem("streakData", JSON.stringify(streakData));
};

function isDayCompleted(day, selectedRole){
  for(let i = 0; i < day.tasks.length; i++){
    let id = selectedRole + "_day" + day.day + "_task" + i;
    if(!dailyprogress[id]){
      return false;
    }
  }
  return true;
};

function checkAllCompleted(dailyPlan, selectedRole){
  let allCompleted = true;
  dailyPlan.forEach(day =>{
    day.tasks.forEach((task, index)=>{
      let completedId = selectedRole + "_day" + day.day + "_task" + index;
      if(!dailyprogress[completedId]){
        allCompleted = false;
      }
    });
  });

  let existingMsg = document.querySelector('.complete-msg');
  if(existingMsg){
    existingMsg.remove();
  }

  if(allCompleted){
    let completeMsg = document.createElement('p');
    completeMsg.textContent = "🎉 Great job! You stayed consistent for 7 days. Keep this momentum and complete the roadmap.";
    completeMsg.classList.add("complete-msg");
    dailyPlanCard.appendChild(completeMsg);
  }
};


function showDailyPlan(phases, selectedRole){
  roadmapContainer.style.display = "none";
    dailyPlanContainer.style.display = "none";
    dailyPlanCard.style.display = "block";

    dailyPlanCard.innerHTML = "";
    dailyPlanCard.classList.add("roadmapCard");

    let firstPhase = phases[0];
    let dailyPlan = firstPhase.dailyPlan;

    let streakContainer = document.createElement('div');
    streakContainer.classList.add('d-flex', 'flex-row');
    dailyPlanCard.appendChild(streakContainer);

    let dayHeading = document.createElement('h3');
    dayHeading.textContent = "7 Day Plan";
    streakContainer.appendChild(dayHeading);

    let streakText = document.createElement('h1');
    streakText.classList.add("ml-auto", "mr-3", "streak-text");

    let roleStreak = streakData[selectedRole] || {currentStreak: 0};

    streakText.textContent = "🔥" + roleStreak.currentStreak;
    streakContainer.appendChild(streakText);

    let hrEl = document.createElement('hr');
    dailyPlanCard.appendChild(hrEl);

    for(let eachDay of dailyPlan){
      let dayEl = document.createElement('div');
      
      let titleEl = document.createElement('p');
      titleEl.textContent = "Day " + eachDay.day;
      titleEl.style.fontWeight = "bold";
      dayEl.appendChild(titleEl);

      let dailyList = document.createElement('ul');
      dailyList.classList.add("task-list-style");
      dailyList.classList.add("topics-container");

      eachDay.tasks.forEach((task, index) => {
        let taskItem = document.createElement('li');

        let taskId = selectedRole + "_day" + eachDay.day + "_task" + index;


        let taskCheckbox = document.createElement('input');
        taskCheckbox.type = "checkbox";
        taskCheckbox.classList.add("mr-2", "ml-2");
        taskCheckbox.id = taskId;

        let taskLabel = document.createElement('label');
        taskLabel.htmlFor = taskId;
        taskLabel.textContent = task;

        taskCheckbox.checked = dailyprogress[taskId] || false;

        if(taskCheckbox.checked){
          taskLabel.style.textDecoration = "line-through";
          taskLabel.style.opacity = "0.6";
        }

  

        taskCheckbox.addEventListener("change", function(){
          dailyprogress[taskId] = taskCheckbox.checked;
          localStorage.setItem("dailyProgress", JSON.stringify(dailyprogress));
          if(taskCheckbox.checked){
            taskLabel.style.textDecoration = "line-through";
            taskLabel.style.opacity = "0.6";
          }else{
            taskLabel.style.textDecoration = "none";
            taskLabel.style.opacity = "1";
          }
          
          let today = new Date().toDateString();

          if(isDayCompleted(eachDay, selectedRole)){
            let roleStreakData = streakData[selectedRole] || {};
            if(roleStreakData.lastCompletedDate !== today){
              updateStreak(selectedRole);
              let updatedStreak = streakData[selectedRole];
              streakText.textContent = "🔥" + updatedStreak.currentStreak;
            }
          }

          checkAllCompleted(dailyPlan, selectedRole);
        });

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskLabel);
        dailyList.appendChild(taskItem);

      });

      dayEl.appendChild(dailyList);
      dailyPlanCard.appendChild(dayEl);
    }   

    checkAllCompleted(dailyPlan, selectedRole);

    let backBtn = document.createElement('button');
    backBtn.textContent = "Back to Roadmap";
    backBtn.classList.add("learn-btn");
    

    backBtn.addEventListener("click", ()=>{
      showRoadmap();
    });
    dailyPlanCard.appendChild(backBtn);
};


function showRoadmap(){
  localStorage.setItem("currentView", "roadmap");
  dailyPlanCard.innerHTML = "";
  dailyPlanCard.style.display = "none";
  roadmapContainer.style.display = "block";
  dailyPlanContainer.style.display = "block";
  
  roadmapContainer.innerHTML = "";
  dailyPlanContainer.innerHTML = "";

  let selectedRole = selectRoleInputEl.value;
  let selectedData = roadmaps[selectedRole];

  let phases = selectedData.phases;

  // save role
  localStorage.setItem("selectedRole", selectedRole);

  if(!selectedData){
    roadmapContainer.innerHTML = "<h3>Loading your Roadmap....</h3>";
    dailyPlanContainer.innerHTML = "";
    return;
  }

  // Roadmap-section

  let roadmapCardEl = document.createElement('div');
  roadmapCardEl.classList.add("roadmapCard");
  roadmapContainer.appendChild(roadmapCardEl);

  let roadmapHeadEl = document.createElement('h1');
  roadmapHeadEl.classList.add("roadmap-head");
  roadmapHeadEl.textContent = selectedData.title + ": " + `(${selectedData.duration})`;
  roadmapCardEl.appendChild(roadmapHeadEl);
  
  let lineEl = document.createElement('hr');
  roadmapCardEl.appendChild(lineEl);

  // flowchart

  let flowChartContainer = document.createElement('div');
  flowChartContainer.classList.add("flowchart-container");
  roadmapCardEl.appendChild(flowChartContainer);

  phases.forEach((eachPhase, index) =>{
    let item = document.createElement('div');
    item.classList.add("flowchart-item");
    flowChartContainer.appendChild(item);

    let left = document.createElement('div');
    left.classList.add('flowchart-left');
    item.appendChild(left);

    let circle = document.createElement('div');
    circle.classList.add("circle");
    left.appendChild(circle);


    if(index !== phases.length - 1){
      let line = document.createElement('div');
      line.classList.add("line");
      left.appendChild(line);
    }

    let right = document.createElement('div');
    right.classList.add("flowchart-content");
    right.textContent = eachPhase.phase;
    item.appendChild(right);

  });
 
  // LearningPlan Section

  let dailyPlanCardEl = document.createElement('div');
  dailyPlanCardEl.classList.add("roadmapCard");
  dailyPlanContainer.appendChild(dailyPlanCardEl);

  let dailyPlanHeadEl = document.createElement('h3');
  dailyPlanHeadEl.textContent = "Learning Plan";
  dailyPlanHeadEl.classList.add("daily-plan-head");
  dailyPlanCardEl.appendChild(dailyPlanHeadEl);

  let lineElement = document.createElement('hr');
  dailyPlanCardEl.appendChild(lineElement);

  // Progress bar

  let progressContainer = document.createElement('div');
  progressContainer.classList.add("progress-container");
  dailyPlanCardEl.appendChild(progressContainer);

  let progressText = document.createElement('p');
  progressText.classList.add("progress-text");
  progressContainer.appendChild(progressText);

  let progressBar = document.createElement('div');
  progressBar.classList.add("progress-bar");
  progressContainer.appendChild(progressBar);

  let progressFill = document.createElement('div');
  progressFill.classList.add("progress-fill");
  progressBar.appendChild(progressFill);

  function updateProgress(){
    let total = phases.length;
    let completed = 0;

    for(let eachPhase of phases){
      let key = selectedRole + "_" + eachPhase.phase;
      if(progress[key]){
        completed ++;
      }
    }

    let percent = Math.round((completed / total) * 100);

    progressText.textContent = `${completed} / ${total} Completed (${percent}%)`;
    progressFill.style.width = percent + "%";

    if(percent === 100){
      progressText.textContent += " 🎉";
    }
  }

  updateProgress();


  // Phases List

  for(let eachPhase of phases){

      let phaseContainer = document.createElement('div');
      phaseContainer.classList.add("phase-container");
      dailyPlanCardEl.appendChild(phaseContainer);

      let checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.classList.add("mt-3", "mr-2");
      

      let phaseKey = selectedRole + "_" + eachPhase.phase;
      checkbox.id = phaseKey;
      phaseContainer.appendChild(checkbox);

      checkbox.checked = progress[phaseKey] || false;

      let phaseTitleEl = document.createElement('label');
      phaseTitleEl.htmlFor = phaseKey;
      phaseTitleEl.classList.add("phase-items");
      phaseTitleEl.textContent = eachPhase.phase  + ` (${eachPhase.duration})`;
      phaseContainer.appendChild(phaseTitleEl);

      if(checkbox.checked){
        phaseTitleEl.style.textDecoration = "line-through";
        phaseTitleEl.style.opacity = "0.6";
      }

      checkbox.addEventListener("change", function(){
        progress[phaseKey] = checkbox.checked;
        localStorage.setItem("progress", JSON.stringify(progress));

        if(checkbox.checked){
          phaseTitleEl.style.textDecoration = "line-through";
          phaseTitleEl.style.opacity = "0.6";
        }else{
          phaseTitleEl.style.textDecoration = "none";
          phaseTitleEl.style.opacity = "1";
        }

        updateProgress();
      });


      let topicsContainer = document.createElement('div');
      topicsContainer.classList.add("topics-container");
      dailyPlanCardEl.appendChild(topicsContainer);

      let topicsListEl = document.createElement('ul');
      topicsListEl.classList.add("list-style");
      topicsContainer.appendChild(topicsListEl);


      for(let eachTopic of eachPhase.topics){
        let topicEl = document.createElement('li');
        topicEl.classList.add("topic-items");
        topicEl.textContent = eachTopic;
        topicsListEl.appendChild(topicEl);
      }

      let resourceHeadEl = document.createElement('ul');
      resourceHeadEl.textContent = "Resources:" ;
      resourceHeadEl.classList.add("resource-head", "resource-list-type");
      topicsContainer.appendChild(resourceHeadEl);

      

      for(let eachResource of eachPhase.resources){
        let resourceEl = document.createElement('li');
        resourceEl.textContent = eachResource;
        resourceEl.classList.add("resource-list-items");
        resourceHeadEl.appendChild(resourceEl);
      }

  } 

  // Daily Plan Section

  let startLearnBtn = document.createElement('button');
  startLearnBtn.textContent = "Start Learning";
  startLearnBtn.classList.add("learn-btn");
  dailyPlanCardEl.appendChild(startLearnBtn);

  dailyPlanCard.classList.add("roadmapCard");

  startLearnBtn.addEventListener("click", function(){

    localStorage.setItem("currentView", "dailyPlan");
    showDailyPlan(phases, selectedRole);

  });

};

document.addEventListener("DOMContentLoaded", () =>{
  let savedRole = localStorage.getItem("selectedRole");
  let currentView = localStorage.getItem("currentView");
  if(savedRole){
    selectRoleInputEl.value = savedRole;
    let selectedData = roadmaps[savedRole];
    let phases = selectedData.phases;
    
    if(currentView === "dailyPlan"){
      showDailyPlan(phases, savedRole);
    }
    else{
      showRoadmap();
    }
  }

 
});


showButtonEl.addEventListener("click", function(){
  localStorage.setItem("currentView", "roadmap");
  showRoadmap();
});

