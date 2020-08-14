/**
 * Simple loading bar for CLI-interfaces
 */

class loadingbar {
  constructor(size, dot, empty, ms, txt, callback) {
    this.size = size;
    this.current = 1;
    this.timer = null;
    this.dot = dot || '.';
    this.empty = empty || ' ';
    this.inter = ms || 100;
    this.text = txt || '';
    this.callback = callback || null;
  }

  start() {
    this.timer = setInterval(() => {
      const dots = this.dot.repeat(this.current);
      const left = this.size - this.current;
      const empty = this.empty.repeat(left);
      process.stdout.write(`\r[${dots}${empty}]${this.text}`);
      this.current++;
      if (this.current >= this.size) {
        process.stdout.write(`\n`);
        clearTimeout(this.timer);
        this.callback();
      }
    }, this.inter);
  }
}

module.exports = loadingbar;