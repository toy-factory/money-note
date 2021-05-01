package com.note.money.dto;

import com.note.money.domain.user.ExpenseGroup;
import com.sun.istack.NotNull;
import lombok.Getter;

@Getter
public class CreateExpenseGroupRequest {
    @NotNull
    private String groupName;

    private Long userId;

    public ExpenseGroup toEntity() {
        return ExpenseGroup.builder()
                .groupName(groupName)
                .userId(userId)
                .build();
    }
}
