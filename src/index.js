import './style.css';
import { DomManipulation } from './utility';
import { home } from './main-page';
import { menu } from './menu';

const header = (() => {
  const _header = DomManipulation.createElementWithClass('header', 'header');
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

const footer = (() => {
  const _footer = DomManipulation.createElementWithClass('footer', 'footer');
  const _imageAttribution = DomManipulation.createElementWithClass('div', 'image-credit');
  _imageAttribution.innerHTML = 'Photo by <a href="https://unsplash.com/@enginakyurt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">engin akyurt</a> on <a href="https://unsplash.com/t/food-drink?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';

  _footer.appendChild(_imageAttribution);

  const getFooter = () => {
    return _footer;
  }
  return {
    getFooter,
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
  // _dim.appendChild(home.getHome());
  _dim.appendChild(menu.getMenu());
  _dim.appendChild(footer.getFooter());

  return {
    
  }
})();
