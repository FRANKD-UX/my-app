import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from './course-card.component';
import { Course } from './course.model';
import { CourseService } from './course.service';
import { HeroComponent } from './hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, RouterLink, HeroComponent, CourseCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  courses: Course[] = [];

  heroTitle = 'Workplace Safety Training <em>That Works</em>';
  heroSubtitle = 'Accredited OHS training for South African workplaces. From fire fighting to forklift operation - we certify your team and keep your business compliant.';

  whyUsItems = [
    {
      icon: 'award',
      title: 'Fully Accredited',
      description: 'All courses are aligned with TETA, HPCSA, and DoL requirements. Our certificates are legally recognised across South Africa.'
    },
    {
      icon: 'map-pin',
      title: 'On-Site Training',
      description: 'We come to you. Our trainers deliver practical, hands-on training at your facility - minimising downtime and travel costs.'
    },
    {
      icon: 'clock',
      title: 'Flexible Scheduling',
      description: 'We work around your operational schedule. Weekend, early morning, and multi-shift training available on request.'
    },
    {
      icon: 'file-text',
      title: 'Complete Documentation',
      description: 'Full training registers, competency records, and certificates issued. We handle the compliance paperwork for you.'
    }
  ];

  constructor(private readonly courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }
}

