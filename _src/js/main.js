// import test from './modules/test';

const width = window.innerWidth;
const tabletWidth = 768;

const handlerListener = () => {
  if (width <= tabletWidth) {
    //
  }
};
const makeListener = () => {
  return document.addEventListener(`DOMContentLoaded`, handlerListener);
};

makeListener();
