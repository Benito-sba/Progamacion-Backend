//BENITO SANTIAGO BALAM ACEVEDO AA.4.1 TESTS


function esperarSegundos(segundos) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Esperé ${segundos} segundos`);
    }, segundos * 1000);
  });
}

module.exports = esperarSegundos;
