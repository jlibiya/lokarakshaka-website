const $=s=>document.querySelector(s),slug=s=>s.toLowerCase().replace(/[^a-z]+/g,'-'),
WA=`https://wa.me/${H.wa}?text=Hello, I would like to book an appointment`,
pg=location.pathname.split('/').pop()||'index.html',
N=[["index.html","Home"],["about.html","About"],["services.html","Services"],["doctors.html","Doctors"],["contact.html","Contact"]];
$('#hd').innerHTML=`<div class="top"><div class="wrap"><span>📞 ${H.phone} &nbsp;|&nbsp; ✉ ${H.email}</span><a href="${WA}" target="_blank">Online Booking</a></div></div><header><div class="wrap nav"><a class="logo" href="index.html">✚ Lokarakshaka <span>Hospital</span></a>
<button class="burger" onclick="$('nav').classList.toggle('open')">☰</button><nav>${N.map(n=>`<a href="${n[0]}" class="${pg==n[0]||(pg=='doctor.html'&&n[0]=='doctors.html')?'on':''}">${n[1]}</a>`).join('')}<a class="btn" style="color:#fff;margin-left:22px;border-radius:30px;padding:8px 20px" href="${WA}" target="_blank">Book Appointment</a></nav></div></header>`;
$('#ft').innerHTML=`<footer><div class="wrap grid"><div><h4>Lokarakshaka Hospital</h4><p>Protector of the People. Multi-speciality care you can trust.</p></div>
<div><h4>Quick Links</h4>${N.map(n=>`<a href="${n[0]}">${n[1]}</a>`).join('')}</div>
<div><h4>Departments</h4>${S.slice(0,8).map(s=>`<a href="services.html#${slug(s[0])}">${s[0]}</a>`).join('')}</div><div><h4>Contact</h4><a href="tel:${H.tel}">📞 ${H.phone}</a><a href="mailto:${H.email}">✉ ${H.email}</a><p>📍 ${H.addr}</p></div></div>
<div class="copy">© ${new Date().getFullYear()} Lokarakshaka Hospital. All rights reserved.</div></footer><a class="wa" href="${WA}" target="_blank">💬 WhatsApp</a>`;
const btn=(t,h,c='')=>`<a class="btn ${c}" href="${h}" target="${h.startsWith('http')?'_blank':'_self'}">${t}</a>`;
if($('#news'))$('#news').innerHTML=NEWS.map(n=>`<div class="card"><span class="date">${n[0]}</span><h3>${n[1]}</h3><p>${n[2]}</p></div>`).join('');
if($('#services'))$('#services').innerHTML=S.map((s,i)=>`<div class="dept" id="${slug(s[0])}"><div class="di">${IC[i]}</div><h3>${s[0]}</h3><p style="color:var(--m)">${s[1]}</p><h4>CONDITIONS & PROCEDURES</h4><div class="chips">${s[2].map(c=>`<span>${c}</span>`).join('')}</div>${btn('Book Appointment',WA)}${btn('Our Doctors','doctors.html#'+slug(s[0]),'o')}</div>`).join('');
const card=(d,i)=>`<a class="card doc" href="doctor.html?id=${i}"><div class="av">${NAME[4]}</div><h3>${NAME}</h3><small>${d[1]}</small><small>${d[2]}</small><div class="tag">View profile →</div></a>`;
if($('#docs'))$('#docs').innerHTML=S.map((s,si)=>{const l=D.map((d,i)=>[d,i]).filter(x=>x[0][0]==si);return l.length?`<h3 class="dh" id="${slug(s[0])}">${s[0]}</h3><div class="grid">${l.map(x=>card(x[0],x[1])).join('')}</div>`:''}).join('');
if($('#doc')){const i=+new URLSearchParams(location.search).get('id')||0,d=D[i]||D[0],s=S[d[0]];
$('#doc').innerHTML=`<div class="two"><div class="card doc"><div class="av big">${NAME[4]}</div><h3>${NAME}</h3><small>${d[1]}</small><div class="tag">${s[0]}</div><br>${btn('Book Appointment',WA)}</div>
<div class="list"><h2>About the Doctor</h2><p><b>Department</b>${s[0]}</p><p><b>Qualifications</b>${d[2]}</p><p><b>Experience</b>10+ years (placeholder)</p><p><b>Languages</b>English, Malayalam</p><p><b>OPD Timings</b>Mon – Sat: 9:00 AM – 1:00 PM (placeholder)</p><p><b>Profile</b>Doctor biography goes here. Replace with real details.</p><br>${btn('← All Doctors','doctors.html','o')}</div></div>`;}
if($('#cf'))$('#cf').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);
location.href=`mailto:${H.email}?subject=${encodeURIComponent(f.get('s')||'Website enquiry')}&body=${encodeURIComponent(`Name: ${f.get('n')}\nPhone: ${f.get('p')}\nEmail: ${f.get('e')}\n\n${f.get('m')}`)}`};
if('IntersectionObserver' in window){const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});document.querySelectorAll('.card,.dept,.gl').forEach(el=>{el.classList.add('rv');io.observe(el)})}
if($('#svc6'))$('#svc6').innerHTML=S.slice(0,6).map((s,i)=>`<a class="card svc" href="services.html#${slug(s[0])}"><div class="ico">${IC[i]}</div><h3>${s[0]}</h3><p>${s[1].slice(0,105)}…</p><b style="color:var(--p)">Read more →</b></a>`).join('');
if($('#team'))$('#team').innerHTML=[0,2,4,6].map(i=>card(D[i],i)).join('');
document.querySelectorAll('[data-n]').forEach(el=>{const n=+el.dataset.n;let c=0;const t=setInterval(()=>{c=Math.min(n,c+Math.ceil(n/40));el.textContent=c+(el.dataset.s||'');if(c>=n)clearInterval(t)},40)});
