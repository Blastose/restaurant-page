import { DomManipulation } from "./utility";
import menuItems from './menu-items.json';
import image from './images/american-g564c19f14_640.png'

class MenuItemMaker {
  static makeHtml(menuItem) {
    const item = DomManipulation.createElementWithClass('div', 'menu-item');
    const itemName = DomManipulation.createElementWithClass('div', 'item-name');
    const itemHighlight = DomManipulation.createElementWithClass('div', 'item-highlight');
    itemName.textContent = menuItem.name;
    const itemImage = DomManipulation.createElementWithClass('div', 'item-image');
    // itemImage.style.background = `url('./images/${menuItem.fileImage}')`;
    const itemDescription = DomManipulation.createElementWithClass('div', 'item-description');
    itemDescription.textContent = menuItem.description;
    const itemPrice = DomManipulation.createElementWithClass('div', 'item-price');
    itemPrice.textContent = `\$${menuItem.price}`;

    item.appendChild(itemHighlight);
    item.appendChild(itemName);
    item.appendChild(itemImage);
    item.appendChild(itemDescription);
    item.appendChild(itemPrice);


    return item;
  }
}

const menu = (() => {
  const _menu = DomManipulation.createElementWithClass('div', 'menu');
  
  const _menuWrapper = DomManipulation.createElementWithClass('div', 'wrapper');
  const _menuText = DomManipulation.createElementWithClass('div', 'menu-text');
  _menuText.textContent = "Menu";
  _menu.appendChild(_menuWrapper);
  _menuWrapper.appendChild(_menuText);

  const _menuItemsContainer = DomManipulation.createElementWithClass('div', 'menu-items-container');
  _menuWrapper.appendChild(_menuItemsContainer);
  

  menuItems.items.forEach(item => {
    _menuItemsContainer.appendChild(MenuItemMaker.makeHtml(item));
  });

  const getMenu = () => {
    return _menu;
  }

  return {
    getMenu,
  };
})();


export { menu };