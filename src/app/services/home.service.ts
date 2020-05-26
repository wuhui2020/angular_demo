import { Injectable, Inject } from '@angular/core';
import { ServicesModule, API_CONFIG } from './services.module';
import { Observable } from 'rxjs';
import { Banner, HotTags, Personalized } from './data-types/common.types';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators'

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http:HttpClient,@Inject(API_CONFIG) private url:string) { }
  //轮播图
  getBanners():Observable<Banner[]>{
    return this.http.get(this.url + 'banner')
    .pipe(map((res:{banners:Banner[]}) =>res.banners))
  }
  //热门标签
  getHotTags(){
    return this.http.get(this.url + 'playlist/hot')
    .pipe(map((res:{tags:HotTags[]}) =>{
      return res.tags.sort((x:HotTags,y:HotTags)=> {
        return x.position - y.position;
      }).slice(0,5);
    }))
  }
  //热门歌单
  getPersonalizedList(){
    return this.http.get(this.url + 'personalized')
    .pipe(map((res:{result:Personalized[]}) =>res.result.slice(0,16)));
  }
}
