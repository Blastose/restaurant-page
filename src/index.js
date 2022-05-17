import './style.css';
import a from './main-page';

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

  static createListElement(listItems, listItemClassName) {
    const list = document.createElement('ul');
    listItems.forEach(item => {
      const element = DomManipulation.createElementWithClass('li', listItemClassName);
      element.textContent = item;
      list.appendChild(element);
    });
    return list;
  }
}

const header = (() => {
  const _header = DomManipulation.createElementWithClass('div', 'header');

  const _headerLogo = DomManipulation.createElementWithClass('div', 'logo');
  _headerLogo.textContent = "Restaurant";

  _header.appendChild(_headerLogo);

  const _headerNav = DomManipulation.createElementWithClass('div', 'nav');
  const _navItems = ['Home', 'Menu', 'About', 'Contact Us'];
  const _navList = DomManipulation.createListElement(_navItems, 'nav-items');

  _headerNav.appendChild(_navList);
  _header.appendChild(_headerNav);

  const getHeader = () => {
    return _header;
  }

  return {
    getHeader,
  }
})();

const dom = (() => {
  const _content = document.querySelector('.content');
  const _backgroundImage = DomManipulation.createElementWithClass('div', 'background-image');
  const _dim = DomManipulation.createElementWithClass('div', 'background-dim');

  const appendElementToContent = (element) => {
    _content.appendChild(element);
  }

  appendElementToContent(_backgroundImage);
  _backgroundImage.appendChild(_dim);
  
  _dim.appendChild(DomManipulation.wrapElement(header.getHeader()));

  return {
    appendElementToContent,
  }
})();
