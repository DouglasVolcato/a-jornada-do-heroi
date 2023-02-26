class ClearScreenUseCase {
  execute() {
    const screen = new HtmlElement("screen");
    screen.deleteChildren();
  }
}
