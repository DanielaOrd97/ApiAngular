import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormControl, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { every } from 'rxjs';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhamburguer',
  templateUrl: './addhamburguer.component.html',
  styleUrl: './addhamburguer.component.css',
})
export class AddhamburguerComponent {
  // constructor(private service: ServiceService, private router: Router) {}
  // getBurguerFormData(data: any) {
  //   this.service.saveProduct(data).subscribe((result) => {
  //     this.router.navigate(['/main']);
  //   });
  // }
  burguerForm: FormGroup;
  ingredientControl = new FormControl('');
  ingredients: string[] = [];

  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private router: Router
  ) {
    this.burguerForm = this.fb.group({
      name: '',
      restaurant: '',
      web: '',
      description: '',
      ingredients: [[]], // Inicializa como un array vacío
    });
  }

  addIngredient() {
    const ingredient = this.ingredientControl.value;
    if (ingredient) {
      this.ingredients.push(ingredient);
      this.burguerForm.patchValue({
        ingredients: this.ingredients,
      });
      this.ingredientControl.reset();
    }
  }

  onSubmit() {
    this.service.saveProduct(this.burguerForm.value).subscribe((res) => {
      this.router.navigate(['/main']);
    });
  }
}
