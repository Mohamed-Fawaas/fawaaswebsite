"""Regenerates projects/*.html and the Projects section of index.html.
Usage (from the site root):  python tools/gen.py
Edit tools/projects_data.py to change content, socials, or add  yt="YOUTUBE_VIDEO_ID", demo="https://...", code="https://github.com/..."  to a project."""
import os, re, html, sys
sys.path.insert(0, os.path.dirname(__file__))
from projects_data import P, T, SOCIALS
from certs_data import CERTS, DEGREE_FILES
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
e = html.escape
SOC = [("youtube","fa-youtube","YouTube"),("facebook","fa-facebook-f","Facebook"),("instagram","fa-instagram","Instagram"),("tiktok","fa-tiktok","TikTok"),("linkedin","fa-linkedin-in","LinkedIn"),("github","fa-github","GitHub")]
HEAD = '''<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>%(name)s – Project by Mohamed Fawaas</title><meta name="description" content="%(summary)s">
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css" rel="stylesheet">
<link href="../assets/css/project.css" rel="stylesheet"></head>'''
def socials(): 
    return '<div class="soc">'+''.join('<a href="%s" target="_blank" rel="noopener" title="%s%s"><i class="fa-brands %s"></i></a>'%(SOCIALS[k],n,'' if SOCIALS[k]!='#' else ' (add link in tools/projects_data.py)',ic) for k,ic,n in SOC)+'</div>'
def cover(p):
    return '<div class="cover glass tilt"><div class="bar"><i></i><i></i><i></i></div><img src="../assets/img/covers/%s.jpg" alt="%s preview"></div>'%(p["slug"],e(p["name"])) if os.path.exists(os.path.join(ROOT,"assets/img/covers",p["slug"]+".jpg")) else ''
def page(i,p):
    prv,nxt=P[i-1],P[(i+1)%len(P)]
    chips=''.join('<div class="chip"><i class="%s"></i><span>%s</span></div>'%(T[k][1],T[k][0]) for k in p["tech"])
    feats=''.join('<li class="glass"><i class="bi bi-check2-circle"></i><span>%s</span></li>'%e(f) for f in p["features"])
    funcs=''.join('<div class="it glass reveal"><div class="n">%d</div><div><code>%s</code><p>%s</p></div></div>'%(n+1,e(a),e(b)) for n,(a,b) in enumerate(p["funcs"]))
    fut=''.join('<li class="glass"><i class="bi bi-rocket-takeoff-fill"></i><span>%s</span></li>'%e(f) for f in p["future"])
    shots=''
    if p.get("shots"):
        d,fs=p["shots"]; shots='<section id="screens"><div class="wrap"><div class="sh"><i class="bi bi-images"></i><h2>Screenshots</h2></div><div class="shots reveal">'+''.join('<img loading="lazy" src="../assets/img/%s/%s" alt="%s screenshot">'%(d,f,e(p["name"])) for f in fs)+'</div></div></section>'
    if p.get("yt"): vid='<div class="video glass"><iframe src="https://www.youtube-nocookie.com/embed/%s" title="%s demo" allowfullscreen loading="lazy"></iframe></div>'%(p["yt"],e(p["name"]))
    elif p.get("tiktok"):
        emb='<iframe src="https://www.tiktok.com/embed/v2/%s" title="%s TikTok" allowfullscreen loading="lazy" style="width:325px;max-width:100%%;height:640px;border:0;border-radius:18px"></iframe>'%(p["tt"],e(p["name"])) if p.get("tt") else ''
        vid='<div class="glass card" style="display:flex;gap:2rem;align-items:center;flex-wrap:wrap;justify-content:center">%s<div style="flex:1;min-width:260px;text-align:center"><i class="fa-brands fa-tiktok" style="font-size:4rem;color:var(--a)"></i><h3>Watch the demo on TikTok</h3><p style="color:var(--mut)">See %s running live – short walkthrough on my TikTok channel.</p><a class="btn main" target="_blank" rel="noopener" href="%s"><i class="fa-brands fa-tiktok"></i> Watch on TikTok</a> <a class="btn" target="_blank" rel="noopener" href="%s"><i class="fa-brands fa-youtube"></i> YouTube</a></div></div>'%(emb,e(p["name"]),p["tiktok"],SOCIALS["youtube"])
    else: vid='<div class="video glass"><div class="ph"><div><i class="bi bi-play-circle-fill"></i><h3>Live demo video coming soon</h3><p style="color:var(--mut)">Upload the demo to YouTube, then set <code>yt="VIDEO_ID"</code> for this project in <code>tools/projects_data.py</code> and run <code>python tools/gen.py</code>.</p><a class="btn main" target="_blank" href="%s"><i class="fa-brands fa-youtube"></i> Visit my YouTube channel</a></div></div></div>'%SOCIALS["youtube"]
    badge='<span class="pill hot"><i class="bi bi-mortarboard-fill"></i> %s</span> '%p["badge"] if p.get("badge") else ''
    demo='<a class="btn main" target="_blank" href="%s"><i class="bi bi-box-arrow-up-right"></i> Live Demo</a>'%p["demo"] if p.get("demo") else '<a class="btn main" href="#video"><i class="fa-brands fa-tiktok"></i> Watch Demo</a>' if p.get("tiktok") else '<a class="btn main" href="#video"><i class="bi bi-play-fill"></i> Watch Demo</a>'
    code_url = p.get("code", SOCIALS["github"])
    code_label = "GitHub Profile" if code_url.rstrip("/").lower() == SOCIALS["github"].rstrip("/").lower() else "Source Code"
    code = '<a class="btn" target="_blank" rel="noopener noreferrer" href="%s"><i class="fa-brands fa-github"></i> %s</a>' % (e(code_url), code_label)
    return HEAD%p+'''<body style="--h:%d"><div id="bar"></div><div class="aurora"><i></i><i></i><i></i></div>
<nav class="nav"><a class="brand" href="../index.html#projects"><i class="bi bi-arrow-left-circle-fill"></i> Fawaas</a><div class="links"><a href="#about">Overview</a><a href="#tech">Tech</a><a href="#features">Features</a><a href="#how">How it works</a><a href="#run">Run</a><a href="#future">Future</a><a href="#video">Video</a></div></nav>
<header class="hero wrap"><div class="reveal">%s<span class="pill"><i class="bi bi-tag-fill"></i> %s</span><div class="ico tilt"><i class="bi %s"></i></div><h1>%s</h1><p class="tag">%s</p>
<div style="display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap">%s%s<a class="btn" href="../index.html#projects"><i class="bi bi-grid-fill"></i> All Projects</a></div>
%s<div class="stats"><div class="stat glass"><b>%d</b><span>Technologies</span></div><div class="stat glass"><b>%d</b><span>Key features</span></div><div class="stat glass"><b>%d</b><span>Core functions explained</span></div><div class="stat glass"><b style="font-size:1.05rem;line-height:2.3">%s</b><span>Languages</span></div></div></div></header>
<main>
<section id="about"><div class="wrap"><div class="sh"><i class="bi bi-info-circle-fill"></i><h2>Project Overview</h2></div><div class="glass card reveal"><p style="font-size:1.05rem;margin:0">%s</p></div></div></section>
<section id="tech"><div class="wrap"><div class="sh"><i class="bi bi-cpu-fill"></i><h2>Technologies &amp; Languages Used</h2></div><div class="chips reveal">%s</div></div></section>
<section id="features"><div class="wrap"><div class="sh"><i class="bi bi-stars"></i><h2>Key Features</h2></div><ul class="feat reveal">%s</ul></div></section>
%s
<section id="how"><div class="wrap"><div class="sh"><i class="bi bi-gear-wide-connected"></i><h2>How It Works – Main Functions</h2></div><div class="fn">%s</div><div class="sh" style="margin-top:2.2rem"><i class="bi bi-diagram-3-fill"></i><h2>Project Structure</h2></div><div class="cmd reveal"><pre>%s</pre></div></div></section>
<section id="run"><div class="wrap"><div class="sh"><i class="bi bi-terminal-fill"></i><h2>How to Run</h2></div><div class="cmd reveal"><button class="cp">Copy</button><pre>%s</pre></div></div></section>
<section id="future"><div class="wrap"><div class="sh"><i class="bi bi-rocket-takeoff-fill"></i><h2>Future Updates</h2></div><ul class="feat reveal">%s</ul></div></section>
<section id="video"><div class="wrap"><div class="sh"><i class="bi bi-play-btn-fill"></i><h2>Live Demo Video</h2></div><div class="reveal">%s</div></div></section>
<section id="follow"><div class="wrap" style="text-align:center"><div class="sh" style="justify-content:center"><i class="bi bi-share-fill"></i><h2>Follow &amp; Connect</h2></div>%s</div></section>
<section><div class="wrap pn"><a class="glass" href="%s.html"><small>← Previous</small><b>%s</b></a><a class="glass" href="%s.html"><small>Next →</small><b>%s</b></a></div></section>
</main><footer>© Mohamed Fawaas · Portfolio project page</footer><script src="../assets/js/project.js"></script></body></html>'''%(
        p["hue"],badge,e(p["cat"]),p["icon"],e(p["name"]),e(p["tag"]),demo,code,cover(p),len(p["tech"]),len(p["features"]),len(p["funcs"]),e(p["langs"]),
        e(p["about"]),chips,feats,shots,funcs,e(p["struct"]),e("\n".join(p["run"])),fut,vid,socials(),prv["slug"],e(prv["name"]),nxt["slug"],e(nxt["name"]))
def card(i,p):
    if os.path.exists(os.path.join(ROOT,"assets/img/covers",p["slug"]+".jpg")): cover='<img loading="lazy" src="assets/img/covers/%s.jpg" alt="%s">'%(p["slug"],e(p["name"]))
    elif p.get("shots"): d,fs=p["shots"]; cover='<img src="assets/img/%s/%s" alt="%s">'%(d,fs[0],e(p["name"]))
    else: cover='<div class="pcover" style="background:linear-gradient(135deg,hsl(%d 70%% 35%%),hsl(%d 80%% 20%%))"><i class="bi %s"></i></div>'%(p["hue"],p["hue"]+60,p["icon"])
    tech=''.join('<span class="tech"><i class="%s"></i> %s</span>'%(T[k][1],T[k][0]) for k in p["tech"][:6])
    b=p.get("badge"); badge='<div class="project-badge featured">%s</div>'%("Final Year Project" if b else "")if b else ''
    return '''<article class="project-card" data-aos="zoom-in" data-aos-delay="%d"><div class="project-image">%s<div class="project-overlay"><div class="tech-stack1">%s</div></div>%s</div><div class="project-content"><h3 class="project-title">%s</h3><p class="project-description">%s</p><div class="project-actions"><a href="projects/%s.html" class="project-link read-more"><i class="fas fa-book-open"></i> Read More</a></div></div></article>'''%(min(i*40,300),cover,tech,badge,e(p["name"]),e(p["summary"]),p["slug"])
os.makedirs(os.path.join(ROOT,"projects"),exist_ok=True)
for i,p in enumerate(P): open(os.path.join(ROOT,"projects",p["slug"]+".html"),"w",encoding="utf-8").write(page(i,p))
ip=os.path.join(ROOT,"index.html"); s=open(ip,encoding="utf-8").read()
# Keep the Engineering Tools section intact if it follows Projects.
sec='<section id="projects" class="projects-section"><div class="container"><h2 class="section-title" data-aos="fade-up">Featured Projects</h2><div class="project-grid">'+''.join(card(i,p) for i,p in enumerate(P))+'</div></div></section>'
s,n=re.subn(r'<section id="projects" class="projects-section">.*?</section>',lambda m:sec,s,count=1,flags=re.S)

# ---------- Certifications section ----------
OI={"NoviTech":"fa-solid fa-microchip","IBM":"fa-solid fa-cloud","UoM":"fa-solid fa-building-columns","Udemy":"fa-brands fa-udemy","Other":"fa-solid fa-award"}
def certcard(c,i):
    k,t,o,cat,d,f=c
    return '<a class="prof-cert-card cc" data-cat="%s" href="certs/%s" target="_blank" rel="noopener" title="Open certificate"><div class="pcc-img-wrap"><img loading="lazy" src="assets/img/certs/%s.jpg" alt="%s"><span class="cc-open"><i class="fas fa-expand"></i> View</span></div><div class="pcc-body"><h5>%s</h5><p class="pcc-org"><i class="%s"></i> %s</p><p class="pcc-date">%s</p></div></a>'%(cat,f,k,e(t),e(t),OI[cat],e(o),e(d) or "&nbsp;")
def degree(kind,tag,title,uni,campus,chips,icon,files,note):
    img='<a class="degree-cert-img" href="certs/%s" target="_blank" rel="noopener"><img loading="lazy" src="assets/img/certs/%s.jpg" alt="%s certificate"><span class="cc-open"><i class="fas fa-expand"></i> View certificate</span></a>'%(files[0],files[1],e(title)) if files else '<div class="degree-cert-placeholder"><div class="cert-placeholder-inner"><i class="fas fa-hourglass-half"></i><span>%s</span></div></div>'%note
    tr='<a class="tr-link" href="certs/%s" target="_blank" rel="noopener"><i class="fas fa-file-lines"></i> View transcript</a>'%files[2] if files and len(files)>2 else ''
    return '<div class="degree-card degree-%s"><div class="degree-card-glow"></div><div class="degree-badge-icon"><i class="fas %s"></i></div><div class="degree-info"><div class="degree-tag">%s</div><h3>%s</h3><p class="degree-uni"><i class="fas fa-university"></i> %s</p><p class="degree-campus"><i class="fas fa-map-marker-alt"></i> %s</p><div class="degree-chips">%s</div>%s</div>%s</div>'%(kind,icon,tag,title,uni,campus,''.join('<span>%s</span>'%x for x in chips),tr,img)
cats=[("all","All"),("IBM","IBM"),("NoviTech","NoviTech"),("Udemy","Udemy"),("UoM","Moratuwa"),("Other","Workshops")]
hc,ht=DEGREE_FILES["hnd"]
certsec=('<section id="certifications" class="cert-main-section"><div class="container"><h2 class="section-title text-center" data-aos="fade-down">Certifications &amp; Degrees</h2><div class="section-subtitle-line" data-aos="fade-down"></div><p class="cert-intro-text" data-aos="fade-up">Academic qualifications and professional certifications earned throughout my journey.</p>'
 '<div class="degree-cards-row" data-aos="fade-up">'
 +degree("bsc","Bachelor's Degree","BSc (Hons) Software Engineering","Cardiff Metropolitan University, UK","ICBT Campus, Colombo, Sri Lanka",["Software Architecture","AI &amp; ML","Cloud Systems","Agile Engineering","Full-Stack Development"],"fa-graduation-cap",None,"Final year · In progress")
 +degree("hnd","Higher Diploma · Merit","Higher Diploma in Computing &amp; Software Engineering","Cardiff Metropolitan University, UK","ICBT Campus, Colombo · Awarded 16 May 2025",["Computing Principles","Software Dev","Web Technologies","Database Systems"],"fa-award",(hc,"hnd-diploma",ht),"")
 +'</div><h3 class="cert-sub-heading" data-aos="fade-up">Professional Certifications <small class="cert-count">%d</small></h3><div class="cert-filters" data-aos="fade-up">'%len(CERTS)
 +''.join('<button class="cf%s" data-f="%s">%s</button>'%(' on' if k=='all' else '',k,n) for k,n in cats)
 +'</div><div class="prof-cert-grid">'+''.join(certcard(c,i) for i,c in enumerate(CERTS))+'</div></div>'
 '<script>document.querySelectorAll(".cf").forEach(function(b){b.onclick=function(){document.querySelectorAll(".cf").forEach(function(x){x.classList.toggle("on",x===b)});var f=b.dataset.f;document.querySelectorAll(".cc").forEach(function(c){c.style.display=(f==="all"||c.dataset.cat===f)?"":"none"})}})</script></section>')
s,n2=re.subn(r'<section id="certifications".*?</section>',lambda m:certsec,s,count=1,flags=re.S)
CSS=('.cert-count{font-size:.75rem;color:#06f7d5;background:rgba(6,247,213,.1);border:1px solid rgba(6,247,213,.3);border-radius:99px;padding:.1rem .6rem;vertical-align:middle}'
'.cert-filters{display:flex;flex-wrap:wrap;gap:.6rem;justify-content:center;margin:0 0 2rem}.cf{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);color:#cbd5e1;border-radius:99px;padding:.45rem 1.1rem;font-size:.85rem;backdrop-filter:blur(10px);transition:.25s;cursor:pointer}.cf:hover,.cf.on{background:linear-gradient(135deg,#06f7d5,#6366f1);color:#04101a;border-color:transparent;font-weight:600}'
'a.prof-cert-card{display:block;text-decoration:none}.prof-cert-card .pcc-img-wrap{height:175px;background:#fff}.prof-cert-card .pcc-img-wrap img{object-fit:cover;object-position:top;transition:transform .5s}.prof-cert-card:hover .pcc-img-wrap img{transform:scale(1.07)}'
'.cc-open{position:absolute;inset:auto 10px 10px auto;background:rgba(7,14,26,.8);color:#fff;font-size:.72rem;padding:.25rem .7rem;border-radius:99px;opacity:0;transform:translateY(6px);transition:.3s;backdrop-filter:blur(8px)}.prof-cert-card:hover .cc-open,.degree-cert-img:hover .cc-open{opacity:1;transform:none}'
'.degree-cert-img{position:relative;display:block;width:100%;height:300px;background:#0b1220;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.15);box-shadow:0 12px 30px rgba(0,0,0,.4)}.degree-cert-img img{width:100%;height:100%;object-fit:contain;object-position:center;display:block;transition:transform .5s}.degree-cert-img:hover img{transform:scale(1.06)}'
'.degree-cert-placeholder{height:300px!important;min-height:0!important}.tr-link{display:inline-block;margin-top:.9rem;color:#06f7d5;font-size:.85rem;text-decoration:none}.tr-link:hover{text-decoration:underline}')
s=re.sub(r'<!--gen-css-->.*?<!--/gen-css-->','',s,flags=re.S)
s=s.replace('</head>','<!--gen-css--><style>'+CSS+'</style><!--/gen-css--></head>',1)
print("certs patched:",n2)

extra='<!--gen-extra--><link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet"><link href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css" rel="stylesheet"><style>.pcover{width:100%;height:100%;min-height:210px;display:grid;place-items:center;font-size:4.5rem;color:rgba(255,255,255,.92)}.tech i{margin-right:.25rem}</style><!--/gen-extra-->'
s=re.sub(r'<!--gen-extra-->.*?<!--/gen-extra-->','',s,flags=re.S)
s=s.replace('</head>',extra+'</head>',1)
open(ip,"w",encoding="utf-8").write(s); print("pages:",len(P),"index patched:",n)
