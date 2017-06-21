import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { PanelComponent } from './dashboard/panel/panel.component';
import { PageToolbarComponent } from './dashboard/page-toolbar/page-toolbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { PaymentsComponent } from './payments/payments.component';
import { SupportComponent } from './support/support.component';
import { MessagesComponent } from './messages/messages.component';
import { AmbassadorDetailComponent } from './dashboard/ambassador-detail/ambassador-detail.component';
import { AmbassadorsService } from "./ambassadors.service";
import { StoreModule } from "@ngrx/store";
import { ambassadorReducer } from "./reducers/ambassador.reducer";
import { ShortlistItemComponent } from './dashboard/navbar/shortlist-item/shortlist-item.component';
import { SelectComponent } from './dashboard/navbar/select/select.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    PanelComponent,
    PageToolbarComponent,
    ErrorPageComponent,
    DashboardComponent,
    CampaignsComponent,
    PaymentsComponent,
    SupportComponent,
    MessagesComponent,
    AmbassadorDetailComponent,
    ShortlistItemComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.provideStore({
      ambassadors: ambassadorReducer
    })
  ],
  providers: [AmbassadorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
