import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { Ng2CompleterModule } from 'ng-mdb-pro/pro/autocomplete';
import { CardsModule } from 'ng-mdb-pro/pro/cards/';
import { MDBUploaderModule } from 'ng-mdb-pro/pro/file-input/';
import { MaterialChipsModule } from 'ng-mdb-pro/pro/tags/';
import { ProgressBars } from 'ng-mdb-pro/pro/progressbars/';
import { TabsModule } from 'ng-mdb-pro/pro/tabs-pills/';
import { ToastModule } from 'ng-mdb-pro/pro/alerts/';
import { SelectModule } from 'ng-mdb-pro/pro/material-select/';
import { MDBDatePickerModule } from 'ng-mdb-pro/pro/date-picker/';
import { TimePickerModule } from 'ng-mdb-pro/pro/time-picker/';
import { LightBoxModule } from 'ng-mdb-pro/pro/lightbox/light-box.module';
import { SidenavModule } from 'ng-mdb-pro/pro/sidenav/';
import { ChartSimpleModule } from 'ng-mdb-pro/pro/easy-charts/';
import { SqueezeBoxModule } from 'ng-mdb-pro/pro/accordion/';
import { MdbStickyModule } from 'ng-mdb-pro/pro/sticky-content/';
import { MDBPageScrollModule } from 'ng-mdb-pro/pro/smoothscroll/index';
import { CharCounterModule } from 'ng-mdb-pro/pro/inputs/';

export {
  Ng2CompleterModule, CompleterComponent, CompleterListItemComponent, CompleterService, LocalDataFactoryProvider,
  RemoteDataFactoryProvider, MdbCompleterDirective, MdbDropdownDirective, MdbInputDirective, MdbListDirective, MdbRowDirective
} from 'ng-mdb-pro/pro/autocomplete/';

export {
  CardsModule, CardRotatingComponent, CardRevealComponent
} from 'ng-mdb-pro/pro/cards/';

export {

  ProgressbarComponent, ProgressbarConfigComponent, ProgressbarModule, ProgressBars, ProgressDirective,
  ProgressSpinnerComponent, BarComponent
} from 'ng-mdb-pro/pro/progressbars/';

export {
  MaterialChipsComponent, MaterialChipsModule
} from 'ng-mdb-pro/pro/tags/';

export {
  TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule, NgTranscludeDirective
} from 'ng-mdb-pro/pro/tabs-pills/';

export {
  MDBSpinningPreloader
} from 'ng-mdb-pro/pro/preloader/preloader.service';

export {
  ToastComponent, ToastContainerDirective, ToastContainerModule, ToastInjector, ToastPackage, ToastRef, ToastIconClasses,
  ToastModule, ToastService, GlobalConfig, IndividualConfig, Overlay, OVERLAY_PROVIDERS, OverlayContainer, OverlayRef
} from 'ng-mdb-pro/pro/alerts/';

export {
  SelectModule, Diacritics, Option, OptionList, IOption, SELECT_VALUE_ACCESSOR, SelectComponent, SelectDropdownComponent
} from 'ng-mdb-pro/pro/material-select/';

export {
  MDBDatePickerComponent, MDBDatePickerModule, IMyCalendarDay, IMyCalendarViewChanged, IMyDate, IMyDateModel, IMyDateRange,
  IMyDayLabels, IMyInputAutoFill, IMyInputFieldChanged, IMyInputFocusBlur, IMyLocales, IMyMarkedDate, IMyMarkedDates,
  IMyMonth, IMyMonthLabels, IMyOptions, IMyWeek, IMyWeekday, InputAutoFillDirective, MYDP_VALUE_ACCESSOR, UtilService,
  LocaleService, FocusDirective
} from 'ng-mdb-pro/pro/date-picker/';

export {
  TimePickerModule, ClockPickerComponent
} from 'ng-mdb-pro/pro/time-picker/';

export {
  LightBoxModule, ImageModalComponent
} from 'ng-mdb-pro/pro/lightbox/';

export {
  SidenavComponent, SidenavModule
} from 'ng-mdb-pro/pro/sidenav/';

export {
  ChartSimpleModule, EasyPieChartComponent, SimpleChartComponent
} from 'ng-mdb-pro/pro/easy-charts/';

export {
  SBItemComponent, SBItemBodyComponent, SBItemHeadComponent, SqueezeBoxComponent , SqueezeBoxModule
} from 'ng-mdb-pro/pro/accordion/';

export {
  MdbStickyDirective, MdbStickyModule
} from 'ng-mdb-pro/pro/sticky-content/';

export {
  MDBPageScrollModule, PageScrollDirective, PageScrollConfig, PageScrollingViews, PageScrollInstance, PageScrollService,
  PageScrollTarget, PageScrollUtilService, EasingLogic
} from 'ng-mdb-pro/pro/smoothscroll/';

export {
  CharCounterDirective, CharCounterModule
} from 'ng-mdb-pro/pro/inputs';

export {
  MDBFileDropDirective, MDBFileSelectDirective, MDBUploaderModule, MDBUploaderService, UploadFile, UploadOutput,
  UploadInput, humanizeBytes
} from 'ng-mdb-pro/pro/file-input';

const MODULES = [
  Ng2CompleterModule,
  CardsModule,
  MDBUploaderModule,
  MaterialChipsModule,
  ProgressBars,
  TabsModule,
  ToastModule,
  SelectModule,
  MDBDatePickerModule,
  TimePickerModule,
  LightBoxModule,
  SidenavModule,
  ChartSimpleModule,
  SqueezeBoxModule,
  MdbStickyModule,
  MDBPageScrollModule,
  CharCounterModule
];

@NgModule({
  imports: [
    Ng2CompleterModule,
    CardsModule.forRoot(),
    MaterialChipsModule,
    ProgressBars.forRoot(),
    TabsModule.forRoot(),
    ToastModule.forRoot(),
    SelectModule,
    MDBDatePickerModule,
    TimePickerModule,
    LightBoxModule,
    SidenavModule,
    ChartSimpleModule,
    SqueezeBoxModule,
    MdbStickyModule,
    MDBPageScrollModule.forRoot(),
    CharCounterModule.forRoot()
  ],
  exports: MODULES,
  providers: [
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class MDBRootModulePro {
}

@NgModule({exports: MODULES})
export class MDBBootstrapModulePro {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: MDBRootModulePro};
  }
}
