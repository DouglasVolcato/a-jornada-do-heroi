class InsertTextUseCase {
  /**
   * @param string text
   */
  execute(text) {
    const screen = new HtmlElement("screen");
    screen.deleteChildren();
    screen.insertHtml(`<p>${text}</p>`);
  }
}
