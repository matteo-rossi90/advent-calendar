//individua il contenitore
const wrap = document.getElementById('wrap-container')

//inserisci dinamicamente le icone nel calendario
for(let i = 0; i < source.length; i++){

    //oggetto dell'array
    const item = source[i]

    //inserire le icone che corrispondono ai giorni da 1 a 24
    if(i < source.length - 1){
        wrap.innerHTML += `
        <div class="number">
            <img src="./images/icons/${item.icon}.png" alt="">
            <div class="days">${i + 1}</div>
        </div>`
    }else{

        //inserisce l'icona per il 25 dicembre
        wrap.innerHTML += `
        <div id="christmas">
            <img src="./images/icons/${item.icon}.png" alt="">
            <div class="days">25</div>
        </div>`
    }

}
