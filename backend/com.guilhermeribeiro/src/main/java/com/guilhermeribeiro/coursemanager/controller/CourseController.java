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

    @PostMapping
    public ResponseEntity<Course> newCourse(@RequestBody Course course) {
        return ResponseEntity.status(HttpStatus.CREATED).body(courseRepository.save(course));
    }
}
