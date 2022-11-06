function creategame(
    player1,hour1,player2,
    ){
    return`
    <li>
        <img src = "./assets/icon-${player1}.svg" alt="bandeira da ${player1}">
        <strong>${hour1}</strong>
        <img src = "./assets/icon-${player2}.svg" alt ="bandeira de ${player2}"
    </li>
    `
}

function createcard(date,day,games){
    return`
    <div class = "card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML =  
    createcard('24/11','QUINTA',
        creategame('suica','07:00','camaroes')+
        creategame('uruguay','10:00','coreia do sul')+
        creategame('portugal','13:00','gana')+
        creategame('brazil','16:00','serbia')
    )+
    createcard('25/11','SEXTA',
        creategame('gales','7:00','irã')+
        creategame('catar','10:00','senegal')+
        creategame('holanda','13:00','equador')+
        creategame('inglaterra','16:00','estados unidos')
    )+
    createcard('26/11','SABADO',
        creategame('tunisia','7:00','australia')+
        creategame('polonia','10:00','arabia saudita')+
        creategame('frança','13:00','dinamarca')+
        creategame('argentina','16:00','mexico')
    )
