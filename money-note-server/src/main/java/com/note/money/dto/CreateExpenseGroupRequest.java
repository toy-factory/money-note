package com.note.money.dto;

import com.note.money.domain.user.ExpenseGroup;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@Getter
public class CreateExpenseGroupRequest {
    private static final int GROUP_NAME_SIZE = 20;

    @NotBlank
    @Length(max = GROUP_NAME_SIZE)
    private String groupName;

    private Long userId;

    public ExpenseGroup toEntity() {
        return ExpenseGroup.builder()
                .groupName(groupName)
                .totalExpense(0)
                .userId(userId)
                .build();
    }
}
