import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: [ './server.component.css' ]
})

export class ServerComponent {

  serverId: number;
  serverStatus: String;

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    this.serverId = 10;
    this.serverStatus = 'Offline';
  }
}