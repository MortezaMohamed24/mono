import methods from "../methods";


const prototype = Object.freeze(
  Object.create(null, {
    x: {get: methods.getX, set: methods.setX},
    y: {get: methods.getY, set: methods.setY},
    top: {get: methods.getTop, set: methods.setTop},
    left: {get: methods.getLeft, set: methods.setLeft},
    right: {get: methods.getRight, set: methods.setRight},
    width: {get: methods.getWidth, set: methods.setWidth},
    height: {get: methods.getHeight, set: methods.setHeight},
    bottom: {get: methods.getBottom, set: methods.setBottom},
    origin: {get: methods.getOrigin, set: methods.setOrigin},
    centerX: {get: methods.getCenterX, set: methods.setCenterX},
    centerY: {get: methods.getCenterY, set: methods.setCenterY},

    clone: {value: methods.clone},
    render: {value: methods.render},
    constrain: {value: methods.constrain},
    constrainX: {value: methods.constrainX},
    constrainY: {value: methods.constrainX},
    relativify: {value: methods.relativify},
  }),
);


export default prototype;