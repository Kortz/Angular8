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

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 
    3000);
  }

  ngOnInit() {
  }

  onServerCreation() {
    this.servers.push(new ServerComponent());
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputEvent> event.target).value;
  }
}