package com.guilhermeribeiro.coursemanager.controller;

import com.guilhermeribeiro.coursemanager.model.Course;
import com.guilhermeribeiro.coursemanager.repository.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/courses")
@AllArgsConstructor
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping
    public List<Course> courseList() {
        return courseRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Course> findCourseById(@RequestParam(value = "id") Long id) {
        return courseRepository.findById(id)
                .map(course -> ResponseEntity.ok().body(course))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping(value = "/{code}")
    public ResponseEntity<Course> findCourseByCode(@RequestParam(value = "code") String code) {
        Course courseByCode = courseRepository.findByCode(code);

        if (courseByCode == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(courseByCode, HttpStatus.OK);
        }
    }

    @GetMapping(value = "/{name}")
    public ResponseEntity<List<Course>> findCourseByName(@RequestParam(value = "name") String name) {
        List<Course> courses = courseRepository.findByName(name);

        if (courses == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(courses, HttpStatus.OK);
        }
    }

    @PostMapping
    public ResponseEntity<Course> newCourse(@RequestBody Course course) {
        return ResponseEntity.status(HttpStatus.CREATED).body(courseRepository.save(course));
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long id, @RequestBody Course course) {
        return courseRepository.findById(id)
                .map(courseUp -> {
                    courseUp.setName(course.getName());
                    courseUp.setCode(course.getCode());
                    courseUp.setDuration(course.getDuration());
                    courseUp.setDescription(course.getDescription());
                    courseUp.setPrice(course.getPrice());
                    courseUp.setRating(course.getRating());
                    courseUp.setReleaseDate(course.getReleaseDate());
                    Course updated = courseRepository.save(courseUp);
                    return ResponseEntity.ok().body(updated);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        return courseRepository.findById(id)
                .map(courseDel -> {
                    courseRepository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
