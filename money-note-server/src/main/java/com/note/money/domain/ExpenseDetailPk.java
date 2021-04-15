package com.note.money.domain;

import com.sun.istack.NotNull;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@NoArgsConstructor
public class ExpenseDetailPk implements Serializable {
    @NotNull
    private Long expenseId;

    @NotNull
    private Long categoryId;
}
