import { NgModule,CUSTOM_ELEMENTS_SCHEMA, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PdiModule } from './modules/pdi/pdi.module';
import { PdiAccordionModule, PdiBadgeModule, PdiButtonsModule, PdiFilterChipModule } from '@pdi/platform-angular-template';
import { PdiCheckboxModule } from '@pdi/platform-angular-template';
import { PdiCardsModule } from '@pdi/platform-angular-template';
import { AdminComponent } from './admin/admin.component';
import { PdiComboBoxModule } from '@pdi/platform-angular-template';
import { PdiBreadcrumbModule } from '@pdi/platform-angular-template';

import { PdiInputModule } from '@pdi/platform-angular-template';
import { PdiFooterModule } from '@pdi/platform-angular-template';
import { PdiDatePickerModule } from '@pdi/platform-angular-template';

import { PdiLinkModule } from '@pdi/platform-angular-template';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdiModule,
    PdiButtonsModule,
    PdiCardsModule,
    PdiCheckboxModule,
    PdiBadgeModule,
    PdiAccordionModule,
    PdiBreadcrumbModule,
    PdiComboBoxModule,
    PdiFilterChipModule,
    PdiDatePickerModule,
    PdiFooterModule,
    PdiInputModule,
    PdiLinkModule
    
   
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
