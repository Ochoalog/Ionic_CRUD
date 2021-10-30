import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apiService: ApiService) {
    //this.createData();
    //this.readData();
    //this.updateData();
    this.deleteData();
  }

  readData() {
    this.apiService.readData().subscribe(data => {
      console.log(data);
    });
  }

  createData() {
    const data: any = {
      title: 'Vitor',
      body: 'Teste',
      userId: 101
    };

    this.apiService.createData(data).subscribe(d => {
      console.log(d);
    });
  }

  updateData() {
    const data: any = {
      id: 1,
      title: 'Vitor',
      body: 'Teste',
      userId: 10
    };

    this.apiService.updateData(data).subscribe(d => {
      console.log(d);
    });
  }

  deleteData() {
    this.apiService.deleteData().subscribe(d => {
      console.log(d);
    });
  }
}
