const chapter0 = [
  {
    execute: function (selectedOption, inputText, gameStatus) {
      return {
        text: [
          "<br>",
          '<p align="center">===================</p>',
          '<p align="center">A JORNADA DO HERÓI</p>',
          '<p align="center">===================</p>',
          "<br>",
          "<br>",
          '<p align="center">Digite o nome do(a) jogador(a) para começar: </p>',
        ],
        options: [],
        input: true,
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      gameStatus.getPlayer().setName(inputText);

      return {
        text: [
          '<p align="center">Escolha seu personagem: </p>',
          "<br>",
          "[1] Um grande guerreiro, forte e destemido, em busca de uma boa aventura.",
          "<br>",
          "[2] Uma guerreira habilidosa e valente, em busca de sua jornada para se tornar heroína.",
        ],
        options: [
          { name: "[1]", value: 1 },
          { name: "[2]", value: 2 },
        ],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      if (selectedOption === "1") {
        gameStatus
          .getPlayer()
          .setDescription(
            "Um grande guerreiro, forte e destemido, em busca de uma boa aventura."
          );
      } else {
        gameStatus
          .getPlayer()
          .setDescription(
            "Uma guerreira habilidosa e valente, em busca de sua jornada para se tornar heroína."
          );
      }

      const name = gameStatus.getPlayer().getName();
      const description = gameStatus.getPlayer().getDescription();

      return {
        text: [
          "<br>",
          `${name}: ${description}`,
          "<br>",
          "Sua aventura está prestes a começar...",
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
];
