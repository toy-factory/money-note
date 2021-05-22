package com.note.money.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
@Entity
public class ExpenseDetail extends BaseTimeEntity{
    @EmbeddedId
    private ExpenseDetailPk expenseDetailPk;

    @NotNull
    private int expense;
}
