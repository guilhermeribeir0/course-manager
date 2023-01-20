import { AlertsService } from './../../alerts.service';
import { CourseService } from './../../course.service';
import { Course } from './../../course';
import { Component, OnInit } from '@angular/core';

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
  filterBy!: string;
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
          next: course => {
            this.course = course;
            this.courses = [];
            this.courses.push(course)
            console.log(course)
          },
          error: erro => console.log('Error', erro)
        });
    }
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
        next: () => {
            console.log('Deletado com sucesso');
            this.retrieveAll();
        },
        error: err => console.log('Error', err)
    })
  }

}
