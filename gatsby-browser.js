import smoothscroll from 'smoothscroll-polyfill';

// eslint-disable-next-line import/prefer-default-export
export const onClientEntry = () => {
  smoothscroll.polyfill();
};
