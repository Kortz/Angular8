import { Component, OnInit } from '@angular/core';
import { ServerElementComponent } from '../server-element/server-element.component';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverElements
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    // let server = new ServerElementComponent(type: 'server', name: this.newServerName, content: this.newServerContent);
    // this.serverElements.push(server);
  }

  onAddBlueprint() {
    // let server = new ServerElementComponent('blueprint', this.newServerName, this.newServerContent);
    // this.serverElements.push(server);
  }

  constructor() { }

  ngOnInit() {
  }

}
