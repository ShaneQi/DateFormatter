import { Component, OnInit } from '@angular/core';
import { BehaviorSubject }   from 'rxjs/BehaviorSubject';

import { FormatterService } from './formatter.service';
import { FormatResult } from './FormatResult';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [FormatterService]
})
export class AppComponent implements OnInit {

  private format = new BehaviorSubject("MMM. dd, yyyy HH:mm z");
  private dateString = new BehaviorSubject("Dec. 06, 1991 09:41 CDT");
	private formatResult = new FormatResult();

  constructor(
    private formatterService: FormatterService
		) {}

	setFormat(format: string) {
		this.format.next(format);
	}

	setDateString(dateString: string) {
		this.dateString.next(dateString);
	}

	ngOnInit(): void {
		this.format
      .debounceTime(300)
      .distinctUntilChanged()
			.subscribe(format => {
				this.formatterService
					.format(this.format.getValue(), this.dateString.getValue())
					.subscribe(r=>this.formatResult = r);
			});

		this.dateString
      .debounceTime(300)
      .distinctUntilChanged()
			.subscribe(format => {
				this.formatterService
					.format(this.format.getValue(), this.dateString.getValue())
					.subscribe(r=>this.formatResult = r);
			});

		(<HTMLInputElement>document.getElementById("format_input")).value = this.format.getValue();
		(<HTMLInputElement>document.getElementById("date_string_input")).value = this.dateString.getValue();
	}

}