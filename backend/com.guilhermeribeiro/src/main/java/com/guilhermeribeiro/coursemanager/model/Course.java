package com.guilhermeribeiro.coursemanager.model;

import jakarta.persistence.*;
import lombok.Data;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "course")
public class Course implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String imageUrl;

    private double price;

    @Column(length = 8)
    private String code;

    private int duration;

    private double rating;

    private LocalDate releaseDate;

    private String description;

}
