function Parent(name) {
  this.name = name;
}
Parent.prototype.getName = function() {
  return this.name;
}

function Child(name) {
  Parent.call(this, name);
  this.age = 12;
}
Object.setPrototypeOf(Child.prototype, Parent.prototype);

let child1 = new Child('yj');
console.log(child1);