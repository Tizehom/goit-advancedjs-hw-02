import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as a}from"./assets/vendor-651d7991.js";const l=document.querySelector(".form");l.addEventListener("submit",e=>{e.preventDefault();const{delay:t,step:o,amount:s}=e.currentTarget;let r=Number(t.value);const n=Number(o.value),c=Number(s.value);e.currentTarget.reset();for(let i=1;i<=c;i++)p(i,r).then(({position:u,delay:m})=>{a.success({title:"Success",message:`Fulfilled promise ${u} in ${m}ms`,position:"topRight"})}).catch(({position:u,delay:m})=>{a.error({title:"Error",message:`Rejected promise ${u} in ${m}ms`,position:"topRight"})}),r+=n});function p(e,t){return new Promise((o,s)=>{const r=Math.random()>.3;setTimeout(()=>{r?o({position:e,delay:t}):s({position:e,delay:t})},t)})}
//# sourceMappingURL=commonHelpers3.js.map
