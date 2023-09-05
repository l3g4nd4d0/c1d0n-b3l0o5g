const div = document.getElementById('anuncio-post');
const h1 = document.querySelector('.entry-title');
const textoAnuncio = h1.textContent;

div.innerHTML = `
<marquee style="padding-top: 10px;margin-bottom: -20px;">
<span color="orange" style="color: var(--box-anuncio-font);clear: both;text-align: center;margin-bottom: -5px;padding-top: 15px;text-shadow: 2px 2px 8px #ffffff;font-size: 15px;">Venha fazer parte da nossa comunidade no <a href="https://discord.gg/cGJzEDvPhM" target="_blank" style="text-transform: none;">Discord</a> e seja o primeiro a receber notificações sobre novos episódios e conteúdos exclusivos de <b>${textoAnuncio}</b>!</span> | <span style="color: #00ceff; clear: both;text-align: center; margin-bottom: -5px; padding-top: 15px; text-shadow: 2px 0px 8px #7900ff; font-size: 15px;">Algum erro ou bug impedindo você de aproveitar o episódio? Avise-nos! Compartilhe o problema nos comentários ou no servidor do <a href="https://discord.gg/cGJzEDvPhM" target="_blank" style="text-transform: none;">Discord</a> para que possamos corrigi-lo.</span></marquee>
`;