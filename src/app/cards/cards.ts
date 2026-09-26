import { Component, Input, OnInit } from '@angular/core';
import { Routes, RouterLink } from '@angular/router';
import { PostServicies } from '../servicies/post-servicies';
import { Post } from '../post/post';
import { UppercasePipePipe } from '../shared/pipes/uppercase-pipe-pipe';
import { Highlight } from '../shared/direttive/highlight';
import { CommonModule, NgClass } from '@angular/common';

//usa cards come componente che gestisce le cards sia di acive che di inactive! con <ng-content> e <app-cards>
@Component({
  selector: 'app-cards',
  imports: [CommonModule, NgClass, UppercasePipePipe, Highlight, RouterLink],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {

  constructor(private postServices: PostServicies){}

  @Input () post!: Post
}
