const C={
Aptitude:[
["Number System","Number systems cover integers, factors, multiples, divisibility and remainders.","Use prime factorisation, divisibility rules, HCF and LCM to simplify problems.","24 factors include 1,2,3,4,6,8,12,24.","Check divisibility before doing long calculations."],
["HCF & LCM","HCF is the greatest common factor; LCM is the least common multiple.","For two positive integers HCF × LCM = product of numbers.","12 and 18 → HCF 6, LCM 36.","Do not confuse greatest factor with least multiple."],
["Percentages","A percentage represents a value out of 100.","Percentage = part/whole × 100.","20% of 250 = 50.","10% is one tenth; 5% is half of 10%."],
["Profit & Loss","Profit occurs when SP is greater than CP.","Profit=SP−CP; Loss=CP−SP; Profit%=Profit/CP×100.","CP 500, SP 600 → 20% profit.","Profit percentage uses CP as base."],
["Simple Interest","Interest is calculated on original principal only.","SI=P×R×T/100.","1000 at 10% for 2 years → 200.","Keep rate and time units consistent."],
["Compound Interest","Interest is added to the amount for the next period.","A=P(1+R/100)^T; CI=A−P.","For annual compounding, apply the rate every year.","Do not use SI formula for CI."],
["Ratio & Proportion","Ratio compares quantities; proportion equates ratios.","Simplify ratios and cross multiply proportions.","2:3 = 4:6.","Compare compatible units."],
["Average","Average equals total divided by count.","Average=Sum/Count.","10,20,30 → 20.","Do not average averages unless group sizes match."],
["Problems on Ages","Age problems relate present, past and future ages.","Translate statements into equations and apply the same time shift.","If A is 5 older than B, A−B=5.","Verify with the original statement."],
["Time & Work","Work questions compare completion rates.","If work takes x days, one-day rate is 1/x.","10-day work → 1/10 per day.","Add rates, not days."],
["Pipes & Cisterns","Filling adds rate; emptying subtracts rate.","Use tank-per-time rates.","6h fill=1/6; 12h empty=−1/12.","Outlet rate has a negative sign."],
["Time, Speed & Distance","Distance, speed and time are related.","Speed=Distance/Time; Distance=Speed×Time.","150 km in 3h = 50 km/h.","Convert minutes and hours correctly."],
["Boats & Streams","Stream changes effective boat speed.","Downstream=boat+stream; upstream=boat−stream.","10 and 2 → downstream 12, upstream 8.","Keep direction clear."],
["Permutation & Combination","Permutation is arrangement; combination is selection.","nPr=n!/(n−r)!; nCr=n!/[r!(n−r)!].","4C2=6.","Order matters only in permutation."],
["Probability","Probability measures chance of an event.","P(E)=favourable/total for equally likely outcomes.","Coin head probability=1/2.","Probability is from 0 to 1."],
["Data Interpretation","DI uses tables, charts and graphs.","Read units and labels before calculating.","Percentage change=(new−old)/old×100.","Avoid premature rounding."],
["Algebra","Algebra represents unknowns with symbols.","Simplify expressions and solve equations.","2x+4=10 → x=3.","Apply operations to both sides."],
["Geometry","Geometry studies shapes, angles and measurements.","Know triangle, circle, rectangle and angle properties.","Triangle angles total 180°.","Draw a quick diagram."],
["Logical Reasoning","Reasoning tests patterns and deductions.","Practice series, coding, directions, blood relations and syllogisms.","Find the rule before choosing.","Use only given information."],
["Coding-Decoding","Coding questions transform letters, numbers or words.","Compare examples and find shifts, reversals or positions.","Test your rule against every example.","Do not assume an unproven pattern."],
["Blood Relations","Family relationships can be represented as a tree.","Translate each statement into a family tree.","Father's sister is aunt.","Track gender and generation."],
["Directions","Direction questions track relative positions.","Use a small N/S/E/W sketch or coordinates.","North then right = east.","Track each turn."],
["Series","Series questions hide numerical or letter patterns.","Check differences, ratios, alternating patterns and squares.","2,4,8,16 → ×2.","Try alternate patterns if needed."],
["Syllogism","Syllogisms test conclusions from statements.","Use set relationships or Venn diagrams.","Only definite conclusions follow.","Do not add outside assumptions."],
["Verbal Ability","Tests grammar, vocabulary and comprehension.","Practice sentence correction, synonyms, antonyms and reading.","Read the full sentence.","Context decides meaning."]
],
Technical:[
["C Programming","C is a procedural language with direct memory concepts.","Study data types, operators, loops, arrays, functions, pointers and structures.","int *p=&x stores the address of x.","Know value vs address."],
["C++","C++ adds object-oriented features to C-style programming.","Study classes, constructors, inheritance, polymorphism and STL.","A class combines data and member functions.","Know access specifiers."],
["Java","Java is object-oriented and runs through the JVM.","Study classes, interfaces, exceptions, collections and threads.","JVM executes Java bytecode.","Know JDK, JRE and JVM."],
["Python","Python is high-level and dynamically typed.","Study collections, functions, modules, exceptions and OOP.","Lists are mutable; tuples are immutable.","Indentation matters."],
["OOP","OOP models software using objects.","Four core ideas: encapsulation, abstraction, inheritance, polymorphism.","Polymorphism supports different implementations through a common interface.","Use real-world examples in interviews."],
["Arrays & Linked Lists","Arrays use indexed storage; linked lists use nodes and links.","Arrays support fast indexing; linked lists can insert efficiently when position is known.","Array indexing is typically O(1).","Choose based on operations."],
["Stack & Queue","Stack is LIFO; queue is FIFO.","Stack: push/pop. Queue: enqueue/dequeue.","Undo is stack-like.","Scheduling commonly uses queues."],
["Trees & Graphs","Trees are hierarchical; graphs model relationships.","Study BFS, DFS and basic binary search trees.","BFS uses a queue; DFS uses stack/recursion.","Know vertices and edges."],
["Algorithms & Big-O","Complexity describes growth of resource usage.","Know O(1), O(log n), O(n), O(n log n), O(n²).","Binary search is O(log n) on sorted data.","State time and space complexity."],
["Sorting & Searching","Sorting orders values; searching finds values.","Study bubble, selection, insertion, merge, quick, linear and binary search.","Binary search requires sorted data.","Compare best/average/worst cases."],
["DBMS","DBMS manages structured data and database operations.","Study tables, keys, constraints, normalization, transactions and indexes.","Primary key uniquely identifies a row.","Know DBMS vs file system."],
["SQL","SQL works with relational databases.","Study SELECT, WHERE, JOIN, GROUP BY, HAVING, ORDER BY and subqueries.","HAVING filters groups after aggregation.","Practice from real requirements."],
["Normalization","Normalization reduces redundancy and anomalies.","Know 1NF, 2NF, 3NF and BCNF basics.","1NF uses atomic values; 2NF removes partial dependency.","Identify keys first."],
["Transactions & ACID","Transactions provide reliable database operations.","ACID = Atomicity, Consistency, Isolation, Durability.","Rollback can undo an unsuccessful transaction.","Know commit and rollback."],
["Operating Systems","OS manages processes, memory, files and devices.","Study processes, threads, scheduling, synchronization and memory.","Process is a program in execution.","Know process vs thread."],
["CPU Scheduling","Scheduling selects the next process for CPU.","FCFS, SJF, Priority and Round Robin are common.","Round Robin uses a time quantum.","Compare waiting and turnaround time."],
["Deadlocks","Deadlock is indefinite waiting for resources.","Four conditions: mutual exclusion, hold and wait, no preemption, circular wait.","Breaking a required condition can prevent deadlock.","Know prevention, avoidance and detection."],
["Memory Management","OS allocates memory to processes.","Study paging, segmentation, virtual memory and page replacement.","Paging uses pages and frames.","Know page fault."],
["Computer Networks","Networks enable communication between systems.","Study OSI, TCP/IP, IP, TCP, UDP, DNS, HTTP and HTTPS.","TCP is connection-oriented; UDP is connectionless.","Know basic protocols."],
["OSI Model","OSI is a seven-layer conceptual model.","Physical, Data Link, Network, Transport, Session, Presentation, Application.","Know responsibility of each layer.","Give a protocol/example for layers."],
["Web & HTTP","HTTP is an application-layer web protocol.","Study requests, responses, methods and status codes.","GET commonly retrieves; POST commonly sends data.","HTTPS uses TLS for security."],
["Git & GitHub","Git provides version control; GitHub hosts repositories.","Know clone, add, commit, push, pull, branch and merge.","Commit records changes.","Use meaningful commit messages."]
],
HR:[
["Tell Me About Yourself","Give a concise professional introduction connecting education, skills, projects and career direction.","Structure: background → skills → project/experience → goal.","Example: education + strongest skills + project + role interest.","Avoid unrelated personal details."],
["Strengths","Choose genuine strengths relevant to the role.","Use strength + evidence + result.","Example: organized + project planning + completed milestone.","Do not list unsupported qualities."],
["Weakness","Show self-awareness and improvement.","Use manageable weakness + action + progress.","Choose something that does not undermine the core role.","Never say you have no weakness."],
["Why Should We Hire You?","Connect your skills and evidence to the role.","Mention relevant skills, project evidence and learning attitude.","Use specific examples.","Avoid comparing yourself to others."],
["Why This Company?","Show that you understand the opportunity.","Connect company/role with your skills and learning goals.","Research before a real interview.","Avoid generic praise."],
["Career Goals","Explain realistic short- and long-term development.","Focus on learning, contribution and increasing responsibility.","Keep goals aligned with the role.","Avoid unrealistic promises."],
["Project Questions","Interviewers check whether you understand your own work.","Prepare problem, users, tech stack, contribution, challenge, solution and result.","Know why technologies were selected.","Be honest about your contribution."],
["Teamwork","Shows communication and reliability.","Use situation → role → action → result.","Explain how differences were handled professionally.","Focus on the shared goal."],
["Conflict Handling","Handle disagreement calmly and professionally.","Listen, clarify facts, discuss options and agree on a solution.","Use evidence instead of criticism.","Show respectful communication."],
["Leadership","Leadership means ownership and helping the team achieve a goal.","Explain what you noticed, did and improved.","Formal title is not required.","Give outcomes."],
["Situational Questions","Test judgement in hypothetical or past situations.","For past experience use STAR: Situation, Task, Action, Result.","State assumptions when necessary.","Stay practical and ethical."],
["Failure & Learning","Show responsibility and learning.","Explain what happened, your role, change and lesson.","Avoid blaming others.","End with improvement."],
["Communication","Good communication is clear and structured.","Answer directly, then support with an example.","Ask clarification if needed.","Avoid overly long answers."],
["Salary Expectations","Keep the response professional and flexible.","Emphasize role fit and market-aligned expectations.","Research the role before an actual interview.","Avoid unsupported claims."],
["Questions to Ask Interviewer","Thoughtful questions show preparation.","Ask about role expectations, team, learning and success measures.","Prepare 2–3 questions.","Do not ask only about benefits."]
]};
const Q={
Aptitude:[
["What is 20% of 250?",["40","50","60","75"],1,"Percentages"],["CP=500 and SP=600. Profit%?",["10%","15%","20%","25%"],2,"Profit & Loss"],["Average of 10,20,30?",["15","20","25","30"],1,"Average"],["A 10-day job's one-day work?",["1/5","1/10","10","5"],1,"Time & Work"],["Fair coin: P(head)?",["0","1/4","1/2","1"],2,"Probability"],["150 km in 3 hours. Speed?",["30","40","50","60"],2,"Time, Speed & Distance"],["4C2 equals?",["4","6","8","12"],1,"Permutation & Combination"],["Triangle angle sum?",["90°","180°","270°","360°"],1,"Geometry"]],
Technical:[
["Which follows LIFO?",["Queue","Stack","Tree","Graph"],1,"Stack & Queue"],["JVM means?",["Java Variable Machine","Java Virtual Machine","Java Visual Model","Joint Virtual Machine"],1,"Java"],["Which SQL clause filters groups?",["WHERE","ORDER BY","HAVING","FROM"],2,"SQL"],["Which is an ACID property?",["Atomicity","Accessibility","Availability","Adaptability"],0,"Transactions & ACID"],["DNS commonly maps?",["Domain to IP","RAM to CPU","HTML to CSS","Process to thread"],0,"Computer Networks"],["Binary search requires?",["Unsorted data","Sorted data","A database","A queue"],1,"Algorithms & Big-O"],["Which is LIFO?",["Stack","Queue","Priority only","Array"],0,"Stack & Queue"],["A primary key should?",["Duplicate rows","Uniquely identify a row","Store only text","Always be foreign"],1,"DBMS"]],
HR:[
["Best structure for self-introduction?",["Family history","Education → Skills → Project → Goal","Hobbies only","Marks only"],1,"Tell Me About Yourself"],["Good weakness response?",["No weakness","Weakness + improvement action","Blame others","Change topic"],1,"Weakness"],["Team disagreement?",["Argue","Listen and clarify shared goal","Ignore","Leave"],1,"Teamwork"],["Good failure answer ends with?",["Blame","Learning and improvement","Excuse","Silence"],1,"Failure & Learning"],["Why this company?",["Salary only","Specific role/company connection","Random praise","No reason"],1,"Why This Company?"],["Situational answer framework?",["STAR","HTML","ACID","FIFO"],0,"Situational Questions"]]};
let course="",topic=0,stage="concept",qi=0,qs=0,answered=false,done=0;
async function login(e){
  if(e)e.preventDefault();
  const email=document.querySelector('#login input[type="email"]').value;
  const password=document.querySelector('#login input[type="password"]').value;
  try{
    const response=await fetch("http://127.0.0.1:5000/api/auth/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email,password})
    });
    const data=await response.json();
    if(response.ok){
      document.getElementById("login").style.display="none";
      document.getElementById("app").style.display="block";
      window.scrollTo(0,0);
    }else{
      alert(data.message);
    }
  }catch(error){
    alert("Cannot connect to backend: "+error.message);
  }
  return false;
}
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
function answerQuiz(i){if(answered)return;answered=true;let t=C[course][topic],a=Q[course].filter(x=>x[3]==t[0]);if(!a.length)a=Q[course].slice(0,3);let q=a[qi%a.length],bs=document.querySelectorAll("#learning .option");bs.forEach((b,j)=>{if(j==q[2])b.classList.add("correct");if(j==i&&i!=q[2])b.classList.add("wrong")});if(i==q[2])qs++;qi++;done++;document.getElementById("done").textContent=done}
function nextQuiz(){if(!answered)return alert("Choose an answer first.");if(qi>=3)stage="result";else answered=false;renderLearn()}
function nextTopic(){if(topic<C[course].length-1){topic++;stage="concept";renderTopics();renderLearn()}else{closeBox("learn");startMock(course,10,10)}}
let mockQs=[],mi=0,ms=0,mans=false,seconds=0,timerHandle=null,startSeconds=0;
function startMock(kind,n,min){let pool=kind=="Mixed"?Q.Aptitude.concat(Q.Technical,Q.HR):Q[kind];mockQs=[];for(let i=0;i<n;i++)mockQs.push(pool[i%pool.length]);mi=0;ms=0;seconds=min*60;startSeconds=seconds;document.getElementById("mock").classList.remove("hidden");mockTitle.textContent=(kind=="Mixed"?"Full Placement":kind)+" Mock Test";clearInterval(timerHandle);timerHandle=setInterval(()=>{seconds--;showTimer();if(seconds<=0)finishMock()},1000);showTimer();renderMock()}
function showTimer(){timer.textContent=String(Math.floor(seconds/60)).padStart(2,"0")+":"+String(seconds%60).padStart(2,"0")}
function renderMock(){let q=mockQs[mi];mp.style.width=((mi+1)/mockQs.length*100)+"%";mockArea.innerHTML=`<p>Question ${mi+1}/${mockQs.length} • <b>${q[3]}</b></p><div class="q"><h3>${q[0]}</h3>${q[1].map((o,j)=>`<button class="option" onclick="answerMock(${j})">${String.fromCharCode(65+j)}. ${o}</button>`).join("")}</div><div class="row"><span></span><button class="primary" onclick="nextMock()">Next →</button></div>`;mans=false}
function answerMock(i){if(mans)return;mans=true;let q=mockQs[mi],bs=document.querySelectorAll("#mockArea .option");bs.forEach((b,j)=>{if(j==q[2])b.classList.add("correct");if(j==i&&i!=q[2])b.classList.add("wrong")});if(i==q[2])ms++;done++;document.getElementById("done").textContent=done}
function nextMock(){if(!mans)return alert("Choose an answer first.");if(mi<mockQs.length-1){mi++;renderMock()}else finishMock()}
function finishMock(){clearInterval(timerHandle);let p=Math.round(ms/mockQs.length*100),cat=p>=80?"BEST":p>=60?"GOOD":p>=40?"AVERAGE":"NEEDS PRACTICE",used=startSeconds-seconds,groups={};mockQs.forEach(q=>groups[q[3]]=(groups[q[3]]||0)+1);let concepts=Object.keys(groups);mockArea.innerHTML=`<div class="score"><div class="scorecircle">${p}%</div><h2>${cat}</h2><div class="resultgrid"><div class="result"><b>${ms}/${mockQs.length}</b>Correct</div><div class="result"><b>${mockQs.length-ms}</b>Wrong</div><div class="result"><b>${p}%</b>Accuracy</div><div class="result"><b>${Math.floor(used/60)}m ${used%60}s</b>Time</div></div><div class="lesson"><h3>📊 Concept Analysis</h3>${concepts.map((c,i)=>{let v=Math.max(25,Math.min(100,p+(i%3-1)*18)),s=v>=80?["🟢","Strong"]:v>=50?["🟡","Average"]:["🔴","Weak"];return `<p><b>${c}</b> — ${v}% <span class="${s[1]=="Strong"?"strong":s[1]=="Average"?"avg":"weak"}">${s[0]} ${s[1]}</span></p><div class="bar"><i style="width:${v}%"></i></div>`}).join("")}</div><div class="lesson"><h3>⚠️ Recommended Revision</h3><p>${p<60?"Focus on the weak concepts above. Read detailed notes → practice → retake topic quiz.":"Keep revising average areas and attempt a harder mock."}</p></div><button class="primary" onclick="closeBox('mock')">Dashboard</button></div>`}
function special(title,body){specialBox=document.getElementById("special");specialBox.classList.remove("hidden");specialBody.innerHTML=`<div class="eyebrow">PLACEMENT TOOL</div><h2>${title}</h2>${body}`}
function flashcards(){special("🧠 Flashcards",["ACID — Atomicity, Consistency, Isolation, Durability","OOP — Encapsulation, Abstraction, Inheritance, Polymorphism","OSI — 7 layers from Physical to Application","Probability — Favourable ÷ Total outcomes","STAR — Situation, Task, Action, Result"].map(x=>`<div class="lesson"><b>${x}</b></div>`).join(""))}
function hrSim(){special("🎤 HR Interview Simulator",["Tell me about yourself","What are your strengths?","What is your weakness?","Why should we hire you?","Why this company?","Tell me about your project"].map((x,i)=>`<div class="q"><b>${i+1}. ${x}</b><p>Prepare your answer first.</p><button class="ghost" onclick="this.nextElementSibling.classList.toggle('show')">Show Answer Structure</button><div class="answer">Use a concise structure with a relevant example, result and connection to the role.</div></div>`).join(""))}
function techSim(){special("💻 Technical Interview",["What is polymorphism?","What is normalization?","Stack vs Queue?","What is a primary key?","Process vs Thread?","TCP vs UDP?"].map(x=>`<div class="q"><b>${x}</b><button class="ghost" onclick="this.nextElementSibling.classList.toggle('show')">Show Framework</button><div class="answer">Definition → simple example → practical use/difference.</div></div>`).join(""))}
function companies(){special("🏢 Company Preparation",["TCS","Infosys","Accenture","Wipro","Cognizant","Capgemini"].map(x=>`<div class="card" style="display:inline-block;width:30%;margin:1%"><h3>${x}</h3><p>Aptitude → Technical → HR → Mock</p><button class="primary" onclick="closeBox('special');startMock('Aptitude',8,8)">Practice</button></div>`).join(""))}
function roadmap(){special("🗺️ 30-Day Roadmap",["Days 1–4: Number System, Percentages, Ratio","Days 5–8: Profit/Loss, Average, Time & Work","Days 9–12: Reasoning, Probability, DI","Days 13–16: Programming + OOP","Days 17–20: DSA + Algorithms","Days 21–23: DBMS + SQL","Days 24–25: OS + Networks","Days 26–27: HR + Project Interview","Days 28–29: Section Mocks","Day 30: Full Mock"].map((x,i)=>`<div class="lesson"><b>${x}</b><div class="bar"><i style="width:${(i+1)*10}%"></i></div></div>`).join(""))}
function achievements(){special("🏆 Achievements",["🥇 First Quiz","🔥 7-Day Streak","🧮 Aptitude Starter","💻 Technical Learner","🎤 HR Ready","⏱️ First Mock","⭐ 300 XP","🏆 Placement Ready"].map(x=>`<span class="tag">${x}</span>`).join(""))}
function analytics(){special("📊 Analytics",`<div class="resultgrid"><div class="result"><b>82%</b>Aptitude</div><div class="result"><b>74%</b>Technical</div><div class="result"><b>90%</b>HR</div><div class="result"><b>72%</b>Overall</div></div><div class="lesson"><h3>🟢 Strong</h3><span class="tag">DBMS</span><span class="tag">Average</span><span class="tag">HR Communication</span></div><div class="lesson"><h3>🟡 Average</h3><span class="tag">Profit & Loss</span><span class="tag">OOP</span></div><div class="lesson"><h3>🔴 Needs Practice</h3><span class="tag">Probability</span><span class="tag">Time & Work</span></div>`)}