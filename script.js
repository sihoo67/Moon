document.getElementById('find-id-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작 방지

    const email = document.getElementById('email').value;

    if (!email) {
        alert('이메일을 입력해주세요.');
        return;
    }

    // 이메일 형식 검증 (간단한 정규식 사용)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('유효한 이메일 주소를 입력해주세요.');
        return;
    }

    // 여기서 실제 아이디 찾기 로직을 구현합니다.
    // 예를 들어, 서버에 요청을 보내고 응답을 처리하는 코드가 들어갈 수 있습니다.
    alert('입력하신 이메일 주소로 아이디 재설정 링크를 보냈습니다: ' + email);
    
    // 폼 초기화
    this.reset();
});
