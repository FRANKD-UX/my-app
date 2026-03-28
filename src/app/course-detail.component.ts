import { NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Course } from './course.model';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;
  activeModuleIndex = 0;

  private readonly destroyRef = inject(DestroyRef);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const id = params.get('id');
      if (!id) {
        this.router.navigate(['/']);
        return;
      }

      this.course = this.courseService.getCourseById(id);

      if (!this.course) {
        this.router.navigate(['/']);
      }
    });
  }

  setActiveModule(index: number): void {
    this.activeModuleIndex = index;
  }
}

