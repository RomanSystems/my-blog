import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-post-list-component',
  imports: [MatSlideToggleModule, MatCard, MatCardContent, MatIcon, MatButtonModule, MatCardFooter, MatCardHeader, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './post-list-component.component.html',
  styleUrl: './post-list-component.component.css'
})
export class PostListComponentComponent {

}
