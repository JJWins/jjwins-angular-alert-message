import { Component, OnInit } from '@angular/core';
import { AlertMessagesService } from './alert-messages.service';

@Component({
  selector: 'jjwins-alert-messages',
  template: `
    <div class="grayOutDiv" *ngIf="grayOut"></div>
    <div class="alert message {{cssClass}}" [ngClass]="{'closeBtn':showClosebtn}" *ngIf="showMessage">{{ alertMessage }}
      <button class="btn-close position-absolute end-0 pe-4" *ngIf="showClosebtn" (click)="closeAlert()"></button>
    </div>
  `,
  styles: [
    `
    .grayOutDiv
    {
        background-color: #333;
        opacity: 0.7;
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        overflow: hidden;
        z-index: 9999;
    }
    .message
    {
        z-index: 10000;
        position: relative;
        display:inline-block;
    }
    .closeBtn{
      padding-right: 2.5rem;
    }
    `
  ]
})
export class AlertMessagesComponent implements OnInit {
  alertMessage = '';
  timeOut:any = 0;
  grayOut:any = false;
  showMessage = false;
  cssClass:any = '';
  showClosebtn = false;

  constructor(private _alertMessageService: AlertMessagesService) {
     this._alertMessageService.show = this.show.bind(this)
   }

  ngOnInit(): void {
  }

  show(message:string, timeOut?:number, cssClass?:string, grayOut?:boolean) {
    this.showMessage = true;
    this.alertMessage = message;
    this.timeOut = timeOut;
    this.cssClass = cssClass;
    this.grayOut = grayOut;
      if(this.timeOut){
        setTimeout(() => {
            this.grayOut = false;
            this.showMessage = false
        }, this.timeOut);
      }
      else{
          this.showClosebtn = true
      }
    }

  closeAlert() {
    this.showMessage = false;
    this.grayOut = false;
  }

}
