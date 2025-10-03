import Header from './components/Header.js';
import Carousel from './components/Carousel.js';
import Tabs from './components/Tabs.js';
import YouTube from './components/YouTube.js';
import Scroller from './components/Header.js';
import TextAnim from './components/TextAnim.js';
import Form from './components/Form.js';

export default class ComponentFactory {
  constructor() {
    this.componentInstances = [];
    this.componentList = {
      Header,
      Carousel,
      Tabs,
      YouTube,
      Scroller,
      TextAnim,
      Form,
    };
    this.init();
  }
  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        const instance = new this.componentList[componentName](element);
        this.componentInstances.push(instance);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}
