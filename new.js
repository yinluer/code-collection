function myNew(Con, ...args) {
  const obj = Object.create(Con.prototype);
  const result = Con.apply(obj. args);
  return typeof result === 'object' ? result : obj;
}