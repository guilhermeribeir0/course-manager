import { AlertsService } from './../../alerts.service';
import { CourseService } from './../../course.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from './../../course';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.css']
})
export class CourseRegistrationComponent implements OnInit {

  course!: Course;

  courseForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    description: new FormControl(''),
    duration: new FormControl(0.00, Validators.required),
    name: new FormControl('', Validators.required),
    price: new FormControl(0.00, Validators.required),
    rating: new FormControl(0.00, Validators.required),
    releaseDate: new FormControl('', Validators.required)
  })

  constructor(private CourseService: CourseService, private router: Router, private alertService: AlertsService) { }

  ngOnInit(): void {

  }

  saveNewCourse() {
    const course = this.courseForm.value as Course;
    this.CourseService.save(course).subscribe({
      next: courseRegistration => {
        this.alertService.alertSucess('Successfully registered course');
        this.router.navigate(['/courses'])
        console.log(course);
      }, error: erro => {
        this.alertService.alertError('Check the information and try again');
        console.log(erro);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/courses'])
  }

}
