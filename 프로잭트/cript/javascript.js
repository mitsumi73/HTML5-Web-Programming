// Lấy nút Kakao Icon
const kakaoBtn = document.querySelector('.kakao-icon');

// Thêm sự kiện click
kakaoBtn.addEventListener('click', () => {
  // Tiến hành đăng nhập Kakao
  loginWithKakao();
});

function loginWithKakao() {
    // Khởi tạo Kakao SDK
    Kakao.init('YOUR_KAKAO_APP_KEY');
  
    // Tiến hành đăng nhập Kakao
    Kakao.Auth.login({
      success: function(authObj) {
        // Xử lý thành công đăng nhập
        console.log('Đăng nhập Kakao thành công:', authObj);
      },
      fail: function(err) {
        // Xử lý lỗi đăng nhập
        console.error('Đăng nhập Kakao thất bại:', err);
      }
    });
  }