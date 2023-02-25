class InsertOptionsUseCase {
  /**
   * @param array options
   */
  execute(options) {
    const optionsDiv = new HtmlElement("options");
    optionsDiv.deleteChildren();

    options.map((option) => {
      screen.insertHtml(
        `<button value="${option.value}">${option.name}</button>`
      );
    });
  }
}
