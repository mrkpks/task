import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ErrorPageComponent } from "./error-page/error-page.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CampaignsComponent } from "./campaigns/campaigns.component";
import { PaymentsComponent } from "./payments/payments.component";
import { SupportComponent } from "./support/support.component";
import { MessagesComponent } from "./messages/messages.component";
import { AmbassadorDetailComponent } from "./ambassador-detail/ambassador-detail.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/ambassadors', pathMatch: 'full' },
  { path: 'ambassadors', component: DashboardComponent },
  { path: 'ambassadors/:id/detail', component: DashboardComponent },
  { path: 'campaigns', component: CampaignsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
