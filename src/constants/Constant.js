const ROUTER = {
  HOME: "/trang-chu",
  USER: "/user",
  CONTACT: "/lien-he",
  INTRODUCE: "/gioi-thieu",
  SEARCHORDER: "/tra-cuu-don-hang",
  SEARCH: "/tim-kiem",
  ORDER_DETAIL: "/chi-tiet-don-hang",
  PRICE_TABLE: "/bang-gia-van-chuyen",
  NOT_FOUND: "/",
  OPERATION_REGULATION: "/quy-che-hoat-dong",
  WARRANTY_PERSONAL: "/chinh-sach-bao-hiem-ca-nhan",
  PRIVACY_POLICY: "/chinh-sach-bao-mat",
  PAYMENT_GUIDE: "/huong-dan-thanh-toan",
  Q_AND_A: "/cau-hoi-thuong-gap",
  ORDER_GUIDE: "/huong-dan-dat-hang",
};

const STRING = {
  collect_goods_statistical: "Thống kê doanh số gom hàng",
  cashier_statistical: "Thống kê thu ngân",
  order_statistical: "Thống kê đơn hàng",
  package_statistical: "Thống kê kiện hàng",
  sales_statistical: "Thống kê doanh số hệ thống",
  transport_provider_statistical: "Thống kê dự toán nhà xe",
  est_fee: "Phí vận chuyển",
  statistical: "Thống kê",
  System_overView: "Tổng Quan Hệ Thống",
  overView: "Tổng Quan",
  driver: "Tài xế",
  transport: "Xe",
  customer: "Khách hàng",
  money: "Số tiền",
  estimate: "Dự toán",
  configEst: "Cấu hình dự toán",
  buses: "Chuyến xe",
  numericalOrder: "STT",
  toast: "toast",
  user: "Người dùng",
  username: "Tên người dùng",
  clientName: "Tên khách hàng",
  client: "Khách hàng",
  order: "Đơn hàng",
  day_of_booking: "Ngày đặt",
  prepay: "Trả trước",
  postPaid: "Trả sau",
  collect: "Thu hộ",
  expected_cost: "Chi phí dự kiến",
  orderInfor: "Thông tin đơn hàng",
  orderHistory: "Lịch sử đơn hàng",
  actionInfor: "Thông Tin Hoạt Động",
  allSystem: "Toàn Hệ Thống",
  clientInfor: "Thông tin khách hàng",
  receiver: "Người nhận",
  sender: "Người gửi",
  report: "Báo cáo",
  namePhoneNumber: "Tên, Số điện thoại",
  status: "Trạng thái",
  fromDate: "Từ ngày",
  toDate: "Đến ngày",
  search: "Tìm kiếm",
  add: "Thêm mới",
  value: "Giá trị",
  order_value: "Giá trị đơn hàng",
  phoneNumber: "Số điện thoại",
  receiverPhone: "SĐT người nhận",
  email: "Email",
  group: "Nhóm người dùng",
  createdDate: "Ngày tạo",
  requestDate: "Ngày yêu cầu",
  address: "Địa chỉ",
  table: "Bảng",
  content: "Nội Dung",
  addressDetails: "Địa chỉ cụ thể",
  userType: "Loại người dùng",
  save: "Lưu",
  saveChange: "Lưu thay đổi",
  changeCost: "Sửa chi phí",
  exit: "Thoát",
  fullname: "Họ và tên",
  fullnameReceiver: "Họ và tên ",
  user_id: "Id người dùng",
  store: "Kho",
  staff: "Nhân sự",
  sales: "Doanh Số",
  staffType: "Nhóm nhân sự",
  staffName: "Tên nhân sự",
  personnel: "Nhân viên",
  numberCar: " Số xe",
  userProxy: "Người đại diện",
  sex: "Giới tính",
  dob: "Ngày sinh",
  hometown: "Quê quán",
  workingStore: "Kho làm việc",
  transportProviderName: "Tên nhà xe",
  workingRoute: "Tuyến xe đang hoạt động",
  workingTransport: "Xe đang hoạt động",
  workingDriver: "Tài xế đang hoạt động",
  licensePlate: "Biển số",
  chart: "Biểu Đồ",
  transportProvider: "Nhà xe",
  brand: "Hãng xe",
  payloadCapacity: "Tải trọng",
  route: "Tuyến xe",
  allow: "Duyệt",
  reject: "Từ chối",
  productionYear: "Năm sản xuất",
  collect: "Tiền thu hộ",
  carType: "Loại xe",
  weight: "Khối lượng(kg)",
  volume: "Số kiện",
  driverName: "Tên tài xế",
  identityCard: "Số CMND / CCCD",
  routeName: "Tên tuyến xe",
  startPoint: "Điểm đầu",
  endPoint: "Điểm cuối",
  TP_List: "Danh sách nhà xe",
  transportProvider_List: "Doanh số nhà xe",
  system_List: "Doanh số hệ thống",
  collectGoods_List: "Doanh số gom hàng",
  note: "Ghi chú",
  estimateTime: "Thời gian ước tính (giờ)",
  bankAccount: "Số tài khoản",
  bankOwnerName: "Tên chủ tài khoản",
  bankName: "Tên ngân hàng",
  affordableTransport: "Số xe đáp ứng",
  affordableVolume: "Thể tích đáp ứng",
  avatar: "Ảnh xác minh",
  time: "Thời gian",
  packTypeName: "Tên loại kiện",
  maxWeight: "Khối lương tương đương (kg)",
  createdByUser: "Người tạo",
  packRatio: "Tỉ lệ kiện",
  // ratio: "Tỉ lệ",
  COMMISSION: "Hoa hồng của điểm gom hàng",
  MIN_BALANCE: "Số dư tối thiểu",
  INTROSPECTION: "Nội tỉnh",
  OUT_SKIRT: "Liên tỉnh",
  PASSWORD: "Mật khẩu mặc định",
  RESERVED_TIME: "Thời gian giao ca",
  length: "Kích thước",
  packSizeName: "Tên kích thước",
  shiftName: "Tên ca",
  start_time: " Thời gian bắt đầu",
  end_time: "Thời gian kết thúc",
  all: "Tất cả",
  perForm: "Thực hiện",
  transportTypeName: "Tên loại xe",
  amount: "Số lượng",
  storeName: "Tên kho",
  parentStore: "Kho cha",
  mainStore: "Kho tổng",
  city_province: "Tỉnh/Thành phố",
  district: "Huyện",
  village: "Phường/Xã",
  timeNotifyTranSportProvider: "Thời gian thông báo lại cho nhà xe",
  reportBack: "Số lần thông báo lại",
  timeLockCar: "Thời gian chốt điều xe",
  numberPack: "Số kiện",
  guess: "Dự đoán",
  provinceStart: "Tỉnh xuất phát",
  provinceEnd: "Tỉnh kết thúc",
  transportType: "Loại vận chuyển",
  // carType: "Loại xe",
  packFit: "Kiện vừa",
  packBig: "Kiện to",
  ratio: "Tỷ lệ",
  provinceName: "Tên tỉnh/ thành phố",
  listTransportProvider: "Danh sách nhà xe",
  lengthTB: "Kích thước tương đương",
  garageName: "Tên gom hàng/ Nhà xe",
  collector: "Gom hàng",
  garageType: "Gom hàng/Nhà xe",
  price: "Số tiền",
  moneySum: "Tổng Tiền",
  confirm: "Xác nhận",
  addAria: "Thêm khu vực",
  area: "Khu vực",
  package: "Kiện hàng",
  packageCode: "Mã kiện hàng",
  warehouse: "Kho hàng",
  orderNumber: "Số đơn hàng",
  mass: "Cân nặng",
  packType: "Loại kiện",
  date: "Ngày",
  updateDate: "Ngày cập nhật",
  userUpdate: "Người cập nhật",
  description: "Mô tả",
  distance: "Lộ trình",
  addArea: "Thêm khu vực",
  overSize: "Kiện quá khổ",
  creator: "Người tạo",
  typeJob: "Loại CV",
  job: "Công việc",
  jobProcessing: "Công việc đang thực hiện",
  jobOutOfDate: "Công việc quá hạn",
  priorityLevel: "Mức ưu tiên",
  completedDate: "Ngày hoàn thành",
  ticket: "Ticket",
  codeJob: "Mã công việc",
  orderCode: "Mã đơn hàng",
  // package: "Mã kiện hàng",
  title: "Tiêu đề",
  level: "Mức độ",
  deadline: "Hạn HT",
  doing: "Đang thực hiện",
  completed: "Hoàn thành",
  timeOut: "Quá hạn",
  paymentType: "Hình thức thanh toán",
  paymentStatus: "TT Thanh toán",
  shippingFee: "Phí vận chuyển",
  boxCode: "Mã kiện hộp",
  infoPredictive: "Thông tin dự đoán",
  print_report: "In báo cáo",
  collect_goods: "Gom hàng",
  user_collect_goods: "Người gom hàng",
  printfReport: "In báo cáo",
  nameCashier: "Tên thu ngân",
  StoreOShipper: "Kho hàng/Shipper",
  Proceeds: "Tiền thu",
  DateOfCollection: "Ngày thu",
  orderStatistical: "Thống Kê Đơn Hàng",
  goods: "Hàng",
  car: "Xe",
  action: "Hành Động",
  active: "Hoạt Động",
  notPay: "Chưa trả",
  standard: "kiện 32kg",
  clearSearch: "Xóa tìm kiếm",
  changePassword: "ĐỔI MẬT KHẨU",
  newPassword: "mật khẩu mới",
  password: "mật khẩu cũ",
  unActive: "Ngừng hoạt động",
  changeCustomer: " Sửa thông tin khách hàng",
  // collector: " Người gom hàng",
  collectionDate: " Ngày thu",
  shift: "Ca làm việc",
  setting: "Thiết lập",
  cashier: "Thu ngân",
  listOrder: "Danh sách đơn hàng",
  transportCost: "Chi phí vận chuyển",
  parameterCost: "Thông số phí vận chuyển",
  alertRequest: "Mời chọn yêu cầu để thực hiện chức năng",
  requestWithdrawal: "Yêu cầu rút tiền",
  packageSum: "Tổng Kiện",
  NoOrder: "Chưa Có Đơn",
  Notdelivered: "Chưa Chuyển",
  atEndPoint: "Đã Đến Điểm Cuối",
  paid: "Đã Trả",
  notVehicle: "Chưa Thực Hiện Lệnh Điều Xe",
  classify: "Phân Loại",
  shipper: "Shipper",
  collectGoods: "Gom hàng",
  // requestWithdrawal: "Yêu Cầu Rút Tiền",
  orderSum: "Tổng Đơn",
  complete: "Hoàn Thành",
  graftPackage: "Đã Ghép Kiện",
  deliveredShipper: "Đã Giao Shipper",
  delivered: "Đã Chuyển",
  check: "Check in-out",
  manage: "Quản Lý",
  customerCare: "Chăm Sóc KH",
  upComing: "Sắp Tới",
  inventory: "Đang Ở Kho",
  tomorrow: "Ngày mai",
  startWeight: "Từ cân nặng",
  endWeight: "Đến cân nặng",
  stepWeight: "Đơn vị khối lượng",
  blockNormal: "Block (Thường)",
  blockFast: "Block (Thần tốc)",
  minFee: "Chi phí nhỏ nhất (Thường)",
  minFeeFast: "Chi phí nhỏ nhất (Thần tốc)",
  changeParameterCost: "Sửa thông số phí vận chuyển",
  addParameterCost: "Thêm thông số phí vận chuyển",
  ticketType: "Loại ticket",
  fromExpriedDate: "Từ ngày hoàn thành",
  toExpriedDate: "Đến ngày hoàn thành",
  modalFromExpriedDate: "Ngày hoàn thành",
  startDate: "Ngày bắt đầu",
  notifySuccess: "Thao tác thành công!",
  notifyFail: "Thao tác thất bại!",
  detail: "Xem chi tiết",
  areaName: "Tên khu vực",
  parentArea: "Khu vực",
  zone: "Khu vực",
  zoneName: "Tên khu vực",
  parentZone: "Khu vực cha",
  receiverName: "Tên người nhận",
  notificationData: "Không có dữ liệu nào để hiện thị!",
  salesCollection: "Doanh thu",
  TicketProcessing: "Ticket đang thực hiện",
  TicketOutOfDate: "Ticket quá hạn",
};

export { ROUTER, STRING };
