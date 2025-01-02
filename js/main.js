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
        <div class="number" id="day-${i + 1}" onclick=showModal(${i})>
            <img src="./images/icons/${item.icon}.png" alt="">
            <div class="days">${i + 1}</div>
        </div>`
    }else{

        //inserisce l'icona per il 25 dicembre
        wrap.innerHTML += `
        <div id="christmas" onclick=showModal(24)>
            <img src="./images/icons/${item.icon}.png" alt="">
            <div class="days">25</div>
        </div>`
    }

    //genera una modale in base al tipo di oggetto
    if (item.type === 'image') {
        content.innerHTML += `
        <div class="modal" id="modal-${i}" style="display: none;">
            <div class="modal-content">
                <img src="./${item.url}" alt="">
                <button class="close-modal" onclick="closeModal(${i})">Chiudi</button>
            </div>
        </div>`
    } else if (item.type === 'text') {
        content.innerHTML += `
        <div class="modal" id="modal-${i}" style="display: none;">
            <div class="modal-content">
                <p>${item.text}</p>
                <button class="close-modal" onclick="closeModal(${i})">Chiudi</button>
            </div>
        </div>`
    }

}

//apre la modale
function showModal(index){
    const modal = document.getElementById(`modal-${index}`);
    if (modal) {
        modal.style.display = 'flex';
    }
}

//chiude la modale
function closeModal(index) {
    const modal = document.getElementById(`modal-${index}`);
    if (modal) {
        modal.style.display = 'none';
    }
}
