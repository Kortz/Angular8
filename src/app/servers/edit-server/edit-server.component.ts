import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: string;
  fragment: string;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    // console.log('Snapshot: ' + this.route.snapshot.queryParams);
    // console.log('Snapshot: ' + this.route.snapshot.fragment);

    // this.route.queryParams.subscribe(
    //   (p: Params) => {
    //     console.log('Subscribe: ' + p);
    //   }
    // );
    // this.route.fragment.subscribe(
    //   (fragment: string) => {
    //     console.log('Subscribe: ' + fragment);
    //   }
    // );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
