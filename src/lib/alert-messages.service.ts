import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertMessagesService {

  constructor() { }

  show(message:string, timeOut?:number, cssClass?:string, grayOut?:boolean) { }
}
