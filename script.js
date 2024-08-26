document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 방지
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('로그인 시도: ' + email);
        // 여기서 로그인 처리 로직을 추가
    } else {
        alert('이메일과 비밀번호를 입력해 주세요.');
    }
});
