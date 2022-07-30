import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {


  private initialColor: string = '#f5f5f5'
  private defaultColor: string = '#009688'
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {    // ElementRef : est l'element qui vient de DOM ici c'est la carte pokemon, qui va être modifié
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }
  @Input('pkmnBorderCard')  borderColor: string  //avec alias
  @Input()  pkmnBorderCard: string  //sans alias


  // Cette annotation permet de lier une methode de notre directive à un evenement donné
  // ici on va écouter l'evenement d'entrée et sortie du souris
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  
  // Methode permettant de donner un hauteur à toute les cartes pokemon
  setHeight(height : number){
    this.el.nativeElement.style.height = `${height}px`;
  }
// Methode permettant de donner un bordure solid d'epaisseur 4px et de couleur #f5f5f5
  setBorder(color: string){
   this.el.nativeElement.style.border = `solid 4px ${color}`

  }

}
