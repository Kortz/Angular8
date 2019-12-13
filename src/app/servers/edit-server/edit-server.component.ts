import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from '../../can-deactivate-guard.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: boolean;
  fragment: string;
  hasSaved: boolean = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id: number = +params['id'];
        this.server = this.serversService.getServer(id);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      }
    );

    this.route.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params['allowEdit'] === '1' ? true : false;
      }
    );
  }

  canDeactivate() {
    console.log('Deactivate!');
    if (!this.hasSaved && (this.serverName !== this.server.name || this.serverStatus !== this.server.status)) {
      return confirm('Discard all changes?');
    } else {
      return true;
    }
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.hasSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
