import './style.css';
import { DomManipulation } from './utility';
import { home } from './main-page';
import { menu } from './menu';
import { about } from './about';
import { contactUs } from './contact-us';

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
  const _pageContents = [home.getHome, menu.getMenu, about.getAbout, contactUs.getContactUs];
  const _menuButton = home.getHome().querySelector('.menu-button');
  _menuButton.addEventListener('click', () => {
    changePageContents(_navItemElements[1], menu.getMenu());
  }); 

  const _navItemElements = header.getHeader().querySelectorAll('.nav-items');
  console.log(_navItemElements);
  _navItemElements.forEach((item, index) => {
    item.addEventListener('click', () => {
      changePageContents(item, _pageContents[index]());
    });
  });

  const changePageContents = (activePage, pageContents) => {
    DomManipulation.removeClassFromElementsArray(_navItemElements, 'active');
    activePage.classList.add('active');

    removePageContent();
    addPageContent(pageContents);
  };

  const appendElementToContent = (element) => {
    _content.appendChild(element);
  };

  const removePageContent = () => {
    const _content = _dim.childNodes[1];
    _dim.removeChild(_content);
  };

  const addPageContent = (content) => {
    _dim.insertBefore(content, footer.getFooter());
  }

  appendElementToContent(_backgroundImage);
  _backgroundImage.appendChild(_dim);
  
  _dim.appendChild(header.getHeader());
  _dim.appendChild(home.getHome());
  _dim.appendChild(footer.getFooter());

})();
