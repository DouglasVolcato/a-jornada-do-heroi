/**
 * @param string playerName
 * @param string playerDescription
 * @returns MainEntity
 */
function makePlayerFactory(playerName = "", playerDescription = "") {
  const player = new MainEntity(
    playerName,
    playerDescription,
    1,
    100,
    20,
    10,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [
      `É só isso que você consegue fazer?`,
      `Vai precisar de uma arma maior que essa para me derrotar`,
      `Quem te ensinou a lutar desse jeito, sua vovózinha?`,
      `Se houvessem mais 5 de você, ainda não conseguiriam me derrotar.`,
      `Quer que eu te dê algumas aulas de luta?`,
      `Se continuarmos, só eu vou sair vivo dessa luta.`,
      `Está sendo um bom aquecimento, quando começamos a luta?`,
    ],
    [],
    true
  );

  return player;
}
