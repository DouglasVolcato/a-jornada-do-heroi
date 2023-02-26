class InsertTextUseCase {
  /**
   * @param string text
   */
  execute(text) {
    const screen = new HtmlElement("screen");
    screen.insertHtml(`<p>${text}</p>`);
  }
}
