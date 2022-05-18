class DomManipulation {
  static createElementWithClass(elementName, className) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    return element;
  }

  static wrapElement(element) {
    const wrapper = DomManipulation.createElementWithClass('div', 'wrapper');
    wrapper.appendChild(element);
    return wrapper;
  }

  static createListElement(listItems, listItemClassName, activeIndex) {
    const list = document.createElement('ul');
    listItems.forEach((item, index) => {
      const element = DomManipulation.createElementWithClass('li', listItemClassName);
      element.textContent = item;
      if (activeIndex === index) {
        element.classList.add('active');
      }
      list.appendChild(element);
    });
    return list;
  }

  static removeClassFromElementsArray(elements, className) {
    elements.forEach(element => {
      element.classList.remove(className);
    });
  }
}

export { DomManipulation }