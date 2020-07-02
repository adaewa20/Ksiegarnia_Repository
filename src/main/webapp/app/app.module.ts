import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { KsiegarniaSharedModule } from 'app/shared/shared.module';
import { KsiegarniaCoreModule } from 'app/core/core.module';
import { KsiegarniaAppRoutingModule } from './app-routing.module';
import { KsiegarniaHomeModule } from './home/home.module';
import { KsiegarniaEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    KsiegarniaSharedModule,
    KsiegarniaCoreModule,
    KsiegarniaHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    KsiegarniaEntityModule,
    KsiegarniaAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class KsiegarniaAppModule {}
