import { Component, OnInit } from '@angular/core';
import { AlertMessagesService } from './alert-messages.service';

@Component({
  selector: 'jjwins-alert-messages',
  template: `
    <div class="grayOutDiv" *ngIf="grayOut"></div>
    <div class="message {{cssClass}}" [ngClass]="{'messsageRightPadding':showClosebtn}" *ngIf="showMessage">{{ alertMessage }}
      <button class="close-btn" *ngIf="showClosebtn" (click)="closeAlert()">&#10006;</button>
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
      padding: .5rem;
    }
    .messsageRightPadding{
      padding-right: .5rem;
    }
    .close-btn{
      border:none;
      border-radius:5px;
      background:none;
      cursor: pointer;
    }
    .alerts-message {
      border-radius: 12px;
      background-color: white;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 11px 35px rgba(0,0,0,0.23);
    }
    .alerts-error {
      border-radius: 12px;
      color: white;
      background-color: red;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 11px 35px rgba(0,0,0,0.23);
    }
    .alerts-warning {
      border-radius: 12px;
      color: white;
      background-color: #bf7100;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 11px 35px rgba(0,0,0,0.23);
    }
    .alerts-success {
      border-radius: 12px;
      color: white;
      background-color: #00bf71;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 11px 35px rgba(0,0,0,0.23);
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
