package com.note.money.controller;

import com.note.money.dto.CreateExpenseGroupRequest;
import com.note.money.service.ExpenseGroupService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.net.URI;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/group")
@RestController
public class ExpenseGroupController {

    private final ExpenseGroupService service;

    @PostMapping
    public ResponseEntity<Long> create(@RequestBody @Valid CreateExpenseGroupRequest request) {
        Long id = service.create(request);
        log.info(String.valueOf(id));
//        System.out.println(ResponseEntity.created(URI.create("/api/group" + id)).build());

//        return new ResponseEntity<>(id, HttpStatus.CREATED);
        return ResponseEntity.created(URI.create("/api/group/" + id)).build();
    }
}
