import { DomManipulation } from "./utility";

const home = (() => {
  const _home = DomManipulation.createElementWithClass('div', 'home');
  const _homeContent = DomManipulation.createElementWithClass('div', 'home-content');
  const _wrapper = DomManipulation.createElementWithClass('div', 'wrapper');

  _home.appendChild(_homeContent);
  _homeContent.appendChild(_wrapper);

  const _textLarge = DomManipulation.createElementWithClass('div', 'home-text-large');
  _textLarge.textContent = "Welcome to Restaurant. We serve only the finest of pizzas.";
  const _textSmall = DomManipulation.createElementWithClass('div', 'home-text-small');
  _textSmall.textContent = "We have pizzas for everyone. Come take a look.";
  const _menuButtonDiv = DomManipulation.createElementWithClass('div', 'menu-button-container');
  const _menuButton = DomManipulation.createElementWithClass('button', 'menu-button');
  _menuButtonDiv.appendChild(_menuButton);
  _menuButton.textContent = "Browse menu";

  _wrapper.appendChild(_textLarge);
  _wrapper.appendChild(_textSmall);
  _wrapper.appendChild(_menuButtonDiv);

  const getHome = () => {
    return _home;
  }

  return {
    getHome,
  }
})();

export { home }