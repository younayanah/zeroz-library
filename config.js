// 제로즈 무료 자료실 설정
// 유나가 구글 폼을 만든 뒤 클로드가 아래 두 칸을 채운다.
// formAction: 구글 폼 주소의 /viewform 을 /formResponse 로 바꾼 것
// emailEntry: 이메일 질문의 entry 번호 (예: "entry.123456789")
window.ZEROZ_LIBRARY = {
  name: "제로즈 무료 자료실",
  tagline: "몸과 마음을 다루는 일로, 내 이름 걸고 일하는 선생님을 위한 무료 자료",
  previewRatio: 0.25,
  formAction: "https://docs.google.com/forms/d/e/1FAIpQLSfMboeDr03eL4ffhDxlm79c9OUhfW291UUy9RH3DKI404_bGA/formResponse",
  emailEntry: "emailAddress",
  consentText: "자료 안내와 제로즈 소식을 이메일로 받는 데 동의합니다. 언제든 수신 거부할 수 있어요.",
  kakaoUrl: "http://pf.kakao.com/_xoNWJX/chat",
  checklistUrl: "https://forms.gle/3TRwr84E5ZX13ryG9",
  fields: [
    { key: "다시 시작", title: "다시 시작", desc: "다시 내 이름으로 일하기 전에 정리할 것들" },
    { key: "회원 모으기", title: "회원 모으기", desc: "처음 본 회원이 나를 기억하게 하는 방법" },
    { key: "월 1000", title: "월 1,000", desc: "수업 하나를 생활이 되는 일로 바꾸는 방법" }
  ]
};
