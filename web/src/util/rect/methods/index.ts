import getX from "./getX";
import setX from "./setX";
import getY from "./getY";
import setY from "./setY";
import clone from "./clone";
import render from "./render";
import setTop from "./setTop";
import getTop from "./getTop";
import setLeft from "./setLeft";
import getLeft from "./getLeft";
import setRight from "./setRight";
import getRight from "./getRight";
import setBottom from "./setBottom";
import getBottom from "./getBottom";
import setWidth from "./setWidth";
import getWidth from "./getWidth";
import getHeight from "./getHeight";
import setHeight from "./setHeight";
import constrain from "./constrain";
import constrainX from "./constrainX";
import constrainY from "./constrainY";
import getOrigin from "./getOrigin"; 
import setOrigin from "./setOrigin"; 
import relativify from "./relativify";
import getCenterX from "./getCenterX";
import setCenterX from "./setCenterX";
import getCenterY from "./getCenterY";
import setCenterY from "./setCenterY";


export type getX = typeof getX
export type setX = typeof setX
export type getY = typeof getY
export type setY = typeof setY
export type clone = typeof clone
export type render = typeof render
export type setTop = typeof setTop
export type getTop = typeof getTop
export type setLeft = typeof setLeft
export type getLeft = typeof getLeft
export type setRight = typeof setRight
export type getRight = typeof getRight
export type setBottom = typeof setBottom
export type getBottom = typeof getBottom
export type setWidth = typeof setWidth
export type getWidth = typeof getWidth
export type getHeight = typeof getHeight
export type setHeight = typeof setHeight
export type constrain = typeof constrain
export type constrainX = typeof constrainX
export type constrainY = typeof constrainY
export type getOrigin = typeof getOrigin
export type setOrigin = typeof setOrigin
export type relativify = typeof relativify
export type getCenterX = typeof getCenterX
export type setCenterX = typeof setCenterX
export type getCenterY = typeof getCenterY
export type setCenterY = typeof setCenterY


export default Object.freeze({
  getX,
  setX,
  getY,
  setY,
  clone,
  render,
  setTop,
  getTop,
  setLeft,
  getLeft,
  setRight,
  getRight,
  setBottom,
  getBottom,
  setWidth,
  getWidth,
  getHeight,
  setHeight,
  constrain,
  constrainX,
  constrainY,
  setOrigin,
  getOrigin,
  relativify,
  getCenterX,
  setCenterX,
  getCenterY,
  setCenterY,
});