import { Http } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ModelService {
    
    private baseUrl: string = 'http://news-at.zhihu.com/api/4/';

    constructor(private http: Http) {
    }
    
    getLatest(): Promise<LatestStory> {
        var promise = new Promise<LatestStory>((resolve, reject) => {
            try {
                this.http.get(this.baseUrl + 'stories/latest').subscribe(res => {
                    var json: LatestStory = res.json();
                    resolve(json);
                });
            } catch (error) {
                reject(error);
            }
        });
        return promise;
    }
    
    getThemes(): Promise<Themes> {
        var promise = new Promise<Themes>((resolve, reject) => {
            try {
                this.http.get(this.baseUrl + 'themes').subscribe(res => {
                    var json: Themes = res.json();
                    resolve(json);
                });
            } catch (error) {
                reject(error);
            }
        });
        return promise;
    }
    
    getThemeStory(id: string): Promise<ThemeStory> {
        var promise = new Promise<ThemeStory>((resolve, reject) => {
            try {
                this.http.get(this.baseUrl + 'theme/' + id).subscribe(res => {
                    var json: ThemeStory = res.json();
                    resolve(json);
                });
            } catch (error) {
                reject(error);
            }
        });
        return promise;
    }
}

export interface Story {
    id?: number;
    type?: number;
    title?: string;
    ga_prefix?: string;
    image?: string;
    images?: string[];
}

export interface LatestStory {
    date?: string;
    stories?: Story[];
    top_stories?: Story[]
}

export interface Theme {
    id?: number;
    name?: string;
    description?: string;
    thumbnail?: string;
    color?: number;
}

export interface Themes {
    limit?: number;
    subscribed?: Theme[];
    others?: Theme[];
}

export interface Editor {
    id?: number;
    name?: string;
    bio?: string;
    avatar?: string;
    url?: string;
}

export interface ThemeStory {
    id?: number;
    name?: string;
    image?: string;
    image_source?: string;
    color?: number;
    background?: string;
    description?: string;
    editors?: Editor[];
    stories?: Story[];
}
