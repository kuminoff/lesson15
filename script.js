"use strict";

const body = document.body;

const DomElement = function (select, hei, wid, back, font) {
  this.selector = select;
  this.height = hei;
  this.width = wid;
  this.bg = back;
  this.fontSize = font;
  this.left = 50;
  this.top = 50;

  (this.createElem = () => {
    const elem =
      String(this.selector)[0] === "."
        ? document.createElement("div")
        : document.createElement("p");
    String(this.selector)[0] === "."
      ? (elem.innerHTML = `<div class = "${String(
          this.selector.slice(1)
        )}">Класс данного блока - '${String(this.selector.slice(1))}'</div>`)
      : (elem.innerHTML = `<p id = "${String(
          this.selector.slice(1)
        )}">Id данного параграфа - '${String(this.selector.slice(1))}'<p>`);
    body.appendChild(elem);
    elem.style.cssText = `height: ${this.height};
        width: ${this.width}; background-color: ${this.bg};
        font-size: ${this.fontSize}; position: absolute; left: ${this.left}px; top: ${this.top}px;`;
  }),
    (this.changePosition = (e) => {
      console.log(e.code);
      switch (true) {
        case e.code === "ArrowDown":
          this.top += 10;
          console.log(this.top);
          body.innerHTML = "";
          this.createElem();
          break;
        case e.code === "ArrowUp":
          this.top -= 10;
          console.log(this.top);
          body.innerHTML = "";
          this.createElem();
          break;
        case e.code === "ArrowLeft":
          this.left -= 10;
          body.innerHTML = "";
          this.createElem();
          console.log(this.left);
          break;
        case e.code === "ArrowRight":
          this.left += 10;
          body.innerHTML = "";
          this.createElem();
          console.log(this.left);
          break;
      }
      if (this.top == -100) {
        this.top = 1080;
      }

      if (this.left == -100) {
        this.left = 2150;
      }

      if (this.top == 1090) {
        this.top = -109;
      }

      if (this.left == 2160) {
        this.left = -109;
      }
    });
  document.addEventListener("DOMContentLoaded", this.createElem());
  document.addEventListener("keydown", this.changePosition);
};

const newElem = new DomElement(".que", "100px", "100px", "blue", "14px");
