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
  const windowOuterWidth = window.innerWidth;
  const windowOuterHeight = window.innerHeight;
  this.heightMeaning = this.height.replace(/[^0-9]/g, "");
  this.widthMeaning = this.width.replace(/[^0-9]/g, "");

  console.log(windowOuterWidth);
  console.log(windowOuterHeight);

  console.log(this.heightMeaning);
  console.log(this.widthMeaning);

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
      let step = 10;
      switch (true) {
        case e.code === "ArrowDown":
          this.top += step;
          console.log(this.top);
          body.innerHTML = "";
          this.createElem();
          break;
        case e.code === "ArrowUp":
          this.top -= step;
          console.log(this.top);
          body.innerHTML = "";
          this.createElem();
          break;
        case e.code === "ArrowLeft":
          this.left -= step;
          body.innerHTML = "";
          this.createElem();
          console.log(this.left);
          break;
        case e.code === "ArrowRight":
          this.left += step;
          body.innerHTML = "";
          this.createElem();
          console.log(this.left);
          break;
      }

      switch (true) {
        case this.left <= -this.heightMeaning && e.code !== "ArrowRight":
          this.left = windowOuterWidth;
          break;

        case this.left >= windowOuterWidth - this.heightMeaning &&
          e.code !== "ArrowLeft":
          this.left = -this.heightMeaning;
          break;

        case this.top <= -this.widthMeaning && e.code !== "ArrowDown":
          this.top = windowOuterHeight;
          break;

        case this.top >= windowOuterHeight - this.widthMeaning &&
          e.code !== "ArrowUp":
          this.top = -this.widthMeaning;
          break;
      }
    });
  document.addEventListener("DOMContentLoaded", this.createElem());
  document.addEventListener("keydown", this.changePosition);
};

const newElem = new DomElement(".que", "100px", "100px", "blue", "14px");
