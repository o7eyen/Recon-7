'use strict';
const choices=new Set(['lime','violet','ice']);
function setTheme(theme){
  if(!choices.has(theme))theme='lime';
  document.body.dataset.theme=theme;
  for(const b of document.querySelectorAll('button.swatch'))b.setAttribute('aria-pressed',String(b.dataset.theme===theme));
}
let saved='lime';try{saved=localStorage.getItem('recon-site-accent')||'lime';}catch{}
setTheme(saved);
for(const b of document.querySelectorAll('button.swatch'))b.addEventListener('click',()=>{
  setTheme(b.dataset.theme);try{localStorage.setItem('recon-site-accent',b.dataset.theme);}catch{}
});