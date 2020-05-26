import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { WyUiModule } from './wy-ui/wy-ui.module';
//import { WyPlayerModule } from './wy-ui/wy-player/wy-player.module';
// import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  declarations: [],
  imports: [
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    FormsModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzDropDownModule,
    WyUiModule,
    // WyPlayerModule
    // NzCarouselModule
  ],
  exports:[
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    FormsModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzDropDownModule,
    WyUiModule,
    // WyPlayerModule
    // NzCarouselModule
  ],
  schemas:[
    // CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class ShareModule { }
