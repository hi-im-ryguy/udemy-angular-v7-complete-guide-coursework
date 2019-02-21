import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // (element selector)
  // selector: '.app-servers', used like <div class="app-servers"></div> (class selector)
  // selector: '[app-servers]', used like <div app-servers></div> (attribute selector)
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddNewServer = false;
  isServerCreated = false;
  serverName = '';
  serversList = [{serverName: 'TestServer'}, {serverName: 'TestServer2'}];
  newServerId = 2;

  constructor() {
    setTimeout(() => {
      this.allowAddNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onServerCreate() {
    this.serversList.push({serverName: this.serverName});
    this.isServerCreated = true;
    this.allowAddNewServer = false;
    console.log(this.serversList);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
