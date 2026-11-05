console.log('JavaScript conectado')

const botonCarrito = document.getElementById('boton-carrito')
const cantidadCarrito = document.getElementById('carro')

let carrito = []

const valorGuardado = localStorage.getItem('carrito')

if(valorGuardado){
    carrito = JSON.parse(valorGuardado)
}

cantidadCarrito.textContent = carrito.length


botonCarrito.addEventListener('click', ()=>{

    carrito.push(1)

    cantidadCarrito.textContent = carrito.length

    const carritoAGuardar = JSON.stringify(carrito)

    localStorage.setItem('carrito', carritoAGuardar)

})