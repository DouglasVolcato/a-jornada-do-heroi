class InsertInputOptionUseCase {
  execute() {
    const optionsDiv = new HtmlElement("options");
    optionsDiv.deleteChildren();
    optionsDiv.insertHtml(`<input id="textInput" type="text"></input>`);
    optionsDiv.insertHtml(`<button>Enviar</button>`);
  }
}
