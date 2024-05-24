const usuario = {
  nombre: '',
  apellido: '',
  edad: 0
}

const handler = {
  set: function (objeto, propiedad, valor) {
    if (propiedad === "age") {
      console.log("Estamos modificando la edad")
    }
  }
}

const proxy = new Proxy(usuario, {
  set: function (usuario, handler)
})

console.log(usuario)