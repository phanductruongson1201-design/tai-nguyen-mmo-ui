// =============================================
// SERVICES.JS — Danh sách tất cả sản phẩm
// Chỉnh sửa file này để thêm/bớt/sửa sản phẩm
// =============================================

const products = [
// ── TÍCH XANH FACEBOOK ──
{id:1,name:"TÍCH XANH FACEBOOK - V1 BUSINESS",cat:"tich-xanh",icon:"✅",price:"299.000đ",stock:12,sold:89,badge:"hot",desc:"Tài khoản Facebook đã được tích xanh xác minh chính chủ. Độ uy tín cao, phù hợp chạy quảng cáo và marketing thương hiệu."},
{id:2,name:"TÍCH XANH FACEBOOK - V2 CREATOR",cat:"tich-xanh",icon:"✅",price:"350.000đ",stock:8,sold:45,badge:"hot",desc:"Tích xanh Creator - dành cho trang cá nhân nổi bật, uy tín cao, hỗ trợ monetize nội dung."},
{id:3,name:"TÍCH XANH FACEBOOK - V3 FANPAGE",cat:"tich-xanh",icon:"✅",price:"450.000đ",stock:5,sold:22,badge:"hot",desc:"Fanpage đã được tích xanh, ngưỡng 10.000 follow. Thương hiệu uy tín, dùng cho marketing doanh nghiệp."},

// ── FANPAGE REG ──
{id:4,name:"FANPAGE REG MỚI - RANDOM QUỐC GIA",cat:"fanpage-reg",icon:"📄",price:"15.000đ",stock:1420,sold:3200,badge:"new",desc:"Fanpage mới reg, chưa vi phạm. Random quốc gia. Phù hợp nuôi và dùng chạy ads."},
{id:5,name:"FANPAGE REG VIỆT NAM - NAME VIỆT",cat:"fanpage-reg",icon:"📄",price:"20.000đ",stock:540,sold:1100,badge:"new",desc:"Fanpage Việt Nam tên thuần Việt, dễ dàng target thị trường trong nước."},
{id:6,name:"FANPAGE REG USA - TÊN ANH",cat:"fanpage-reg",icon:"📄",price:"25.000đ",stock:300,sold:780,badge:"",desc:"Fanpage reg mới tên tiếng Anh, phù hợp chạy ads thị trường Mỹ và quốc tế."},
{id:7,name:"FANPAGE REG - NHÓM TỪ 5 PAGE",cat:"fanpage-reg",icon:"📄",price:"80.000đ",stock:200,sold:450,badge:"",desc:"Gói 5 fanpage reg mới, tiết kiệm khi mua số lượng. Random quốc gia."},

// ── PAGE KHÁNG ──
{id:8,name:"PAGE KHÁNG BILL V1 - DÒNG 1",cat:"page-khang",icon:"🛡️",price:"89.000đ",stock:34,sold:210,badge:"",desc:"Page kháng bill mạnh dòng 1, đã test qua. Không cần xác minh thêm, chạy ổn định."},
{id:9,name:"PAGE KHÁNG BILL V2 - DÒNG 2 CÓ TKQC",cat:"page-khang",icon:"🛡️",price:"150.000đ",stock:18,sold:95,badge:"hot",desc:"Page kháng dòng 2 kèm TKQC, ngưỡng chi tiêu cao. Ổn định lâu dài cho chiến dịch quảng cáo."},
{id:10,name:"PAGE KHÁNG - SCAN NGOẠI CỔ",cat:"page-khang",icon:"🛡️",price:"120.000đ",stock:25,sold:130,badge:"",desc:"Page kháng scan ngoại cổ, uy tín cao. Phù hợp chạy ADS thị trường quốc tế không lo bị khóa."},

// ── PAGE SCAN NGOẠI CỔ ──
{id:11,name:"PAGE SCAN NGOẠI CỔ - USA",cat:"page-scan-ngoai-co",icon:"🌐",price:"45.000đ",stock:60,sold:320,badge:"",desc:"Page scan ngoại cổ USA, phù hợp chạy ads quốc tế. Uy tín cao, ít vi phạm."},
{id:12,name:"PAGE SCAN NGOẠI CỔ - EU",cat:"page-scan-ngoai-co",icon:"🌐",price:"55.000đ",stock:40,sold:180,badge:"",desc:"Page scan ngoại cổ châu Âu. Ngưỡng chi tiêu cao, phù hợp thị trường EU."},
{id:13,name:"PAGE SCAN NGOẠI CỔ - CANADA/UK",cat:"page-scan-ngoai-co",icon:"🌐",price:"60.000đ",stock:28,sold:140,badge:"hot",desc:"Page scan Canada/UK cổ, thị trường cao cấp. Uy tín đặc biệt cao cho quảng cáo."},

// ── PAGE LƯỢT MUA ──
{id:14,name:"PAGE LƯỢT MUA - 100 LƯỢT",cat:"page-luot-mua",icon:"💫",price:"55.000đ",stock:28,sold:340,badge:"hot",desc:"Page đã có 100 lượt mua, tăng uy tín shop online hiệu quả. Phù hợp bán hàng Facebook."},
{id:15,name:"PAGE LƯỢT MUA - 500 LƯỢT",cat:"page-luot-mua",icon:"💫",price:"120.000đ",stock:15,sold:180,badge:"hot",desc:"Page đã có 500 lượt mua thật, độ uy tín cao. Dùng làm page chính bán hàng."},

// ── PAGE CẦN VPCS ──
{id:16,name:"PAGE CẦN VPCS - V1 RANDOM",cat:"page-can-vpcs",icon:"📋",price:"60.000đ",stock:22,sold:210,badge:"",desc:"Page cần VPCS để chạy ads, đã qua kiểm duyệt. Random quốc gia, sẵn sàng sử dụng."},
{id:17,name:"PAGE CẦN VPCS - V2 USA",cat:"page-can-vpcs",icon:"📋",price:"80.000đ",stock:14,sold:120,badge:"",desc:"Page cần VPCS USA, phù hợp chạy chiến dịch quảng cáo thị trường Mỹ."},

// ── PAGE SCAN NHIỀU FOLLOW ──
{id:18,name:"PAGE SCAN NGOẠI - 1K FOLLOW",cat:"page-scan-nhieu-follow",icon:"👥",price:"120.000đ",stock:15,sold:98,badge:"hot",desc:"Page ngoại scan 1.000 followers thật, uy tín cao để chạy ads mạnh mà không lo bị từ chối."},
{id:19,name:"PAGE SCAN NGOẠI - 5K FOLLOW",cat:"page-scan-nhieu-follow",icon:"👥",price:"250.000đ",stock:8,sold:45,badge:"hot",desc:"Page ngoại 5.000 followers, cực kỳ uy tín. Chạy ads với ngưỡng cao không lo vấn đề."},
{id:20,name:"PAGE SCAN NGOẠI - 10K FOLLOW",cat:"page-scan-nhieu-follow",icon:"👥",price:"450.000đ",stock:3,sold:18,badge:"hot",desc:"Page ngoại 10K followers thật. Hạng siêu uy tín, dùng cho chiến dịch lớn."},

// ── PAGE REG NHÉT VÀO D1 BM ──
{id:21,name:"PAGE REG NHÉT VÀO D1 BM - RANDOM",cat:"page-reg-nhet",icon:"📌",price:"35.000đ",stock:750,sold:1800,badge:"new",desc:"Page reg sẵn sàng nhét vào D1 BM để chạy quảng cáo ngay. Random quốc gia."},
{id:22,name:"PAGE REG NHÉT D1 BM - VIỆT NAM",cat:"page-reg-nhet",icon:"📌",price:"40.000đ",stock:400,sold:980,badge:"new",desc:"Page Việt Nam reg nhét vào D1 BM, tối ưu cho thị trường Việt Nam."},

// ── PAGE LIVESTREAM ADS ──
{id:23,name:"PAGE LIVESTREAM ADS - V1 RANDOM",cat:"page-livestream",icon:"📹",price:"110.000đ",stock:20,sold:145,badge:"hot",desc:"Page đã bật tính năng livestream + quảng cáo. Phù hợp bán hàng live stream."},
{id:24,name:"PAGE LIVESTREAM ADS - V2 VIỆT NAM",cat:"page-livestream",icon:"📹",price:"130.000đ",stock:12,sold:88,badge:"hot",desc:"Page Việt Nam đã bật live + ads. Tối ưu bán hàng livestream thị trường VN."},

// ── PAGE BÀI ĐĂNG VIỆT NHIỀU FOLLOW ──
{id:25,name:"PAGE BÀI ĐĂNG VIỆT - 1K FOLLOW",cat:"page-bai-dang-follow",icon:"📢",price:"80.000đ",stock:18,sold:120,badge:"",desc:"Page Việt Nam 1.000 follow, nhiều bài đăng nội dung Việt. Phù hợp seeding thị trường VN."},
{id:26,name:"PAGE BÀI ĐĂNG VIỆT - 5K FOLLOW",cat:"page-bai-dang-follow",icon:"📢",price:"200.000đ",stock:6,sold:35,badge:"hot",desc:"Page Việt 5K followers với nhiều bài đăng. Uy tín cao, dùng làm trang chính."},

// ── PAGE CÁC LOẠI CHẠY ADS ──
{id:27,name:"PAGE CHẠY ADS - V1 RANDOM",cat:"page-ads",icon:"🎯",price:"55.000đ",stock:90,sold:420,badge:"",desc:"Page các loại đã được xác minh dùng để chạy quảng cáo. Random quốc gia."},
{id:28,name:"PAGE CHẠY ADS - V2 USA/EU",cat:"page-ads",icon:"🎯",price:"80.000đ",stock:45,sold:210,badge:"",desc:"Page USA/EU chuyên chạy ads, đã xác minh. Phù hợp thị trường quốc tế."},

// ── BM CẦM PAGE ──
{id:29,name:"BM CẦM PAGE - V1 DÒNG 1",cat:"bm-cam-page",icon:"📊",price:"70.000đ",stock:40,sold:280,badge:"",desc:"Business Manager cầm page dòng 1, dùng để điều hành quảng cáo dễ dàng."},
{id:30,name:"BM CẦM PAGE - V2 DÒNG 2",cat:"bm-cam-page",icon:"📊",price:"120.000đ",stock:22,sold:150,badge:"hot",desc:"BM cầm page dòng 2, ngưỡng chi tiêu cao hơn. Phù hợp chiến dịch lớn."},

// ── BM ĐÃ TẠO TKQC ──
{id:31,name:"BM ĐÃ TẠO TKQC - DÒNG 1",cat:"bm-da-tao",icon:"💼",price:"120.000đ",stock:25,sold:342,badge:"hot",desc:"Business Manager đã tạo tài khoản quảng cáo dòng 1. Sẵn sàng chạy ngay."},
{id:32,name:"BM ĐÃ TẠO TKQC - DÒNG 2",cat:"bm-da-tao",icon:"💼",price:"180.000đ",stock:14,sold:198,badge:"hot",desc:"BM đã tạo TKQC dòng 2, giới hạn chi tiêu cao. Dùng cho chiến dịch lớn."},
{id:33,name:"BM ĐÃ TẠO TKQC - DÒNG 3 MỸ",cat:"bm-da-tao",icon:"💼",price:"250.000đ",stock:8,sold:89,badge:"hot",desc:"BM Mỹ đã tạo TKQC dòng 3, ngưỡng chi tiêu cao nhất. Chạy ads quốc tế mạnh."},

// ── BM CHƯA TẠO TKQC ──
{id:34,name:"BM CHƯA TẠO TKQC - RANDOM",cat:"bm-chua-tao",icon:"📁",price:"85.000đ",stock:45,sold:320,badge:"",desc:"Business Manager chưa tạo TKQC, phù hợp để tự cấu hình theo nhu cầu."},
{id:35,name:"BM CHƯA TẠO TKQC - USA",cat:"bm-chua-tao",icon:"📁",price:"120.000đ",stock:25,sold:180,badge:"",desc:"BM USA chưa tạo TKQC. Tự setup TKQC theo mục đích của bạn."},

// ── TKBM SHARE ĐỐI TÁC ──
{id:36,name:"TKBM SHARE ĐỐI TÁC - V1",cat:"tkbm",icon:"🤝",price:"95.000đ",stock:30,sold:210,badge:"",desc:"Tài khoản BM share đối tác, hỗ trợ quản lý quảng cáo nhóm. Chia sẻ quyền linh hoạt."},
{id:37,name:"TKBM SHARE ĐỐI TÁC - V2 AGENCY",cat:"tkbm",icon:"🤝",price:"150.000đ",stock:15,sold:88,badge:"hot",desc:"TKBM agency share đối tác, phù hợp cho team chạy quảng cáo chuyên nghiệp."},

// ── BM XMDN ──
{id:38,name:"BM XMDN - DÒNG 1 XMN THẬT",cat:"bm-xmdn",icon:"✨",price:"150.000đ",stock:18,sold:98,badge:"hot",desc:"Business Manager xác minh doanh nghiệp thật dòng 1, giới hạn chi tiêu cao."},
{id:39,name:"BM XMDN - DÒNG 2 AGENCY",cat:"bm-xmdn",icon:"✨",price:"250.000đ",stock:8,sold:45,badge:"hot",desc:"BM XMDN dòng 2 agency, ngưỡng chi tiêu đặc biệt cao. Dùng cho agency lớn."},
{id:40,name:"BM XMDN - DÒNG 3 USA",cat:"bm-xmdn",icon:"✨",price:"350.000đ",stock:5,sold:22,badge:"hot",desc:"BM XMDN USA dòng 3, giới hạn cao nhất. Chạy ads quốc tế không lo giới hạn."},

// ── BM KHÁNG ──
{id:41,name:"BM KHÁNG - V1 DÒNG 1",cat:"bm-khang",icon:"🛡️",price:"200.000đ",stock:8,sold:55,badge:"hot",desc:"Business Manager kháng bill dòng 1 mạnh nhất, không bị vô hiệu hoá."},
{id:42,name:"BM KHÁNG - V2 DÒNG 2 CẦM TÀI NGUYÊN",cat:"bm-khang",icon:"🛡️",price:"300.000đ",stock:5,sold:28,badge:"hot",desc:"BM kháng dòng 2 cầm tài nguyên. Bảo vệ toàn bộ tài sản quảng cáo của bạn."},

// ── BM CHẠY QUẢNG CÁO ──
{id:43,name:"BM CHẠY QUẢNG CÁO - DÒNG 1",cat:"bm-chay-qc",icon:"💰",price:"130.000đ",stock:22,sold:280,badge:"",desc:"BM chuyên chạy quảng cáo dòng 1, đã được cấu hình sẵn sàng dùng ngay."},
{id:44,name:"BM CHẠY QUẢNG CÁO - DÒNG 2",cat:"bm-chay-qc",icon:"💰",price:"200.000đ",stock:12,sold:145,badge:"hot",desc:"BM chạy QC dòng 2, ngưỡng chi tiêu cao. Phù hợp cho chiến dịch marketing lớn."},

// ── BM XMDN2 ──
{id:45,name:"BM XMDN - DOANH NGHIỆP VIỆT NAM",cat:"bm-xmdn2",icon:"🏢",price:"180.000đ",stock:10,sold:68,badge:"hot",desc:"BM xác minh doanh nghiệp Việt Nam chính hãng. Giới hạn chi tiêu cao nhất."},
{id:46,name:"BM XMDN - DOANH NGHIỆP QUỐC TẾ",cat:"bm-xmdn2",icon:"🏢",price:"280.000đ",stock:6,sold:32,badge:"hot",desc:"BM xác minh doanh nghiệp quốc tế. Chạy ads toàn cầu với giới hạn đặc biệt."},

// ── BM NĂM TẠO ──
{id:47,name:"BM NĂM TẠO 2016-2018 (CỔ NHẤT)",cat:"bm-nam-tao",icon:"📅",price:"200.000đ",stock:6,sold:38,badge:"",desc:"BM cổ năm tạo 2016-2018, uy tín cực cao. Scan + reg, ngưỡng chi tiêu tốt."},
{id:48,name:"BM NĂM TẠO 2019-2021",cat:"bm-nam-tao",icon:"📅",price:"160.000đ",stock:14,sold:88,badge:"",desc:"BM năm tạo 2019-2021, cân bằng giữa uy tín và chi phí. Phù hợp mọi nhu cầu."},
{id:49,name:"BM NĂM TẠO 2022-2023",cat:"bm-nam-tao",icon:"📅",price:"120.000đ",stock:22,sold:145,badge:"",desc:"BM năm tạo 2022-2023, mới hơn nhưng vẫn uy tín. Phù hợp chạy ads cơ bản."},

// ── TKQC CÁ NHÂN ──
{id:50,name:"TKQC CÁ NHÂN - NGƯỠNG 50$",cat:"tkqc-ca-nhan",icon:"👤",price:"80.000đ",stock:50,sold:320,badge:"",desc:"TKQC cá nhân ngưỡng 50$. Dùng chạy ads nhỏ và test chiến dịch trước khi scale."},
{id:51,name:"TKQC CÁ NHÂN - NGƯỠNG 250$",cat:"tkqc-ca-nhan",icon:"👤",price:"150.000đ",stock:28,sold:180,badge:"hot",desc:"TKQC cá nhân 250$. Chạy được chiến dịch medium, phù hợp SME."},
{id:52,name:"TKQC CÁ NHÂN - ĐÃ XÁC MINH",cat:"tkqc-ca-nhan",icon:"👤",price:"110.000đ",stock:35,sold:210,badge:"",desc:"TKQC cá nhân đã xác minh danh tính đầy đủ, ổn định lâu dài."},

// ── BM GENERAL ──
{id:53,name:"BM - ĐA DẠNG CÁC LOẠI",cat:"bm-general",icon:"📦",price:"75.000đ",stock:80,sold:450,badge:"new",desc:"Business Manager đa dạng loại, phù hợp nhiều nhu cầu sử dụng. Random loại."},

// ── INSTAGRAM ──
{id:54,name:"INSTAGRAM - ACC NUÔI CÓ FOLLOW",cat:"instagram",icon:"📸",price:"20.000đ",stock:200,sold:890,badge:"",desc:"Tài khoản Instagram đã nuôi, có followers thật. Phù hợp marketing và xây dựng thương hiệu."},
{id:55,name:"INSTAGRAM - ACC 1K FOLLOW",cat:"instagram",icon:"📸",price:"45.000đ",stock:80,sold:320,badge:"hot",desc:"Instagram đã có 1.000 follow thật. Uy tín để seeding và quảng cáo."},
{id:56,name:"INSTAGRAM - ACC 5K FOLLOW",cat:"instagram",icon:"📸",price:"150.000đ",stock:25,sold:98,badge:"hot",desc:"Instagram 5.000 followers thật. Dùng cho influencer marketing và brand."},

// ── INSTAGRAM CỔ ──
{id:57,name:"INSTAGRAM CỔ - 1-3 NĂM TUỔI",cat:"instagram-co",icon:"🖼️",price:"35.000đ",stock:85,sold:390,badge:"",desc:"Instagram cổ 1-3 năm tuổi, uy tín cao. Phù hợp xây dựng thương hiệu lâu dài."},
{id:58,name:"INSTAGRAM CỔ - 3-5 NĂM TUỔI",cat:"instagram-co",icon:"🖼️",price:"65.000đ",stock:40,sold:180,badge:"hot",desc:"Instagram cổ 3-5 năm, uy tín đặc biệt cao. Dùng làm tài khoản chính."},

// ── TWITTER ──
{id:59,name:"TWITTER/X - ACC NEW",cat:"twitter",icon:"🐦",price:"25.000đ",stock:120,sold:540,badge:"new",desc:"Tài khoản Twitter/X mới, dùng cho marketing và seeding nội dung."},
{id:60,name:"TWITTER/X - ACC CỔ CÓ FOLLOW",cat:"twitter",icon:"🐦",price:"50.000đ",stock:55,sold:220,badge:"",desc:"Twitter/X cổ có followers, uy tín cao hơn. Phù hợp xây dựng cộng đồng."},

// ── NHÓM ZALO ──
{id:61,name:"NHÓM CHAT ZALO - 100-500 THÀNH VIÊN",cat:"nhom-zalo",icon:"💬",price:"50.000đ",stock:40,sold:180,badge:"",desc:"Nhóm chat Zalo 100-500 thành viên thật, phù hợp marketing Zalo và seeding."},
{id:62,name:"NHÓM CHAT ZALO - 1.000+ THÀNH VIÊN",cat:"nhom-zalo",icon:"💬",price:"120.000đ",stock:15,sold:65,badge:"hot",desc:"Nhóm Zalo 1.000+ thành viên. Kênh marketing Zalo mạnh mẽ hiệu quả."},

// ── PROFILE ĐẶC BIỆT ──
{id:63,name:"PROFILE 250$ - KÈM TKQC",cat:"profile-250",icon:"💎",price:"350.000đ",stock:8,sold:45,badge:"hot",desc:"Profile Facebook có ngưỡng chi tiêu 250$. Kèm TKQC sẵn. Dùng chạy ads mạnh ngay lập tức."},
{id:64,name:"PROFILE 250$ - RANDOM QUỐC GIA",cat:"profile-250",icon:"💎",price:"299.000đ",stock:12,sold:65,badge:"hot",desc:"Profile 250$ random quốc gia, đã xác minh. Ngưỡng chi tiêu cao ổn định."},

{id:65,name:"PROFILE CÓ TKQC CỔ - DÒNG 1",cat:"profile-co-tkqc",icon:"💰",price:"180.000đ",stock:20,sold:120,badge:"",desc:"Profile cổ dòng 1 có TKQC đi kèm. Sẵn sàng chạy ads ngay, uy tín cao."},
{id:66,name:"PROFILE CÓ TKQC CỔ - DÒNG 2",cat:"profile-co-tkqc",icon:"💰",price:"280.000đ",stock:10,sold:55,badge:"hot",desc:"Profile cổ dòng 2 có TKQC. Ngưỡng chi tiêu cao, phù hợp chiến dịch lớn."},

{id:67,name:"PROFILE CẦM TKQC 50$ - V1",cat:"profile-cam",icon:"🔒",price:"120.000đ",stock:30,sold:180,badge:"",desc:"Profile cầm TKQC 50$. Phù hợp test camp và chạy ads nhỏ hiệu quả."},
{id:68,name:"PROFILE CẦM TKQC 50$ - V2 USA",cat:"profile-cam",icon:"🔒",price:"150.000đ",stock:18,sold:98,badge:"",desc:"Profile USA cầm TKQC 50$, uy tín cao cho thị trường quốc tế."},

{id:69,name:"PROFILE TKQC CỔ BAO CHANGE ALL - V1",cat:"profile-co-tkqc-bao-change",icon:"🔑",price:"220.000đ",stock:12,sold:68,badge:"hot",desc:"Profile TKQC cổ bao đổi toàn bộ thông tin. An toàn tuyệt đối, tự làm chủ tài khoản."},
{id:70,name:"PROFILE TKQC CỔ BAO CHANGE ALL - USA",cat:"profile-co-tkqc-bao-change",icon:"🔑",price:"320.000đ",stock:6,sold:28,badge:"hot",desc:"Profile USA TKQC cổ bao change all. Ngưỡng cao, tự do đổi thông tin hoàn toàn."},

{id:71,name:"PROFILE BAO CHANGE PASS - V1",cat:"profile-bao-change-pass",icon:"🔐",price:"95.000đ",stock:50,sold:280,badge:"",desc:"Profile bao đổi mật khẩu thành công. Không lo mất tài khoản sau khi mua."},
{id:72,name:"PROFILE BAO CHANGE PASS - CỔ",cat:"profile-bao-change-pass",icon:"🔐",price:"140.000đ",stock:28,sold:145,badge:"",desc:"Profile cổ bao change pass. Uy tín cao, bảo mật tốt sau khi thay đổi."},

{id:73,name:"PROFILE BAO SET CAMP - V1",cat:"profile-bao-set-camp",icon:"⚙️",price:"150.000đ",stock:18,sold:98,badge:"",desc:"Profile bao set campaign quảng cáo, chạy ổn định lâu dài không lo bị từ chối."},
{id:74,name:"PROFILE BAO SET CAMP - USA",cat:"profile-bao-set-camp",icon:"⚙️",price:"220.000đ",stock:10,sold:45,badge:"hot",desc:"Profile USA bao set camp, thị trường quốc tế. Ngưỡng chi tiêu cao, ổn định."},

{id:75,name:"PROFILE XIN TÍCH XANH - V1 CREATOR",cat:"profile-xin-tich-xanh",icon:"⭐",price:"280.000đ",stock:7,sold:28,badge:"hot",desc:"Profile đủ điều kiện xin tích xanh Creator. Đang trong quá trình xin xác minh Facebook."},
{id:76,name:"PROFILE XIN TÍCH XANH - V2 BUSINESS",cat:"profile-xin-tich-xanh",icon:"⭐",price:"350.000đ",stock:4,sold:12,badge:"hot",desc:"Profile điều kiện xin tích Business. Phù hợp thương hiệu và doanh nghiệp."},

{id:77,name:"PROFILE XIN TÍCH - ĐỦ ĐIỀU KIỆN",cat:"profile-xin-tich",icon:"✨",price:"200.000đ",stock:15,sold:68,badge:"",desc:"Profile đủ điều kiện xin tích, theo yêu cầu Meta. Hỗ trợ hướng dẫn xin tích."},
{id:78,name:"PROFILE XIN TÍCH - CỔ 3 NĂM",cat:"profile-xin-tich",icon:"✨",price:"280.000đ",stock:8,sold:35,badge:"",desc:"Profile cổ 3 năm tuổi đủ điều kiện xin tích. Uy tín cao, tỷ lệ duyệt tốt."},

{id:79,name:"PROFILE CHUYÊN ADS - V1",cat:"profile-chuyen-ads",icon:"🎯",price:"130.000đ",stock:25,sold:180,badge:"",desc:"Profile chuyên dụng chạy quảng cáo Facebook, đã tối ưu. Sẵn sàng set camp ngay."},
{id:80,name:"PROFILE CHUYÊN ADS - V2 USA",cat:"profile-chuyen-ads",icon:"🎯",price:"200.000đ",stock:12,sold:88,badge:"hot",desc:"Profile USA chuyên ads. Uy tín cao cho chiến dịch quốc tế, ngưỡng chi tiêu tốt."},

{id:81,name:"PROFILE CHAT SUPPORT - V1",cat:"profile-chat-support",icon:"💁",price:"45.000đ",stock:60,sold:320,badge:"new",desc:"Profile dùng làm chat support khách hàng. Ổn định, chuyên nghiệp, ít checkpoint."},
{id:82,name:"PROFILE CHAT SUPPORT - CÓ VERIFY",cat:"profile-chat-support",icon:"💁",price:"75.000đ",stock:30,sold:145,badge:"",desc:"Profile chat support đã verify đầy đủ. Dùng chăm sóc khách hàng chuyên nghiệp."},

// ── CLONE VIỆT ──
{id:83,name:"CLONE VIỆT NUÔI BẠN BÈ - V1 100 BB",cat:"clone-viet",icon:"🇻🇳",price:"30.000đ",stock:250,sold:2400,badge:"new",desc:"Clone Việt Nam đã nuôi 100 bạn bè Việt. Phù hợp seeding và marketing nội địa."},
{id:84,name:"CLONE VIỆT NUÔI BẠN BÈ - V2 500 BB",cat:"clone-viet",icon:"🇻🇳",price:"55.000đ",stock:120,sold:980,badge:"new",desc:"Clone Việt 500 bạn bè thật. Uy tín cao, tự nhiên. Dùng seeding hiệu quả hơn."},
{id:85,name:"CLONE VIỆT NUÔI BẠN BÈ - V3 1000 BB",cat:"clone-viet",icon:"🇻🇳",price:"90.000đ",stock:60,sold:420,badge:"hot",desc:"Clone Việt 1.000 bạn bè thật. Siêu uy tín, tự nhiên nhất. Seeding cực mạnh."},
{id:86,name:"CLONE VIỆT NEW - CÓ 2FA",cat:"clone-viet-new-2fa",icon:"🇻🇳",price:"22.000đ",stock:300,sold:1800,badge:"new",desc:"Clone Việt mới có bảo mật 2FA. An toàn khi đăng nhập lần đầu, ít checkpoint."},
{id:87,name:"CLONE VIỆT NEW - NO 2FA (DÙNG COOKIE)",cat:"clone-viet-new-no2fa",icon:"🇻🇳",price:"12.000đ",stock:500,sold:3200,badge:"new",desc:"Clone Việt mới không có 2FA. Đăng nhập bằng cookie lần đầu, các lần sau dùng pass bình thường."},
{id:88,name:"CLONE VIỆT NUÔI - CÓ 2FA V1",cat:"clone-viet-nuoi-2fa",icon:"🇻🇳",price:"35.000đ",stock:180,sold:1200,badge:"",desc:"Clone Việt đã nuôi kỹ, có 2FA bảo mật. Ít bị checkpoint, sử dụng ổn định lâu dài."},
{id:89,name:"CLONE VIỆT NUÔI - CÓ 2FA NHIỀU BÀI",cat:"clone-viet-nuoi-2fa",icon:"🇻🇳",price:"50.000đ",stock:90,sold:560,badge:"hot",desc:"Clone Việt nuôi nhiều bài đăng + có 2FA. Tự nhiên nhất, ít bị phát hiện nhất."},
{id:90,name:"CLONE VIỆT + USA NUÔI NHIỀU BÀI - V1",cat:"clone-viet-usa-nhieu-bai",icon:"🇻🇳",price:"40.000đ",stock:150,sold:890,badge:"new",desc:"Clone Việt và USA đã nuôi nhiều bài viết. Tự nhiên, uy tín, phù hợp seeding dài hạn."},
{id:91,name:"CLONE VIỆT + USA NUÔI - V2 NHIỀU BẠN BÈ",cat:"clone-viet-usa-nhieu-bai",icon:"🇻🇳",price:"65.000đ",stock:75,sold:380,badge:"new",desc:"Clone Việt/USA nuôi nhiều bài + nhiều bạn bè. Chất lượng cao nhất dòng này."},

// ── CLONE SPAM ──
{id:92,name:"CLONE SPAM - GIÁ RẺ SỐ LƯỢNG LỚN",cat:"clone-spam",icon:"📤",price:"5.000đ",stock:1000,sold:8500,badge:"new",desc:"Clone giá rẻ dành cho mục đích spam tool. Số lượng lớn, live time ngắn, phù hợp chạy tool."},
{id:93,name:"CLONE SPAM - CHẤT LƯỢNG CAO HƠN",cat:"clone-spam",icon:"📤",price:"8.000đ",stock:800,sold:4200,badge:"new",desc:"Clone spam chất lượng cao hơn. Live time tốt hơn, phù hợp spam tool dài ngày hơn."},

// ── CLONE USA ──
{id:94,name:"CLONE USA - NEW NO 2FA",cat:"clone-usa",icon:"🇺🇸",price:"28.000đ",stock:220,sold:1100,badge:"",desc:"Clone USA mới, không có 2FA. Đăng nhập bằng cookie lần đầu. Target thị trường Mỹ."},
{id:95,name:"CLONE USA - NUÔI CÓ 2FA",cat:"clone-usa",icon:"🇺🇸",price:"45.000đ",stock:110,sold:520,badge:"hot",desc:"Clone USA đã nuôi có 2FA. Uy tín cao, phù hợp chạy ads thị trường Mỹ lâu dài."},
{id:96,name:"CLONE USA - NHIỀU BÀI VIẾT",cat:"clone-usa",icon:"🇺🇸",price:"55.000đ",stock:70,sold:310,badge:"hot",desc:"Clone USA nhiều bài viết, tự nhiên. Dùng seeding và quảng cáo thị trường Mỹ hiệu quả."},

// ── CLONE NGOẠI VER 1-4 ──
{id:97,name:"CLONE NGOẠI NO 2FA - VER 1 (RẺ NHẤT)",cat:"clone-ngoai-no2fa-v1",icon:"🌐",price:"8.000đ",stock:800,sold:5600,badge:"new",desc:"Clone ngoại không có 2FA phiên bản 1. Giá rẻ nhất, số lượng lớn. Đăng nhập bằng cookie."},
{id:98,name:"CLONE NGOẠI NO 2FA - VER 2",cat:"clone-ngoai-no2fa-v2",icon:"🌐",price:"10.000đ",stock:700,sold:4200,badge:"",desc:"Clone ngoại không 2FA phiên bản 2. Chất lượng tốt hơn ver 1, live time lâu hơn."},
{id:99,name:"CLONE NGOẠI NO 2FA - VER 3",cat:"clone-ngoai-no2fa-v3",icon:"🌐",price:"12.000đ",stock:500,sold:2800,badge:"",desc:"Clone ngoại không 2FA phiên bản 3. Chất lượng khá, phù hợp seeding và spam vừa phải."},
{id:100,name:"CLONE NGOẠI NO 2FA - VER 4 (TỐT NHẤT)",cat:"clone-ngoai-no2fa-v4",icon:"🌐",price:"15.000đ",stock:400,sold:1900,badge:"new",desc:"Clone ngoại không 2FA phiên bản 4. Chất lượng tốt nhất trong dòng này, live time tốt."},
{id:101,name:"CLONE NGOẠI CÓ 2FA - RANDOM QG",cat:"clone-ngoai-co2fa",icon:"🌐",price:"25.000đ",stock:300,sold:1400,badge:"",desc:"Clone ngoại có bảo mật 2FA. An toàn và ổn định hơn dòng không 2FA."},
{id:102,name:"CLONE NGOẠI NUÔI - CÓ 2FA",cat:"clone-ngoai-nuoi-co2fa",icon:"🌐",price:"35.000đ",stock:200,sold:980,badge:"hot",desc:"Clone ngoại đã nuôi kỹ có 2FA. Phù hợp chạy ads và seeding lâu dài, ổn định nhất."},
{id:103,name:"CLONE NGOẠI NUÔI - NO 2FA",cat:"clone-ngoai-nuoi-no2fa",icon:"🌐",price:"22.000đ",stock:250,sold:1200,badge:"",desc:"Clone ngoại đã nuôi không có 2FA. Đăng nhập bằng cookie lần đầu, các lần sau bình thường."},
{id:104,name:"CLONE KHÁNG 282 - V1",cat:"clone-khang-282",icon:"🛡️",price:"45.000đ",stock:80,sold:420,badge:"",desc:"Clone kháng lỗi 282. Ổn định cho các chiến dịch quảng cáo, không bị lỗi 282."},
{id:105,name:"CLONE KHÁNG 282 - V2 NUÔI",cat:"clone-khang-282",icon:"🛡️",price:"65.000đ",stock:40,sold:200,badge:"hot",desc:"Clone kháng 282 đã nuôi thêm. Uy tín cao hơn, ổn định hơn cho ads dài hạn."},
{id:106,name:"CLONE QUA SỬ DỤNG - GIÁ SIÊU RẺ",cat:"clone-qua-su-dung",icon:"♻️",price:"5.000đ",stock:500,sold:2800,badge:"",desc:"Clone đã qua sử dụng, giá siêu rẻ. Phù hợp test và spam, live time ngắn."},
{id:107,name:"CLONE CÁC NƯỚC - RANDOM",cat:"clone-cac-nuoc",icon:"🗺️",price:"18.000đ",stock:400,sold:1800,badge:"new",desc:"Clone nhiều quốc gia khác nhau, random quốc gia. Phù hợp đa dạng chiến dịch."},
{id:108,name:"CLONE NGOẠI VER MAIL FVIAINBOXES",cat:"clone-ngoai-ver-mail",icon:"📧",price:"20.000đ",stock:300,sold:1400,badge:"",desc:"Clone ngoại đã verify qua mail fviainboxes.com. Ổn định hơn, live time tốt hơn."},
{id:109,name:"CLONE 2024 NUÔI TRUST CHUYÊN SPAM",cat:"clone-2024-nuoi-trust",icon:"🔋",price:"15.000đ",stock:450,sold:2100,badge:"new",desc:"Clone 2024 đã nuôi trust chuyên spam. Live time tốt hơn dòng spam thông thường."},
{id:110,name:"CLONE INSTAGRAM - ĐÃ NUÔI",cat:"clone-instagram",icon:"📷",price:"18.000đ",stock:200,sold:890,badge:"",desc:"Clone Instagram đã nuôi. Phù hợp marketing và tăng follow Instagram hiệu quả."},
{id:111,name:"CLONE TIKTOK - RANDOM QG",cat:"clone-tiktok",icon:"🎵",price:"20.000đ",stock:180,sold:760,badge:"new",desc:"Clone TikTok đã nuôi. Phù hợp tăng follow và seeding TikTok hiệu quả."},
{id:112,name:"CLONE CHUYÊN ADS REG BM - V1",cat:"clone-chuan-ads",icon:"📣",price:"35.000đ",stock:120,sold:640,badge:"",desc:"Clone chuyên dụng chạy ads và reg Business Manager. Ổn định, ít checkpoint."},
{id:113,name:"CLONE CHUYÊN ADS REG BM - V2 USA",cat:"clone-chuan-ads",icon:"📣",price:"55.000đ",stock:60,sold:280,badge:"hot",desc:"Clone USA chuyên ads + reg BM. Uy tín cao, phù hợp thị trường quốc tế."},

// ── FAKEBOOK ──
{id:114,name:"FAKEBOOK SEEDING SPAM NUÔI - V1",cat:"fakebook-seeding",icon:"🎭",price:"8.000đ",stock:800,sold:5200,badge:"new",desc:"Fakebook chuyên seeding, spam và nuôi. Số lượng lớn, giá rẻ. Phù hợp chạy tool."},
{id:115,name:"FAKEBOOK SEEDING SPAM NUÔI - V2 ĐÃ NUÔI",cat:"fakebook-seeding",icon:"🎭",price:"15.000đ",stock:400,sold:2400,badge:"new",desc:"Fakebook đã nuôi, chuyên seeding spam. Live time tốt hơn V1, chất lượng cao hơn."},

// ── ACC ──
{id:116,name:"ACC 1000X - TẠO PROFILE PHỤ+FANPAGE",cat:"acc-1000x",icon:"💯",price:"50.000đ",stock:90,sold:520,badge:"",desc:"Acc 1000X dùng tạo profile phụ và fanpage hàng loạt. Tiết kiệm chi phí tạo page."},
{id:117,name:"FACEBOOK VIP 1000XX - SIÊU UY TÍN",cat:"fb-vip-1000",icon:"👑",price:"280.000đ",stock:5,sold:22,badge:"hot",desc:"Facebook VIP 1000XX, tài khoản siêu uy tín với hàng nghìn bạn bè và hoạt động thật."},
{id:118,name:"ACC HOST CỔ - 2-5 NĂM",cat:"acc-host-co",icon:"🖥️",price:"65.000đ",stock:35,sold:180,badge:"",desc:"Acc host cổ 2-5 năm tuổi, lịch sử dài. Phù hợp làm tài khoản chính ổn định."},
{id:119,name:"ACC NAME VIỆT - CHUẨN",cat:"acc-name-viet",icon:"🇻🇳",price:"20.000đ",stock:350,sold:1800,badge:"new",desc:"Acc tên Việt Nam chuẩn. Phù hợp xây dựng shop, page và seeding thị trường VN."},
{id:120,name:"ACC NAME NGOẠI - CHUẨN",cat:"acc-name-ngoai",icon:"🌐",price:"18.000đ",stock:400,sold:2100,badge:"new",desc:"Acc tên ngoại chuẩn. Phù hợp target thị trường quốc tế và seeding quốc tế."},
{id:121,name:"ACC NAME USA NHIỀU BÀI VIẾT",cat:"acc-name-usa-nhieu-bai",icon:"🇺🇸",price:"35.000đ",stock:150,sold:720,badge:"",desc:"Acc tên USA đã có nhiều bài viết. Tự nhiên và đáng tin cậy cho thị trường Mỹ."},
{id:122,name:"Acc USA - CHÍNH GỐC",cat:"acc-usa",icon:"🇺🇸",price:"25.000đ",stock:280,sold:1400,badge:"",desc:"Tài khoản Facebook USA chính gốc. Phù hợp target thị trường Mỹ chính xác."},
{id:123,name:"Acc Ngoại - ĐA DẠNG QG",cat:"acc-ngoai",icon:"🌍",price:"15.000đ",stock:500,sold:2800,badge:"new",desc:"Tài khoản ngoại đa dạng quốc gia. Phù hợp nhiều mục tiêu thị trường khác nhau."},
{id:124,name:"Acc Việt - ĐA DẠNG",cat:"acc-viet",icon:"🇻🇳",price:"12.000đ",stock:600,sold:3500,badge:"new",desc:"Tài khoản Việt Nam đa dạng. Phù hợp nhiều mục đích, thị trường nội địa."},
{id:125,name:"Acc Ấn Độ/Pakistan/Bangladet",cat:"acc-in-pk-bd",icon:"🌏",price:"8.000đ",stock:700,sold:4200,badge:"new",desc:"Tài khoản IN/PK/BD giá rẻ. Phù hợp target thị trường Nam Á số lượng lớn."},

// ── PROFILE VIỆT ──
{id:126,name:"PROFILE VIỆT NEW - V1 RANDOM",cat:"profile-viet-new",icon:"🇻🇳",price:"25.000đ",stock:500,sold:3500,badge:"new",desc:"Profile Việt mới tạo. Đầy đủ thông tin, chưa vi phạm. Phù hợp nuôi và dùng ngay."},
{id:127,name:"PROFILE VIỆT NEW - V2 CÓ EMAIL",cat:"profile-viet-new",icon:"🇻🇳",price:"30.000đ",stock:300,sold:1800,badge:"new",desc:"Profile Việt mới kèm email xác minh. An toàn hơn, dễ khôi phục khi cần."},
{id:128,name:"PROFILE VIỆT NEW - V3 CÓ SĐT",cat:"profile-viet-new",icon:"🇻🇳",price:"35.000đ",stock:200,sold:1200,badge:"new",desc:"Profile Việt mới kèm số điện thoại. Bảo mật tốt nhất, ít checkpoint nhất."},
{id:129,name:"PROFILE VIỆT CỔ - CÓ 2FA V1",cat:"profile-viet-co-2fa",icon:"🇻🇳",price:"75.000đ",stock:40,sold:280,badge:"",desc:"Profile Việt cổ có bảo mật 2FA. Độ uy tín cao, ít bị checkpoint, dùng lâu dài."},
{id:130,name:"PROFILE VIỆT CỔ - CÓ 2FA V2 NHIỀU BÀI",cat:"profile-viet-co-2fa",icon:"🇻🇳",price:"100.000đ",stock:22,sold:145,badge:"hot",desc:"Profile Việt cổ 2FA + nhiều bài đăng. Tự nhiên nhất, uy tín cao nhất dòng này."},
{id:131,name:"PROFILE VIỆT SIÊU CỔ - 3-5 NĂM",cat:"profile-viet-sieu-co",icon:"🇻🇳",price:"95.000đ",stock:20,sold:120,badge:"hot",desc:"Profile Việt siêu cổ 3-5 năm tuổi. Uy tín tuyệt đối, ít bị checkpoint nhất."},
{id:132,name:"PROFILE VIỆT SIÊU CỔ - 5+ NĂM",cat:"profile-viet-sieu-co",icon:"🇻🇳",price:"150.000đ",stock:10,sold:55,badge:"hot",desc:"Profile Việt 5+ năm tuổi. Siêu uy tín, dùng làm tài khoản chính ads lâu dài."},
{id:133,name:"PROFILE VIỆT XMDT - V1",cat:"profile-viet-xmdt",icon:"🇻🇳",price:"55.000đ",stock:90,sold:520,badge:"",desc:"Profile Việt xác minh danh tính đầy đủ. Giảm thiểu rủi ro checkpoint tối đa."},
{id:134,name:"PROFILE VIỆT XMDT - V2 CÓ CCCD",cat:"profile-viet-xmdt",icon:"🇻🇳",price:"80.000đ",stock:45,sold:245,badge:"hot",desc:"Profile Việt XMDT bằng CCCD thật. An toàn nhất, ít bị vấn đề checkpoint nhất."},
{id:135,name:"PROFILE VIỆT LỌC NAM - 100% NAM",cat:"profile-viet-loc-nam",icon:"🇻🇳",price:"30.000đ",stock:200,sold:1100,badge:"",desc:"Profile Việt lọc 100% nam. Phù hợp target theo giới tính cho các sản phẩm nam giới."},
{id:136,name:"PROFILE VIỆT LỌC NỮ - 100% NỮ",cat:"profile-viet-loc-nu",icon:"🇻🇳",price:"30.000đ",stock:180,sold:980,badge:"",desc:"Profile Việt lọc 100% nữ. Phù hợp target thời trang, làm đẹp, mẹ và bé."},
{id:137,name:"PROFILE VIỆT NHIỀU BÀI ĐĂNG - 50+ BÀI",cat:"profile-viet-nhieu-bai",icon:"🇻🇳",price:"45.000đ",stock:120,sold:680,badge:"",desc:"Profile Việt có 50+ bài đăng. Trông tự nhiên và uy tín, ít bị quét hơn."},
{id:138,name:"PROFILE VIỆT SPAM - GIÁ RẺ NHẤT",cat:"profile-viet-spam",icon:"🇻🇳",price:"8.000đ",stock:600,sold:5200,badge:"new",desc:"Profile Việt giá rẻ nhất dành cho spam tool. Live time ngắn, số lượng lớn."},
{id:139,name:"PROFILE VIỆT CỔ NO 2FA - LOGIN COOKIE",cat:"profile-viet-co-no2fa",icon:"🇻🇳",price:"50.000đ",stock:65,sold:380,badge:"",desc:"Profile Việt cổ không có 2FA. Đăng nhập bằng cookie lần đầu, sau đó dùng pass bình thường."},

// ── PROFILE 902 ──
{id:140,name:"PROFILE 902 NEW - MỚI BỊ 902",cat:"profile-902-new",icon:"9️⃣",price:"45.000đ",stock:87,sold:480,badge:"",desc:"Profile bị 902 mới, còn khả năng khôi phục cao. Kèm mail/sdt để khôi phục."},
{id:141,name:"PROFILE 902 CỔ - CÓ LỊCH SỬ",cat:"profile-902-co",icon:"🔢",price:"60.000đ",stock:40,sold:220,badge:"",desc:"Profile 902 cổ, có lịch sử lâu dài trên Facebook. Khả năng khôi phục và sử dụng tốt."},
{id:142,name:"PROFILE 902 - CÁC LOẠI",cat:"profile-902",icon:"🔟",price:"35.000đ",stock:100,sold:680,badge:"",desc:"Profile 902 các loại, phù hợp nhiều mục đích. Kèm thông tin xác minh."},

// ── PROFILE NGOẠI ──
{id:143,name:"PROFILE NGOẠI XMDT - V1",cat:"profile-ngoai-xmdt",icon:"🌐",price:"55.000đ",stock:70,sold:380,badge:"",desc:"Profile ngoại đã xác minh danh tính đầy đủ. Ổn định và ít checkpoint khi sử dụng."},
{id:144,name:"PROFILE NGOẠI NEW NO 2FA - RANDOM",cat:"profile-ngoai-new-no2fa",icon:"🌐",price:"15.000đ",stock:400,sold:2800,badge:"new",desc:"Profile ngoại mới không có 2FA. Đăng nhập bằng cookie lần đầu. Random quốc gia."},
{id:145,name:"PROFILE NGOẠI CỔ CÓ 2FA - V1",cat:"profile-ngoai-co-co2fa",icon:"🌐",price:"65.000đ",stock:55,sold:320,badge:"",desc:"Profile ngoại cổ có 2FA. Uy tín cao, ổn định lâu dài. Random quốc gia ngoại."},
{id:146,name:"PROFILE NGOẠI CỔ NO 2FA - COOKIE",cat:"profile-ngoai-co-no2fa",icon:"🌐",price:"45.000đ",stock:80,sold:480,badge:"",desc:"Profile ngoại cổ không có 2FA. Login bằng cookie lần đầu."},
{id:147,name:"PROFILE NGOẠI NEW CÓ 2FA - V1",cat:"profile-ngoai-new-co2fa",icon:"🌐",price:"25.000đ",stock:300,sold:1800,badge:"new",desc:"Profile ngoại mới có 2FA. An toàn cho lần đăng nhập đầu tiên."},
{id:148,name:"PROFILE NGOẠI SPAM - GIÁ RẺ",cat:"profile-ngoai-spam",icon:"📤",price:"6.000đ",stock:900,sold:6800,badge:"new",desc:"Profile ngoại giá rẻ dùng spam tool. Live time ngắn, số lượng lớn."},
{id:149,name:"PROFILE NGOẠI NHIỀU FOLLOW - 1K+",cat:"profile-ngoai-nhieu-follow",icon:"👥",price:"85.000đ",stock:40,sold:220,badge:"hot",desc:"Profile ngoại 1.000+ followers thật. Phù hợp page scan và marketing quốc tế."},
{id:150,name:"PROFILE NGOẠI NHIỀU BẠN BÈ - 500+",cat:"profile-ngoai-nhieu-ban",icon:"👫",price:"70.000đ",stock:55,sold:300,badge:"",desc:"Profile ngoại 500+ bạn bè thật. Tự nhiên, uy tín, ít bị phát hiện khi dùng."},
{id:151,name:"PROFILE NGOẠI 1000+ BẠN BÈ",cat:"profile-ngoai-1000-ban",icon:"👥",price:"90.000đ",stock:30,sold:145,badge:"hot",desc:"Profile ngoại trên 1000 bạn bè thật. Siêu uy tín, dùng làm tài khoản chính."},
{id:152,name:"PROFILE NGOẠI NHIỀU BÀI ĐĂNG - 50+",cat:"profile-ngoai-nhieu-bai",icon:"📝",price:"60.000đ",stock:70,sold:380,badge:"",desc:"Profile ngoại 50+ bài đăng tự nhiên. Ít bị phát hiện khi dùng ads hoặc seeding."},
{id:153,name:"PROFILE NGOẠI KÈM 1 HOTMAIL",cat:"profile-ngoai-1-hotmail",icon:"📧",price:"40.000đ",stock:100,sold:520,badge:"",desc:"Profile ngoại kèm 1 hotmail. Dễ khôi phục mật khẩu khi cần thiết."},
{id:154,name:"PROFILE NGOẠI ĐÃ TẠO SẴN 1 FANPAGE",cat:"profile-ngoai-co-fanpage",icon:"📄",price:"55.000đ",stock:45,sold:240,badge:"",desc:"Profile ngoại đã tạo sẵn 1 fanpage. Tiết kiệm thời gian setup, dùng ngay được."},
{id:155,name:"PROFILE RANDOM QUỐC GIA - GIÁ RẺ",cat:"profile-random-quocgia",icon:"🎲",price:"12.000đ",stock:600,sold:4200,badge:"new",desc:"Profile random nhiều quốc gia. Giá rẻ, đa dạng. Phù hợp test nhiều thị trường."},
{id:156,name:"PROFILE RANDOM QG SPAM",cat:"profile-random-spam",icon:"🎲",price:"5.000đ",stock:1000,sold:8500,badge:"new",desc:"Profile random dùng spam tool. Giá cực rẻ, số lượng cực lớn."},
{id:157,name:"PROFILE CHÂU PHI RANDOM",cat:"profile-chau-phi-random",icon:"🌍",price:"6.000đ",stock:800,sold:5200,badge:"",desc:"Profile Châu Phi random. Phù hợp target thị trường Châu Phi giá rẻ."},
{id:158,name:"PROFILE NAM MỸ - CÁC NƯỚC",cat:"profile-nam-my",icon:"🌎",price:"10.000đ",stock:500,sold:2800,badge:"",desc:"Profile Nam Mỹ các nước. Phù hợp target thị trường Mỹ Latinh."},
{id:159,name:"PROFILE CÁC NƯỚC - ĐA DẠNG",cat:"profile-cac-nuoc",icon:"🗺️",price:"10.000đ",stock:700,sold:4500,badge:"new",desc:"Profile đa dạng các nước trên thế giới. Random quốc gia, phù hợp nhiều nhu cầu."},

// ── PROFILE THEO QUỐC GIA ──
{id:160,name:"PROFILE PHI NEW - V1",cat:"profile-phi-new",icon:"🇵🇭",price:"18.000đ",stock:300,sold:1800,badge:"new",desc:"Profile Philippines mới tạo. Phù hợp target thị trường Đông Nam Á, đặc biệt PH."},
{id:161,name:"PROFILE PHI CỔ - CÓ LỊCH SỬ",cat:"profile-phi-co",icon:"🇵🇭",price:"28.000đ",stock:150,sold:780,badge:"",desc:"Profile Philippines cổ có lịch sử. Uy tín cao hơn cho thị trường Philippines."},
{id:162,name:"PROFILE PHI XMDT - ĐÃ XMN",cat:"profile-phi-xmdt",icon:"🇵🇭",price:"35.000đ",stock:80,sold:380,badge:"",desc:"Profile Philippines đã xác minh danh tính. Ổn định nhất cho thị trường PH."},
{id:163,name:"PROFILE INDO NEW - V1",cat:"profile-indo-new",icon:"🇮🇩",price:"15.000đ",stock:350,sold:2100,badge:"new",desc:"Profile Indonesia mới tạo. Phù hợp target thị trường Indonesia và Đông Nam Á."},
{id:164,name:"PROFILE INDO CỔ - CÓ LỊCH SỬ",cat:"profile-indo-co",icon:"🇮🇩",price:"22.000đ",stock:200,sold:1100,badge:"",desc:"Profile Indonesia cổ có lịch sử. Uy tín cao cho thị trường Indonesia."},
{id:165,name:"PROFILE INDO XMDT - ĐÃ XMN",cat:"profile-indo-xmdt",icon:"🇮🇩",price:"30.000đ",stock:100,sold:520,badge:"",desc:"Profile Indonesia đã xác minh danh tính. Ổn định nhất cho thị trường Indo."},
{id:166,name:"PROFILE THAILAND NEW - V1",cat:"profile-thai-new",icon:"🇹🇭",price:"20.000đ",stock:250,sold:1400,badge:"new",desc:"Profile Thailand mới tạo. Phù hợp target thị trường Thái Lan."},
{id:167,name:"PROFILE THAILAND CỔ - UY TÍN",cat:"profile-thai-co",icon:"🇹🇭",price:"30.000đ",stock:120,sold:640,badge:"",desc:"Profile Thailand cổ có lịch sử. Uy tín cao cho thị trường Thái Lan."},
{id:168,name:"PROFILE BRAZIL - V1",cat:"profile-brazil",icon:"🇧🇷",price:"12.000đ",stock:400,sold:2200,badge:"",desc:"Profile Brazil. Phù hợp target thị trường Nam Mỹ lớn nhất."},
{id:169,name:"PROFILE BANGLADESH - GIÁ RẺ",cat:"profile-bangladesh",icon:"🇧🇩",price:"8.000đ",stock:500,sold:3200,badge:"new",desc:"Profile Bangladesh giá rẻ. Dùng target và spam thị trường Nam Á."},
{id:170,name:"PROFILE PAKISTAN - GIÁ RẺ",cat:"profile-pakistan",icon:"🇵🇰",price:"8.000đ",stock:500,sold:3100,badge:"new",desc:"Profile Pakistan giá rẻ. Phù hợp target thị trường Nam Á."},
{id:171,name:"PROFILE MYANMAR - ĐÔNG NAM Á",cat:"profile-myanmar",icon:"🇲🇲",price:"10.000đ",stock:300,sold:1600,badge:"",desc:"Profile Myanmar. Thị trường tiềm năng Đông Nam Á."},
{id:172,name:"PROFILE CANADA - BẮC MỸ",cat:"profile-canada",icon:"🇨🇦",price:"20.000đ",stock:200,sold:1000,badge:"",desc:"Profile Canada. Target thị trường Bắc Mỹ uy tín, ngân sách quảng cáo cao."},
{id:173,name:"PROFILE COLOMBIA - NAM MỸ",cat:"profile-colombia",icon:"🇨🇴",price:"10.000đ",stock:350,sold:1800,badge:"",desc:"Profile Colombia. Phù hợp target thị trường Nam Mỹ."},
{id:174,name:"PROFILE INDIA - TỶ DÂN",cat:"profile-india",icon:"🇮🇳",price:"6.000đ",stock:800,sold:6500,badge:"new",desc:"Profile India giá rẻ. Thị trường tỷ dân, cực tiềm năng cho quảng cáo."},
{id:175,name:"PROFILE GERMANY - TÂY ÂU",cat:"profile-germany",icon:"🇩🇪",price:"25.000đ",stock:150,sold:720,badge:"",desc:"Profile Đức. Thị trường Tây Âu uy tín, ngân sách quảng cáo cao."},
{id:176,name:"PROFILE ITALIA - NAM ÂU",cat:"profile-italia",icon:"🇮🇹",price:"20.000đ",stock:180,sold:880,badge:"",desc:"Profile Ý. Phù hợp target thị trường Nam Âu uy tín."},
{id:177,name:"PROFILE EGYPT - TRUNG ĐÔNG",cat:"profile-egypt",icon:"🇪🇬",price:"8.000đ",stock:400,sold:2400,badge:"",desc:"Profile Ai Cập. Target thị trường Trung Đông và Bắc Phi hiệu quả."},
{id:178,name:"PROFILE AUSTRALIA - CHÂU ÚC",cat:"profile-australia",icon:"🇦🇺",price:"22.000đ",stock:160,sold:780,badge:"",desc:"Profile Úc. Thị trường phát triển, ngân sách quảng cáo cao."},
{id:179,name:"PROFILE UK - ANH QUỐC",cat:"profile-uk",icon:"🇬🇧",price:"25.000đ",stock:140,sold:680,badge:"",desc:"Profile Anh Quốc. Thị trường châu Âu uy tín hàng đầu."},
{id:180,name:"PROFILE MEXICO - TRUNG MỸ",cat:"profile-mexico",icon:"🇲🇽",price:"10.000đ",stock:300,sold:1600,badge:"",desc:"Profile Mexico. Target thị trường Trung Mỹ và Hispanic hiệu quả."},
{id:181,name:"PROFILE MALAYSIA - ĐÔNG NAM Á",cat:"profile-malaysia",icon:"🇲🇾",price:"15.000đ",stock:250,sold:1200,badge:"",desc:"Profile Malaysia. Target Đông Nam Á và thị trường Hồi giáo."},
{id:182,name:"PROFILE EU - TOÀN CHÂU ÂU",cat:"profile-eu",icon:"🇪🇺",price:"20.000đ",stock:200,sold:980,badge:"",desc:"Profile châu Âu đa dạng. Target toàn EU với ngân sách quảng cáo cao."},
{id:183,name:"PROFILE SRILANKA - NAM Á",cat:"profile-srilanka",icon:"🇱🇰",price:"8.000đ",stock:350,sold:2100,badge:"",desc:"Profile Sri Lanka. Thị trường Nam Á giá rẻ, tiềm năng."},
{id:184,name:"PROFILE NEPAL - GIÁ RẺ",cat:"profile-nepal",icon:"🇳🇵",price:"6.000đ",stock:400,sold:2800,badge:"",desc:"Profile Nepal giá cực rẻ. Phù hợp spam và test số lượng lớn."},
{id:185,name:"PROFILE BALAN - ĐÔNG ÂU",cat:"profile-balan",icon:"🇵🇱",price:"18.000đ",stock:200,sold:980,badge:"",desc:"Profile Ba Lan. Target Đông Âu với ngân sách quảng cáo tốt."},
{id:186,name:"PROFILE GUATEMALA - TRUNG MỸ",cat:"profile-guatemala",icon:"🇬🇹",price:"8.000đ",stock:350,sold:2000,badge:"",desc:"Profile Guatemala. Target Trung Mỹ giá rẻ."},
{id:187,name:"PROFILE IRAN - TRUNG ĐÔNG",cat:"profile-iran",icon:"🇮🇷",price:"8.000đ",stock:300,sold:1800,badge:"",desc:"Profile Iran. Target thị trường Trung Đông và Ba Tư."},
{id:188,name:"PROFILE VENEZUELA - NAM MỸ",cat:"profile-venezuela",icon:"🇻🇪",price:"6.000đ",stock:400,sold:2500,badge:"",desc:"Profile Venezuela. Thị trường Nam Mỹ giá rẻ."},
{id:189,name:"PROFILE MADAGASCAR - CHÂU PHI",cat:"profile-madagascar",icon:"🇲🇬",price:"6.000đ",stock:350,sold:2200,badge:"",desc:"Profile Madagascar. Châu Phi giá siêu rẻ."},
{id:190,name:"PROFILE USA CỔ - UY TÍN NHẤT",cat:"profile-usa-co",icon:"🇺🇸",price:"45.000đ",stock:80,sold:420,badge:"hot",desc:"Profile USA cổ nhiều năm tuổi. Uy tín cao nhất thị trường Mỹ, ít checkpoint."},

// ── TIKTOK ──
{id:191,name:"TIKTOK NGOẠI - MỞ LIVE/LIVESTUDIO",cat:"tiktok-ngoai-live",icon:"🎵",price:"85.000đ",stock:30,sold:180,badge:"hot",desc:"TikTok ngoại đã mở sẵn tính năng Live và LiveStudio. Dùng livestream bán hàng ngay."},
{id:192,name:"TIKTOK VIỆT NAM - ACC MỚI",cat:"tiktok-viet",icon:"🎵",price:"25.000đ",stock:200,sold:1100,badge:"new",desc:"Tài khoản TikTok Việt Nam mới. Phù hợp xây dựng kênh và bán hàng nội địa."},
{id:193,name:"TIKTOK VIỆT NAM - ACC ĐÃ NUÔI",cat:"tiktok-viet",icon:"🎵",price:"45.000đ",stock:90,sold:480,badge:"new",desc:"TikTok Việt đã nuôi, có lịch sử. Ít bị checkpoint, phù hợp dùng lâu dài."},
{id:194,name:"TIKTOK NGOẠI - RANDOM QG",cat:"tiktok-ngoai",icon:"🎵",price:"20.000đ",stock:250,sold:1400,badge:"",desc:"TikTok ngoại các nước. Phù hợp target thị trường quốc tế đa dạng."},
{id:195,name:"TKCN Tiktok Ads - DÒNG 1",cat:"tkcn-tiktok-ads",icon:"📣",price:"120.000đ",stock:25,sold:145,badge:"hot",desc:"TKCN TikTok Ads dòng 1. Chạy quảng cáo TikTok trực tiếp hiệu quả."},
{id:196,name:"BC3 TIKTOK ADS - PHÍ NẠP 0%",cat:"bc3-tiktok",icon:"💳",price:"100.000đ",stock:40,sold:220,badge:"hot",desc:"Business Center 3 TikTok Ads phí nạp 0%. Tiết kiệm tối đa chi phí quảng cáo."},
{id:197,name:"BC TIKTOK ADS - AGENCY",cat:"bc-tiktok-ads",icon:"📊",price:"90.000đ",stock:50,sold:280,badge:"",desc:"Business Center TikTok Ads agency. Quản lý quảng cáo TikTok chuyên nghiệp."},
{id:198,name:"TÀI KHOẢN CHI TIÊU TIKTOK",cat:"tiktok-chi-tieu",icon:"💸",price:"80.000đ",stock:35,sold:180,badge:"",desc:"Tài khoản chi tiêu TikTok Ads. Giới hạn cao, ổn định cho chiến dịch lớn."},
{id:199,name:"TIKTOK ADS THAILAND",cat:"tiktok-thailand",icon:"🇹🇭",price:"75.000đ",stock:30,sold:145,badge:"",desc:"TikTok Ads Thailand. Target thị trường Thái Lan hiệu quả nhất."},
{id:200,name:"TIKTOK ADS BRAZIL",cat:"tiktok-brazil",icon:"🇧🇷",price:"70.000đ",stock:28,sold:130,badge:"",desc:"TikTok Ads Brazil. Target thị trường Nam Mỹ lớn nhất qua TikTok."},
{id:201,name:"TIKTOK ADS US/UK - CAO CẤP",cat:"tiktok-us-uk",icon:"🇺🇸",price:"130.000đ",stock:15,sold:78,badge:"hot",desc:"TikTok Ads US/UK. Thị trường cao cấp, ngân sách quảng cáo cực lớn."},

// ── XU TƯƠNG TÁC ──
{id:202,name:"XU TƯƠNG TÁC FACEBOOK - 100 XU",cat:"xu-tuong-tac",icon:"💠",price:"10.000đ",stock:999,sold:8500,badge:"new",desc:"100 xu tương tác Facebook. Dùng trao đổi like/comment/share thống kê."},
{id:203,name:"XU TƯƠNG TÁC FACEBOOK - 500 XU",cat:"xu-tuong-tac",icon:"💠",price:"45.000đ",stock:500,sold:4200,badge:"new",desc:"500 xu tương tác. Tiết kiệm hơn khi mua số lượng lớn."},

// ── EMAIL/COOKIE ──
{id:204,name:"GMAIL - ACC MỚI TẠO",cat:"gmail",icon:"📩",price:"8.000đ",stock:800,sold:6800,badge:"new",desc:"Tài khoản Gmail mới tạo. Dùng xác minh và bảo mật tài khoản mạng xã hội."},
{id:205,name:"GMAIL - ACC CỔ CÓ LỊCH SỬ",cat:"gmail",icon:"📩",price:"15.000đ",stock:400,sold:3200,badge:"",desc:"Gmail cổ có lịch sử dài. Uy tín hơn, dùng làm email chính xác minh."},
{id:206,name:"GMAIL EDU (.EDU) - ƯU ĐÃI PHẦN MỀM",cat:"gmail-edu",icon:"🎓",price:"15.000đ",stock:300,sold:1800,badge:"",desc:"Gmail Edu (.edu) hưởng ưu đãi phần mềm giáo dục miễn phí từ nhiều dịch vụ."},
{id:207,name:"HOTMAIL - ACC MỚI",cat:"hotmail",icon:"📧",price:"6.000đ",stock:600,sold:4500,badge:"new",desc:"Hotmail/Outlook mới. Dùng verify và bảo mật tài khoản mạng xã hội."},
{id:208,name:"HOTMAIL - ACC CỔ",cat:"hotmail",icon:"📧",price:"10.000đ",stock:300,sold:2100,badge:"",desc:"Hotmail cổ có lịch sử. Uy tín cao hơn, dùng cho xác minh quan trọng."},
{id:209,name:"OUTLOOK MICROSOFT - V1",cat:"outlook",icon:"📮",price:"6.000đ",stock:500,sold:3800,badge:"new",desc:"Outlook Microsoft đa mục đích. Xác minh và bảo mật nhiều dịch vụ khác nhau."},
{id:210,name:"COOKIE FACEBOOK - ĐÃ CHECK LIVE",cat:"cookie",icon:"🍪",price:"12.000đ",stock:400,sold:2800,badge:"",desc:"Cookie Facebook đã check live. Dùng đăng nhập tài khoản không có 2FA lần đầu."},
{id:211,name:"COOKIE FACEBOOK - BULK SỐ LƯỢNG LỚN",cat:"cookie",icon:"🍪",price:"8.000đ",stock:800,sold:5600,badge:"new",desc:"Cookie Facebook số lượng lớn, giá tốt hơn. Dùng cho mục đích tool và spam."},

// ── CÔNG CỤ AI ──
{id:212,name:"CHAT GPT PLUS - GPT-4 KHÔNG GIỚI HẠN",cat:"chatgpt",icon:"🤖",price:"55.000đ",stock:60,sold:890,badge:"hot",desc:"ChatGPT Plus chính hãng. Truy cập GPT-4, DALL-E 3 không giới hạn. Tốc độ nhanh nhất."},
{id:213,name:"CHAT GPT - TEAM 5 USER",cat:"chatgpt",icon:"🤖",price:"200.000đ",stock:20,sold:280,badge:"hot",desc:"ChatGPT Team cho 5 người dùng. Chia sẻ chi phí, đầy đủ tính năng Plus."},
{id:214,name:"GEMINI PRO - GOOGLE AI",cat:"gemini",icon:"✨",price:"40.000đ",stock:90,sold:680,badge:"new",desc:"Gemini Pro Google. AI mạnh mẽ từ Google, tích hợp Google Workspace."},
{id:215,name:"GEMINI ADVANCED - CAO CẤP NHẤT",cat:"gemini",icon:"✨",price:"75.000đ",stock:40,sold:280,badge:"new",desc:"Gemini Advanced. Model mạnh nhất của Google, Ultra 1.0 không giới hạn."},
{id:216,name:"GROK AI - X (TWITTER)",cat:"grok",icon:"🧠",price:"45.000đ",stock:70,sold:420,badge:"new",desc:"Grok AI của X (Twitter). AI tiên tiến, truy cập real-time data từ X."},
{id:217,name:"VEO 3 - TẠO VIDEO AI GOOGLE",cat:"veo3",icon:"🎬",price:"80.000đ",stock:25,sold:145,badge:"hot",desc:"VEO 3 Google. Tạo video AI chất lượng cực cao từ text hoặc image."},
{id:218,name:"KLING AI - TẠO VIDEO & ẢNH",cat:"kling",icon:"🎥",price:"60.000đ",stock:40,sold:220,badge:"new",desc:"Kling AI. Tạo video và ảnh AI chất lượng cao. Cạnh tranh với Sora."},
{id:219,name:"CÔNG CỤ AI TỔNG HỢP - COMBO",cat:"cong-cu-ai",icon:"🦾",price:"50.000đ",stock:100,sold:580,badge:"new",desc:"Combo công cụ AI tổng hợp. Hỗ trợ sáng tạo nội dung và marketing đa nền tảng."},

// ── ỨNG DỤNG ──
{id:220,name:"CAPCUT PRO - BẢN QUỐC TẾ",cat:"capcut",icon:"✂️",price:"28.000đ",stock:200,sold:1800,badge:"new",desc:"CapCut Pro quốc tế. Đầy đủ template, hiệu ứng, xuất 4K không watermark."},
{id:221,name:"CANVA PRO - THIẾT KẾ KHÔNG GIỚI HẠN",cat:"canva",icon:"🎨",price:"30.000đ",stock:150,sold:1400,badge:"new",desc:"Canva Pro đầy đủ tính năng. Thiết kế chuyên nghiệp, 100M+ template, xuất không giới hạn."},
{id:222,name:"CANVA PRO - TEAM 5 USER",cat:"canva",icon:"🎨",price:"100.000đ",stock:60,sold:480,badge:"hot",desc:"Canva Pro Team 5 người. Hợp tác thiết kế, chia sẻ brand kit và template."},
{id:223,name:"ADOBE CREATIVE CLOUD - ALL APPS",cat:"adobe",icon:"🖌️",price:"75.000đ",stock:45,sold:380,badge:"hot",desc:"Adobe CC All Apps. Đầy đủ Photoshop, Illustrator, Premiere, After Effects, InDesign."},
{id:224,name:"ADOBE PHOTOSHOP SINGLE APP",cat:"adobe",icon:"🖌️",price:"40.000đ",stock:80,sold:620,badge:"",desc:"Adobe Photoshop đơn lẻ. Chỉnh sửa ảnh chuyên nghiệp không giới hạn."},
{id:225,name:"MICROSOFT 365 - CÁ NHÂN",cat:"microsoft",icon:"🪟",price:"35.000đ",stock:120,sold:980,badge:"",desc:"Microsoft 365 cá nhân. Word, Excel, PowerPoint, Outlook, Teams đầy đủ."},
{id:226,name:"MICROSOFT 365 - FAMILY 6 USER",cat:"microsoft",icon:"🪟",price:"100.000đ",stock:50,sold:380,badge:"hot",desc:"Microsoft 365 Family cho 6 người. Tiết kiệm nhất khi dùng nhóm."},
{id:227,name:"HMA VPN - 1 THÁNG",cat:"hma",icon:"🔒",price:"40.000đ",stock:80,sold:520,badge:"",desc:"HMA VPN 1 tháng. Tốc độ cao, bảo mật toàn diện, 290+ server toàn cầu."},
{id:228,name:"HMA VPN - 1 NĂM",cat:"hma",icon:"🔒",price:"200.000đ",stock:30,sold:180,badge:"hot",desc:"HMA VPN 1 năm. Tiết kiệm tối đa, bảo mật 24/7 toàn thiết bị."},
{id:229,name:"APP LÀM ĐẸP PRO - FACETUNE",cat:"app-lam-dep",icon:"💅",price:"25.000đ",stock:150,sold:1100,badge:"new",desc:"FaceTune Pro. Chỉnh ảnh khuôn mặt chuyên nghiệp, không quảng cáo, đầy đủ filter."},
{id:230,name:"APP LÀM ĐẸP - LIGHTROOM MOBILE PRO",cat:"app-lam-dep",icon:"💅",price:"30.000đ",stock:100,sold:720,badge:"new",desc:"Lightroom Mobile Premium. Chỉnh màu ảnh chuyên nghiệp, preset cao cấp, xuất RAW."},
{id:231,name:"THIẾT KẾ - SÁNG TẠO COMBO",cat:"thiet-ke-sang-tao",icon:"🎭",price:"45.000đ",stock:90,sold:480,badge:"",desc:"Combo tài khoản thiết kế đa nền tảng. Bao gồm Canva, CapCut và thêm app sáng tạo."},
{id:232,name:"CÁ NHÂN - TIỆN ÍCH ĐA DẠNG",cat:"ca-nhan-tien-ich",icon:"📱",price:"20.000đ",stock:200,sold:1200,badge:"new",desc:"Bộ app cá nhân và tiện ích hữu dụng hàng ngày. Nâng cao năng suất làm việc."},

// ── CÔNG CỤ MARKETING ──
{id:233,name:"CÔNG CỤ HỖ TRỢ MARKETING - V1 BASIC",cat:"cong-cu",icon:"🔧",price:"99.000đ",stock:50,sold:420,badge:"new",desc:"Bộ công cụ marketing Facebook cơ bản. Tăng hiệu quả chiến dịch, tiết kiệm thời gian."},
{id:234,name:"CÔNG CỤ MARKETING - V2 ADVANCED",cat:"cong-cu",icon:"🔧",price:"199.000đ",stock:25,sold:180,badge:"hot",desc:"Công cụ marketing nâng cao. Automation, phân tích data, tối ưu hóa chiến dịch ads."},

// ── PROXY ──
{id:235,name:"PROXY V4 - ĐA QUỐC GIA SOCKS5",cat:"proxy",icon:"🌍",price:"35.000đ",stock:1000,sold:8500,badge:"new",desc:"Proxy IPv4 đa quốc gia, hỗ trợ SOCKS5. Tốc độ cao, rotate linh hoạt, ổn định."},
{id:236,name:"PROXY V6 - IPv6 MOBILE",cat:"proxy",icon:"🌍",price:"15.000đ",stock:2000,sold:12000,badge:"new",desc:"Proxy IPv6 mobile. Giá siêu rẻ, phù hợp số lượng lớn. Rotate nhanh, hiệu quả."},
{id:237,name:"PROXY STATIC - CỐ ĐỊNH IP",cat:"proxy",icon:"🌍",price:"60.000đ",stock:300,sold:1800,badge:"hot",desc:"Proxy static IP cố định. Không bị rotate, ổn định nhất cho tài khoản quan trọng."},
{id:238,name:"PROXY RESIDENTIAL - IP THẬT",cat:"proxy",icon:"🌍",price:"120.000đ",stock:150,sold:780,badge:"hot",desc:"Proxy Residential IP thật từ thiết bị thật. Khó detect nhất, bypass mọi hệ thống."},
];
