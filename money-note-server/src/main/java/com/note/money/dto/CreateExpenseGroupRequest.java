package com.note.money.dto;

import com.note.money.domain.user.ExpenseGroup;
import com.sun.istack.NotNull;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;

@Getter
public class CreateExpenseGroupRequest {
    @NotNull
    @Length(min = 1, max = 20)
    private String groupName;

    private Long userId;

    public ExpenseGroup toEntity() {
        return ExpenseGroup.builder()
                .groupName(groupName)
                .userId(userId)
                .build();
    }
}
