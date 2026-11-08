(function(){
 var bar=document.getElementById('bar');
 addEventListener('scroll',function(){var h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';},{passive:true});
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12});
 document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
 var secs=[].slice.call(document.querySelectorAll('section[id]')),links=[].slice.call(document.querySelectorAll('.nav .links a'));
 var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
 secs.forEach(function(s){so.observe(s)});
 document.querySelectorAll('.cp').forEach(function(b){b.addEventListener('click',function(){var t=b.parentNode.querySelector('pre').innerText;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){b.textContent='Copied ✓'},function(){b.textContent='Select & copy'});setTimeout(function(){b.textContent='Copy'},1800)})});
 document.querySelectorAll('.tilt').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(800px) rotateY('+x*8+'deg) rotateX('+(-y*8)+'deg)'});c.addEventListener('mouseleave',function(){c.style.transform=''})});
})();
