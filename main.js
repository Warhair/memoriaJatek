const LIST = [
  "kepek/kep1.jpg",
  "kepek/kep2.jpg",
  "kepek/kep3.jpg",
  "kepek/kep4.jpg",
  "kepek/kep1.jpg",
  "kepek/kep2.jpg",
  "kepek/kep3.jpg",
  "kepek/kep4.jpg",
  
];
const DBSZAM = [];
  let talalat = 0;
  let sor = 0;
  const KIVALASZTOTTKEPEK = [];
  let db = 0;
  $(function () {
    let tartalom = osszealit(LIST);
    const FELSOELEM = $("#felso");
    FELSOELEM.append(tartalom);
    const FELSOKEPEK = $("#felso img");
    FELSOKEPEK.on("click", kepreKattintas);
  });
  
  function kepreKattintas() {
    const aktKep = event.target;
    aktKep.src = LIST[aktKep.id];
    KIVALASZTOTTKEPEK.push($(aktKep).attr("id"));
    db++;
    if (db == 2) {
      db = 0;
      visszafordit();
    }
  }
  
  function visszafordit() {
    console.log(KIVALASZTOTTKEPEK);

    setTimeout(function () {
      const FELSOKEPEK = $("#felso img");
      let aktualis = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[0]);
      console.log(aktualis);
      $(aktualis).attr("src", "kepek/hatter.jpg");
      aktualis = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[1]);
      $(aktualis).attr("src", "kepek/hatter.jpg");
      KIVALASZTOTTKEPEK.pop();
      KIVALASZTOTTKEPEK.pop();
    }, 1000);
  }
let txt = "";
function osszealit(LIST){
    
    for (let index = 0; index < LIST.length; index++){
        db = Math.random() * 8;
        DBSZAM.push(db);
        for(let index = 0; index < DBSZAM.length; index++)
          if(DBSZAM[index] === db){
            index = 0;
            db = Math.random() * 8;

          }
          DBSZAM.push(db);
        txt +=`<div><img src="kepek/hatter.jpg" alt="" id="${index}" class="felsokep" class="${DBSZAM[index]}"></div>`;
        
      }
      
      console.log(txt);
    return txt;
    
}


