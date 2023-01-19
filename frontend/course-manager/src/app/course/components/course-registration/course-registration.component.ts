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

  courseForm = new FormGroup ({
      code: new FormControl(0, Validators.required),
      description: new FormControl(),
      duration: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.required),
      rating: new FormControl(0, Validators.required),
      releaseDate: new FormControl('', Validators.required)
  })

  constructor(private CourseService: CourseService, private router: Router) { }

  ngOnInit(): void {

  }

  cancel(): void {
    this.router.navigate(['/courses'])
  }

}
