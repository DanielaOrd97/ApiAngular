import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamburguer',
  templateUrl: './hamburguer.component.html',
  styleUrls: ['./hamburguer.component.css'],
})
export class HamburguerComponent implements OnInit {
  data: any[] = [];

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit() {
    this.llenarData();
  }

  llenarData() {
    this.service.getData().subscribe((data) => {
      this.data = data;
    });
  }

  onDelete(id: number) {
    //console.log(id);
    if (confirm('Are you sure you want to delete this?')) {
      this.service.deleteProduct(id).subscribe((res) => {
        this.llenarData();
      });
    }
  }

  editBurguer(id: string) {
    let currentBurguer = this.data.find((b) => {
      return b.id === id;
    });
    this.service.getBurguer(currentBurguer);
    //console.log(currentBurguer);
  }

  // editBurguer(id: string) {
  //   let currentBurguer = this.data.find((b) => b.id === id);
  //   this.service.setBurgerData(currentBurguer);
  //   console.log(currentBurguer);
  // }
}
