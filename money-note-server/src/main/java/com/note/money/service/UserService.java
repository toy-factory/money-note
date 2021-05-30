package com.note.money.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.note.money.config.auth.KakaoOauth2;
import com.note.money.config.auth.dto.KakaoTokenResponse;
import com.note.money.config.auth.dto.KakaoUserInfoResponse;
import com.note.money.domain.user.User;
import com.note.money.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final KakaoOauth2 oauth2Kakao;

    public void oauth2KakaoAuthorization(String kakao_code) throws JsonProcessingException {
        KakaoTokenResponse kakaoTokenResponse = oauth2Kakao.getAccessToken(kakao_code);
        KakaoUserInfoResponse kakaoUserInfoResponse = oauth2Kakao.getUserInfo(kakaoTokenResponse.getAccess_token());

        log.info(String.valueOf(kakaoUserInfoResponse.getId()));
        log.info(String.valueOf(kakaoUserInfoResponse.getKakao_account().getEmail()));
        log.info(String.valueOf(kakaoUserInfoResponse.getProperties().getNickname()));

        User user = saveOrUpdate(kakaoUserInfoResponse);
    }

    private User saveOrUpdate(KakaoUserInfoResponse kakaoUserInfoResponse) {
        User user = kakaoUserInfoResponse.toEntity();
        return userRepository.save(user);
    }
}
