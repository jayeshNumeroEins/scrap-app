import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './services/users.service';
import { UsersApi } from './api/users.api';
import { ApiService } from  './services/api.service';

const API = [UsersApi,ApiService];

const SERVICES = [
  UsersService
];

@NgModule({
  imports: [CommonModule],
})
export class CommonBackendModule {}
