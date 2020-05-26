import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from '../services/services.module';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    AppRoutingModule //路由放最后面
  ],
  exports:[
    AppRoutingModule
  ]
})
export class CoreModule { 
  constructor(@SkipSelf() @Optional() parentModule:CoreModule){
    if(parentModule){
      throw new Error('CoreModule 只能被appModule引入')
    }
  }
}
