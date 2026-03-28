import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly contactEmail = 'info@njcfirecontrol.co.za';

  contactForm: FormGroup;
  isSubmitted = false;
  isSubmitting = false;

  courseOptions = [
    { value: 'fire-fighting', label: 'Basic Fire Fighting' },
    { value: 'forklift', label: 'Forklift Operation' },
    { value: 'overhead-crane', label: 'Overhead Crane Operation' },
    { value: 'first-aid', label: 'First Aid in the Workplace' },
    { value: 'ohs', label: 'Occupational Health & Safety' },
    { value: 'multiple', label: 'Multiple Courses / Custom Package' }
  ];

  constructor(private readonly fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s()-]{10,15}$/)]],
      course: ['', Validators.required],
      delegates: ['', [Validators.required, Validators.min(1)]],
      message: ['']
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { fullName, company, email, phone, course, delegates, message } = this.contactForm.getRawValue();
    const selectedCourse = this.courseOptions.find((option) => option.value === course)?.label ?? course;
    const subject = `Training enquiry from ${company}`;
    const body = [
      'Training enquiry details:',
      '',
      `Full name: ${fullName}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Course of interest: ${selectedCourse}`,
      `Number of delegates: ${delegates}`,
      '',
      'Additional information:',
      message || 'No additional information provided.'
    ].join('\n');
    const mailtoUrl =
      `mailto:${this.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    this.isSubmitting = true;
    window.location.href = mailtoUrl;
    this.isSubmitting = false;
    this.isSubmitted = true;
  }
}
