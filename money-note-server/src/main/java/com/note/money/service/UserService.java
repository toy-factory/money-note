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

import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final KakaoOauth2 oauth2Kakao;

    public KakaoUserInfoResponse oauth2KakaoAuthorization(String kakao_code) throws JsonProcessingException {
        KakaoTokenResponse kakaoTokenResponse = oauth2Kakao.getAccessToken(kakao_code);
        KakaoUserInfoResponse kakaoUserInfoResponse = oauth2Kakao.getUserInfo(kakaoTokenResponse.getAccess_token());
        log.info("[access token]"+kakaoTokenResponse.getAccess_token());

        saveOrUpdate(kakaoUserInfoResponse);
        return kakaoUserInfoResponse;
    }

    private void saveOrUpdate(KakaoUserInfoResponse kakaoUserInfoResponse) {
        Optional<User> optionalUser = userRepository.findByEmail(kakaoUserInfoResponse.getKakao_account().getEmail());
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            existingUser.update(kakaoUserInfoResponse.getProperties().getNickname());
            userRepository.save(existingUser);
        } else {
            userRepository.save(kakaoUserInfoResponse.toEntity());
        }
    }
}
