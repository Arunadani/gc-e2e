const gc = {
  mainlogo: ".logo-default",
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
    currency: '//*[@formcontrolname="currency"]',
    amount: '//*[@formcontrolname="amount"]',
    transaction_fee: "//input[@formcontrolname='transactionFee']",
    firstName: "//input[@formcontrolname='firstName']",
    email: "//input[@formcontrolname='emailId']",
    countryCode: "#mobileExtensionDonor",
    mobileNum: "//input[@formcontrolname='mobileNo']",
    payMode: ".donate-sec",
    pay_btn: "Proceed",
    cardName: "//input[@formcontrolname='cardName']",
    cardNum: "cardnumber",
    expDate: "//input[@name='exp-date']",
    cvc: "//input[@name='cvc']",
    zip: "postal",
  },
  toast: {
    name: "//input[@formcontrolname='cardName']",
    nameError: "Invalid Card Name",
    num: ".toast-error",
    numError: "incomplete",
    //ardError:".toast-error"
  },
  proxy: {
    user: "gcadmin",
    pwd: "tigerhill2020",
  },
  config_data: {
    email: "abc@gmail.com",
    phone: "1234567891",
    name: "Test",
    Num: "4242424242424242",
    monthYear: "0525",
    cvc: "111",
  },
};
export function getEle(type: any) {
  return gc[type];
}
