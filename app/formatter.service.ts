import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { FormatResult } from './FormatResult'

@Injectable()
export class FormatterService {

  constructor(private http: Http) {}

  format(format: string, dateString: string): Observable<FormatResult> {
    return this.http
					 .post(`https://server.shaneqi.com/dateformatter`, JSON.stringify({format: format, date_string: dateString}))
					 .map(r => {
						 var dateString: string = (r.json().date_string as string);
						 var dateValue: string  = (r.json().date_value as string);
						 var result = new FormatResult();
						 result.dateString = dateString;
						 result.dateValue = dateValue;
						 return result;
					 });
  }

}