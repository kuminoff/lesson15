"use strict";

const body = document.querySelector("body");

const DomElement = function (select, hei, wid, back, font) {
  this.selector = select;
  this.height = hei;
  this.width = wid;
  this.bg = back;
  this.fontSize = font;

  this.createElem = () => {
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
    console.log(elem);
    elem.style.cssText = `height: ${this.height};
        width: ${this.width}; background-color: ${this.bg};
        font-size: ${this.fontSize}; `;
  };
};

const newElem = new DomElement(".que", "100px", "100px", "blue", "14px");

newElem.createElem();
