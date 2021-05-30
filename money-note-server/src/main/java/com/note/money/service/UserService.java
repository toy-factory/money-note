package com.note.money.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.note.money.config.auth.KakaoOauth2;
import com.note.money.config.auth.dto.KakaoTokenResponse;
import com.note.money.config.auth.dto.KakaoUserInfoResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class UserService {

    private final KakaoOauth2 oauth2Kakao;

    public void oauth2KakaoAuthorization(String kakao_code) throws JsonProcessingException {
        KakaoTokenResponse authorization = oauth2Kakao.getAccessToken(kakao_code);
        KakaoUserInfoResponse userInfoFromKakao = oauth2Kakao.getUserInfo(authorization.getAccess_token());
        log.info(String.valueOf(userInfoFromKakao.getId()));
    }
}
