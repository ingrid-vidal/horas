setInterval (function horas(){
    var msg = window.document.querySelector('p#pa')
    var img = window.document.getElementById('img')
    var data = document.querySelector('p#data')
    var rec = document.querySelector('#recado')
    var hora = new Date()
    var hr = hora.getHours()
    var minutos = new Date()
    var min = minutos.getMinutes()
    var datas = new Date()
    var dia = String(datas.getDate()).padStart(2, '0')
    var mes = String(datas.getMonth() + 1).padStart(2, '0')
    var ano = datas.getFullYear()
    //data
    
    if(min < 10){
        min = '0' + min
    }
    if(hr == 0){
        hr = '0' + hr
    }
    data.innerHTML= `${dia}/${mes}/${ano}`
     //hora   
    msg.innerHTML = `Agora são ${hr}:${min}`
    //imagem
    if (hr >= 0 && hr < 6){
        img.src = 'imagens/prontas/madrugada-cortado.png'
        rec.innerHTML = 'Boa madrugada!'
        document.body.style.background ='#0B2631'
    }else if (hr >= 6 && hr < 13){
        img.src = 'imagens/prontas/manha2-cortado.png'
        rec.innerHTML = 'Bom dia!'
        document.body.style.background ='#D79A6F'
    }else if (hr >= 13 && hr < 18){
        img.src = 'imagens/prontas/tarde-cortada.png'
        rec.innerHTML = 'Boa tarde!'
        document.body.style.background ='#EF7B4A'
    }else{
        img.src = 'imagens/prontas/noite-cortado.png'
        rec.innerHTML = 'Boa noite!'
        document.body.style.background ='#0A181B'
    }
    
},1000)