import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edithamburguer',
  templateUrl: './edithamburguer.component.html',
  styleUrl: './edithamburguer.component.css',
})
export class EdithamburguerComponent {
  // burguer: any;
  // burguerId: any;

  // constructor(
  //   private route: ActivatedRoute,
  //   private service: ServiceService,
  //   private router: Router
  // ) {}

  // ngOnInit() {
  //   this.burguerId = this.route.snapshot.paramMap.get('id');
  //   this.service.getBurguer(this.burguerId).subscribe((res) => {
  //     console.log(res);
  //     this.burguer = res;
  //   });
  // }

  // updateBurguerFormData() {
  //   this.service.updateBurguer(this.burguer, this.burguerId).subscribe({
  //     next: (res: any) => {
  //       this.router.navigate(['/main']);
  //     },
  //   });
  // }

  burguerForm: FormGroup;
  ingredientControl = new FormControl('');
  ingredients: string[] = [];
  burguerId: any;

  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.burguerForm = this.fb.group({
      name: '',
      restaurant: '',
      web: '',
      description: '',
      ingredients: [[]],
    });
  }

  ngOnInit() {
    this.burguerId = this.route.snapshot.params['id'];
    this.service.getBurguer(this.burguerId).subscribe((res: any) => {
      this.burguerForm.patchValue({
        name: res.name,
        restaurant: res.restaurant,
        web: res.web,
        description: res.description,
        ingredients: res.ingredients,
      });
      this.ingredients = res.ingredients;
    });
  }

  addIngredient() {
    const ingredient = this.ingredientControl.value;
    if (ingredient) {
      this.ingredients.push(ingredient);
      this.burguerForm.patchValue({
        ingredients: this.ingredients,
      });
    }
  }

  onSubmit() {
    const formValue = this.burguerForm.value;
    formValue.ingredients = this.ingredients;
    this.service.updateBurguer(this.burguerId, formValue).subscribe((res) => {
      this.router.navigate(['/main']);
    });
  }
}
