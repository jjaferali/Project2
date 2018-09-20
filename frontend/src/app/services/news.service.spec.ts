import { TestBed, inject, async } from '@angular/core/testing';

import { NewsService } from './news.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { News } from '../models/news';

describe('NewsService', () => {

  let service: NewsService;
    let http: { request: jasmine.Spy };
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [NewsService]
        });
        http = jasmine.createSpyObj('HttpClient', ['request']);
        service = new NewsService(<any>http);
    }));

//     it('Get api method should return Array<INews>.', async(() => {
//         const mockResponse = {
//             data: [
//               { id: 0, title: 'News 0' },
//               { id: 1, title: 'News 1' },
//               { id: 2, title: 'News 2' },
//               { id: 3, title: 'News 3' },
//             ]
//           };
//         http.request.and.returnValue(new Observable<any>());
//         service.get('').subscribe(news => {
//             expect(news[0].id).toEqual(mockResponse[0].id);
//         });
//         expect(http.request.calls.count()).toBe(1);
//     }));

//     it('Delete should call http delete method.', async(() => {
//       http.request.and.returnValue(new Observable<any>());
//       service.delete(1).subscribe(news => {
//           expect(http.request.calls.count()).toBe(1);
//       });
//     }));
  
//     it('Post api method should create.', async(() => {
//       http.request.and.returnValue(new Observable<any>());
//       const newsobj = new News();
//       newsobj.newsId=1;
//       newsobj.title="News";
//       service.post(newsobj).subscribe(news => {
//           expect(http.request.calls.count()).toBe(1);
//       });
//   }));
});
