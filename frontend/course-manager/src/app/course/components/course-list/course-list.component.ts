import { AlertsService } from './../../alerts.service';
import { CourseService } from './../../course.service';
import { Course } from './../../course';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  course!: Course;
  courseSearch!: string;
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  labelPosition: 'name' | 'code' = 'code';

  imageteste: string = "/assets/"

  displayedColumns = ['id', 'name', 'code', 'price', 'rating', 'duration', 'actions']

  constructor(private courseService: CourseService, private alertsService: AlertsService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this.courses = courses;
        this.filteredCourses = this.courses;
      },
      error: erro => console.log('Error', erro)
    });
  }

  retrieveCourseByChoice() {
    if (this.labelPosition === 'name') {
      this.courseService.retrieveByName(this.courseSearch).subscribe({
        next: courses => {
          this.courses = courses;
          console.log(courses)
        },
        error: erro => console.log('Error', erro)
      });

    } else if (this.labelPosition === 'code') {
      this.courseService.retrieveByCode(this.courseSearch).subscribe({
        next: courses => {
          this.courses = courses;
          console.log(courses)
        },
        error: erro => console.log('Error', erro)
      });
    }
  }

  deleteById(courseId: number): void {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#004fe2',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.isConfirmed) {
        this.courseService.deleteById(courseId).subscribe({
          next: () => {
            console.log('Course deleted successfully.');
            this.retrieveAll();
          },
          error: erro => console.log('Error', erro)
        });
        Swal.fire(
          'Deleted!',
          'Course deleted successfully.',
          'success'
        )
      }
    });
  }

}
