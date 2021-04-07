package com.note.money.user;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

public class UserServiceTest {

    UserService userService = new UserServiceImpl();
    @Test
    void join(){
        //given
        User user = new User("testId", "testPwd", "test");

        //when
        userService.join(user);
        User loginUser = userService.login("testId", "testPwd");

        //then
        Assertions.assertThat(user).isEqualTo(loginUser);
    }
}
