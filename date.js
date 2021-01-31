Date.prototype.format = Date.prototype.format || function (format = 'YYYY-MM-DD HH:mm:ss') {
  let newFormat = format;
  const o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'D+': this.getDate(),
    'h+': this.getHours(),
    'H+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds()
  };
  if (/(y|Y+)/.test(newFormat)) {
    newFormat = newFormat.replace(RegExp.$1, `${this.getFullYear()}`.substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(newFormat)) {
      newFormat = newFormat.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : (`00${o[k]}`).substr(`${o[k]}`.length));
    }
  }
  return new Date(newFormat);
};

Date.prototype.add = Date.prototype.add || function (val, key) {
  if (!key || isNaN(val)) {
    return this;
  }
  let date = '';
  const o = {
    year: 'setFullYear',
    month: 'setMonth',
    day: 'setDate',
    hour: 'setHours',
    minute: 'setMinutes',
    second: 'setSeconds'
  };
  if (this[o[key]]) {
    date = this[o[key]](this.getFullYear() + val);
  }
  return new Date(date).format();
};