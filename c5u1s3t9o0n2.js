const button=document.querySelectorAll(".fav"),text=document.getElementById("favtext"),popout=document.querySelector(".popout"),closeBtn=document.querySelector(".close-btn"),playerDiv=document.getElementById("player"),links=document.querySelectorAll("#fansub-link");let favorites=JSON.parse(localStorage.getItem("favorites"))||[];const episodes=document.querySelectorAll("td[data-ep]"),postUrl=window.location.href;let watchedEpisodes=JSON.parse(localStorage.getItem(postUrl))||[];const links1=document.querySelectorAll("#fansub-link"),links2=document.querySelectorAll("#fansub-download"),links3=[...links1,...links2];function removeFavorite(t){favorites=favorites.filter(e=>e.id!==t),saveFavorites(),$(".fav").removeClass("marked"),text.innerText="Favoritar"}function addFavorite(t,e,a,i,s,o,r){favorites.push({id:t,title:e,url:a,image:i,score:s,type:o,status:r}),saveFavorites()}function saveFavorites(){localStorage.setItem("favorites",JSON.stringify(favorites))}function openPopout(t){playerDiv.innerHTML=`
    <iframe src="${t}?enablejsapi=1&wmode=opaque&autoplay=1" width="100%" height="100%" frameborder="0" allow="autoplay" allowfullscreen></iframe>
  `,popout.style.display="block",popout.classList.remove("hidden")}button.forEach(t=>{favorites.find(e=>e.id===t.getAttribute("data-id"))&&(t.classList.add("marked"),text.innerText="Favoritado"),t.addEventListener("click",()=>{let e=event.target,a=t.getAttribute("data-id"),i=t.getAttribute("data-title"),s=t.getAttribute("data-link"),o=t.getAttribute("data-image"),r=t.getAttribute("data-score"),d=t.getAttribute("data-type"),l=t.getAttribute("data-status");if(t.classList.contains("marked")){let n=t.dataset.id;removeFavorite(n)}else addFavorite(a,i,s,o,r,d,l),e.classList.add("marked"),text.innerText="Favoritado"})}),closeBtn.addEventListener("click",()=>{let t=document.querySelector("iframe");popout.classList.add("hidden"),popout.classList.remove("dimmed"),t.remove()}),links.forEach(t=>{t.addEventListener("click",()=>{let e=t.getAttribute("data-url");openPopout(e)})});const dimButton=document.querySelector(".dim-button");function stopVideo(){let t=document.querySelector("video");t.pause(),t.currentTime=0}dimButton.addEventListener("click",()=>{popout.classList.toggle("dimmed")}),episodes.forEach(t=>{watchedEpisodes.find(e=>e.number===t.dataset.ep)&&t.classList.add("watched")}),links3.forEach(t=>{t.addEventListener("click",t=>{let e=t.target.closest("td[data-episode]"),a=e.getAttribute("data-episode"),i='td[data-ep="'+a+'"]',s=document.querySelector(i);if(s){let o={number:e.getAttribute("data-episode")};s.classList.contains("watched")?watchedEpisodes.find(t=>t.number===e.getAttribute("data-episode"))?s.classList.add("watched"):watchedEpisodes.push(o):(watchedEpisodes.push(o),s.classList.toggle("watched")),localStorage.setItem(postUrl,JSON.stringify(watchedEpisodes))}})});