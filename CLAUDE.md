# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project context

Website cho **Cơ Khí An Khang** (domain: **cokhiankhang.com**) — công ty Việt Nam chuyên:
- Gia công cơ khí công nghiệp theo yêu cầu
- Bán mặt hàng cơ khí công nghiệp, máy móc công nghiệp
- Phụ kiện thủy lực: ống, khớp nối, ren

Phạm vi: **catalog trưng bày sản phẩm + form yêu cầu báo giá**. Không có giỏ hàng, không có thanh toán online, không có tài khoản khách hàng. Đặt hàng B2B chốt qua điện thoại / Zalo sau khi khách gửi yêu cầu báo giá.

Đối tượng người dùng: doanh nghiệp sản xuất, kỹ sư mua hàng, kỹ thuật viên bảo trì.

## Stack & conventions

- **HTML/CSS/JavaScript thuần, không framework.** Không Next.js, không React, không build step. File `.html` mở trực tiếp được trong browser.
- **Không thêm dependency npm / bundler** trừ khi người dùng yêu cầu rõ ràng. Nếu cần thư viện UI, ưu tiên CDN (link `<script>` / `<link>`) thay vì npm install.
- **Song ngữ Việt + Anh.** Tiếng Việt là ngôn ngữ chính (khách hàng chủ yếu trong nước); tiếng Anh là phụ. Mọi nội dung mới phải có cả hai bản. Cơ chế chuyển ngữ đề xuất: data attribute (`data-vi`, `data-en`) + một file JS nhỏ đổi text theo `localStorage.lang`, không dùng i18n framework nặng.
- **Tiếng Việt LUÔN là mặc định khi mở trang** (kể cả khi browser của khách đặt `Accept-Language: en`). Khách có thể chuyển sang tiếng Anh bằng cách bấm vào **icon lá cờ** ở header — **2 lá cờ Việt Nam 🇻🇳 và Anh/Mỹ 🇬🇧** đặt cạnh nhau, lá cờ ngôn ngữ đang active được làm nổi bật (viền/opacity), không dùng dropdown hay text button "VI/EN". Lựa chọn của khách được lưu vào `localStorage` để giữ giữa các lần truy cập, nhưng lần đầu vào trang vẫn ra tiếng Việt.
- **Mobile-first.** Khách công nghiệp ở VN tra sản phẩm bằng điện thoại nhiều hơn desktop. Test responsive ở 360px width trước rồi mới mở rộng lên desktop.

## Assets

- `images/` chứa 45 ảnh sản phẩm thật (nhông xích, bánh răng, khớp nối, ống thủy lực, v.v.) — tên file dạng `z7852108xxxxxxx_*.jpg` từ điện thoại. **Không đổi tên hàng loạt** vì có thể đã được tham chiếu trong HTML. Khi cần dùng ảnh, đọc file để xem nội dung trước khi gắn vào sản phẩm phù hợp.
- Ảnh khá nặng (~150–420KB mỗi file). Nếu trang load chậm, cân nhắc tạo thumbnail trong thư mục `images/thumb/` thay vì sửa file gốc.

## Cấu trúc đề xuất (chưa được dựng)

Khi bắt đầu code, dùng layout đơn giản:

```
index.html              # Trang chủ
products.html           # Catalog tổng
products/<slug>.html    # Trang chi tiết từng dòng sản phẩm (hoặc 1 file + JS filter)
services.html           # Dịch vụ gia công
about.html              # Giới thiệu công ty
contact.html            # Form báo giá + thông tin liên hệ
assets/css/style.css
assets/js/main.js
assets/js/i18n.js       # Đổi VI/EN
images/                 # (đã có)
```

Trước khi tạo file mới, kiểm tra cấu trúc thực tế đã tồn tại — đề xuất trên chỉ là khởi điểm.

## Chạy local

Không có build step. Hai cách:

```powershell
# Mở thẳng index.html trong browser (đủ cho hầu hết việc)
start index.html

# Hoặc serve qua HTTP (cần khi test fetch JSON, routing tương đối)
python -m http.server 8000
# → http://localhost:8000
```

Không có test framework, không có linter cấu hình sẵn. Nếu cần kiểm tra HTML/CSS, dùng DevTools của browser.

## Deploy

Domain production: **cokhiankhang.com**. Chưa quyết định host. Vì là static thuần, mọi shared hosting / Netlify / Vercel / GitHub Pages / Cloudflare Pages đều chạy được. Hỏi người dùng trước khi cấu hình CI/CD và trước khi trỏ DNS.

Khi viết SEO meta tag, dùng:
- `<title>Cơ Khí An Khang | ...</title>` (viết hoa cả "Cơ" và "Khí")
- `og:url` → `https://cokhiankhang.com/...`

## Form báo giá

Không có backend trong dự án này. Khi dựng form contact/quote, mặc định submit qua một trong:
- `mailto:` link (đơn giản nhất, không cần server)
- Formspree / Web3Forms (service bên thứ ba, free tier)
- Zalo OA / Messenger plugin

**Hỏi người dùng chọn cách nào trước khi implement** — không tự ý gắn API key của service bên ngoài.

## Thông tin công ty (đã có)

Đầy đủ trong project memory ([[contact-info]], [[brand-identity]]) — luôn đọc memory trước khi điền footer/contact/about/meta. Tóm tắt:

- **Tên pháp nhân:** Công ty TNHH MTV Thương Mại Dịch Vụ Gia Công (TM-DV-GC) Cơ Khí An Khang (phần "(TM-DV-GC)" là một phần của tên, không phải chú thích)
- **Tên brand hiển thị:** Cơ Khí An Khang (viết hoa cả Cơ + Khí)
- **MST:** 1101757983
- **Trụ sở:** Đường A12C, KDC Tân Đức, Ấp Bình Tiền 1, Xã Đức Hòa, Tỉnh Tây Ninh — [Google Maps](https://maps.app.goo.gl/uYe2XiVR5VDuWL937)
- **Cửa hàng:** Cổng KCN Tân Đức, Ấp Bình Tiền 2, Xã Đức Hòa, Tỉnh Tây Ninh — [Google Maps](https://maps.app.goo.gl/R8EAwrqATgFkz1WH8)
- **ĐT:** 0987536810 (anh Chương) — gắn cả `tel:+84987536810` và `https://zalo.me/0987536810`
- **Email:** cokhiankhan@gmail.com — dùng cho `mailto:` form báo giá và footer (chú ý: KHÔNG có "g" cuối, khác với domain `cokhiankhang.com`)

Lưu ý: Đức Hòa cũ thuộc Long An; sau cải cách hành chính 2025 đã sáp nhập vào tỉnh Tây Ninh. Giấy phép gốc vẫn ghi Long An — không sửa thông tin pháp lý cũ.

## Nội dung sản phẩm

Tên sản phẩm và thông số kỹ thuật **chưa có dữ liệu**. Khi mô tả sản phẩm, hỏi người dùng hoặc để placeholder rõ ràng (`[CẦN BỔ SUNG: thông số]`) thay vì sáng tác thông số kỹ thuật.
