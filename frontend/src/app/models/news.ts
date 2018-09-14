import { INews } from "./news.inteface";

export class News implements INews {
    newsId: number;
    id: number;
    name: string;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    isExist:boolean=false;
}