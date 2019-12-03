import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ServerElementComponent } from '../server-element/server-element.component';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();;

  @Output('bpCreated')
  blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

  // newServerName = '';
  newServerContent = '';

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(serverNameInput.value);
    this.serverCreated.emit({serverName: serverNameInput.value, serverContent: this.newServerContent})
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({blueprintName: serverNameInput.value, blueprintContent: this.newServerContent})
  }

  constructor() { }

  ngOnInit() {
  }

}
