(() => {const script=document.currentScript,base=new URL('.',script.src),reduce=matchMedia('(prefers-reduced-motion: reduce)');
for(const scene of document.querySelectorAll('[data-ambience]')){
 const canvas=scene.querySelector('canvas'),ctx=canvas.getContext('2d');if(!ctx)continue;
 let theme='coast',paused=reduce.matches,visible=true,frame=0,last=0,art=null,points=[];const images={};
 function load(name){if(images[name])return Promise.resolve(images[name]);return new Promise(resolve=>{const i=new Image();i.onload=()=>{images[name]=i;resolve(i);};i.src=new URL('semadrive-'+name+'.png',base);});}
 function fit(){const r=scene.getBoundingClientRect(),ratio=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(r.width*ratio);canvas.height=Math.round(r.height*ratio);draw(0);}
 function draw(time){if(!art)return;const w=canvas.width,h=canvas.height,k=Math.max(w/art.width,h/art.height),dx=(w-art.width*k)/2,dy=(h-art.height*k)/2;ctx.drawImage(art,dx,dy,art.width*k,art.height*k);
 if(!paused){ctx.globalCompositeOperation='screen';for(const p of points){const a=Math.max(0,Math.sin(time*.0007+p.phase))*.22;ctx.fillStyle='rgba(195,245,255,'+a+')';ctx.fillRect(dx+p.x*k,dy+p.y*k,(2+p.size)*k,.6*k);}ctx.globalCompositeOperation='source-over';}}
 function tick(t){frame=0;if(paused||!visible||document.hidden)return;if(t-last>32){draw(t);last=t;}frame=requestAnimationFrame(tick);}
 function run(){if(!frame&&!paused&&visible&&!document.hidden)frame=requestAnimationFrame(tick);}
 async function select(name){theme=name;scene.dataset.theme=name;const i=await load(name);if(theme!==name)return;art=i;points=[];const sample=document.createElement('canvas');sample.width=i.width;sample.height=i.height;const c=sample.getContext('2d',{willReadFrequently:true});c.drawImage(i,0,0);const data=c.getImageData(0,0,i.width,i.height).data;let seed=317;const rand=()=>{seed=(seed*16807)%2147483647;return seed/2147483647;};for(let n=0;n<1800;n++){const x=Math.floor(rand()*i.width),y=Math.floor((.4+rand()*.6)*i.height),at=(y*i.width+x)*4;const red=data[at],green=data[at+1],blue=data[at+2];if(green>red*1.2&&blue>red*1.3&&green>75)points.push({x,y,phase:rand()*7,size:rand()*3});}for(const b of scene.querySelectorAll('[data-scene]'))b.setAttribute('aria-pressed',String(b.dataset.scene===name));draw(0);run();}
 for(const b of scene.querySelectorAll('[data-scene]'))b.addEventListener('click',()=>select(b.dataset.scene));
 const toggle=scene.querySelector('[data-motion]');function label(){if(toggle){toggle.textContent=paused?'Play ambience':'Pause ambience';toggle.setAttribute('aria-pressed',String(paused));}}
 if(toggle)toggle.addEventListener('click',()=>{paused=!paused;label();if(paused){cancelAnimationFrame(frame);frame=0;draw(0);}else run();});
 reduce.addEventListener('change',()=>{paused=reduce.matches;label();if(paused){cancelAnimationFrame(frame);frame=0;draw(0);}else run();});
 new ResizeObserver(fit).observe(scene);new IntersectionObserver(([e])=>{visible=e.isIntersecting;run();}).observe(scene);document.addEventListener('visibilitychange',run);label();fit();select(theme);
}})();
