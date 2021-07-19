const { I } = inject();

module.exports = {

  title: "Authentication",

  signIn: {
    email: "//*[@id='email']",
    password: "//*[@id='passwd']",
    btnSubmit: "//*[@id='SubmitLogin']"
  }
}