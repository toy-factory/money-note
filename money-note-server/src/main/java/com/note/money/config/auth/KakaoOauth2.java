package com.note.money.config.auth;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.note.money.config.auth.dto.KakaoTokenResponse;
import com.note.money.config.auth.dto.KakaoUserInfoResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Slf4j
@Component
@RequiredArgsConstructor
public class KakaoOauth2 {
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    private static final String API_KEY = "fe670d5116d85d40e249b90580fca9ce";
    private static final String REDIRECT_URL = "http://localhost:3000";

    public KakaoTokenResponse getAccessToken(String code) throws JsonProcessingException {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", API_KEY);
        params.add("redirect_uri", REDIRECT_URL);
        params.add("code", code);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(params, httpHeaders);

        String url = "https://kauth.kakao.com/oauth/token";
        ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);

        return objectMapper.readValue(response.getBody(), KakaoTokenResponse.class);
    }

    public KakaoUserInfoResponse getUserInfo(String accessToken) throws JsonProcessingException {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Authorization", "Bearer " + accessToken);
        httpHeaders.set("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(params, httpHeaders);

        String url = "https://kapi.kakao.com/v2/user/me";
        ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);

        return objectMapper.readValue(response.getBody(), KakaoUserInfoResponse.class);
    }
}