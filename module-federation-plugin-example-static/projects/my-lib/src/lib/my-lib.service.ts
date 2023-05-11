import { Injectable } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MyLibService implements OnDestroy {

  worker: Worker | undefined;
  graphs = new Subject<[]>();
  subscription: Subscription = new Subscription();
  constructor() {
  }


  registerWorker() {
    if (typeof Worker !== 'undefined') {
      // Create a new
     // this.worker = new Worker(new URL('./worker/app.worker', import.meta.url), {type: 'module'});
      this.worker.onmessage = ({ data }) => {
        console.log("on Message");
      };
    } else {
      // Web Workers are not supported in this environment.
    }
  }

  export() {

    if (!this.worker) {
      // lazy initialize worker & theme subscription.
      this.registerWorker();
      
    }

    this.worker?.postMessage({});

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.worker) {
      this.worker.terminate();
    }
  }
}
