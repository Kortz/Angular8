import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ServersService } from '../servers.service';

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {}

    resolve(route: ActivatedRouteSnapshot, status: RouterStateSnapshot) {
        return this.serversService.getServer(+route.params['id']);
    }
}
