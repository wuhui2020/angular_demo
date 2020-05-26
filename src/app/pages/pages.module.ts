import { NgModule} from '@angular/core';
import { ShareModule } from '../share/share.module';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { WyUiModule } from '../share/wy-ui/wy-ui.module';



@NgModule({
  declarations: [],
  imports: [
    // ShareModule,
    HomeModule,
    HomeRoutingModule,
    // WyUiModule
  ],
  exports:[
    // ShareModule,
    HomeModule,
    HomeRoutingModule,
    // WyUiModule
  ],
})
export class PagesModule { }
