import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreateWalletComponent } from 'src/app/modules/create-wallet/create-wallet.component';
// import { ServicesComponent } from 'src/app/modules/services/services.component';
import { SearchComponent } from 'src/app/modules/search/search.component';
import { ResultComponent } from 'src/app/modules/result/result.component';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CreateWalletComponent,
    SearchComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    
  ]
})
export class DefaultModule { }
