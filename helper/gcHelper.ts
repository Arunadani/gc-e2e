const gc = {
  mainlogo: ".logo.hide-xs .logo-default",

  navheader: {
    menu: ".nav-link",
  },
  headerEleCheck: {
    Home: ".carousel-inner",
    Donate: ".row h3",
    Fundraise: ".wizard-branch .left_form",
  },
  footer:{
    allColumn:".footer-area",
    eachColumn:".single-footer-widget",
    copyRight:".copyright-area"
  }
};
export function getEle(type: any) {
  return gc[type];
}
