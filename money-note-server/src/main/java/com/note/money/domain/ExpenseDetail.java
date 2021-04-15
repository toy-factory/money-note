package com.note.money.domain;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@NoArgsConstructor
@Entity
public class ExpenseDetail extends BaseTimeEntity{
    @Id
    private Long expenseId;

    @Id
    private Long categoryId;

    @NotNull
    private int expense;
}
