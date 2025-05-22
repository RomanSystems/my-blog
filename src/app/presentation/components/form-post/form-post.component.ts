import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {PostModel} from '../../../core/models/post.model';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-form-post',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './form-post.component.html',
  styleUrl: './form-post.component.css'
})
export class FormPostComponent implements OnChanges{

  @Input() initialData?: any;

  @Output() submitArticle = new EventEmitter<PostModel>();
  @Output() cancelArticle = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      source: this.fb.group({
        id: [''],
        name: ['']
      }),
      author: [''],
      title: [''],
      description: [''],
      url: [''],
      urlToImage: [''],
      publishedAt: [''],
      content: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialData'] && this.initialData) {
      this.form.patchValue(this.initialData);
    }
  }

  onSubmit() {
    this.submitArticle.emit(this.form.value);
  }

  cancel(){
    this.cancelArticle.emit();
  }
}
