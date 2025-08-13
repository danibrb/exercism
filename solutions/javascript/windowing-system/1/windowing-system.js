// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight){
  this.width = newWidth;
  this.height = newHeight;
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function(newX, newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize){
     const newWidth = Math.max(1, Math.min(newSize.width, this.screenSize.width - this.position.x));
    const newHeight = Math.max(1, Math.min(newSize.height, this.screenSize.height - this.position.y));

    this.size.width = newWidth;
    this.size.height = newHeight;
  }

  move(newPosition){
    const newX = Math.max(0, Math.min(newPosition.x, this.screenSize.width - this.size.width));
    const newY = Math.max(0, Math.min(newPosition.y, this.screenSize.height - this.size.height));

    this.position.x = newX;
    this.position.y = newY;
  }

}

export function changeWindow(programWindow) {
  programWindow.size.width = 400;
  programWindow.size.height = 300;
  programWindow.position.x = 100;
  programWindow.position.y = 150;
  return programWindow;
}