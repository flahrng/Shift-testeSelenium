const { I, cartPage, homePage, searchPage, productPage, productUtils, authenticationPage, checkoutProcessPage, authUtils } = inject();

Before(() => {
    I.amOnPage('/');  
});

Given('I search by the product Faded Short Sleeve', () => {    
    I.fillField(homePage.fields.search, productUtils.product.shortName);
    I.click(homePage.buttons.search);
});

Given('I add the product in the cart', () => {    
    I.seeTextEquals(searchPage.title, searchPage.navigation);
    I.click(searchPage.firstItem.name);
    I.see(productUtils.product.fullName, productPage.product.name);    
    I.waitForElement(productPage.product.btnAdd);
    I.click(productPage.product.btnAdd);    
    I.waitForVisible(productPage.modalValidationAddCart.modal);
    I.see(productPage.modalValidationAddCart.txtValidationSuccess, productPage.modalValidationAddCart.modal);        
});

Given('I go to the Cart page', () => {
    I.click(productPage.modalValidationAddCart.btnGoCheckout);    
    I.see(cartPage.title);    
});

Given('I see the correct product information', () => {
    I.seeTextEquals(productUtils.product.fullName, cartPage.cartItem.description);
    I.seeTextEquals(productUtils.product.unitPrice, cartPage.cartItem.unitPrice);
});

Given('I proceed to checkout to sign in', () => {
    I.click(cartPage.cartItem.btnCheckout);
    I.fillField(authenticationPage.signIn.email, authUtils.login.email);
    I.fillField(authenticationPage.signIn.password, authUtils.login.password);
    I.click(authenticationPage.signIn.btnSubmit);
});

Given('I confirm the delivery address and terms of service', () => {
    I.click(checkoutProcessPage.addresses.btnProceed);
    I.click(checkoutProcessPage.shipping.chkTerms);
    I.click(checkoutProcessPage.shipping.btnProceed);    
});

When('I choose the payment method', () => {
    I.click(checkoutProcessPage.payment.payCheck);
});

Then('I should see the order summary', async () => {
    let text = await I.grabTextFrom(checkoutProcessPage.payment.orderSummary);
    I.print(text);
});