/**
 * @returns MainEntity
 */
function makeElfoDaFlorestaFactory() {
  const elfoDaFloresta = new MainEntity(
    "Elfo da Floresta",
    "Lutador de artes marciais, possui extrema conexão com a natureza",
    1,
    200,
    40,
    20,
    60,
    30,
    0,
    0,
    0,
    0,
    0,
    0,
    [],
    ["Ataque da folha", "Golpe de karatê", "Flecha envenenada"]
  );

  return elfoDaFloresta;
}
