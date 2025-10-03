export default class Tabs {
  constructor(element) {
    this.element = element;

    this.btns = this.element.querySelectorAll('.js-tabs-btn');
    this.images = this.element.querySelectorAll('.js-tabs-img');

    this.init();
  }

  init() {
    for (let i = 0; i < this.btns.length; i++) {
        const btn = this.btns[i];
        btn.addEventListener('click', () => this.openTabs(i));
    }
  }

  openTabs(index){
    let n = 0; 
    while(n < this.images.length){     
      this.element.classList.remove("js-tab-" + n + "-active");
      n++;
    }

    for (let i = 0; i < this.images.length; i++) {
      const image = this.images[i];
      image.classList.remove('js-tabs-img-active');
    }

    this.images[index].classList.add('js-tabs-img-active');
    this.element.classList.add("js-tab-" + [index] + "-active");
  }
}
