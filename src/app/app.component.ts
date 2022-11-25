import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translateService: TranslateService) {
    translateService.addLangs(['English','Hindi','Assamese','Bengali','Punjabi','tamil','Telugu','Urdu','Gujrati','Kannada','Malayalam','Marathi','Odia']);
    translateService.setDefaultLang('English');
  }

  translateSite(langauge: string) {
    this.translateService.use(langauge);
  }
}
