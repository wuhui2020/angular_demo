import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NzCarouselModule} from 'ng-zorro-antd/carousel';
import { WyCarouselComponent } from './components/wy-carousel/wy-carousel.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { WyUiModule } from 'src/app/share/wy-ui/wy-ui.module';
import { ShareModule } from 'src/app/share/share.module';
import { MemberCardComponent } from './components/member-card/member-card.component';

@NgModule({
  declarations: [HomeComponent, WyCarouselComponent, MemberCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzCarouselModule,
    NzIconModule,
    ShareModule,
    // WyUiModule
  ],
  exports:[
    NzCarouselModule,
    NzIconModule,
    ShareModule,
    // WyUiModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class HomeModule { }
