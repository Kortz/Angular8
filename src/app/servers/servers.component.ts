import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component.ts';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverName: String = '';
  servers = [];
  serverCreated: boolean = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 
    3000);
  }

  ifValidServerName() {
    if (this.serverName != '') {
      this.allowNewServer = true;
    } else {
      this.allowNewServer = false;
    }
    return this.allowNewServer;
  }

  ngOnInit() {
  }

  onServerCreation() {
    var server = new ServerComponent();
    server.setServerName(this.serverName);
    server.setServerId(this.servers.length);

    this.servers.push(server);
    this.serverName = '';
    this.serverCreated = true;
  }
}