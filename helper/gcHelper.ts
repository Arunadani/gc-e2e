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
};
export function getEle(type: any) {
  return gc[type];
}
