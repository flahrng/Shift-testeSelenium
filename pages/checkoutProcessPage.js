const { I } = inject();

module.exports = {

  title: "Checkout process",

  addresses: {
      btnProceed:"//*[@id='center_column']/form/p/button"
  },

  shipping: {
      chkTerms: "//*[@id='cgv']",
      btnProceed: "//*[@id='form']/p/button"
  },

  payment: {
    payCheck: "//*[@id='HOOK_PAYMENT']/div[2]/div/p/a",
    orderSummary: "//div[@class='box cheque-box']"
  }
}