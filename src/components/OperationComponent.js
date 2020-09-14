import React, { Component } from "react";

export default class OperationComponent extends Component {
  render() {
    return (
      <div
        className="mt-4 container-fluid"
        style={{ fontFamily: "sans-serif" }}
      >
        <div>
          <h5 className="pb-2">01. TÀI KHOẢN CỦA QUÝ KHÁCH</h5>
          <p className="pb-2">
            Các thông tin họ tên, số điện thoại, email, account, mật khẩu được
            sử dụng là những thông tin bắt buộc liên quan tới việc đăng nhập,
            xác thực giao dịch hệ thống.
          </p>
          <p className="pb-2">
            Bạn chịu trách nhiệm duy trì tính bảo mật của tài khoản và mật khẩu,
            chịu trách nhiệm với toàn bộ các hoạt động xảy ra trong tài khoản
            hoặc mật khẩu của bạn. Yêu cầu người dùng điền chính xác và đầy đủ
            cảc thông tin cá nhân, để làm căn cứ xác minh, giải quyết các vấn đề
            tranh chấp, lừa đảo...
          </p>
          <p className="pb-2">
            Vitrans yêu cầu người sử dụng phải đủ tuổi vị thành niên 18 tuổi trở
            lên. Với các sản phẩm dành cho trẻ em, nhưng chỉ bán cho người lớn,
            hoặc cần có sự tham gia của cha mẹ hoặc người giám hộ nếu chưa đủ 18
            tuổi.
          </p>
          <p className="pb-2">
            Vitrans có quyền từ chối dịch vụ, chấm dứt tài khoản, chấm dứt quyền
            sử dụng dịch vụ hoặc chỉnh sửa/xoá nội dung đơn hàng theo ý riêng
            nếu thấy có bất hợp lý xảy ra.
          </p>
          <h5 className="pb-2">02. BẢN QUYỀN</h5>
          <p className="pb-2">
            Tất cả nội dung được bao gồm trong hoặc được cung cấp qua dịch vụ
            Vitrans, chẳng hạn như văn bản, đồ hoạ, biểu trưng, ​​biểu tượng
            nút, hình ảnh, clip âm thanh, tải xuống kỹ thuật số, biên soạn dữ
            liệu và phần mềm là tài sản của Vitrans hoặc các nhà cung cấp nội
            dung và được bảo vệ bởi luật pháp Nhật Bản và luật bản quyền quốc tế
          </p>
          <p className="pb-2">
            Việc biên soạn tất cả nội dung bao gồm trong hoặc được cung cấp qua
            dịch vụ Vitrans là tài sản độc quyền của Vitrans và được luật bản
            quyền Nhật Bản và quốc tế bảo vệ.
          </p>
          <h5 className="pb-2">03. THƯƠNG HIỆU</h5>
          <p className="pb-2">
            Thương hiệu và trang phục thương mại của Vitrans không được sử dụng
            liên quan đến bất kỳ sản phẩm hoặc dịch vụ nào không phải của
            Vitrans, dưới bất kỳ hình thức nào có thể gây nhầm lẫn giữa các
            khách hàng hoặc bằng bất kỳ cách nào làm mất uy tín hoặc ảnh hưởng
            tới Vitrans.
          </p>
          <p className="pb-2">
            Tất cả thương hiệu khác không thuộc sở hữu của Vitrans xuất hiện
            trong dịch vụ Vitrans là tài sản của chủ sở hữu tương ứng của họ.
          </p>
          <h5 className="pb-2">04. ĐÁNH GIÁ, Ý KIẾN</h5>
          <p className="pb-2">
            Bạn có thể đăng nhận xét, nhận xét, ảnh, video và nội dung khác, gửi
            e-card và các thông tin liên lạc khác, hoặc đưa ra các đề xuất, ý
            tưởng, nhận xét, câu hỏi hoặc thông tin khác, miễn là nội dung không
            bất hợp pháp, tục tĩu, đe dọa, phỉ báng, xâm phạm sự riêng tư, vi
            phạm quyền sở hữu trí tuệ (bao gồm quyền công khai) hoặc gây tổn
            hại, gây khó chịu cho bên thứ ba.
          </p>
          <p className="pb-2">
            Cấm truyền tải các phần mềm độc hại chứa virus, cấm các nội dung vận
            động chính trị, kỳ thị tôn giáo, sắc tộc, hoặc spam email, hoặc tin
            nhắn thương mại không mong muốn.
          </p>
          <p className="pb-2">
            Không được sử dụng thông tin giả mạo như email giả, thông tin cá
            nhân giả, hoặc nói cách khác là lừa dối về nội dung nào đó.
          </p>
          <p className="pb-2">
            Nếu người dùng cung cấp bất kỳ thông tin nào không trung thực hoặc
            không chính xác, hoặc nếu chúng tôi có cơ sở để nghi ngờ rằng thông
            tin đó không phải là thông tin trung thực hoặc không chính xác,
            chúng tôi có quyền đình chỉ tạm thời để xác minh hoặc chấm dứt việc
            sử dụng dịch vụ và từ chối toàn bộ việc sử dụng dịch vụ (hoặc bất kỳ
            phần nào của dịch vụ) tại thời điểm hiện tại hoặc sau này mà không
            phải chịu bất cứ trách nhiệm nào đối với người dùng.
          </p>
          <p className="pb-2">
            Mọi hành vi, lời nói, đánh giá hay truyền bá thông tin sai sự thật
            về hàng hoá, dịch vụ gây phương hại cho Vitrans hoặc bên thứ 3, sẽ
            bị cảnh cáo, hoặc truy tố trước pháp luật tuỳ mức độ thiệt hại gây
            ra.
          </p>
          <h5 className="pb-2">05. RỦI RO, MẤT MÁT</h5>
          <p className="pb-2">
            Vitrans đảm bảo hàng hoá xuyên suốt hành trình vận chuyển từ Nhật
            Bản về đến kho Vitrans tại Việt Nam.
          </p>
          <p className="pb-2">
            Trong trường hợp thông qua bên vận chuyển nội địa thứ 3 để chuyển
            hàng từ kho Vitrans đến tay người dùng thì khâu chuyển phát này được
            gán trách nhiệm đảm bảo theo cam kết của bên thứ 3 này, và Vitrans
            cùng nỗ lực đứng ra đàm phán với bên thứ 3 nếu bên thứ 3 gây ra lỗi
            ảnh hưởng đến quyền lợi của khách hàng.
          </p>
          <h5 className="pb-2">06. MÔ TẢ SẢN PHẨM</h5>
          <p className="pb-2">
            Vitrans cố gắng để mô tả sản phẩm một cách chính xác nhất có thể
          </p>
          <p className="pb-2">
            Do việc dịch thuật từ ngôn ngữ gốc tiếng Nhật, nên Vitrans không đảm
            bảo việc mô tả là là chính xác tuyệt đối, đầy đủ và không có lỗi.
          </p>
          <p className="pb-2">
            Trong trường hợp sản phẩm nhận được hoàn toàn khác so với mô tả trên
            website, Vitrans có trách nhiệm làm việc với người bán hoặc đại diện
            của Amazon Nhật Bản, Vitrans Nhật Bản để bảo vệ quyền lợi của người
            mua.
          </p>
          <h5 className="pb-2">07. GIÁ SẢN PHẨM</h5>
          <p>
            Thông tin về giá cả trong Vitrans.com là những thông tin được các
            cửa hàng và người bán cung cấp và phụ phí cần thanh toán cho
            Vitrans.
          </p>
          <p className="pb-2">
            Nếu các sản phẩm là sản phẩm đươc bán trên Amazon Nhật Bản hay
            Rakuten Nhật Bản, thì đó là giá chính xác được tính từ giá gốc trên
            các website nội địa trên và phần phụ phí Vitrans thu riêng.
          </p>
          <p className="pb-2">
            Giá cả và số lượng có trong kho thường xuyên thay đổi nên thông tin
            hiển thị trên website chỉ mang tính chất tham khảo. Thông tin chính
            xác sẽ được Vitrans gửi thông báo qua email hay điện thoại trực tiếp
            liên lạc từ bộ phận chăm sóc khách hàng tới khách hàng.
          </p>
          <h5 className="pb-2">08. THAY ĐỔI HOẶC HUỶ BỎ GIAO DỊCH</h5>
          <p className="pb-2">
            Khách hàng có quyền thay đổi hoặc huỷ bỏ giao dịch trong thời hạn
            cho phép cụ thể với từng sản phẩm theo chính sách của Vitrans, của
            Amazon Japan hoặc Rakuten Japan và phía thương nhân người bán cho
            phép
          </p>
          <p className="pb-2">
            Do vấn đề vận chuyển quốc tế tốn kém thời gian nên phần nào ảnh
            hưởng tới chính sách cho phép thay đổi, huỷ bỏ hay đổi trả hàng mà
            thương nhân người bán hay amazon/rakuten japan chấp thuận.
          </p>
          <h5 className="pb-2">09. XỬ PHẠT & CHÍNH SÁCH XUẤT NHẬP KHẨU</h5>
          <p className="pb-2">
            Nghiêm cấm các hành vi tấn công, hack, đánh cắp dữ liệu hay giả mạo,
            lừa đảo nếu bị phát hiện hoặc có căn cứ để nghi ngờ sẽ bị tạm dừng
            hoặc khoá dịch vụ, hoặc truy tố trước pháp luật Việt Nam.
          </p>
          <p className="pb-2">
            Có những sản phẩm được hiển thị bán trên website Vitrans mà không
            được phép bán ra khỏi đất nước Nhật hoặc không được phép nhập vào
            Việt Nam, hoặc không thể đưa lên máy bay vận chuyển
          </p>
          <p className="pb-2">
            Với trường hợp như vậy, Vitrans sẽ thông báo, giải thích chi tiết
            tới người mua, và thực hiện hoàn trả lại tiền nếu khách hàng đã
            thanh toán hoặc hỗ trợ người mua có thể đổi sản phẩm khác.
          </p>
          <p className="pb-4">
            Bạn có thể tham khảo thêm danh sách các hàng "không thể order".
          </p>
        </div>
      </div>
    );
  }
}
