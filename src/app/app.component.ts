import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fromRoot } from './store/index';
import { RootState } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'efects-example';

  error$: Observable<string>;
  data$: Observable<string>;
  JSON = JSON;
  
  constructor(private store: Store<{rootState: RootState}>) {
    this.error$ = this.store.select(fromRoot.getStateError);
    this.data$ = this.store.select(fromRoot.getStateSelectedData);
  }

  getApiData() {
    this.store.dispatch(fromRoot.ApiGetMockData({id: "random_ID"}));
  }

  getError() {
    this.store.dispatch(fromRoot.ApiGetMockDataWithError({id: "random_ID_Error"}))
  }


}
