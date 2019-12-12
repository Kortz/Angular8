import { Injectable } from '@angular/core';
import { AuditService } from './audit.service';

@Injectable()
export class UsersService {
    activeUsers: string[] = ['Max', 'Anna'];
    inactiveUsers: string[] = ['Chris', 'Manu'];

    constructor(private auditService: AuditService) {
    }

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.auditService.auditInactive();
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.auditService.auditActive();
    }

    getActiveUsers() {
        return this.activeUsers;
    }

    getInactiveUsers() {
        return this.inactiveUsers;
    }
}
