import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api-service.service';

type Count = {
  count: number;
}
@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.sass']
})
export class CountComponent implements OnInit {

  count = 0;
  constructor(private apiService: ApiService) {
    this.getCount();
   }

  getCount() {
    this.apiService.getCount().subscribe((data: Count) => {
      this.count = data.count;
    })
  }

  updateCount(event: Event) {
    this.apiService.updateCount().subscribe((data: Count) => {
      this.count = data.count;
    });
  }
  ngOnInit(): void {
  }

}
