export interface IComponent extends Object {
  toHTML(): string;
  className: string;
}
