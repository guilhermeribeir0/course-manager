import { Observable } from 'rxjs';
import { CourseService } from './../../course.service';
import { Course } from './../../course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];
  filteredCourses: Course[] = [];
  filterBy!: string;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: course => {
        this.courses = course;
        this.filteredCourses = this.courses;
      },
      error: erro => console.log('Error', erro)
    });
  }

  set filter(value: string) {
    this.filterBy = value;
    this.filteredCourses = this.courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this.filterBy;
  }

}
