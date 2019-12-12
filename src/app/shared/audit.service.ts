export class AuditService {
    activeAudit = 0;
    inactiveAudit = 0;

    auditInactive() {
        this.inactiveAudit += 1;
        console.log('Total users marked inactive: ' + this.inactiveAudit);
    }

    auditActive() {
        this.activeAudit += 1;
        console.log('Total users marked active: ' + this.activeAudit);
    }
}
