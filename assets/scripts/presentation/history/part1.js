const part1 = [
  {
    execute: function (selectedOption, inputText, gameStatus) {
      return {
        text: [
          "<br>",
          '<p align="center">===================</p>',
          '<p align="center">PARTE 1: O INÍCIO</p>',
          '<p align="center">===================</p>',
          "<br>",
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      return {
        text: [
          "Era uma linda semana de primavera na terra de Blue, os pássaros cantavam, as flores desabrochavam e as pessoas estavam felizes e em paz....",
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      const playerGender = gameStatus.getPlayer().getGender();

      const text =
        playerGender === "M"
          ? `Você, um conhecido guerreiro forte e destemido, teve de partir momentaneamente para ir comprar especiarias na cidade vizinha...`
          : `Você, uma guerreira habilidosa e valente, teve de partir momentaneamente para ir comprar especiarias na cidade vizinha...`;

      return {
        text: [text],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      return {
        text: [
          `Durante o caminho de volta, ao ver sua cidade surgindo no horizonte, percebe fumaça e destruição em grande parte dela. Você acelera seu cavalo...`,
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      const playerName = gameStatus.getPlayer().getName();
      return {
        text: [
          `Ao entrar em sua cidade, um guarda real vêm ao seu encontro e diz: '${playerName}, nosso rei precisa de sua presença o mais rápido possível!'`,
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      return {
        text: [
          `Após uma breve conversa com o rei de Blue, descobre que o ataque à cidade foi feito pelo poderoso bruxo Mordog, o qual rouba a alma dos seres vivos para aumentar seu poder...`,
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      return {
        text: [
          `O rei disse:`,
          "<br>",
          `'Dessa vez conseguimos conter Mordog e seu exército, mas com as almas que ele conseguiu tememos que venha mais forte da próxima vez.'`,
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      const playerName = gameStatus.getPlayer().getName();
      const playerGender = gameStatus.getPlayer().getGender();
      const text =
        playerGender === "M"
          ? `'${playerName}, você já fez parte de minha guarda real, é o único guerreiro que pode deter Mordog!'`
          : `'${playerName}, você já fez parte de minha guarda real, é a única guerreira que pode deter Mordog!`;
      return {
        text: [text],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      return {
        text: [
          `Você aceita a missão de ir atrás do bruxo. Antes de deixar o salão, o rei lhe oferece um mapa de onde possivelmente Mordog se esconde.`,
          "<br>",
          "Você pega o mapa?",
        ],
        options: [
          { name: "[1]Sim", value: 1 },
          { name: "[2]Não", value: 2 },
        ],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      if (selectedOption === "1") {
        gameStatus.getPlayer().equipMap();
      }

      const text =
        selectedOption === "1"
          ? "Você pega o mapa e parte."
          : "Você diz: <br><br> 'Não preciso de mapas, já sei o caminho!' <br><br> e parte.";

      return {
        text: [text],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      return {
        text: [
          "Você vai até sua casa e começa a se aprontar para a missão.",
          "<br>",
          "Vai levar sua espada? (o jogo ficará mais difícil sem ela)",
        ],
        options: [
          { name: "[1]Sim", value: 1 },
          { name: "[2]Não", value: 2 },
        ],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      if (selectedOption === "1") {
        gameStatus.getPlayer().equipSword();
      }

      const text =
        selectedOption === "1"
          ? "Você pega sua espada."
          : "Você confia muito em seus punhos e decide não levar sua espada.";

      return {
        text: [text],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      return {
        text: [
          "Você se lembra do alerta que o rei lhe deu sobre o perigoso dragão que compõe o exército de Mordog.",
          "<br>",
          "Vai levar sua capa contra fogo?",
        ],
        options: [
          { name: "[1]Sim", value: 1 },
          { name: "[2]Não", value: 2 },
        ],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      if (selectedOption === "1") {
        gameStatus.getPlayer().equipCover();
      }

      const text =
        selectedOption === "1"
          ? "Você veste sua linda capa contra fogo. <br><br> Proteção contra fogo adicionada."
          : "Você escolhe priorizar a agilidade e decide deixar sua armadura leve.";

      return {
        text: [text],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      return {
        text: [
          "Após arrumar todas as coisas, visita seu vizinho elfo, que entende um pouco de magia e abençoa seu caminho.",
          "<br>",
          "Ele disse, lhe oferecendo um colar e um frasco:",
          "<br>",
          "'Use esse amuleto em seu pescoço, vai proteger contra os feitiços do bruxo.",
          "Leve também essa poção de cura, ela pode ser muito útil em algum momento.'",
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      return {
        text: ["Você leva o amuleto e a poção?"],
        options: [
          { name: "[1]Sim", value: 1 },
          { name: "[2]Não", value: 2 },
        ],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      if (selectedOption === "1") {
        gameStatus.getPlayer().equipAmulet();
        gameStatus.getPlayer().equipLifePotion();
      }

      const text =
        selectedOption === "1"
          ? "Você agradece pelos presentes, e coloca o amuleto em seu pescoço."
          : "Você agradece pela benção, mas escolhe não levar os itens.";

      return {
        text: [text],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, inputText, gameStatus) {
      const playerGender = gameStatus.getPlayer().getGender();

      const text1 =
        playerGender === "M"
          ? `Por um breve momento, você pensa que, mesmo com toda sua habilidade e determinação, talvez seja difícil completar a missão sozinho.`
          : `Por um breve momento, você pensa que, mesmo com toda sua habilidade e determinação, talvez seja difícil completar a missão sozinha.`;

      const text2 =
        playerGender === "M"
          ? `Você pensa em Jhonny, seu amigo que, assim como você, gosta de uma boa aventura e pode ajudar.`
          : `Você pensa em Amanda, sua amiga que, assim como você, gosta de uma boa aventura e pode ajudar.`;

      const text3 =
        playerGender === "M" ? `Você convida Jhonny?` : `Você convida Amanda?`;

      return {
        text: [text1, "<br>", text2, "<br>", text3],
        options: [
          { name: "[1]Sim", value: 1 },
          { name: "[2]Não", value: 2 },
        ],
      };
    },
  },

  {
    execute: function (selectedOption, inputText, gameStatus) {
      if (selectedOption === "1") {
        const playerGender = gameStatus.getPlayer().getGender();

        const text =
          playerGender === "M"
            ? `Jhonny diz que já faz muito tempo que não participa de uma batalha, vocês decidem simular uma luta para testar isso..`
            : `Amanda diz que já faz muito tempo que não participa de uma batalha, vocês decidem simular uma luta para testar isso.`;

        const alternativePart = playerGender === "M" ? 2 : 3;

        return {
          text: [
            text,
            "<br>",
            `Vocês se dirigem até uma área aberta e, sem espadas, começam a luta.`,
          ],
          options: [{ name: "Continuar", value: 1 }],
          alternativePart,
        };
      } else {
        return {
          text: [
            "Você decide não chamar seu amigo e se prepara para partir no dia seguinte.",
          ],
          options: [{ name: "Continuar", value: 1 }],
        };
      }
    },
  },
];
