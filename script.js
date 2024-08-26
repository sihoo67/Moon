document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작 방지

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // 입력값 검증
    if (!email || !username || !password || !confirmPassword) {
        alert('모든 필드를 입력해주세요.');
        return;
    }

    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    // 여기에 추가적인 유효성 검사를 구현할 수 있습니다.
    // 예: 이메일 형식 검사, 비밀번호 복잡성 검사 등

    // 모든 검증을 통과하면 회원가입 처리
    alert('회원가입이 완료되었습니다!\n이메일: ' + email + '\n아이디: ' + username);
    // 여기에 실제 회원가입 처리 로직을 추가할 수 있습니다.
});
