import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  //creando la variable dataEntrante para usarla
  @Input() dataEntrante: any;
  //-------------------------------
  
  public image: string = '';
  constructor() {}

  ngOnInit(): void {
    this.image =
      'https://www.ecured.cu/images/f/fe/!2db33839a490847e8d061fe07bb1e99b.jpg';
    console.log('dataEntrante', this.dataEntrante);
  }
}
