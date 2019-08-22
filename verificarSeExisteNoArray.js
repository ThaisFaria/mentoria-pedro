function verificarSeExisteNoArray(arr, valor) {
  
  for(i = 0; i < arr.length; i++){
    console.log("Essa é a array: " + arr[i])
    console.log("Esse é o valor: " + valor)
    if(valor == arr[i]){
      return true
    }
  }
  return false
}

module.exports = {
  verificarSeExisteNoArray,
}