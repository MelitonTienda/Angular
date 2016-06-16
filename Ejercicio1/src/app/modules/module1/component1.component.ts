import {Component} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'Componente-1',
    template:`This is my firts component 1. Nombre: <span [style.color]="inputElement.value === 'yes' ? 'blue': 'red'">{{name}}</span>.
    <span [class.is-awesome]="inputElement.value === 'yes'">It´s awasome!</span>
    <br>
    <br>
    Is it awasome?
    <input type="text" #inputElement (keyup)="0">
    <button [disabled]="inputElement.value !== 'yes'">Only enabled if "yes" was entered</button>
    `, styleUrls: ['component1.css']
})

export class MyComponent1
{
    name: string='Melitón';
}
