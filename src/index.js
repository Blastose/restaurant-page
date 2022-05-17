import './style.css';
import { DomManipulation } from './utility';

const header = (() => {
  const _header = DomManipulation.createElementWithClass('div', 'header');
  const _wrapper = DomManipulation.createElementWithClass('div', 'wrapper');

  const _headerLogo = DomManipulation.createElementWithClass('div', 'logo');
  _headerLogo.textContent = "Restaurant";

  _wrapper.appendChild(_headerLogo);
  _header.appendChild(_wrapper);

  const _headerNav = DomManipulation.createElementWithClass('div', 'nav');
  const _navItems = ['Home', 'Menu', 'About', 'Contact Us'];
  const _navList = DomManipulation.createListElement(_navItems, 'nav-items', 0);

  _headerNav.appendChild(_navList);
  _wrapper.appendChild(_headerNav);

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
  
  _dim.appendChild(header.getHeader());

  return {
    appendElementToContent,
  }
})();
