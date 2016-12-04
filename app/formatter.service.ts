import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class FormatterService {

  constructor(private http: Http) {}

  toString(format: string): Observable<string> {
		//return Observable.of<string>("123321");
    return this.http
               .post(`https://server.shaneqi.com/datefromstring`, {"format": format})
               .map((r: Response) => r.json().date_string as string);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
