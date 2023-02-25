/**
 * @returns MainEntity
 */
function makeBruxaFactory() {
  const bruxa = new MainEntity(
    "Bruxa",
    "Feiticeira nata, inteligente e cartomante nas horas vagas",
    5,
    500,
    100,
    50,
    320,
    200,
    0,
    0,
    0,
    0,
    0,
    0,
    [],
    ["Invocação de esqueletos", "Poção explosiva", "Feitiço venenoso"]
  );

  return bruxa;
}
