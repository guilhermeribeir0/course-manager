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

  imageteste: string = "/assets/"

  displayedColumns = ['id', 'name', 'code', 'price', 'rating', 'duration', 'actions']

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
