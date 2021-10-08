const ulAnimacoes = document.getElementById("ulAnimacoes");
const ulComedias = document.getElementById("ulComedias");
const ulSuspTerr = document.getElementById("ulSuspTerr");
const ulFiccao = document.getElementById("ulFiccao");

const sobreAnimacoes = [
  "As memórias de Marnie", // 1
  "Star vs as Forças do Mal ", // 2
  "Gravity Falls",  // 3
  "Final Space", // 4
  "As aventuras de Tintim", // 5
  "Rei Leão", // 6
  "Megamente" // 7
];

const linkAnimacoes = [
  "https://youtu.be/yLML28cvfko", // 1
  "https://youtu.be/7qkjUFB-NcA", // 2
  "https://youtu.be/X2DUpDxFJyg", // 3
  "https://youtu.be/4EHbt_kSkG8", // 4
  "https://youtu.be/pt9zKFD23Cs",// 5
  "https://youtu.be/lFzVJEksoDY", // 6
  "https://youtu.be/ead9HCX9fe4" // 7
];

const imagensAnimacoes = [
  "https://filmspot.com.pt/images/filmes/posters/big/242828_pt.jpg", // 1 
 "https://upload.wikimedia.org/wikipedia/tr/6/61/Star_K%C3%B6t%C3%BC_G%C3%BC%C3%A7lere_Kar%C5%9F%C4%B1.jpg", // 2
  "https://br.web.img2.acsta.net/pictures/15/02/09/09/50/131883.jpg", // 3
   "https://media.fstatic.com/Z0rTS5TbovqpRn6VX79JzAi8WUw=/290x478/smart/media/movies/covers/2020/06/final-space-season-2-poster.jpg", // 4
  "https://i.ibb.co/mbdHfFW/r-Lsusz-K65h-QRl4-KHm-Ot-CNYV4ky-D-0-230-0-345-crop.jpg", // 5
  "https://i.ibb.co/TbCzv7G/O-Rei-Le-o.jpg", // 6
  "https://assistirfilmes.life/wp-content/uploads/2020/08/kXiNyALSq39Q58P5KyvWWr0okrv.jpg" // 7
];

const sobreComedias = [
  "Como Vender Drogas Online (Rápido)", // 1
  "Hancock", // 2
  "Space Jam", // 3
  "DeadPool", // 4
  "O Grinch", // 5
  "Dois Homens e meio", // 6
  "Minha Mãe é uma Peça" // 7
];

const linkComedias = [
  "https://youtu.be/jwiCmA5vX-A", // 1
  "https://youtu.be/SkX1VuXLRSc", // 2
  "https://youtu.be/SR_vhri_W0E", // 3 
  "https://youtu.be/Q9X-bAE8KTc", // 4
  "https://youtu.be/YQV5Pr7pWtM", // 5
  "https://youtu.be/0cIdYmO9Yr0", // 6
  "https://youtu.be/z22qjsYCqk4" // 7
];

const imagensComedias = [
  "https://i.pinimg.com/564x/c4/23/5d/c4235d662481d366ee7c485e2bbd4ce7.jpg", // 1
  "https://upload.wikimedia.org/wikipedia/pt/a/a4/Hancock_1.jpg", // 2
  "https://www.themoviedb.org/t/p/original/yBcOxU7HDQqxnnOnXtgpFHypevx.jpg", // 3
  "https://cinefilmesbrasil.com/wp-content/uploads/2020/06/assistir-pelo-celular-Deadpool-3-dublado-rapido.jpg", // 4
   "https://media.fstatic.com/puqOBjQGDBGb18Nul5H-uUex0zY=/290x478/smart/media/movies/covers/2019/06/AAAABR4L4tTWRivfYh_b90Z86xhlS3tgI58VMFN-IUXIfN4uVNCqn5SGIm7nEeqTu1_jvjSNgJ.jpg", // 5
  "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f2/Two_and_a_Half_Men_%281%C2%AA_temporada%29.jpg/280px-Two_and_a_Half_Men_%281%C2%AA_temporada%29.jpg", // 6
 
  "https://i.ibb.co/ZSVgK30/2019-644-midia-kit-filmes-minha-ma-ae-e-u-uma-pec-oa-poster.jpg" // 7
];

const sobreSuspTerr = [
  "Invocação do Mal", // 1
  "O Orfanato", // 2
  "A maldição da residência Hill", // 3
  "O Labirinto do Fauno", // 4
  "O Exorcista", // 5
  "Halloween", // 6
  "Eu Sou a Lenda" // 7
];

const linkSuspTerr = [
  "https://youtu.be/GQrrXceHn2E", // 1
  "https://youtu.be/4dln9QsiKlI", // 2
  "https://youtu.be/TvELCT5LGQw", // 3
  "https://youtu.be/dr-lLqOqYGk", // 4
  "https://youtu.be/WOAEsLfjseg", // 5
  "https://youtu.be/Kkdddjea9kk", // 6
  "https://youtu.be/dtKMEAXyPkg" // 7
]; 

const imagensSuspTerr = [
 
   "https://baixartorrents.org/wp-content/uploads/2021/06/1NxHKZW5DPbUFtbF3MxbdSyxRqU-250x375.jpg", // 1
  "https://i.ibb.co/rvLc0nq/orfanato-1.jpg", // 2
  "https://media.fstatic.com/d_NduSL70EAyJ0NZM9gE3rBcfT0=/290x478/smart/media/movies/covers/2018/11/mQQGdDgn4WpUL9PXssHecWkjfi1.jpg", // 3
 "https://upload.wikimedia.org/wikipedia/pt/e/ea/El_Labirinto_Del_Fauno.jpg", // 4 
  "https://ingresso-a.akamaihd.net/img/cinema/cartaz/2353-cartaz.jpg", // 5
  "https://i.ibb.co/jGGZ9qr/unnamed.jpg", // 6
  "https://audienciabrasileiradetv2.files.wordpress.com/2010/08/eusoualenda_poster.jpg" // 7
];

const sobreAvent = [
  "Vingadores Guerra infinita", // 1
  "Avatar", // 2
  "Senhor dos Anéis: O Retorno do Rei", // 3
  "Alita: Anjo de Combate", // 4
  "A Guerra do Amanhã", // 5
  "Harry Potter: A Pedra Filosofal", // 6
  "Planeta dos Macacos: A Guerra" // 7
];

const linkAvent = [
  "https://youtu.be/t_ULBP6V9bg",
  "https://youtu.be/mWJqtZi2Yls",
  "https://youtu.be/LiKeQrChkTY",
  "https://youtu.be/CWpPqBFAk-s",
  "https://youtu.be/hqwQxLIMA-0",
  "https://youtu.be/772UlkDZSPY",
  "https://youtu.be/QzgWDG4QviU"
];

const imagensAvent = [
  "https://i.ibb.co/rwJZCgd/marvel.jpg", // 1
   "https://i.pinimg.com/236x/ce/39/50/ce395081a8e65bcabac074b08037cabf--james-cameron-james-darcy.jpg", // 2
  "https://img.elo7.com.br/product/zoom/2692949/big-poster-o-senhor-dos-aneis-o-retorno-do-rei-lo09-90x60-cm-o-senhor-dos-aneis-o-retorno-do-rei.jpg", // 3
  "https://image.winudf.com/v2/image1/Y29tLmtvcmFtZ2FtZS5nZ3BsYXkuZ2xvYmFsLmFsaXRhX3NjcmVlbl81XzE1NTE2OTYyNTlfMDI1/screen-5.jpg?fakeurl=1&type=.jpg", // 4
  "https://woomagazine.com.br/wp-content/uploads/2021/07/A-Guerra-do-Amanha-4-682x1024.jpg", // 5
  "https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg", // 6
  "https://br.web.img3.acsta.net/pictures/17/07/13/18/50/359962.png" // 7
];

for (var i = 0; i < linkAnimacoes.length; i++) {
  ulAnimacoes.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkAnimacoes[i]}" target="_blank"><img src="${imagensAnimacoes[i]}" ></a><label>${sobreAnimacoes[i]}</label></li>`;
}

for (i = 0; i < linkComedias.length; i++) {
  ulComedias.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkComedias[i]}" target="_blank"><img src="${imagensComedias[i]}"></a><label>${sobreComedias[i]}</label></li>`;
}

for (i = 0; i < linkSuspTerr.length; i++) {
  ulSuspTerr.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkSuspTerr[i]}" target="_blank"><img src="${imagensSuspTerr[i]}"></a><label>${sobreSuspTerr[i]}</label></li>`;
}

for (i = 0; i < linkAvent.length; i++) {
  ulAvent.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkAvent[i]}" target="_blank"><img src="${imagensAvent[i]}"></a><label>${sobreAvent[i]}</label></li>`;
}

function adicionar() {
  const nome = document.getElementById("nome");
  const url = document.getElementById("url");
  const imagem = document.getElementById("imagem");
  const categoria = document.getElementById("opcoesCategoria").value;

  if (nome.value != "" && url.value != "" && imagem.value != "") {
    const elemento = `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><button id="btnDeletar" onclick="deletar()"><img src="https://cdn.pixabay.com/photo/2017/11/10/05/24/trash-2935441_960_720.png"></button><a href="${url.value}" target="_blank"><img src="${imagem.value}" onerror="removerImagem()"></a><label>${nome.value}</label></li>`;
    switch (categoria) {
      case "ulAnimacoes":
        ulAnimacoes.innerHTML += elemento;
        break;
      case "ulComedias":
        ulComedias.innerHTML += elemento;
        break;
      case "ulSuspTerr":
        ulSuspTerr.innerHTML += elemento;
        break;
      case "ulAvent":
        ulAvent.innerHTML += elemento;
    }
  } else {
    alert("Preencha todos os campos!");
  }
  nome.value = "";
  url.value = "";
  imagem.value = "";
}

function deletar() {
  //Remove o canal/filme
  var target = event.currentTarget;
  var li = target.parentElement;
  var ul = li.parentElement;
  ul.removeChild(li);
}

function removerImagem() {
  //Remove o canal/filme se a imagem não for valida
  var ul = event.currentTarget.parentElement.parentElement.parentElement;
  ul.removeChild(event.currentTarget.parentElement.parentElement);
  alert("Coloque uma imagem válida!");
}

function mostrarTexto() {
  var target = event.currentTarget;
  target.lastChild.style.opacity = "1";
  if (target.firstChild.id == "btnDeletar") {
    target.firstChild.style.opacity = "1";
  }
}

function ocultarTexto() {
  var target = event.currentTarget;
  target.lastChild.style.opacity = "0";
  if (target.firstChild.id == "btnDeletar") {
    target.firstChild.style.opacity = "0";
  }
}