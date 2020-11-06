import * as Types from '../../types';
import { $ } from '../../core/dom';

export class Excel {
  $el: Element;
  components: Array<Types.IComponent>;

  constructor(selector: string, options: {[key: string]: Array<any>}) {
    this.$el = document.querySelector(selector)!;
    this.components = options.components || [];
  }
  
  getRoot(): Element {
    const $root = $.create('div', 'excel');
    this.components.forEach((Component) => {
      const $el = $.create('div', Component.className);
      //@ts-ignore
      const component: Types.IComponent = new Component($el);
      $el.innerHTML = component.toHTML();
      $root.append($el);
    });
    return $root;
  }
    
  render(): void {
    this.$el.append(this.getRoot());
  }
}
