const gc = {
  mainlogo: ".logo.hide-xs .logo-default",
  loginEle:".login-box-top a",

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
  },
  login:{
    userCheckEle:".row h3",
    userCheckFor:" User Login",
    userEmail:"email",
    userPassword:"#password",
    userIcon:".login-box-top"
   

  }
};
export function getEle(type: any) {
  return gc[type];
}
