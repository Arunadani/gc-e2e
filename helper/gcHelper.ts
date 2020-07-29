const gc = {
  mainlogo: ".logo.hide-xs .logo-default",
  loginEle: ".login-box-top a",

  navheader: {
    menu: ".nav-link",
  },
  headerEleCheck: {
    Home: ".carousel-inner",
    Donate: ".row h3",
    Fundraise: ".wizard-branch .left_form",
  },
  footer: {
    allColumn: ".footer-area",
    eachColumn: ".single-footer-widget",
    copyRight: ".copyright-area",
  },
  login: {
    userCheckEle: ".row h3",
    userCheckFor: " User Login",
    userEmail: "email",
    userPassword: "#password",
    userIcon: ".login-box-top",
    userProfile: ".fa-angle-down",
    userLogout: "//*[@data-icon='sign-out-alt']",
    userLogin: "//button[@name='login']",
  },
  donate: {
    menu: ".navbar-nav a",
    campaignActive: "#ongoing_campaignId",
    //currency: "//select[formcontrolname='currency']",
    amount: "//input[@formcontrolname='amount']",
    firstName: "//input[@formcontrolname='firstName']",
    email: "//input[@formcontrolname='emailId']",
    countryCode: "#mobileExtensionDonor",
    mobileNum: "//input[@formcontrolname='mobileNo']",
    payMode: ".donate-sec",
    //cardName: "//input[@formcontrolname='cardName']",
    //cardNum:"[name='cardnumber']"
  },
};
export function getEle(type: any) {
  return gc[type];
}
