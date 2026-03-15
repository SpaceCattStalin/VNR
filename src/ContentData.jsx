import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CONTENT_ITEMS = [
  {
    id: 1,
    title: 'Đại hội VI (15-18.12.1986) ở Hà Nội, Hội trường Ba Đình',
    imageUrl:
      'https://dienbientv.vn/dataimages/202101/original/images2993470_c702a839bd99f082a51e57df86a03100_15912803337001729186861.jpg',
    imageUrl2: null,
    imageUrl3: null,
    points: [
      <>
        <p>
          Diễn ra từ ngày 15 đến 18/12/1986 ở Hà Nội tại Hội trường Ba Đình.
        </p>
        <img
          src="https://bvhttdl.mediacdn.vn/documents/20195/682302/ones.jpg"
          className="contentImage"
          alt=""
        />
        <p className="contentImageCaption">Quảng trường Ba Đình</p>
      </>,
      <>
        <p>
          Việt Nam bị các nước đế quốc và thế lực thù địch bao vây, cấm vận,
          lương thực, thực phẩm, hàng tiêu dùng khan hiếm.
        </p>
      </>,
      <>
        <p>
          Các hiện tượng tiêu cực, vi phạm pháp luật, vượt biên trái phép diễn
          ra phổ biến.
        </p>
      </>,
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
        <span
          className="contentInlineArrow"
          aria-hidden
          style={{ position: 'relative', top: 2 }}
        >
          <ArrowRight
            size={18}
            strokeWidth={4}
          />
        </span>
        <p style={{ margin: 0 }}>
          Đổi mới đã trở thành đòi hỏi bức thiết của tình hình đất nước.
        </p>
      </div>,
    ],
  },
  {
    id: 2,
    title: 'Tổng Bí thư Đảng Cộng Sản Việt Nam Nguyễn Văn Linh – "Nói và Làm"',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/vi/4/45/Nguy%E1%BB%85n_V%C4%83n_Linh.jpg',
    imageCaption: 'Tổng Bí thư Nguyễn Văn Linh (1915–1998).',
    points: [
      <p>Tên khai sinh là Nguyễn Văn Linh, sinh năm 1915-1998.</p>,
      <p>Ông đóng vai trò quan trọng trong công cuộc tái thiết đất nước.</p>,
      <p>
        Nổi tiếng với phương châm <strong>"Nói và Làm"</strong>.
      </p>,
      <div className="contentPointNoBullet">
        <span
          className="contentInlineArrow"
          aria-hidden
        >
          <ArrowRight
            size={18}
            strokeWidth={4}
          />
        </span>
        Công cuộc Đổi Mới của ông giúp VN vượt qua khủng hoảng kinh tế và bắt
        đầu hội nhập, phát triển.
      </div>,
      <>
        <img
          src="https://upload.wikimedia.org/wikipedia/vi/6/66/Nguy%E1%BB%85n_V%C4%83n_Linh_th%C4%83m_x%C3%AD_nghi%E1%BB%87p_may_t%C6%B0_nh%C3%A2n_Minh_Ch%C3%A2u.jpg"
          className="contentImage"
          alt=""
        />
        <p className="contentImageCaption">
          Ông Nguyễn Văn Linh thăm xí nghiệp may tư nhân Minh Châu trong chuyến
          thăm và làm việc tại tỉnh Quảng Nam- Đà Nẵng, năm 1987
        </p>
      </>,
    ],
  },
  {
    id: 3,
    title: 'Chính sách Đổi Mới của Tổng bí thư Nguyễn Văn Linh',
    imageUrl: null,
    points: [
      <p>
        Chuyển nền kinh tế từ bao cấp sang kinh tế thị trường có sự quản lý của
        Nhà nước.
      </p>,
      <p>
        Xóa bỏ cơ chế tập trung quan liêu, bao cấp; chuyển sang hạch toán kinh
        doanh xã hội chủ nghĩa.
      </p>,
      <p>
        Thực hiện ba chương trình kinh tế:{' '}
        <span className="contentPointHighlight--red">
          lương thực – thực phẩm
        </span>
        , <span className="contentPointHighlight--yellow">hàng tiêu dùng</span>,{' '}
        <span className="contentPointHighlight--green">hàng xuất khẩu</span>.
      </p>,
      <p>
        Phát huy quyền làm chủ của nhân dân, đổi mới cơ chế quản lý kinh tế.
      </p>,
      <p>
        Phương châm "Nói và Làm" – cam kết thực hiện cải cách và đưa ra quyết
        sách thực tiễn.
      </p>,
    ],
  },
  {
    id: 4,
    title: '4 định hướng phát triển',
    imageUrl: null,
    points: [
      <div className="contentPointNoBullet">
        Đại hội VI đã xác định bốn định hướng lớn cho sự phát triển đất nước
        trong thời kỳ đổi mới:
      </div>,
      <p>Lấy dân làm gốc.</p>,
      <p>Thực tế.</p>,
      <p>Sức mạnh đoàn kết dân tộc.</p>,
      <p className="needBullet">Xây dựng Đảng.</p>,
    ],
  },
  {
    id: 5,
    title: 'Lấy dân làm gốc',
    imageUrl:
      'https://vcdn1-video.vnecdn.net/2021/01/21/tbt-nguyen-van-linh-voi-doi-moi-1611224212-3283-1611224754.jpg',
    points: [
      <p className="contentIntro">
        Đây là bài học kinh nghiệm hàng đầu được đúc kết từ thực tiễn cách mạng,
        khẳng định sức mạnh vĩ đại của nhân dân.
      </p>,
      <p>
        Mọi chủ trương, chính sách của Đảng phải xuất phát từ{' '}
        <strong>nguyện vọng, quyền lợi và lợi ích chính đáng</strong> của nhân
        dân.
      </p>,
      <p>
        Đại hội VI nhấn mạnh: "Trong toàn bộ hoạt động của mình, Đảng phải quán
        triệt tư tưởng 'lấy dân làm gốc', xây dựng và phát huy quyền làm chủ của
        nhân dân lao động."
      </p>,
      <p>
        Phương châm thực hiện:{' '}
        <strong>"Dân biết, dân bàn, dân làm, dân kiểm tra"</strong> trở thành
        kim chỉ nam cho các chính sách đời sống và kinh tế.
      </p>,
    ],
  },
  {
    id: 6,
    title: 'Kết hợp sức mạnh dân tộc với sức mạnh thời đại',
    imageUrl: null,
    points: [
      <p className="contentIntro">
        Đây là bài học về việc phát huy nguồn lực nội sinh kết hợp với tận dụng
        thời cơ từ xu thế toàn cầu hóa.
      </p>,
      <p>
        <strong>Sức mạnh dân tộc:</strong> Là tinh thần đoàn kết, ý chí tự lực
        tự cường và sức sáng tạo của nhân dân được khơi dậy qua các chính sách
        mới.
      </p>,
      <p>
        <strong>Sức mạnh thời đại:</strong> Tranh thủ sự ủng hộ của các nước Xã
        hội chủ nghĩa, đồng thời mở rộng quan hệ với các quốc gia khác để phá bỏ
        thế bao vây, cấm vận.
      </p>,
      <p>
        <strong>Mục tiêu:</strong> Tận dụng tiến bộ khoa học - kỹ thuật và nguồn
        lực quốc tế để đưa đất nước thoát khỏi khủng hoảng, vững bước trên con
        đường XHCN.
      </p>,
    ],
  },
  {
    id: 7,
    title: 'Đổi mới cơ chế quản lý kinh tế',
    imageUrl: null,
    points: [
      <p className="contentIntro">
        Đại hội VI kiên quyết xóa bỏ cơ chế tập trung quan liêu, bao cấp để
        chuyển sang nền kinh tế hàng hóa nhiều thành phần.
      </p>,
      <p>
        <strong>Cơ cấu đa thành phần:</strong> Thừa nhận sự tồn tại bình đẳng
        của kinh tế nhà nước, tập thể, cá thể, tư bản tư nhân và tư bản nhà
        nước.
      </p>,
      <p>
        <strong>Cơ chế thị trường:</strong> Chuyển từ quản lý bằng mệnh lệnh
        hành chính sang hạch toán kinh doanh, kết hợp chặt chẽ giữa kế hoạch và
        thị trường.
      </p>,
      <p>
        <strong>Ba chương trình kinh tế:</strong> Tập trung tối đa nguồn lực
        cho: 1. Lương thực - thực phẩm; 2. Hàng tiêu dùng; 3. Hàng xuất khẩu.
      </p>,
    ],
  },
  {
    id: 8,
    title: 'Nông nghiệp: Khoán 10, giao đất về tay nông dân',
    imageUrl: '',
    points: [
      <p className="contentIntro">
        Nghị quyết 10 (tháng 4/1988) đã tạo nên bước ngoặt lịch sử, đưa hộ gia
        đình trở thành đơn vị kinh tế tự chủ.
      </p>,
      <>
        <img
          src="https://i2.ex-cdn.com/nongthonmoi.danviet.vn/files/f1/userfiles/images/thuy-10-2023/bi-thu-khoan-ho-va-vi-the-cua-nong-san-viet-nam-20240105172824_29052024152548_723.jpg"
          className="contentImage"
          alt=""
        />
        <p className="contentImageCaption">
          Ông Kim Ngọc, Bí thư Tỉnh ủy tỉnh Vĩnh Phúc, cha đẻ của "Khoán hộ"
          tiền thân của "Khoán 10"
        </p>
      </>,
      <p>
        <strong>Động lực mới:</strong> Nông dân được giao quyền sử dụng đất lâu
        dài (15-20 năm), tự chủ sản xuất và hưởng trọn vẹn sản phẩm sau khi nộp
        thuế.
      </p>,
      <p>
        <strong>Kết quả đột phá:</strong> Chỉ sau 1 năm (1989), Việt Nam từ nước
        thiếu đói đã sản xuất được 21,5 triệu tấn lương thực và lần đầu tiên
        xuất khẩu 1,2 triệu tấn gạo.
      </p>,
    ],
  },
  {
    id: 9,
    title: 'Đối ngoại: Hòa bình, Hữu nghị, Đa phương',
    imageUrl: null,
    points: [
      <p className="contentIntro">
        Chuyển từ đối đầu sang đối thoại với phương châm: "Việt Nam muốn làm bạn
        với tất cả các nước trong cộng đồng thế giới".
      </p>,
      <p>
        <strong>Bình thường hóa quan hệ:</strong> Nỗ lực hàn gắn với Trung Quốc
        (chính thức năm 1991) và gỡ bỏ dần các rào cản với các nước phương Tây.
      </p>,
      <div className="contentPointNoBullet">
        <img
          src="https://cand.com.vn/Files/Image/nguyenbinh/2019/02/18/b20a8e14-3d11-481a-879f-1a150af50d39.jpg"
          className="contentImage"
          alt=""
        />
        <p className="contentImageCaption">
          Tổng Bí thư Đỗ Mười hội đàm với Tổng Bí thư, Chủ tịch nước Trung Quốc
          Giang Trạch Dân tại Bắc Kinh, tháng 11-1991.
        </p>
      </div>,
      <p>
        <strong>Hội nhập khu vực:</strong> Đặt nền móng cho việc gia nhập ASEAN
        (1995), giúp Việt Nam thoát khỏi tình trạng bị cô lập và mở ra không
        gian phát triển mới.
      </p>,
    ],
  },
];
