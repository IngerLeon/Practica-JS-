const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre:"Fisica 1",
        nota:8
    },{
        nombre:"Fisica 2",
        nota:10
    },{
        nombre:"Calculo 1",
        nota:6
    },{
        nombre:"Calculo 2",
        nota:5
    },{
        nombre:"Matematicas",
        nota:8
    },{
        nombre:"Programacion",
        nota:10
    }
]

const obtenerMateria = (id)=>{
    return new Promise ((resolve,reject)=>{
        materia = materias[id];
        if(materia == undefined) reject ("LA materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*400);
    })
}

const devolverMaterias =async ()=>{
    let materia = [];
    for (let i=0; i<materias.length;i++){
        materia[i] = await obtenerMateria(i);
       let newHTMLCode = `
       <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div  class="nota">${materia[i].nota} </div>
        </div>`
        materiasHTML.innerHTML += newHTMLCode
    }
}

devolverMaterias()