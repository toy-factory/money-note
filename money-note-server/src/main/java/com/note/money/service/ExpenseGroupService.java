package com.note.money.service;

import com.note.money.domain.user.ExpenseGroupRepository;
import com.note.money.dto.CreateExpenseGroupRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ExpenseGroupService {
    private final ExpenseGroupRepository expenseGroupRepository;

    @Transactional
    public Long create(CreateExpenseGroupRequest request) {
        return expenseGroupRepository.save(request.toEntity()).getGroupId();
    }
}
