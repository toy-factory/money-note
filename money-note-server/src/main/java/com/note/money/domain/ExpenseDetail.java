package com.note.money.domain;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class ExpenseDetail extends BaseTimeEntity{
    @EmbeddedId
    private ExpenseDetailPk expenseDetailPk;

    @NotNull
    private int expense;
}
