import { Ejercicio1Page } from './app.po';

describe('ejercicio1 App', function() {
  let page: Ejercicio1Page;

  beforeEach(() => {
    page = new Ejercicio1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ejercicio1 works!');
  });
});
