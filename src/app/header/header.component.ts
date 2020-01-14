import { Component, EventEmitter, Output, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  collapsed = true;
  userSubscription: Subscription;
  userAuthenticated = false;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.userChanged.subscribe((user: User) => {
      if (user !== undefined || user !== null) {
        this.userAuthenticated = false;
      } else {
        this.userAuthenticated = user.isUserValid();
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  isLogoutEnabled() {
    return this.userAuthenticated;
  }

  onSaveData() {
    this.dataStorageService.saveData();
  }

  onFetchData() {
    this.dataStorageService.fetchData().subscribe();
  }
}
