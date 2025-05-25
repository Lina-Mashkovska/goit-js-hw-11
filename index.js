import{a as d,S as f,i}from"./assets/vendor-Bz4lgVUE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m="50264582-5072b5ac7075dcbe954d58fd2";function y(s){return d.get("https://pixabay.com/api/",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal"}}).then(t=>t.data)}const p=document.querySelector(".gallery");let c;function g({largeImageURL:s,webformatURL:t,tags:a,likes:o,views:e,comments:r,downloads:n}){return`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${t}"
            alt="${a}"
          />
        </a>
        <div class="image-info">
          <p>
          <span class="label">Likes</span>
  <span class="value">${o}</span>
          </p>
          <p>
          <span class="label">Views</span>
  <span class="value">${e}</span>
          </p>
          <p>
          <span class="label">Comments</span>
  <span class="value">${r}</span>
          </p>
          <p>
          <span class="label">Downloads</span>
  <span class="value">${n}</span>
          </p>
        </div>
      </li>`}function h(s){const t=s.map(g).join("");p.innerHTML=t,c?c.refresh():c=new f(".gallery a",{captionsData:"alt",captionDelay:250}),l()}function L(){p.innerHTML=""}function b(){document.querySelector(".loader").classList.remove("is-hidden")}function l(){document.querySelector(".loader").classList.add("is-hidden")}const v=document.querySelector(".form"),u=document.querySelector('input[name="search-text"]');v.addEventListener("submit",s=>{s.preventDefault();const t=u.value.trim();if(t===""){i.error({title:"Error",message:"Введіть текст для пошуку"}),l();return}L(),b(),y(t).then(a=>{if(a.hits.length===0){i.info({title:"Info",message:"Зображення не знайдено"}),l();return}h(a.hits),u.value=""}).catch(a=>{i.error({title:"Error",message:"Помилка під час запиту"})}).finally(()=>{l()})});
//# sourceMappingURL=index.js.map
