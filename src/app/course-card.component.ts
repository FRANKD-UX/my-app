import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from './course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, RouterLink],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() course!: Course;
}

