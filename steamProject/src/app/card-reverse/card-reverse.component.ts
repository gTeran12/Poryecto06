import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-reverse',
  templateUrl: './card-reverse.component.html',
  styleUrls: ['./card-reverse.component.css']
})
export class CardReverseComponent {
  @Input() titulo: string = '';
  @Input() texto: string='';
  @Input() imagen: string='';
}
