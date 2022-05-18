import { DomManipulation } from "./utility";

const about = (() => {
  const _about = DomManipulation.createElementWithClass('div', 'about');
  const _aboutWrapper = DomManipulation.createElementWithClass('div', 'wrapper');

  _about.appendChild(_aboutWrapper);

  const _aboutText = DomManipulation.createElementWithClass('div', 'about-text');
  _aboutText.textContent = "About";
  _aboutWrapper.appendChild(_aboutText);

  const _aboutContent = DomManipulation.createElementWithClass('div', 'about-content');
  _aboutContent.innerText = 
  `Founded in 1902, Restaurant was the creation of Jimmy's brilliant idea. As of 2022, Restaurant has over 5 million restaurants across North Ameraica, with plans to expand in other parts of the world. 
  
  Ever since it's inception, Restaurant has served millions of customers with only the finest pizzas man has ever created. Each pizza is carefully crafted with the loving touch our of highly skilled chefs. While our pizzas are our most famous dish, our extensize menu features salds, entrees, and desserts.
  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris quam, faucibus quis egestas at, faucibus in risus. Quisque at faucibus mauris, mattis auctor ligula. Phasellus consectetur, lectus et egestas commodo, lectus sapien efficitur mauris, nec fermentum erat ex non nisl. Ut blandit orci vestibulum ante fermentum, at lacinia justo sollicitudin. Donec non enim ut lorem accumsan fermentum in id ipsum. Fusce facilisis imperdiet interdum. Maecenas laoreet consequat imperdiet. Fusce aliquam sem eget odio rhoncus accumsan. Donec luctus sagittis porttitor. Fusce vitae facilisis justo. Aliquam erat volutpat. Suspendisse a tempor ipsum. Praesent condimentum dui non fringilla ornare.`;
  
  _aboutWrapper.appendChild(_aboutContent);

  const getAbout = () => {
    return _about;
  }

  return {
    getAbout,
  };
})();

export { about }