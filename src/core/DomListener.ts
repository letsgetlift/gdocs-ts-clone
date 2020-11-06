export class DomListener {
$root: Element;
constructor($root: Element) {
  if (!$root) {
    throw new Error(`No $root provided for DomListener`!);
  }
  this.$root = $root;
}
}
