console.log('JavaScript conectado')

const boton = document.querySelector('button')
const cantidadCarrito = document.querySelector('span')

let carrito = localStorage.getItem('carrito')

if(carrito === null){
    carrito = 0
}
else{
    carrito = Number(carrito)
}

cantidadCarrito.textContent = carrito


boton.addEventListener('click', ()=>{

    carrito = carrito + 1

    cantidadCarrito.textContent = carrito

    localStorage.setItem('carrito', carrito)

})