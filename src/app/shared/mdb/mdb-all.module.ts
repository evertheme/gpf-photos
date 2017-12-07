import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule } from './mdb-free.module';
import { MDBBootstrapModulePro } from './mdb-pro.module';

export {
  MDBBootstrapModule
} from './mdb-free.module';

export {
  MDBBootstrapModulePro
} from './mdb-pro.module';

const MODULES = [
  MDBBootstrapModule,
  MDBBootstrapModulePro
];

@NgModule({
  imports: [
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
  ],
  exports: MODULES,
  providers: [
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class MDBRootModules {
}

@NgModule({exports: MODULES})
export class MDBBootstrapModules {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: MDBRootModules};
  }
}
