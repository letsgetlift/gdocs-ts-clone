export class Dom extends HTMLElement {
  $el: Element;
  constructor(selector: string | Element) {
    super();
    this.$el = typeof selector === 'string' 
      ? document.querySelector(selector)!
      : selector!;
  }
  html(html: string | HTMLElement): Dom | string {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }
}

export function $(selector: string | HTMLElement): HTMLElement {
  return new Dom(selector);
}

$.create = (tag: string, classes: string): HTMLElement => {
  const el = document.createElement(tag);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
