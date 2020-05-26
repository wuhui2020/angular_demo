//轮播图
export type Banner = {
    targetId:number;
    imageUrl:string;
    url:string;
}
//热门标签
export type HotTags = {
    id:number;
    name:string;
    position:number;
}

//歌手
export type Singer = {
    id:number;
    name:string;
    picUrl:string;
    albumSize:number;
}

//歌曲
export type Song = {
    id:number;
    name:string;
    url:string;
    ar:Singer[];
    al:{id:number;name:string;picUrl:string};
    dt:number;
}

//歌单
export type Personalized = {
    id:number;
    name:string;
    picUrl:string;
    playCount:number;
    tracks:Song[];
}

//播放地址
export type SongUrl = {
    id:number;
    url:string;
}
