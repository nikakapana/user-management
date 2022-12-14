import { Injectable } from '@angular/core';
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  info(message: string) {
    console.info(message);
  }
  log(message: string) {
    console.log(message);
  }

  error(message: string) {
    console.error(message);
  }
}

