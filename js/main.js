//individua il contenitore
const wrap = document.getElementById('wrap-container')

//individua il contenuto della modale
const content = document.getElementById('content')

//stato dei pulsanti
let dayStates = JSON.parse(localStorage.getItem('dayStates')) || {};

//inserisci dinamicamente le icone nel calendario
for(let i = 0; i < source.length; i++){

    //oggetto dell'array
    const item = source[i]

    //inserire le icone che corrispondono ai giorni
    const daysHTML = `
        <div class="${i < source.length - 1 ? 'number' : 'christmas'} ${dayStates[i]  ? 'clicked' : ''}" 
                id="day-${i}" onclick="showModal(${i})" >
            <img src="./images/icons/${item.icon}.png" alt="${item.icon}">
            <div class="days">${i + 1}</div>
        </div>`;
   
    wrap.innerHTML += daysHTML;

    //modale solo per le immagini
    const modalImage = `
    <div class="modal" id="modal-${i}" style="display: none;">
        <div class="modal-content">
            <img src="./${item.url}" alt="${item.image}">
            <button class="close-modal" onclick="closeModal(${i})">CHIUDI</button>
        </div>
    </div>`

    //modale solo per i testi
    const modalText = `
    <div class="modal" id="modal-${i}" style="display: none;">
        <div class="modal-content">
            <p>${item.text}</p>
            <button class="close-modal" onclick="closeModal(${i})">CHIUDI</button>
        </div>
    </div>`
    
    //genera una modale in base al tipo di oggetto
    const modalHTML = item.type === 'image' ? modalImage : modalText;
    
    content.innerHTML += modalHTML;
}

//apre la modale
function showModal(index){
    const modal = document.getElementById(`modal-${index}`);
    const calendar = document.getElementById(`day-${index}`)
    
    if (modal) {
        modal.style.display = 'flex';
    }

    //disabilita la casella cambiando lo stile e lo stato
    calendar.classList.add('clicked')
    dayStates[index] = true;

    //salva lo stato aggiornato
    localStorage.setItem('dayStates', JSON.stringify(dayStates));
    
}

//chiude la modale
function closeModal(index) {
    const modal = document.getElementById(`modal-${index}`);
    if (modal) {
        modal.style.display = 'none';
    }

}
