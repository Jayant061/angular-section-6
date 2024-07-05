import { Component, DestroyRef, inject, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  // this is the one way og using ngonit and ngDestroy
  // private interval?: ReturnType<typeof setInterval>;
  // ngOnInit() {
  //   this.interval = setInterval(() => {
  //     const randomVal = Math.random();
  //     if (randomVal <= 0.7) {
  //       this.currentStatus = 'online';
  //     } else if (randomVal < 0.9) {
  //       this.currentStatus = 'offline';
  //     } else {
  //       this.currentStatus = 'unknown';
  //     }
  //   }, 5000);
  // }
  // ngOnDestroy(){
  //   console.log(this.interval);
  //   clearInterval(this.interval);
  // }
  destroyRef = inject(DestroyRef);
  ngOnInit() {
      const interval = setInterval(() => {
        const randomVal = Math.random();
        if (randomVal <= 0.7) {
          this.currentStatus = 'online';
        } else if (randomVal < 0.9) {
          this.currentStatus = 'offline';
        } else {
          this.currentStatus = 'unknown';
        }
      }, 5000);
      this.destroyRef.onDestroy(()=>{
        clearInterval(interval);
      });
      
  }
}
