import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './componentes/contador/contador.component';
import { UsoNglFComponent } from './componentes/uso-ngl-f/uso-ngl-f.component';
import { UsoNgForComponent } from './componentes/uso-ng-for/uso-ng-for.component';
import { UsoNgSwitchComponent } from './componentes/uso-ng-switch/uso-ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    UsoNglFComponent,
    UsoNgForComponent,
    UsoNgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
