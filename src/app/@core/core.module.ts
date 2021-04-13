import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { CommonBackendModule } from './backend/common/common-backend.module';
import { UsersService } from './backend/common/services/users.service';
import { HttpService } from './backend/common/api/http.service';
import { ApiService } from './backend/common/services/api.service';
import { UsersApi } from './backend/common/api/users.api';
import { AuthApi } from './backend/common/api/auth.api';
@NgModule({
  imports: [
    CommonModule,
    CommonBackendModule
  ],
  exports: [],
  declarations: [],
  providers:[
    ApiService,
    UsersService,
    HttpService,
    UsersApi,
    AuthApi
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
