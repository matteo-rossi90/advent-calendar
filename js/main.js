//individua il contenitore
const wrap = document.getElementById('wrap-container')
const content = document.getElementById('content')

//inserisci dinamicamente le icone nel calendario
for(let i = 0; i < source.length; i++){

    //oggetto dell'array
    const item = source[i]

    //inserire le icone che corrispondono ai giorni da 1 a 24
    if(i < source.length - 1){
        wrap.innerHTML += `
        <button type="button" class="number" id="day-${i}" onclick=showModal(${i})>
            <img src="./images/icons/${item.icon}.png" alt="${item.icon}">
            <div class="days">${i + 1}</div>
        </button>`
    }else{

        //inserisce l'icona per il 25 dicembre
        wrap.innerHTML += `
        <button type="button" class="christmas" id="day-24" onclick=showModal(24)>
            <img src="./images/icons/${item.icon}.png" alt="${item.icon}">
            <div class="days">25</div>
        </button>`
    }

    //genera una modale in base al tipo di oggetto
    if (item.type === 'image') { // se il contenuto è solo un'immagine
        content.innerHTML += `
        <div class="modal" id="modal-${i}" style="display: none;">
            <div class="modal-content">
                <img src="./${item.url}" alt="${item.image}">
                <button class="close-modal" onclick="closeModal(${i})">CHIUDI</button>
            </div>
        </div>`
    } else if (item.type === 'text') {// se il contenuto è solo testo
        content.innerHTML += `
        <div class="modal" id="modal-${i}" style="display: none;">
            <div class="modal-content">
                <p>${item.text}</p>
                <button class="close-modal" onclick="closeModal(${i})">CHIUDI</button>
            </div>
        </div>`
    }

}

//apre la modale
function showModal(index){
    const modal = document.getElementById(`modal-${index}`);
    const calendar = document.getElementById(`day-${index}`)

    if (modal) {
        modal.style.display = 'flex';
    }

    calendar.disabled = true;
    calendar.style.backgroundColor = 'transparent';
    calendar.style.filter = 'brightness(50%)';
}

//chiude la modale
function closeModal(index) {
    const modal = document.getElementById(`modal-${index}`);
    if (modal) {
        modal.style.display = 'none';
    }

}
