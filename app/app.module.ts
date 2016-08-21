import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeroBirthdayComponent } from './hero-birthday1.component';
import { HeroBirthday2Component } from './hero-birthday2.component';

@NgModule({
    imports: [
        BrowserModule,
        //FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        //FlyingHeroesComponent,
        //FlyingHeroesImpureComponent,
        //HeroAsyncMessageComponent,
        HeroBirthdayComponent,
        HeroBirthday2Component,
        //HeroListComponent,
        //PowerBoosterComponent,
        //PowerBoostCalculatorComponent,
        //FlyingHeroesPipe,
        //FlyingHeroesImpurePipe,
        //FetchJsonPipe,
        //ExponentialStrengthPipe
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

