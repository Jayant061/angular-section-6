import { style } from '@angular/animations';
import { Component, ContentChild, ElementRef, Input } from '@angular/core';
@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // host:{
  //   class:"control",
  //   "(click)":"onClick()"
  // }
})
export class ComtrolComponent {
@Input({required:true}) label !:string;

@ContentChild('input') inputEl?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
onClick(){
console.log(this.inputEl);
}
}
