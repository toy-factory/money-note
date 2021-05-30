package com.note.money.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.note.money.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
public class UserController {
    private final UserService userService;

    @GetMapping("/oauth2/kakao")
    public ResponseEntity<Void> oauth2KakaoAuthorization(@RequestParam("kakao_code") String kakao_code) throws JsonProcessingException {
        log.info("[get kakao_code] "+ kakao_code);
        userService.oauth2KakaoAuthorization(kakao_code);

        return ResponseEntity.ok().build();
    }

}
