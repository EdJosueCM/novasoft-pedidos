function crearPedido(producto, cantidad, precio) {
  return { producto: producto, cantidad: cantidad, total: cantidad + precio };
}