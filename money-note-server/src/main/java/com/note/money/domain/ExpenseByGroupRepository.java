package com.note.money.domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseByGroupRepository extends JpaRepository<ExpenseByGroup, Long> {
}
