const part_r1 = [
  {
    execute: function (selectedOption, inputText, gameStatus) {
      const playerGender = gameStatus.getPlayer().getGender();

      const text1 = `'De fato não estou mais tão em forma como antigamente.'`;

      const text2 = playerGender === "M" ? `Disse Jhonny.` : `Disse Amanda.`;

      const text3 =
        playerGender === "M"
          ? `Por conta disso, seu amigo concorda em ajudar na viagem, ficando encarregado de cuidar dos mantimentos, enquanto você cuida dos inimigos.`
          : `Por conta disso, sua amiga concorda em ajudar na viagem, ficando encarregada de cuidar dos mantimentos, enquanto você cuida dos inimigos.`;

      return {
        text: [text1, "<br>", text2, "<br>", text3],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
];
