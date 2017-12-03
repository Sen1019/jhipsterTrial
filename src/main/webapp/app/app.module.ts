import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterTrialSharedModule, UserRouteAccessService } from './shared';
import { JhipsterTrialAppRoutingModule} from './app-routing.module';
import { JhipsterTrialHomeModule } from './home/home.module';
import { JhipsterTrialAdminModule } from './admin/admin.module';
import { JhipsterTrialAccountModule } from './account/account.module';
import { JhipsterTrialEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterTrialAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterTrialSharedModule,
        JhipsterTrialHomeModule,
        JhipsterTrialAdminModule,
        JhipsterTrialAccountModule,
        JhipsterTrialEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterTrialAppModule {}
