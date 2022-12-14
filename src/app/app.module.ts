import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LogService} from "./components/services/log.service";
import {UsersModule} from "./modules/users/users.module";


@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
      UsersModule
    ],
    providers: [LogService],

    bootstrap: [AppComponent]
})
export class AppModule { }
