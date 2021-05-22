package com.note.money.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
@Entity
public class ExpenseByGroup extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long expenseId;

    private Long userId;

    @NotNull
    private Long groupId;

    @NotNull
    private int totalExpense;
}
