package com.note.money.controller;

import com.note.money.domain.user.ExpenseGroup;
import com.note.money.domain.user.ExpenseGroupRepository;
import com.note.money.dto.CreateExpenseGroupRequest;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ExpenseGroupControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private ExpenseGroupRepository expenseGroupRepository;

    @DisplayName("Group 생성 테스트")
    @Test
    public void 그룹생성() throws Exception {
        //given
        String groupName = "미국여행";
        Long userId = null;
        CreateExpenseGroupRequest request = new CreateExpenseGroupRequest(groupName, userId);

        String url = "http://localhost:" + port + "/api/group";

        //when
        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, request, Long.class);

        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        List<ExpenseGroup> all = expenseGroupRepository.findAll();
        assertThat(all.get(0).getGroupName()).isEqualTo(groupName);
        assertThat(all.get(0).getUserId()).isEqualTo(userId);
    }
}