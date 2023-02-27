const gameStatus = makeGameStatusFactory(makePlayerFactory());
const chapter1 = makeChapter1Factory(gameStatus);
const chapter0 = makeChapter0Factory(gameStatus, chapter1);

chapter0.start();
