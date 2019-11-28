import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: [ './server.component.css' ]
})

export class ServerComponent {

  @Input() serverName: String;

  @Input() serverId: number;

  serverStatus: String;
  showMoreInfo: boolean = false;

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    this.serverName = ''
    this.serverId = 0;
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  setServerName(serverName: String) {
    this.serverName = serverName;    
  }

  getServerName() {
    return this.serverName;
  }

  setServerId(serverId: number) {
    this.serverId = serverId;
  }

  toggleMoreInfo() {
    this.showMoreInfo = !this.showMoreInfo;
  }

  getServerId() {
    return this.serverId;
  }
}