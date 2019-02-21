import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverName: string = undefined;
  serverId: number = undefined;
  serverStatus: boolean = undefined;

  constructor() {
    this.serverId = Math.ceil(Math.random() * 10000);
    this.serverStatus = Math.random() > 0.5 ? true : false;
  }

  getColorBasedOnServerStatus() {
    return this.serverStatus === true ? 'green' : 'red';
  }

  getFontSizeBasedOnServerStatus() {
    return this.serverStatus === true ? '2rem' : '3rem';
  }

  getServerId() {
    return this.serverId;
  }

  getServerStatus() {
    return this.serverStatus;
  }

}

