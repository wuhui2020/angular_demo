import { Component, OnInit, ViewChild } from '@angular/core';
//import { HomeService } from 'src/app/services/home.service';
import { Banner, HotTags, Personalized, Singer } from 'src/app/services/data-types/common.types';
import { NzCarouselComponent} from 'ng-zorro-antd/carousel';
//import { SingerService } from 'src/app/services/singer.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';
import { SheetService } from 'src/app/services/sheet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0;
  banner:Banner[];
  hotTags:HotTags[];
  personalizedList:Personalized[];
  singerList:Singer[];
  @ViewChild(NzCarouselComponent,{static:true}) private nzCarousel:NzCarouselComponent;
  constructor(
    // private homeServe:HomeService,
    // private singerServe:SingerService,
    private sheetService:SheetService,
    private route:ActivatedRoute,
    ) { 
    // this.getBanner();
    // this.getHotTags();
    // this.getPersonalizedList();
    // this.getSingerList();
    this.route.data.pipe(map(res =>res.homeDatas)).subscribe(([banner,hotTags,personalizedList,singerList])=>{
      this.banner = banner;
      this.hotTags = hotTags;
      this.personalizedList = personalizedList;
      this.singerList = singerList;
    })
  }
  // private getBanner(){
  //   this.homeServe.getBanners().subscribe(res =>{
  //     this.banner = res;
  //   })
  // }
  // private getHotTags(){
  //   this.homeServe.getHotTags().subscribe(res =>{
  //     this.hotTags = res;
  //   })
  // }
  // private getPersonalizedList(){
  //   this.homeServe.getPersonalizedList().subscribe(res =>{
  //     this.personalizedList = res;
  //   })
  // }
  // private getSingerList(){
  //   this.singerServe.getSingers().subscribe(res =>{
  //     this.singerList = res;
  //   })
  // }
  ngOnInit(): void {
  }
  onBeforeChange(event){
    // console.log(event)
    this.carouselActiveIndex = event.to;
  }
  onChangeSlie(type:string){
    // console.log(type)
    this.nzCarousel[type]();
  }
  onPlaySheet(id:number){
    // console.log(id)
    // this.sheetService.getSongSheetDetail(id).subscribe(res=>{
    //   console.log(res)
    // })
    this.sheetService.playSheet(id).subscribe(res=>{
      console.log(res)
    })
  }
}
