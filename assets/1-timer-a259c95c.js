import{f as S,i as p}from"./vendor-77e16229.js";const a=document.querySelector(".timer"),i=document.querySelector("#datetime-picker"),n=document.querySelector("button");let u=new Date;n.disabled=!0;let f,d=!1;const D={enableTime:!0,time_24hr:!0,defaultDate:u,minuteIncrement:1,onClose(e){const t=e[0];t>=new Date?(u=t,b()):(p.error({title:"Alert",message:"Please choose a date in the future"}),n.disabled=!0)}};S(i,D);n.addEventListener("click",()=>{d||(f=setInterval(q,1e3),d=!0,n.disabled=!0,i.disabled=!0)});function b(){let e=new Date;n.disabled=u<e}function q(){let e=Date.now(),t=u-e;if(t<=0){clearInterval(f),a.innerText="00:00:00:00",d=!1,n.disabled=!1,i.disabled=!1;return}const{days:r,hours:o,minutes:l,seconds:c}=T(t);v(r,o,l,c)}function T(e){const c=Math.floor(e/864e5);e%=864e5;const m=Math.floor(e/36e5);e%=36e5;const y=Math.floor(e/6e4);e%=6e4;const h=Math.floor(e/1e3);return{days:c,hours:m,minutes:y,seconds:h}}function v(e,t,r,o){a.querySelector("[data-days]").textContent=s(e),a.querySelector("[data-hours]").textContent=s(t),a.querySelector("[data-minutes]").textContent=s(r),a.querySelector("[data-seconds]").textContent=s(o)}function s(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer-a259c95c.js.map
