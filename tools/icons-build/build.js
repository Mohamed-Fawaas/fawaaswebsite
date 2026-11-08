const fs=require('fs'),path=require('path');
const OUT=process.argv[2]; // site root
const cats=require('./tools-src.js');
const sets={};
const load=n=>sets[n]||(sets[n]=JSON.parse(fs.readFileSync(__dirname+'/node_modules/@iconify-json/'+n+'/icons.json')));
const SETS={l:'logos',d:'devicon',v:'vscode-icons',k:'skill-icons',m:'mdi'};
const si=require('simple-icons');const siBy={};for(const v of Object.values(si)) if(v&&v.slug) siBy[v.slug]=v;
function iconify(set,name){const j=load(set);let ic=j.icons[name];if(!ic&&j.aliases&&j.aliases[name]){const a=j.aliases[name];ic={...j.icons[a.parent],...a}}
 if(!ic)return null;const w=ic.width||j.width||16,h=ic.height||j.height||16;return {body:ic.body,w,h}}
const lum=hex=>{const n=parseInt(hex,16),r=(n>>16)&255,g=(n>>8)&255,b=n&255;return (.2126*r+.7152*g+.0722*b)/255};
function svgFor(key){
 const [t,name]=[key.slice(0,key.indexOf(':')),key.slice(key.indexOf(':')+1)];
 if(t==='s'){const v=siBy[name];if(!v)return null;let hex=v.hex;if(lum(hex)>.85)hex='334155';return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img"><title>${v.title.replace(/&/g,"&amp;")}</title><path fill="#${hex}" d="${v.path}"/></svg>`}
 const r=iconify(SETS[t],name);if(!r)return null;
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${r.w} ${r.h}" color="#0f172a">${r.body}</svg>`}
const slug=s=>s.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
fs.mkdirSync(path.join(OUT,'assets/img/tools'),{recursive:true});
const miss=[];const tools=[];const seen=new Map();let n=0;
const catMeta=cats.map(c=>{const ic=iconify('mdi',c.mdi);if(!ic)miss.push('mdi:'+c.mdi);return {id:c.id,label:c.label,use:c.use,icon:ic?ic.body:''}});
for(const c of cats)for(const t of c.tools){
 const id=slug(t.n);if(seen.has(id)){miss.push('DUP '+id);continue}seen.set(id,1);
 let icon=null;
 if(t.i){const s=svgFor(t.i);if(s){fs.writeFileSync(path.join(OUT,`assets/img/tools/${id}.svg`),s);icon=`assets/img/tools/${id}.svg`;n++}else miss.push(`${t.n} -> ${t.i}`)}
 else miss.push(`${t.n} -> (monogram)`);
 const o={id,name:t.n,cats:[c.id,...(t.also||[])],desc:t.d,icon};
 if(t.u)o.url=t.u;if(t.use)o.use=t.use;if(t.status)o.status=t.status;if(t.projects)o.projects=t.projects;if(t.feature)o.feature=true;
 tools.push(o)}
fs.writeFileSync('/tmp/miss.txt',miss.join('\n'));
const js=`/* Engineering Tools & Ecosystem — centralised data.
   Edit this file to add / remove / update tools. No rendering code needs to change.
   status: 'applied' (used in my projects) | 'familiar' | 'learning' | omit (listed, but NOT claimed as mastered)
   projects: slugs from /projects/<slug>.html     icon: path to SVG or null (monogram fallback)
   cats: first entry is the primary category, extra entries make the tool appear in more categories. */
window.ET_DATA=${JSON.stringify({statuses:{applied:'Applied in Projects',familiar:'Familiar With',learning:'Currently Learning'},categories:catMeta,projects:JSON.parse(fs.readFileSync('/tmp/projmap.json')),tools},null,1)};
`;
fs.writeFileSync(path.join(OUT,'assets/js/engineering-tools-data.js'),js);
console.log('tools',tools.length,'icons',n,'missing',miss.length);
