const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;

Given('Abrir pagina busqueda Google', async function() {
    await testController.navigateTo('https://www.google.cl');
    await this.addScreenshotToReport();
});

When('Realizando busqueda de {string} en Google', async function(text) {
    var input = Selector('.gLFyf').with({boundTestRun: testController});
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

Then('Presionar {string} en Google', async function(text) {
	await this.addScreenshotToReport();
    await testController.pressKey(text);
});

When('Validar resultados seleccionando sitio web de {string}', async function(text) {
    var firstLink = Selector('#rso').find("span").withText(text).with({boundTestRun: testController});
    await this.addScreenshotToReport();
    await testController.click(firstLink);
});

Then('Acceder a Tottus', async function() {
    await (20000);
    var acceso = Selector('.CL9Uqc.ab_button').with({boundTestRun: testController});
    await this.addScreenshotToReport();
    await testController.click(acceso);
});

Then('Presionar en link Recetas y mas', async function() {
	await (20000);
	var receta = Selector('#new_tottus_nav_cliente_recetas').find("img").withText('receta').with({boundTestRun: testController});
    await this.addScreenshotToReport();
    await testController.click(receta);
});

Then('Presionar en nivel alto', async function() {
    var nivel = Selector('#myDIV > button:nth-child(4)').with({boundTestRun: testController});
	await testController.click(nivel);
    await this.addScreenshotToReport();
});

Given('Abrir pagina busqueda Tottus', async function() {
    this.addScreenshotToReport();
    await testController.navigateTo('http://www.tottusrecetas.cl/');
    this.addScreenshotToReport();
});

Then('Seleccionar Corona de rollitos de canela', async function() {
    this.addScreenshotToReport();
    var canela = Selector('#divRecipes > section > div > div:nth-child(4) > div:nth-child(2) > div > div.card-desc > h3').with({boundTestRun: testController});
    await testController.click(canela);
    this.addScreenshotToReport();

});
