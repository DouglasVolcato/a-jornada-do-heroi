class GetInputValueUseCase {
  /**
   * @return string
   * @return boolean
   */
  execute() {
    const input = new HtmlElement("textInput");

    if (input.getElement() === null) {
      return false;
    }

    return input.getValue();
  }
}
