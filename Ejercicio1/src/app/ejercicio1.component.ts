import { Component } from '@angular/core';
import	{MyComponent1} from './modules/module1/component1.component'
import	{MyComponent2} from './modules/module2/component2.component'

@Component({
  moduleId: module.id,
  selector: 'ejercicio1-app',
  templateUrl: 'ejercicio1.component.html',
  styleUrls: ['ejercicio1.component.css'],
  directives:[MyComponent1,MyComponent2]
})
export class Ejercicio1AppComponent {
 title = 'ejercicio1 funcionando!.';
}
