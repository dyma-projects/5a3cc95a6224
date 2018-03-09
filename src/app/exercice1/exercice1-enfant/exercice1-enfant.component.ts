import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  public valeur: number = 0 ;
  @Input() compteur: number = 0 ;
  @Output('valeurRecu') public compteur2: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  decrementer()
  {
    this.valeur --;
    this.compteur2.emit(this.valeur);
  }

  incrementer()
  {
      this.valeur ++;
      this.compteur2.emit(this.valeur);
  }

}
