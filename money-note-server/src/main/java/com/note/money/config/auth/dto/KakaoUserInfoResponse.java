package com.note.money.config.auth.dto;

import lombok.Getter;

@Getter
public class KakaoUserInfoResponse {
    private Long id;
    private KakaoAccount kakao_account;
    private String synched_at;
    private String connected_at;
    private Properties properties;

    @Getter
    public class KakaoAccount {
        private Profile profile;
        private String email;
        private String age_range;
        private String birthday;
        private String birthyear;
        private String gender;
        private String phone_number;
        private String ci;

        @Getter
        public class Profile {
            private String nickname;
            private String profile_image_url;
            private String thumbnail_image_url;
            private boolean profile_needs_agreement;
            private boolean is_default_image;
        }

    }

    @Getter
    public class Properties {
        private String nickname;
        private String profile_image;
        private String thumbnail_image;
    }
}
