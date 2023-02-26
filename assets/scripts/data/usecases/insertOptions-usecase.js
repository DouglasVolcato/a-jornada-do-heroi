class InsertOptionsUseCase {
  /**
   * @param array options
   */
  execute(options) {
    const optionsDiv = new HtmlElement("options");
    optionsDiv.deleteChildren();

    options.map((option) => {
      optionsDiv.insertHtml(
        `<button value="${option.value}">${option.name}</button>`
      );
    });
  }
}
