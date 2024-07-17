const arrayNotas = [];
let objNota = {};
const btnAgregarNota = document.getElementById('create');
const btnBorrarTexto = document.getElementById('delete');
let idGlobal = 1;


btnAgregarNota.addEventListener('click', (e) =>{
    e.preventDefault();
    let tituloNota = document.getElementById('titulo').value;
    let contenidoNota = document.getElementById('nota').value;
    
    if(tituloNota.length !== 0 & contenidoNota.length !== 0){
        const mensaje = document.querySelector('#mensaje');
        mensaje.classList.add('filter');  
        objNota = {
            id: idGlobal,
            titulo: tituloNota,
            texto: contenidoNota,
            realizada : false
        };

        arrayNotas.push(objNota);
        crearNota(idGlobal, tituloNota, contenidoNota);
    }
    else{
        alert('Ningun campo puede estar vacio, por favor llena campos faltantes');
    }
    idGlobal = idGlobal +1;
    return idGlobal;
    
});

btnBorrarTexto.addEventListener('click', (x) =>{
    x.preventDefault();
    document.getElementById('titulo').value = '';
    document.getElementById('nota').value = '';
})

function crearNota(idGlobal, tituloNota, contenidoNota ){
    document.getElementById('list').innerHTML +=
    '<div class="card" id="' + idGlobal + '"'+ '>' +
            '<div class="card-header d-flex justify-content-between">'+ `<input onClick="marcarRealizada(${idGlobal})" type="checkbox" ${objNota.realizada? 
                "checked": ""}><h4>`+tituloNota +'</h4><i class = "fas fa-trash-alt trashIcon icon" onclick="borrarNota('+ idGlobal+ ')"></i>'+'</div>'+
            '<div class="card-body">'+
                '<p class="card-text">' + contenidoNota + '</p>'+ 
            '</div>' +
        '</div>';
};

function borrarNota(idGlobal){
    let stringIdGlobal = String(idGlobal);
    let cardBorrar = document.getElementById(stringIdGlobal);
    cardBorrar.remove();
    let posicionId = -1;
    for(let i = 0; i < arrayNotas.length ; i++){
        if(arrayNotas[i].id === idGlobal){
            posicionId = i;
            break
        }
    }
    arrayNotas.splice(posicionId , 1);
    console.log(arrayNotas);

    if(arrayNotas.length == 0){
        console.log('arrary de notas es 0');
        let quitar = document.getElementById('mensaje')
        quitar.classList.remove('filter');
    }
}


function marcarRealizada (idGlobal){
    let posicionId = -1;
    for(let i = 0; i < arrayNotas.length ; i++){
        if(arrayNotas[i].id === idGlobal){
            posicionId = i;
            break
        }
    }
    if (arrayNotas[posicionId].realizada == false) {
        arrayNotas[posicionId].realizada = true;
        return arrayNotas[posicionId];
    }
    else if(arrayNotas[posicionId].realizada == true){
        arrayNotas[posicionId].realizada = false;
    }

    console.log(arrayNotas);
}

function filtroCheckbox( ) {
    let inputChecked = document.getElementById('checkbox');
    if(inputChecked.checked){
        for (let i = 0; i < arrayNotas.length; i++){
            if(arrayNotas[i].realizada == false){
                const filter = document.getElementById(i + 1);
                filter.classList.add("filter");
            }
        } 
    }
    else {
        for(let x = 0; x < arrayNotas.length; x++){
            const filter = document.getElementById(x +1);
            filter.classList.remove("filter");
        }
    }
}

document.querySelector("#busqueda").addEventListener('input', filtroTexto);

function filtroTexto(){
    const searchInput = document.querySelector('#busqueda');
    const filtrar = searchInput.value.toLowerCase();
    const listaTitulo = document.querySelectorAll('.card');

    listaTitulo.forEach((item) =>{
        let text = item.textContent;
        if(text.toLocaleLowerCase().includes(filtrar.toLocaleLowerCase())){
            item.classList.remove('filter');
        }
        else{
            item.classList.add('filter');
        }
    })
}


