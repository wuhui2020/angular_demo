import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { SingerService } from 'src/app/services/singer.service';
import { Banner, HotTags, Personalized, Singer } from 'src/app/services/data-types/common.types';
import { Observable, forkJoin } from 'rxjs';
import { first } from 'rxjs/internal/operators';
type HomeDataType = [Banner[],HotTags[],Personalized[],Singer[]];
@Injectable()
//路由守卫-----------
export class HomeResolverService implements Resolve<HomeDataType> {
    constructor(
        private homeServe:HomeService,
        private singerServe:SingerService
    ) {}

    resolve(): Observable<HomeDataType> {
        return forkJoin([
            this.homeServe.getBanners(),
            this.homeServe.getHotTags(),
            this.homeServe.getPersonalizedList(),
            this.singerServe.getSingers(),
        ]).pipe(first());
    }
}