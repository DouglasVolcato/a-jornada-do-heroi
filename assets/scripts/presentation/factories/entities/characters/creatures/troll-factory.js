/**
 * @returns MainEntity
 */
function makeTrollFactory() {
  const troll = new MainEntity(
    "Elfo da Floresta",
    "O que não possui de inteligência, possui de força bruta",
    3,
    300,
    60,
    30,
    82,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [],
    ["Mordida raivosa", "Punho giratório", "Cabeçada atordoante"]
  );

  return troll;
}
