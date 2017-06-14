import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelComponent } from './panel/panel.component';
import { ContentComponent } from './content/content.component';
import { PageToolbarComponent } from './page-toolbar/page-toolbar.component';
import { AppRoutingModule } from "./app-routing.module";
import { ErrorPageComponent } from './error-page/error-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { PaymentsComponent } from './payments/payments.component';
import { SupportComponent } from './support/support.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    PanelComponent,
    ContentComponent,
    PageToolbarComponent,
    ErrorPageComponent,
    DashboardComponent,
    CampaignsComponent,
    PaymentsComponent,
    SupportComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
