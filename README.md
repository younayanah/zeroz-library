# 제로즈 무료 자료실

헨리 「콘텐츠 자동화 시스템」 PART 5를 제로즈에 맞게 만든 정적 사이트.

- 원본: 노션 '📘 DM 자료 모음 (무료 자료실 원본)' (collection://41ccf78e-e4cf-81d4-ba5b-000bc5abb74c)
- '📘 공개'인 자료만 올라간다. '🔴 공개 전'·'내림'은 올리지 않는다(이미 올라간 것은 내린다).
- 자료 앞부분 25%만 공개, 나머지는 이메일을 남기면 열린다(같은 브라우저에서 계속 열림).
- 이메일은 구글 폼으로 모은다(config.js의 formAction·emailEntry). 스티비 구독자 API는 유료(스탠다드)라 지금은 쓰지 않는다.
- 관리자 페이지: admin-def8d5781bdc.html (검색엔진 제외, 주소는 유나만)
- 매일 새벽 '제로즈 자료실 반영' 예약 작업이 노션을 읽어 data/library.json을 다시 쓰고, 바뀐 게 있을 때만 GitHub에 올린다 → Vercel이 자동으로 다시 배포한다. 결과는 data/sync.log 한 줄.

## data/library.json 모양
items[]: slug, title, field(다시 시작 | 회원 모으기 | 월 1000), kind, summary, date, notion(노션 페이지 주소), blocks[] ({t: h|p|li|quote|code, x: 글})
- 노션 글에 반복해서 들어간 배너·날짜 지난 안내는 빼고, '확인할 것 (유나)' 같은 내부 메모와 릴스 대본·캡션 부분은 넣지 않는다(회색 구분선 아래 '댓글 단 분께 보낼 자료'만).
