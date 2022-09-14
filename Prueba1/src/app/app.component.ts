import { Component, Input } from '@angular/core';
import { max, min } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba1';
  public nombre: string = 'Diego';
  public numero: number = 10;

  public sumar(n1: number, n2: number): number {
    return n1+n2;
  }

  public eventoBoton(event: Event):void {
    console.log(event);
  }

  public contador: number = 0;

  public aumentadorContador(): void{
    this.contador = this.contador + 1;
  }

  public scroll: number = 0;

  public scrollEn(event: Event): void {
    this.scroll = (event.target as Element).scrollTop
  }

  public imagen: string = 'https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2022/01/Solo-Leveling.jpg?w=1200&ssl=1';
  public imagen2: string = 'https://www.geekmi.news/__export/1618596849924/sites/debate/img/2021/04/16/solo_crop1618596776153.jpg_172596871.jpg'

  public valorActual: number = 0;

  public recibirParametro(evento: Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.valorActual = Number.parseInt(elemento.value) || 0;
  }

  public ancho: number = 0;

  public elementoEjecuta(evento1: Event):void{
    const elemento1 = evento1.target as HTMLInputElement
    this.ancho = Number.parseInt(elemento1.value)|| 0;
  }

  public alto: number = 0;

  public cambiarAlto(evento2: Event): void{
    const elemento2 = evento2.target as HTMLInputElement
    this.alto = Number.parseInt(elemento2.value)
  }

  public valorBarra: number = 0;

  public cambiarValorBarra(eventoBarra: Event): void{
    const elementoBarra = eventoBarra.target as HTMLInputElement;
    this.valorBarra = Number.parseInt(elementoBarra.value) || 0;
  }

  public tamanioFuente: number = 10;

  public cambiarFuente(eventoFuente: Event):void{
    const elemento = eventoFuente.target as HTMLInputElement
    this.tamanioFuente = Number.parseInt(elemento.value) || 0;
  }

  public color: string = '';

  public cambiarColor(EventoColor: Event): void{
    const elemento = EventoColor.target as HTMLInputElement;
    this.color = elemento.value;
  }
}
