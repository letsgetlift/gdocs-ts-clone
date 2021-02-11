export interface IComponent {
  toHTML(): string;
  className: string;
}
export type TElementItems = {
  html?(html: string | Element): Element;
};

export type TElement = TElementItems & Element;
