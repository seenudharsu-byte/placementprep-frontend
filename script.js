/* ============== BACKEND CONNECTION ============== */
const API_BASE_URL = "https://placementprep-api-4iol.onrender.com";
function getToken(){ return localStorage.getItem("pp_token"); }
function setToken(t){ localStorage.setItem("pp_token", t); }
function clearToken(){ localStorage.removeItem("pp_token"); }

async function api(path, { method = "GET", body } = {}){
  const headers = { "Content-Type": "application/json" };
  const token = getToken();
  if(token) headers["Authorization"] = "Bearer " + token;

  const response = await fetch(API_BASE_URL + path, {
    method, headers, body: body ? JSON.stringify(body) : undefined
  });
  const data = await response.json().catch(()=>({}));
  if(!response.ok) throw new Error(data.message || "Request failed");
  return data;
}

let currentUser = null;         // {id, name, email, xp, streak, lastActive, questionsDone}
let C = {Aptitude:[], Technical:[], HR:[]};   // filled from the backend after login
let Q = {Aptitude:[], Technical:[], HR:[]};   // filled from the backend after login

/* ============== LOGIN ============== */
 async function login(e){
  if(e) e.preventDefault();
  const email = document.querySelector('#login input[type="email"]').value;
  const password = document.querySelector('#login input[type="password"]').value;
  const msg = document.getElementById('loginMsg');
  msg.textContent = "Connecting... please wait";
  try{
    const data = await api("/api/auth/login", { method: "POST", body: { email, password } });
    setToken(data.token);
    currentUser = data.user;
    msg.textContent = "";
    await enterApp();
  }catch(error){
    msg.textContent = "";
    alert(error.message || "Cannot connect to backend.");
  }
  return false;
}

function logout(){
  clearToken();
  location.reload();
}

/* ============== AUTO LOGIN ON PAGE LOAD (if a token is already saved) ============== */
window.addEventListener("DOMContentLoaded", async () => {
  const token = getToken();
  if(!token) return;   // show the login form as normal
  try{
    const data = await api("/api/auth/me");
    currentUser = data.user;
    await enterApp();
  }catch(error){
    clearToken();   // saved token is invalid/expired — fall back to login form
  }
});

/* ============== ENTER APP: load content + progress, then show the dashboard ============== */
async function enterApp(){
  await loadContent();
  const touched = await api("/api/progress/touch", { method: "POST" });
  currentUser = touched.user;

  document.getElementById("login").style.display = "none";
  document.getElementById("app").style.display = "block";
  renderStats();
  window.scrollTo(0,0);
}

async function loadContent(){
  const [topics, questions] = await Promise.all([
    api("/api/content/topics"),
    api("/api/content/questions")
  ]);
  C = {Aptitude:[], Technical:[], HR:[]};
  Q = {Aptitude:[], Technical:[], HR:[]};
  topics.forEach(t => C[t.course].push([t.title, t.concept, t.coreConcept, t.example, t.tip]));
  questions.forEach(q => Q[q.course].push([q.question, q.options, q.correctIndex, q.topicTitle]));
}

/* ============== PROGRESS (real, persisted) ============== */
function renderStats(){
  const xp = currentUser.xp || 0;
  const level = Math.max(1, Math.floor(xp / 100) + 1);
  const pct = Math.min(100, Math.round((xp / 500) * 100));

  document.getElementById("streakStat").textContent = "🔥 " + (currentUser.streak || 0);
  document.getElementById("xpStat").textContent = xp + " XP";
  document.getElementById("levelStat").textContent = "Lv. " + level;
  document.getElementById("done").textContent = currentUser.questionsDone || 0;
  document.getElementById("readinessRing").style.background = `conic-gradient(#5b50d8 ${pct}%,#e5e6ef 0)`;
  document.getElementById("readinessPct").textContent = pct + "%";
}

async function recordQuizAttempt(course, topicTitle, score, total){
  const data = await api("/api/progress/quiz-attempt", { method: "POST", body: { course, topicTitle, score, total } });
  currentUser = data.user;
  renderStats();
}

async function recordMockAttempt(kind, score, total, durationSeconds, sectionScores, wrongAnswers){
  const data = await api("/api/progress/mock-attempt",{ method: "POST", body: { kind, score, total, durationSeconds, sectionScores, wrongAnswers } });
  currentUser = data.user;
  renderStats();
}

/* ============== APP LOGIC (same as before — now backed by real data) ============== */
let course="",topic=0,stage="concept",qi=0,qs=0,answered=false;
function closeBox(id){document.getElementById(id).classList.add("hidden");clearInterval(timerHandle)}
function openCourse(c){course=c;topic=0;stage="concept";learn.classList.remove("hidden");courseTitle.textContent=(c=="Aptitude"?"🧮 ":c=="Technical"?"💻 ":"👤 ")+c;renderTopics();renderLearn()}
function renderTopics(){let s=(search.value||"").toLowerCase();topics.innerHTML=C[course].map((x,i)=>[x,i]).filter(x=>x[0][0].toLowerCase().includes(s)).map(x=>`<button class="${x[1]==topic?"active":""}" onclick="selectTopic(${x[1]})">${x[1]+1}. ${x[0][0]}</button>`).join("")}
function selectTopic(i){topic=i;stage="concept";renderTopics();renderLearn()}
function renderLearn(){let t=C[course][topic],h=`<div class="eyebrow">${course} • ${topic+1}/${C[course].length}</div><h2>${t[0]}</h2>`;
if(stage=="concept")h+=`<div class="lesson"><h3>📖 Detailed Concept</h3><p>${t[1]}</p><h3>🧠 Core Concept</h3><p>${t[2]}</p><div class="note"><b>💡 Example:</b> ${t[3]}</div><h3>⚡ Quick Tip</h3><p>${t[4]}</p><h3>⚠️ Common Mistake</h3><p>Read the requirement carefully and verify your logic, formula or assumptions before answering.</p><div class="row"><span></span><button class="primary" onclick="stage='practice';renderLearn()">Practice Questions →</button></div></div>`;
if(stage=="practice"){let a=Q[course].filter(x=>x[3]==t[0]);if(!a.length)a=Q[course].slice(0,3);h+=`<div class="lesson"><h3>📝 Practice + Explanation</h3>${a.map((q,i)=>`<div class="q"><b>Q${i+1}. ${q[0]}</b>${q[1].map((o,j)=>`<p style="font-size:10px">${String.fromCharCode(65+j)}. ${o}</p>`).join("")}<button class="ghost" onclick="this.nextElementSibling.classList.toggle('show')">Show Answer</button><div class="answer">Correct: <b>${q[1][q[2]]}</b><br>Apply the relevant formula/concept from the notes above.</div></div>`).join("")}<div class="row"><button class="ghost" onclick="stage='concept';renderLearn()">← Notes</button><button class="primary" onclick="startQuiz()">Topic Quiz →</button></div></div>`}
if(stage=="quiz"){let a=Q[course].filter(x=>x[3]==t[0]);if(!a.length)a=Q[course].slice(0,3);let q=a[qi%a.length];h+=`<div class="lesson"><p>Question ${qi+1} of 3</p><h3>${q[0]}</h3>${q[1].map((o,j)=>`<button class="option" onclick="answerQuiz(${j})">${String.fromCharCode(65+j)}. ${o}</button>`).join("")}<div class="row"><span></span><button class="primary" onclick="nextQuiz()">Next →</button></div></div>`}
if(stage=="result"){let p=Math.round(qs/Math.max(qi,1)*100),cat=p>=80?"BEST":p>=60?"GOOD":p>=40?"AVERAGE":"NEEDS PRACTICE";h+=`<div class="score"><div class="scorecircle">${p}%</div><h2>${cat}</h2><p>${qs}/${Math.max(qi,1)} correct. ${p<60?"Revise this concept and retake the quiz.":"Good work. Continue to the next concept."}</p><button class="primary" onclick="nextTopic()">Next Concept →</button></div>`}
learning.innerHTML=h}
function startQuiz(){stage="quiz";qi=0;qs=0;answered=false;renderLearn()}
function answerQuiz(i){if(answered)return;answered=true;let t=C[course][topic],a=Q[course].filter(x=>x[3]==t[0]);if(!a.length)a=Q[course].slice(0,3);let q=a[qi%a.length],bs=document.querySelectorAll("#learning .option");bs.forEach((b,j)=>{if(j==q[2])b.classList.add("correct");if(j==i&&i!=q[2])b.classList.add("wrong")});if(i==q[2])qs++;qi++;
  if(qi>=3){ recordQuizAttempt(course, t[0], qs, qi); } }
function nextQuiz(){if(!answered)return alert("Choose an answer first.");if(qi>=3)stage="result";else answered=false;renderLearn()}
function nextTopic(){if(topic<C[course].length-1){topic++;stage="concept";renderTopics();renderLearn()}else{closeBox("learn");startMock(course,10,10)}}
let mockQs=[],mi=0,ms=0,mans=false,seconds=0,timerHandle=null,startSeconds=0;
function startMock(kind,n,min){let pool=kind=="Mixed"?Q.Aptitude.map(q=>[...q,"Aptitude"]).concat(Q.Technical.map(q=>[...q,"Technical"]),Q.HR.map(q=>[...q,"HR"])):Q[kind].map(q=>[...q,kind]);mockQs=[];for(let i=0;i<n;i++)mockQs.push(pool[i%pool.length]);mi=0;ms=0;mockAnswers=[];seconds=min*60;startSeconds=seconds;document.getElementById("mock").classList.remove("hidden");mockTitle.textContent=(kind=="Mixed"?"Full Placement":kind)+" Mock Test";clearInterval(timerHandle);timerHandle=setInterval(()=>{seconds--;showTimer();if(seconds<=0)finishMock(kind)},1000);showTimer();renderMock()}function showTimer(){timer.textContent=String(Math.floor(seconds/60)).padStart(2,"0")+":"+String(seconds%60).padStart(2,"0")}
function renderMock(){let q=mockQs[mi];mp.style.width=((mi+1)/mockQs.length*100)+"%";mockArea.innerHTML=`<p>Question ${mi+1}/${mockQs.length} • <b>${q[3]}</b></p><div class="q"><h3>${q[0]}</h3>${q[1].map((o,j)=>`<button class="option" onclick="answerMock(${j})">${String.fromCharCode(65+j)}. ${o}</button>`).join("")}</div><div class="row"><span></span><button class="primary" onclick="nextMock()">Next →</button></div>`;mans=false}
function answerMock(i){if(mans)return;mans=true;let q=mockQs[mi],bs=document.querySelectorAll("#mockArea .option");bs.forEach((b,j)=>{if(j==q[2])b.classList.add("correct");if(j==i&&i!=q[2])b.classList.add("wrong")});if(i==q[2])ms++;mockAnswers.push({questionText:q[0],options:q[1],correctIndex:q[2],selectedIndex:i,course:q[4]})}function nextMock(){if(!mans)return alert("Choose an answer first.");if(mi<mockQs.length-1){mi++;renderMock()}else finishMock(mockTitle.textContent.includes("Full")?"Mixed":course||"Aptitude")}
function finishMock(kind){clearInterval(timerHandle);let p=Math.round(ms/mockQs.length*100),cat=p>=80?"BEST":p>=60?"GOOD":p>=40?"AVERAGE":"NEEDS PRACTICE",used=startSeconds-seconds,groups={};mockQs.forEach(q=>groups[q[3]]=(groups[q[3]]||0)+1);let concepts=Object.keys(groups);
  let sectionScores={Aptitude:{correct:0,total:0},Technical:{correct:0,total:0},HR:{correct:0,total:0}};
  mockAnswers.forEach(a=>{sectionScores[a.course].total++;if(a.selectedIndex==a.correctIndex)sectionScores[a.course].correct++});
  let wrongAnswers=mockAnswers.filter(a=>a.selectedIndex!=a.correctIndex);
  recordMockAttempt(kind, ms, mockQs.length, used, sectionScores, wrongAnswers);
mockArea.innerHTML=`<div class="score"><div class="scorecircle">${p}%</div><h2>${cat}</h2><div class="resultgrid"><div class="result"><b>${ms}/${mockQs.length}</b>Correct</div><div class="result"><b>${mockQs.length-ms}</b>Wrong</div><div class="result"><b>${p}%</b>Accuracy</div><div class="result"><b>${Math.floor(used/60)}m ${used%60}s</b>Time</div></div><div class="lesson"><h3>📊 Section Breakdown</h3>${Object.keys(sectionScores).filter(c=>sectionScores[c].total>0).map(c=>{let sc=sectionScores[c],v=Math.round(sc.correct/sc.total*100),s=v>=80?["🟢","Strong"]:v>=50?["🟡","Average"]:["🔴","Weak"];return `<p><b>${c}</b> — ${sc.correct}/${sc.total} (${v}%) <span class="${s[1]=="Strong"?"strong":s[1]=="Average"?"avg":"weak"}">${s[0]} ${s[1]}</span></p><div class="bar"><i style="width:${v}%"></i></div>`}).join("")}</div><div class="lesson"><h3>❌ Wrong Answers</h3>${wrongAnswers.length===0?"<p>No wrong answers. 🎉</p>":wrongAnswers.map(a=>`<div class="q"><b>${a.questionText}</b><p>Your answer: ${a.options[a.selectedIndex]}</p><p>Correct answer: ${a.options[a.correctIndex]}</p></div>`).join("")}</div><div class="lesson"><h3>⚠️ Recommended Revision</h3><p>${p<60?"Focus on the weak concepts above. Read detailed notes → practice → retake topic quiz.":"Keep revising average areas and attempt a harder mock."}</p></div><button class="primary" onclick="closeBox('mock')">Dashboard</button></div>`}
  function special(title,body){document.getElementById("special").classList.remove("hidden");specialBody.innerHTML=`<div class="eyebrow">PLACEMENT TOOL</div><h2>${title}</h2>${body}`}
function flashcards(){special("🧠 Flashcards",["ACID — Atomicity, Consistency, Isolation, Durability","OOP — Encapsulation, Abstraction, Inheritance, Polymorphism","OSI — 7 layers from Physical to Application","Probability — Favourable ÷ Total outcomes","STAR — Situation, Task, Action, Result"].map(x=>`<div class="lesson"><b>${x}</b></div>`).join(""))}
function hrSim(){special("🎤 HR Interview Simulator",["Tell me about yourself","What are your strengths?","What is your weakness?","Why should we hire you?","Why this company?","Tell me about your project"].map((x,i)=>`<div class="q"><b>${i+1}. ${x}</b><p>Prepare your answer first.</p><button class="ghost" onclick="this.nextElementSibling.classList.toggle('show')">Show Answer Structure</button><div class="answer">Use a concise structure with a relevant example, result and connection to the role.</div></div>`).join(""))}
function techSim(){special("💻 Technical Interview",["What is polymorphism?","What is normalization?","Stack vs Queue?","What is a primary key?","Process vs Thread?","TCP vs UDP?"].map(x=>`<div class="q"><b>${x}</b><button class="ghost" onclick="this.nextElementSibling.classList.toggle('show')">Show Framework</button><div class="answer">Definition → simple example → practical use/difference.</div></div>`).join(""))}
function companies(){special("🏢 Company Preparation",["TCS","Infosys","Accenture","Wipro","Cognizant","Capgemini"].map(x=>`<div class="card" style="display:inline-block;width:30%;margin:1%"><h3>${x}</h3><p>Aptitude → Technical → HR → Mock</p><button class="primary" onclick="closeBox('special');startMock('Aptitude',8,8)">Practice</button></div>`).join(""))}
function roadmap(){special("🗺️ 30-Day Roadmap",["Days 1–4: Number System, Percentages, Ratio","Days 5–8: Profit/Loss, Average, Time & Work","Days 9–12: Reasoning, Probability, DI","Days 13–16: Programming + OOP","Days 17–20: DSA + Algorithms","Days 21–23: DBMS + SQL","Days 24–25: OS + Networks","Days 26–27: HR + Project Interview","Days 28–29: Section Mocks","Day 30: Full Mock"].map((x,i)=>`<div class="lesson"><b>${x}</b><div class="bar"><i style="width:${(i+1)*10}%"></i></div></div>`).join(""))}
function achievements(){special("🏆 Achievements",["🥇 First Quiz","🔥 7-Day Streak","🧮 Aptitude Starter","💻 Technical Learner","🎤 HR Ready","⏱️ First Mock","⭐ 300 XP","🏆 Placement Ready"].map(x=>`<span class="tag">${x}</span>`).join(""))}
function analytics(){special("📊 Analytics",`<div class="resultgrid"><div class="result"><b>82%</b>Aptitude</div><div class="result"><b>74%</b>Technical</div><div class="result"><b>90%</b>HR</div><div class="result"><b>72%</b>Overall</div></div><div class="lesson"><h3>🟢 Strong</h3><span class="tag">DBMS</span><span class="tag">Average</span><span class="tag">HR Communication</span></div><div class="lesson"><h3>🟡 Average</h3><span class="tag">Profit & Loss</span><span class="tag">OOP</span></div><div class="lesson"><h3>🔴 Needs Practice</h3><span class="tag">Probability</span><span class="tag">Time & Work</span></div>`)}
