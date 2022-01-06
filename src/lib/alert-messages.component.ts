import { Component, OnInit } from '@angular/core';
import { AlertMessagesService } from './alert-messages.service';

@Component({
  selector: 'jjwins-alert-messages',
  template: `
    <div class="grayOutDiv" *ngIf="options.grayOut"></div>
    <div
      class="message {{ options.cssClass }}"
      [ngClass]="{ messsageRightPadding: showClosebtn }"
      *ngIf="showMessage"
    >
      {{ alertMessage }}
      <button *ngIf="showClosebtn" class="close-btn" (click)="closeAlert()">
        &#10006;
      </button>
    </div>
  `,
  styles: [
    `
      .grayOutDiv {
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
      .message {
        z-index: 10000;
        position: relative;
        display: inline-block;
        padding: 0.5rem;
      }
      .messsageRightPadding {
        padding-right: 0.5rem;
      }
      .close-btn {
        border: none;
        border-radius: 5px;
        background: none;
        cursor: pointer;
      }
      .alerts-message {
        border-radius: 12px;
        background-color: white;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 11px 35px rgba(0, 0, 0, 0.23);
      }
      .alerts-error {
        border-radius: 12px;
        color: white;
        background-color: red;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 11px 35px rgba(0, 0, 0, 0.23);
      }
      .alerts-warning {
        border-radius: 12px;
        color: white;
        background-color: #bf7100;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 11px 35px rgba(0, 0, 0, 0.23);
      }
      .alerts-success {
        border-radius: 12px;
        color: white;
        background-color: #00bf71;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 11px 35px rgba(0, 0, 0, 0.23);
      }
    `,
  ],
})
export class AlertMessagesComponent implements OnInit {
  alertMessage = '';
  showMessage = false;
  showClosebtn = false;
  options: any = {
    timeOut: 0,
    cssClass: '',
    grayOut: false,
  };

  constructor(private _alertMessageService: AlertMessagesService) {
    this._alertMessageService.show = this.show.bind(this);
  }

  ngOnInit(): void {}

  show(message: string, options?: any) {
    this.showMessage = true;
    this.alertMessage = message;
    if (options.timeOut) this.options.timeOut = options.timeOut;
    if (options.cssClass) this.options.cssClass = options.cssClass;
    if (options.grayOut) this.options.grayOut = options.grayOut;
    if (this.options.timeOut) {
      setTimeout(() => {
        this.options.grayOut = false;
        this.showMessage = false;
      }, this.options.timeOut);
    } else {
      this.showClosebtn = true;
    }
  }

  closeAlert() {
    this.showMessage = false;
    this.options.grayOut = false;
  }
}
