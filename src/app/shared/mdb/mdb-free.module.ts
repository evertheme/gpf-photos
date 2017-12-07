// free
import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ButtonsModule } from 'ng-mdb-pro/free/buttons';
import { RippleModule } from 'ng-mdb-pro/free/ripple';
import { ActiveModule } from 'ng-mdb-pro/free/inputs';
import { NavbarModule } from 'ng-mdb-pro/free/navbars';
import { BsDropdownModule } from 'ng-mdb-pro/free/dropdown';
import { CarouselModule } from 'ng-mdb-pro/free/carousel/';
import { MDBChartsModule } from 'ng-mdb-pro/free/charts/';
import { CollapseModule } from 'ng-mdb-pro/free/collapse';
import { ModalModule } from 'ng-mdb-pro/free/modals';
import { MDBTooltipModule } from 'ng-mdb-pro/free/tooltip';
import { PopoverModule } from 'ng-mdb-pro/free/popover';

export {
  ButtonsModule, ButtonRadioDirective, ButtonCheckboxDirective
} from 'ng-mdb-pro/free/buttons/';

export {
  RippleModule, RippleDirective
} from 'ng-mdb-pro/free/ripple/';

export {
  ActiveModule, ActiveDirective, InputValidateDirective
} from 'ng-mdb-pro/free/inputs/';

export {
  NavbarModule
} from 'ng-mdb-pro/free/navbars/';

export {
  BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective,
  BsDropdownModule, BsDropdownState, BsDropdownToggleDirective
} from 'ng-mdb-pro/free/dropdown/';

export {
  CarouselComponent, CarouselConfig, CarouselModule
} from 'ng-mdb-pro/free/carousel/';

export {
  MDBChartsModule, BaseChartDirective
} from 'ng-mdb-pro/free/charts/';

export {
  CollapseDirective, CollapseModule
} from 'ng-mdb-pro/free/collapse/';

export {
  ModalBackdropComponent, ModalBackdropOptions, ModalDirective, ModalModule, ModalOptions, MDBModalService,
  ModalContainerComponent, MDBModalRef
} from 'ng-mdb-pro/free/modals/';

export {
  TooltipConfig, TooltipContainerComponent, TooltipDirective, MDBTooltipModule
} from 'ng-mdb-pro/free/tooltip/';

export {
  PopoverConfig, PopoverContainerComponent, PopoverModule, PopoverDirective
} from 'ng-mdb-pro/free/popover/';



const MODULES = [
  ButtonsModule,
  RippleModule,
  ActiveModule,
  NavbarModule,
  BsDropdownModule,
  CarouselModule,
  MDBChartsModule,
  CollapseModule,
  ModalModule,
  MDBTooltipModule,
  PopoverModule,
];

@NgModule({
  imports: [
    ButtonsModule,
    RippleModule.forRoot(),
    ActiveModule.forRoot(),
    NavbarModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    MDBChartsModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    MDBTooltipModule.forRoot(),
    PopoverModule.forRoot(),
  ],
  exports: MODULES,
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class MDBRootModule {
}

@NgModule({exports: MODULES})
export class MDBBootstrapModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: MDBRootModule};
  }
}
