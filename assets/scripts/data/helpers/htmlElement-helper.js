class HtmlElement {
  /**
   * @type string
   */
  elementId;

  /**
   * @param string elementId
   */
  constructor(elementId) {
    this.elementId = elementId;
  }

  /**
   * @returns HTMLElement
   */
  getElement() {
    const elementId = this.elementId;
    const element = document.getElementById(elementId);

    return element;
  }

  /**
   * @returns string
   */
  getValue() {
    const elementId = this.elementId;
    const value = document.getElementById(elementId).value;

    return value;
  }

  /**
   * @param string value
   */
  setValue(value) {
    const elementId = this.elementId;
    document.getElementById(elementId).value = value;
  }

  /**
   * @returns string
   */
  getText() {
    const elementId = this.elementId;
    const text = document.getElementById(elementId).innerText;

    return text;
  }

  /**
   * @param string text
   */
  setText(text) {
    const elementId = this.elementId;
    document.getElementById(elementId).innerText = text;
  }

  /**
   * @param string content
   * @param string position
   */
  insertHtml(content, position = "beforeend") {
    const elementId = this.elementId;
    document.getElementById(elementId).insertAdjacentHTML(position, content);
  }

  /**
   * @returns array
   */
  getChildrem() {
    const elementId = this.elementId;
    const children = document.getElementById(elementId).children;

    return children;
  }

  deleteChildren() {
    const elementId = this.elementId;
    const children = document.getElementById(elementId).children;
    if (children) {
      Array.from(children).forEach((element) => {
        element.remove();
      });
    }
  }

  /**
   * @param function callBackFunction
   * @param string type
   */
  addEventListener(callBackFunction, type = "click") {
    const elementId = this.elementId;
    document.getElementById(elementId).addEventListener(type, callBackFunction);
  }

  /**
   * @param function callBackFunction
   * @param string type
   */
  addEventListenerToChildren(callBackFunction, type = "click") {
    const elementId = this.elementId;
    const children = document.getElementById(elementId).children;
    if (children) {
      Array.from(children).forEach((element) => {
        element.addEventListener(type, callBackFunction);
      });
    }
  }
}
