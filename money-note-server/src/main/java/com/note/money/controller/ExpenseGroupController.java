package com.note.money.controller;

import com.note.money.dto.CreateExpenseGroupRequest;
import com.note.money.service.ExpenseGroupService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/group")
@RestController
public class ExpenseGroupController {

    private final ExpenseGroupService service;

    @PostMapping
    public ResponseEntity<Void> create(@RequestBody @Valid CreateExpenseGroupRequest request) {
        Long id = service.create(request);
        log.info(String.valueOf(id));
        return ResponseEntity.ok().build();
    }
}
