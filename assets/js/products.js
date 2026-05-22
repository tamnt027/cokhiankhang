/* ========================================
   Cơ Khí An Khang — Dữ liệu sản phẩm
   45 ảnh thật chia 6 nhóm. Tên và mô tả là tổng quát
   theo nội dung thấy được trong ảnh — anh Chương rà lại
   để bổ sung thông số kỹ thuật và đổi tên cho đúng nghiệp vụ.
   ======================================== */

window.CKA_CATEGORIES = [
  { id: 'all',          vi: 'Tất cả',                          en: 'All products' },
  { id: 'transmission', vi: 'Bánh răng, nhông xích, vòng bi',  en: 'Gears, sprockets, bearings' },
  { id: 'belts',        vi: 'Băng tải, dây curoa',             en: 'Conveyor belts & belting' },
  { id: 'hydraulic',    vi: 'Phụ kiện thủy lực, ren đồng',     en: 'Hydraulic fittings & brass threads' },
  { id: 'valves',       vi: 'Van & phụ kiện đường ống',        en: 'Valves & pipe fittings' },
  { id: 'seals',        vi: 'Phớt, gioăng, O-ring',            en: 'Seals, gaskets & O-rings' },
  { id: 'machinery',    vi: 'Máy bơm & máy công nghiệp',       en: 'Pumps & industrial machinery' }
];

window.CKA_PRODUCTS = [
  // ============ TRANSMISSION ============
  {
    id: 'p01', image: 'z7852108793911_63488a729739087c8a54aca7d2231171.jpg',
    category: 'transmission', featured: true,
    name: { vi: 'Nhông xích công nghiệp các cỡ', en: 'Industrial sprockets — assorted sizes' },
    desc: { vi: 'Nhông xích thép gia công, đa dạng đường kính và số răng. Báo giá theo bản vẽ.', en: 'Machined steel sprockets, various diameters and tooth counts. Quote on drawing.' }
  },
  {
    id: 'p02', image: 'z7852109012443_f8ab3e340c34c983cd8b0207940c417e.jpg',
    category: 'transmission', featured: true,
    name: { vi: 'Bánh răng lớn truyền động', en: 'Large drive gears' },
    desc: { vi: 'Bánh răng & nhông xích cỡ lớn cho hệ thống truyền động công nghiệp.', en: 'Large-format gears and sprockets for industrial drive systems.' }
  },
  {
    id: 'p03', image: 'z7852109067718_84a9c3b3e91db44d8b4c2d0ff2b56dc9.jpg',
    category: 'transmission', featured: false,
    name: { vi: 'Puly truyền động (V-belt pulley)', en: 'V-belt drive pulleys' },
    desc: { vi: 'Puly truyền động dây đai V, đường kính theo yêu cầu.', en: 'V-belt pulleys, custom diameter on request.' }
  },
  {
    id: 'p04', image: 'z7852109055391_96c460bb1d231cbd7ee13e2c763f71b4.jpg',
    category: 'transmission', featured: true,
    name: { vi: 'Khớp nối mềm KC (jaw coupling)', en: 'KC jaw couplings' },
    desc: { vi: 'Khớp nối mềm KC-4018, KC-5018, KC-6022, KC-6018 và các size khác.', en: 'Flexible jaw couplings KC-4018, KC-5018, KC-6022, KC-6018 and other sizes.' }
  },
  {
    id: 'p05', image: 'z7852109102397_48961d05166998b58435c1bdb01eca82.jpg',
    category: 'transmission', featured: false,
    name: { vi: 'Khớp nối cao su (NM coupling)', en: 'NM rubber couplings' },
    desc: { vi: 'Khớp nối NM truyền động bơm-mô-tơ, cao su đệm chống rung.', en: 'NM couplings for pump-motor drive, rubber damping element.' }
  },
  {
    id: 'p06', image: 'z7852109083777_3749e39f08cfdea91a9b9edba9c28d1d.jpg',
    category: 'transmission', featured: false,
    name: { vi: 'Vòng bi gối đỡ ASAHI', en: 'ASAHI pillow block bearings' },
    desc: { vi: 'Vòng bi gối đỡ ASAHI MUC208, UC, UCP — hàng chính hãng.', en: 'ASAHI pillow block bearings MUC208, UC, UCP — genuine.' }
  },
  {
    id: 'p07', image: 'z7852109100711_1e64752ee9461b87493884ae5b7ce706.jpg',
    category: 'transmission', featured: false,
    name: { vi: 'Vòng bi đệm cao su', en: 'Sealed rubber bearings' },
    desc: { vi: 'Vòng bi 2RS có gioăng cao su 2 mặt, đa dạng size.', en: 'Sealed bearings (2RS) with rubber gaskets, various sizes.' }
  },
  {
    id: 'p08', image: 'z7852109115557_400bdc7fa7c2ba1ee57ccfaa36c11493.jpg',
    category: 'transmission', featured: false,
    name: { vi: 'Xích tải KANA Japan', en: 'KANA Japan roller chains' },
    desc: { vi: 'Xích con lăn KANA 60-2R, 80-2R x 10FT — chính hãng Nhật.', en: 'KANA roller chains 60-2R, 80-2R x 10FT — genuine Japan.' }
  },
  {
    id: 'p09', image: 'z7852109145931_b0f6662ec0789b4daff09000a6afea08.jpg',
    category: 'transmission', featured: false,
    name: { vi: 'Xích tải STAR công nghiệp', en: 'STAR industrial roller chains' },
    desc: { vi: 'Xích STAR 40-2R, 50-2R, 80-1R các size, đóng hộp 10FT.', en: 'STAR roller chains 40-2R, 50-2R, 80-1R, boxed 10FT.' }
  },

  // ============ BELTS ============
  {
    id: 'p10', image: 'z7852108865428_ff5df5979b4830ad4e8f18fc04cae870.jpg',
    category: 'belts', featured: true,
    name: { vi: 'Băng tải PVC xanh-vàng', en: 'Green-yellow PVC conveyor belts' },
    desc: { vi: 'Băng tải PVC khổ lớn, dùng cho dây chuyền đóng gói, thực phẩm, in ấn.', en: 'Large-format PVC belts for packaging, food and printing lines.' }
  },
  {
    id: 'p11', image: 'z7852108847684_35f66c76ba93e0c388aba826e92d07c2.jpg',
    category: 'belts', featured: false,
    name: { vi: 'Dây curoa răng (timing belt)', en: 'Timing belts' },
    desc: { vi: 'Dây curoa răng cao su tăng cường sợi, dùng truyền động chính xác.', en: 'Reinforced rubber timing belts for precision drives.' }
  },
  {
    id: 'p12', image: 'z7852108875073_845b876b8573f2b3c4544f19817723d1.jpg',
    category: 'belts', featured: false,
    name: { vi: 'Băng tải PVC nhiều cỡ tồn kho', en: 'PVC conveyor belts in stock' },
    desc: { vi: 'Hàng tồn kho khổ lớn — đủ size, đủ màu. Cắt theo mét.', en: 'Large stock of various widths and colors. Cut to length.' }
  },
  {
    id: 'p13', image: 'z7852108880661_5b5d0b8fdef22da95580afdfcc4aef6e.jpg',
    category: 'belts', featured: false,
    name: { vi: 'Băng tải PVC mặt nhám chống trượt', en: 'Anti-slip textured PVC belt' },
    desc: { vi: 'Mặt nhám chống trượt cho vận chuyển sản phẩm có dốc.', en: 'Anti-slip textured surface for inclined conveying.' }
  },
  {
    id: 'p14', image: 'z7852108893935_7d9f157af6b5b6012138d56d5f4924a7.jpg',
    category: 'belts', featured: false,
    name: { vi: 'Băng tải PVC xanh khổ rộng', en: 'Wide green PVC belt' },
    desc: { vi: 'Băng tải PVC xanh khổ rộng, gia công nối theo chiều dài yêu cầu.', en: 'Wide green PVC belt, jointed to required length.' }
  },
  {
    id: 'p15', image: 'z7852108907438_7355804e077cdf27fe89604ceb51a7bd.jpg',
    category: 'belts', featured: false,
    name: { vi: 'Băng tải cong/uốn theo yêu cầu', en: 'Custom curved/shaped belts' },
    desc: { vi: 'Gia công băng tải uốn cong, gấp mép theo bản vẽ.', en: 'Custom curved and edge-folded belts to specification.' }
  },
  {
    id: 'p16', image: 'z7852108923139_2d7b37f20312ff602d0136e7b774fa8d.jpg',
    category: 'belts', featured: false,
    name: { vi: 'Băng tải dệt xanh-trắng', en: 'Green-white woven belts' },
    desc: { vi: 'Băng tải dệt mềm, mặt PVC, thường dùng cho ngành dệt may.', en: 'Soft woven belt with PVC face, common in textile industry.' }
  },
  {
    id: 'p17', image: 'z7852109207940_ca1350d63642d06635dc177a8dfc6d09.jpg',
    category: 'belts', featured: false,
    name: { vi: 'Kho băng tải khổ lớn', en: 'Warehouse — large belts' },
    desc: { vi: 'Khu xưởng kho băng tải khổ lớn, sẵn sàng cắt giao trong ngày.', en: 'Warehouse stocking large belts, ready for same-day cutting.' }
  },
  {
    id: 'p18', image: 'z7852109274298_f7b0a2f32b6a71ef0728ba63a79b423b.jpg',
    category: 'belts', featured: false,
    name: { vi: 'Băng tải PVC tăng cường', en: 'Reinforced PVC belts' },
    desc: { vi: 'Băng tải PVC nhiều lớp tăng cường vải, độ bền cao.', en: 'Multi-ply fabric-reinforced PVC belts, heavy-duty.' }
  },

  // ============ HYDRAULIC ============
  {
    id: 'p19', image: 'z7852108948281_54fe1e041b66ef9767d50c7bbbd82f64.jpg',
    category: 'hydraulic', featured: true,
    name: { vi: 'Khớp nối ren đồng thủy lực', en: 'Brass threaded hydraulic fittings' },
    desc: { vi: 'Đầu nối ren đồng các size, kết hợp ống thủy lực cao áp.', en: 'Brass threaded connectors, paired with high-pressure hydraulic hoses.' }
  },
  {
    id: 'p20', image: 'z7852109091833_e53d64a69793fe1c591c1420542b4366.jpg',
    category: 'hydraulic', featured: false,
    name: { vi: 'Đầu nối thủy lực đồng cao áp', en: 'High-pressure brass hydraulic fittings' },
    desc: { vi: 'Đầu nối đồng ren ngoài/ren trong, dùng cho hệ thống thủy lực áp suất cao.', en: 'Brass male/female threaded fittings for high-pressure hydraulic systems.' }
  },
  {
    id: 'p21', image: 'z7852109208393_a109ae4fb94ee90b9441e3dc6584ebf0.jpg',
    category: 'hydraulic', featured: false,
    name: { vi: 'Bộ ren đồng các size', en: 'Brass thread fittings — assorted' },
    desc: { vi: 'Đầu ren đồng, măng-sông, đầu nối — đầy đủ size phổ biến.', en: 'Brass nipples, sockets, connectors — full range of common sizes.' }
  },
  {
    id: 'p22', image: 'z7852109227217_bed53b44ca27f482f2d1df1bbb8f5ab0.jpg',
    category: 'hydraulic', featured: false,
    name: { vi: 'Phụ kiện thủy lực đồng + dây curoa', en: 'Brass hydraulic accessories + V-belts' },
    desc: { vi: 'Phụ kiện thủy lực đồng dưới kệ, dây curoa V-belt phía trên.', en: 'Brass hydraulic accessories below, V-belts above.' }
  },
  {
    id: 'p23', image: 'z7852109242618_3ad93aa0dfd796e141ea120154fd71df.jpg',
    category: 'hydraulic', featured: false,
    name: { vi: 'Măng-sông ren đồng', en: 'Brass coupling sockets' },
    desc: { vi: 'Măng-sông ren đồng các đường kính, ren chuẩn BSP/NPT.', en: 'Brass coupling sockets, various sizes, BSP/NPT standard threads.' }
  },
  {
    id: 'p24', image: 'z7852108962187_b072ec1d7dcae52452de625ef05257e9.jpg',
    category: 'hydraulic', featured: false,
    name: { vi: 'Đầu nối ống ren mạ kẽm', en: 'Galvanized threaded pipe fittings' },
    desc: { vi: 'Đầu nối ống mạ kẽm các size 6x40, 6x50, đầy đủ co T, cút, măng sông.', en: 'Galvanized pipe fittings size 6x40, 6x50 — full range of tees, elbows, sockets.' }
  },
  {
    id: 'p25', image: 'z7852108915718_b96a3878a1d75748fc80a35b3dc37264.jpg',
    category: 'hydraulic', featured: false,
    name: { vi: 'Đai siết (cổ dê) Inox', en: 'Stainless steel hose clamps' },
    desc: { vi: 'Đai siết cổ dê inox các size — siết vít chuẩn cho ống thủy lực và hơi.', en: 'Stainless steel worm-drive hose clamps for hydraulic and pneumatic hoses.' }
  },
  {
    id: 'p26', image: 'z7852108922013_59e830d76ce986a6d87c32b901ea6e01.jpg',
    category: 'hydraulic', featured: false,
    name: { vi: 'Đai siết ống thủy lực', en: 'Hydraulic hose clamps' },
    desc: { vi: 'Đai siết ống cao áp, ren xoắn vít — đủ size thông dụng.', en: 'High-pressure hose clamps, screw-tightened — common sizes in stock.' }
  },

  // ============ VALVES ============
  {
    id: 'p27', image: 'z7852108939664_e3a2b2e8a70148b383d977056fdd968a.jpg',
    category: 'valves', featured: true,
    name: { vi: 'Van & phụ kiện đường ống', en: 'Valves & pipe fittings' },
    desc: { vi: 'Van bi, van cổng, van một chiều, đầy đủ size cho dân dụng & công nghiệp.', en: 'Ball valves, gate valves, check valves — full sizes for residential & industrial use.' }
  },
  {
    id: 'p28', image: 'z7852109181172_83c1d8d7b9bbb646d0b5bacaf6d1b15a.jpg',
    category: 'valves', featured: true,
    name: { vi: 'Van đồng & van inox các loại', en: 'Brass & stainless valves' },
    desc: { vi: 'Van đồng, van inox, van nhựa PPR — đa dạng chủng loại trên cùng kệ.', en: 'Brass, stainless and PPR valves — wide selection on the same rack.' }
  },
  {
    id: 'p29', image: 'z7852109227179_c6dac74af80846db2ed47d3d93ae6f2e.jpg',
    category: 'valves', featured: false,
    name: { vi: 'Van bi PVC NHỰA BÌNH MINH', en: 'PVC ball valves — BÌNH MINH brand' },
    desc: { vi: 'Van bi PVC Bình Minh, đầy đủ size — phù hợp hệ thống cấp thoát nước.', en: 'BÌNH MINH PVC ball valves, all sizes — for water supply and drainage systems.' }
  },
  {
    id: 'p30', image: 'z7852109257738_762ce68aaac19604f9a7e017bde18e60.jpg',
    category: 'valves', featured: false,
    name: { vi: 'Van công nghiệp chuyên dụng', en: 'Specialized industrial valves' },
    desc: { vi: 'Van Y-lọc, van bi PVC, van đồng — kệ trưng bày toàn bộ.', en: 'Y-strainers, PVC ball valves, brass valves — full display rack.' }
  },
  {
    id: 'p31', image: 'z7852109157029_9ccb8019d2909a2487495be714b2757d.jpg',
    category: 'valves', featured: false,
    name: { vi: 'Tổng hợp phụ kiện đường ống', en: 'Pipe fittings overview' },
    desc: { vi: 'Toàn bộ kho phụ kiện đường ống: co, T, măng sông, ren các size.', en: 'Full pipe fittings stock: elbows, tees, sockets, threads — all sizes.' }
  },

  // ============ SEALS ============
  {
    id: 'p32', image: 'z7852108949249_9a497bf2e93266ac0b33c9acb5ab1153.jpg',
    category: 'seals', featured: true,
    name: { vi: 'Phớt cơ khí (mechanical seal)', en: 'Mechanical seals' },
    desc: { vi: 'Phớt cơ khí cho bơm GZS, SSIC, các size đóng hộp riêng — hàng chính hãng.', en: 'Mechanical seals for pumps (GZS, SSIC series), individually boxed — genuine.' }
  },
  {
    id: 'p33', image: 'z7852109066572_f2e02df73632c93fb56baeea5d485775.jpg',
    category: 'seals', featured: false,
    name: { vi: 'Phớt thủy lực cao su NBR', en: 'NBR hydraulic seals' },
    desc: { vi: 'Phớt thủy lực, gioăng cao su NBR — chịu áp, chịu dầu.', en: 'NBR rubber hydraulic seals — pressure and oil resistant.' }
  },
  {
    id: 'p34', image: 'z7852109110190_9c87ffdbb41ac731e4082ce43048a941.jpg',
    category: 'seals', featured: false,
    name: { vi: 'Phớt chặn dầu cỡ lớn', en: 'Large oil seals' },
    desc: { vi: 'Phớt dầu SVKS / JANITE size 165x190, 150x180 và lớn hơn — đặt theo size.', en: 'SVKS / JANITE oil seals size 165x190, 150x180 and larger — order by size.' }
  },

  // ============ MACHINERY ============
  {
    id: 'p35', image: 'z7852109125554_7235c04002c11244703d1e5aea757b17.jpg',
    category: 'machinery', featured: true,
    name: { vi: 'Máy bơm HITACHI & phụ tùng', en: 'HITACHI pumps & accessories' },
    desc: { vi: 'Máy bơm nước Hitachi GX, đầu bơm, motor, phụ tùng đồng bộ.', en: 'Hitachi GX water pumps, pump heads, motors and matching accessories.' }
  },
  {
    id: 'p36', image: 'z7852109135738_3b3938c03f9e9ab50861f0742aaa0b65.jpg',
    category: 'machinery', featured: false,
    name: { vi: 'Tổng hợp máy bơm công nghiệp', en: 'Industrial pumps overview' },
    desc: { vi: 'Cửa hàng đầy đủ chủng loại máy bơm: chìm, ly tâm, đa cấp, áp lực.', en: 'Full pump selection: submersible, centrifugal, multistage, pressure.' }
  },
  {
    id: 'p37', image: 'z7852109026019_2ddd4cc2e48f95f6c323c7cafbf83035.jpg',
    category: 'machinery', featured: false,
    name: { vi: 'Bơm trục đứng đa cấp', en: 'Vertical multistage pumps' },
    desc: { vi: 'Máy bơm trục đứng đa cấp, dùng cho hệ thống tăng áp.', en: 'Vertical multistage pumps for booster systems.' }
  },
  {
    id: 'p38', image: 'z7852109036123_4f6ababd027a8bb085211a49ee8c56c0.jpg',
    category: 'machinery', featured: false,
    name: { vi: 'Bơm Inox cánh đa tầng', en: 'Stainless multi-stage pumps' },
    desc: { vi: 'Máy bơm Inox cánh đa tầng, hàng kho đa dạng công suất.', en: 'Stainless multi-impeller pumps, wide power range in stock.' }
  },
  {
    id: 'p39', image: 'z7852108798768_8baec8d3865d9fd8bc9c20b8d7cf12f7.jpg',
    category: 'machinery', featured: false,
    name: { vi: 'Cánh bơm gia công theo bản vẽ', en: 'Custom-machined pump impellers' },
    desc: { vi: 'Cánh bơm ly tâm gia công theo mẫu, hàn đắp tăng tuổi thọ.', en: 'Custom-machined centrifugal pump impellers with reinforced welding for longer life.' }
  },
  {
    id: 'p40', image: 'z7852108976553_dbbf8fea42e67ca3df9357be431aef74.jpg',
    category: 'machinery', featured: false,
    name: { vi: 'Xi lanh khí KCC Korea', en: 'KCC Korea air cylinders' },
    desc: { vi: 'Xi lanh khí KCC ACM-N B63-S75 và các model khác — chính hãng Korea.', en: 'KCC ACM-N B63-S75 and other models — genuine Korea.' }
  },
  {
    id: 'p41', image: 'z7852109025715_346c65fc34ae3d5b69eac3514f028b8b.jpg',
    category: 'machinery', featured: false,
    name: { vi: 'Lò xo công nghiệp', en: 'Industrial heavy-duty springs' },
    desc: { vi: 'Lò xo nén công nghiệp, dùng cho máy ép, máy rung và máy nông nghiệp.', en: 'Heavy-duty compression springs for presses, vibrating machines and farm machinery.' }
  },
  {
    id: 'p42', image: 'z7852108881222_d06895b05c9ee078a733ab93bb2b5bd3.jpg',
    category: 'machinery', featured: false,
    name: { vi: 'Máy gia công kim loại tấm', en: 'Sheet-metal forming machine' },
    desc: { vi: 'Máy cắt-uốn-tạo hình kim loại tấm tại xưởng — phục vụ dịch vụ gia công.', en: 'In-house sheet-metal cutting and forming machine for custom fabrication.' }
  },
  {
    id: 'p43', image: 'z7852109015093_57efd95cd6a4068d5ea9364513e29ca7.jpg',
    category: 'machinery', featured: false,
    name: { vi: 'Mũi khoan, mũi taro chính hãng', en: 'Drill bits & taps — genuine' },
    desc: { vi: 'Mũi khoan, mũi taro các size từ Trung Quốc/Nhật — phục vụ gia công.', en: 'Drill bits and taps in various sizes from China/Japan — for machining work.' }
  },
  {
    id: 'p44', image: 'z7852109005537_52d182351413cd4dbe4ad3e4f5d3078a.jpg',
    category: 'machinery', featured: false,
    name: { vi: 'Bộ đóng số/chữ thép cứng', en: 'Hardened steel number & letter punches' },
    desc: { vi: 'Bộ đục số, đục chữ thép cứng size 4mm và lớn hơn — dùng đánh dấu chi tiết.', en: 'Hardened steel number and letter punch sets 4mm+ — for part marking.' }
  },
  {
    id: 'p45', image: 'z7852109174280_491db3b0a5ecb6be0ba3ee90b9ba4db5.jpg',
    category: 'machinery', featured: false,
    name: { vi: 'Phụ tùng Makita & vật tư điện', en: 'Makita accessories & electrical supplies' },
    desc: { vi: 'Phụ kiện Makita, tụ điện, vật tư điện cơ — đa dạng kho.', en: 'Makita accessories, capacitors, electromechanical supplies — wide stock.' }
  }
];
