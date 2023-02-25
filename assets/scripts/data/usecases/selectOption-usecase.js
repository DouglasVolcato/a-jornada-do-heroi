class SelectOptionUseCase {
  /**
   * @param function callbackFunction
   */
  execute(callbackFunction) {
    const optionsDiv = new HtmlElement("options");
    optionsDiv.addEventListenerToChildren(callbackFunction);
  }
}
