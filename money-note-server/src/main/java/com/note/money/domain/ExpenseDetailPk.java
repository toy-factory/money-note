package com.note.money.domain;

import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Embeddable
@NoArgsConstructor
public class ExpenseDetailPk implements Serializable {
    @NotNull
    private Long expenseId;

    @NotNull
    private Long categoryId;
}
