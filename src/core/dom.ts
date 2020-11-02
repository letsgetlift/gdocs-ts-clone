class Dom extends HTMLElement {
}

export function $(): HTMLElement {
  return new Dom();
}

$.create = (tag: string, classes: string) => {
  const el = document.createElement(tag);
  if (classes) {
    el.classList.add(classes);
  }
  return el;
};
