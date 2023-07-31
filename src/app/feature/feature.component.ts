import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {
  @Input() titulo: string = '';
  @Input() texto: string='';
  @Input() imagen: string='';
}
