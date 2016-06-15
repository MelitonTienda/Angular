import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ejercicio1AppComponent } from '../app/ejercicio1.component';

beforeEachProviders(() => [Ejercicio1AppComponent]);

describe('App: Ejercicio1', () => {
  it('should create the app',
      inject([Ejercicio1AppComponent], (app: Ejercicio1AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ejercicio1 works!\'',
      inject([Ejercicio1AppComponent], (app: Ejercicio1AppComponent) => {
    expect(app.title).toEqual('ejercicio1 works!');
  }));
});
