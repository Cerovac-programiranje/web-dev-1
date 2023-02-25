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
