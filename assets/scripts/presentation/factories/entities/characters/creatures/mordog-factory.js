/**
 * @returns MainEntity
 */
function makeMordogFactory() {
  const mordog = new MainEntity(
    "Mordog",
    "Bruxo com o poder equivalente a 1 milhão de almas, o ser mais poderoso dessa terra",
    7,
    700,
    140,
    70,
    2348766,
    1000000,
    0,
    0,
    0,
    0,
    0,
    0,
    [],
    [
      "Feitiço venenoso",
      "Raio elétrico",
      "Bola de fogo",
      "Feitiço mortal",
      "Poção explosiva",
      "Poção atordoante",
      "Ataque telecinético",
    ]
  );

  return mordog;
}
