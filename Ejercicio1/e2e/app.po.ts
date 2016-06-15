export class Ejercicio1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ejercicio1-app h1')).getText();
  }
}
