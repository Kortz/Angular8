import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/shared/recipes.service';
import { NgForm, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  private editMode: boolean = false;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.editMode = params.id != null;
      }
    );

    this.form = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      ingredientData: new FormGroup({
        ingredientName: new FormControl(null),
        ingredientAmount: new FormControl(null)
      })
    });
  }

  submit() {
    console.log(this.form);
  }

}
