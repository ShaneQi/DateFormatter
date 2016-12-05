import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { FormatterService } from './formatter.service';

import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [FormatterService]
})
export class AppComponent implements OnInit {

  private formatContent = new Subject<string>();
  private stringContent = new Subject<string>();

  stringFromDate: Observable<string>;
  dateFromString: Observable<string>;

  constructor(
    private formatterService: FormatterService) {}

  toString(format: string): void {
		this.formatContent.next(format);
  }

  toDate(stringContent: string): void {
		this.stringContent.next(stringContent);
  }

	ngOnInit(): void {
/*		this.stringFromDate = this.formatContent
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(format => format   // switch to new observable each time
        // return the http search observable
        ? this.formatterService.toString(format)
        // or the observable of empty heroes if no search term
        : Observable.of<string>("nil"))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<string>("nil");
      });
*/
			this.dateFromString = Observable.zip(this.stringContent, this.formatContent)
      .debounceTime(300)        // wait for 300ms pause in events
			.map(x=> {
				console.log("0: "+x[0]);
				console.log("1: "+x[1]);
				return x;
			})
      .switchMap(arr => arr   // switch to new observable each time
        // return the http search observable
        ? this.formatterService.toDate(arr[0], arr[1])
        // or the observable of empty heroes if no search term
        : Observable.of<string>("nil"))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<string>("nil");
      });

	}

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
