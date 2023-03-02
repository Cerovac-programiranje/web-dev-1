function obavijesti_me() {
  alert("Pozdrav iz zemlje Safari!!!");
}

function napravi_nasumican_broj() {
  // pravi nasumican proj od 0-1
  const nasumicanBroj = Math.random();
  // kanali za boje se krecu od 0 do 255
  const skaliranBroj = 255 * nasumicanBroj;
  // zaokruzi broj na manji (otkini decimale)
  const zaokruzenBroj = Math.floor(skaliranBroj);

  return zaokruzenBroj;
}

function napravi_nasumicnu_boju() {
  const crvena = napravi_nasumican_broj();
  const zelena = napravi_nasumican_broj();
  const plava = napravi_nasumican_broj();
  // rbg je funcija koja pravi boju sa kanalima
  // r - red, g - green, b - blue
  return `rgb(${crvena},${zelena},${plava})`;
}

function ucitana_stranica() {
  // zaobli element #drugi-div
  document.getElementById("drugi-div").style.borderRadius = "50px";

  // kada kliknemo na element #btn2
  document.getElementById("btn2").onclick = function () {
    // promjeni pozadinsku boju elementa #btn2 na neku nasumicnu boju
    const novaBoja = napravi_nasumicnu_boju();

    // console.log funkcija ispisuje bilo koju vrijednost na konzolu
    console.log(novaBoja);
    document.getElementById("btn2").style.backgroundColor = novaBoja;
  };
}

function brisi() {
  const element = document.getElementById("btn2");

  // element se brise iz HTML, ne mozemo ga vratiti
  // element.remove();

  // element onstane u HTML ali ne zauzima prostor
  element.style.display = "none";

  // element nije prikazan, ali zauzima prostor (ostane rupa)
  // element.style.visibility = "hidden";
}

function pisi() {
  const element = document.getElementById("btn2");

  element.style.display = "inline-block";
  // element.style.visibility = "visible";
}

function dodaj_krug() {
  // nadji canvas element
  const canvas = document.getElementById("mojKanvas");
  // uzmi kontekst za crtanje 2D
  const ctx = canvas.getContext("2d");

  // nasumicna pozicija od 0 do sirine canvas-a 200px
  const x = Math.round(Math.random() * canvas.width);
  // nasumicna pozicija od 0 do visine canvas-a 100px
  const y = Math.round(Math.random() * canvas.height);
  // nasumicni poluprecnik kruga do 50px
  const radius = Math.round(Math.random() * 50);
  nacrtaj_krug(ctx, x, y, radius);
}

function nacrtaj_krug(ctx, x, y, radius) {
  // zapocni crtanje
  ctx.beginPath();
  // opisi krug
  // x, y, radius, startAngle, endAngle
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  // iscrtaj jednom linijom
  ctx.stroke();
}

let interval = 0;
function pokreni_simulaciju() {
  // nadji canvas element
  const canvas = document.getElementById("mojKanvas");
  // uzmi kontekst za crtanje 2D
  const ctx = canvas.getContext("2d");

  // fps - frames per second
  // broj osvjezavanja u sekundi
  // sve preko 24 oko nece primjetiti da ponovo iscrtavamo
  // probajte sa 10 ili sa 30
  const fps = 15;
  // brzina kretanja kruga (pixel/second)
  // moramo podijeliti sa fps da bismo dobili brzinu po osvjezavanju
  const brzina = 50 / fps;

  // pocetne pozicije x, y
  let x = 0; // koristimo "let" jer cemo da mijenjamo ovu vrijednost
  let y = 0;
  const radius = 10; // koristimo "const" jer radius necemo da mijenjamo

  // obrisi bilo koju postojecu simulaciju
  zaustavi_simulaciju();

  function iscrtaj_na_novoj_poziciji() {
    x += brzina;
    y += brzina;
    // obrisi canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    nacrtaj_krug(ctx, x, y, radius);
  }
  // nacrtaj krug na pocetnoj poziciji
  nacrtaj_krug(ctx, x, y, radius);
  // interval stavimo u varijablu "interval" da bismo ga mogli obrisati
  // setInterval prima milisekunde, a "fps" je u sekundama, zato dijelimo 1000.0 sa fps
  interval = setInterval(iscrtaj_na_novoj_poziciji, 1000.0 / fps);
}

function zaustavi_simulaciju() {
  // "interval" je broj, ako je veci od 0 znaci da postoji i da ga mozemo izbrisati
  if (interval > 0) {
    clearInterval(interval);
  }
}
