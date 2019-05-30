const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;

Given('Abrir pagina busqueda Google', async function() {
    await testController.navigateTo('https://www.google.cl');
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

When('Validar resultados seleccionando {string}', async function(text) {
    var firstLink = Selector('#rso').find('div.BSaJxc').withText('').with({boundTestRun: testController});
    await this.addScreenshotToReport();
    await testController.click(firstLink);
});

Then('Presionar en link Recetas y mas', async function() {
	await (20000);
	var firstLink = Selector('#new_tottus_nav_cliente_recetas').find('img').with({boundTestRun: testController});
    await this.addScreenshotToReport();
    await testController.click('receta');
});

Then('Presionar en nivel alto', async function() {
	await this.addScreenshotToReport();
	await testController.click('[onclick*="clickfilterMo(3)"]');
});

Given('Abrir pagina busqueda Tottus', async function() {
    await testController.navigateTo('http://www.tottusrecetas.cl/');
});

Then('Seleccionar Corona de rollitos de canela', async function() {
    await this.addScreenshotToReport();
    await testController.click(Selector('#divRecipes>section>div>div:nth-child(4)>div:nth-child(2)>div>div.card-desc').find('h3').withText('Corona de rollitos de canela'));
});