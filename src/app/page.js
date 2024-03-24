import Banner from "./components/Banner";
import Pizza from "./components/Pizza";

// pizza data
const pizzas = [
  {
    id: 1,
    name: "Bột sủi Efferalgan 250mg UPSA ",
    description:
      "Efferalgan 250mg của Công ty Dược phẩm UPSA SAS (Pháp), thành phần chính là paracetamol. Thuốc dùng điều trị các chứng đau và/hoặc sốt như: Đau đầu, tình trạng như cúm, đau răng, nhức mỏi cơ, đau bụng kinh",
    image: "/efferalgan_0ac25a5796.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image:
          "/00002723_efferalgan_150mg_codein_4813_63ab_large_bbffd21a9a.webp",
        name: "Viên sủi Efferalgan lớn",
        price: 2,
      },
      {
        image: "/eferalgan_1_f94f787f4f.webp",
        name: "Viên sủi Efferalgan 500mg",
        price: 2,
      },
      {
        image: "/00002720_efferalgan_80mg_3191_5caf_large_e9191badac.webp",
        name: "Bột sủi Efferalgan 80mg",
        price: 2,
      },
      {
        image:
          "/00027792_efferhasan_250mg_hasan_30_goi_7437_609c_large_6f71054f49.webp",
        name: "Bột sủi EfferHasan 250mg",
        price: 2,
      },
      {
        image: "/00021929_perfect_white_60v_3739_600f_large_6794b33ce3.webp",
        name: "Viên uống Perfect White",
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: "Dầu Siang Pure Oil Formula I",
    description:
      "Dầu gió Thái Bertram là sản phẩm của Công ty Bertram Co.,LTD sử dụng trong trường hợp giảm triệu chứng cảm lạnh nhức đầu, chóng mặt, ngạt mũi. Giảm đau cơ, bầm tím, đau và ngứa do côn trùng cắn đốt.",
    image: "/00002262_dau_thai_7ml_chai_8373_6255_large_7aea59f680.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image:
          "/00002723_efferalgan_150mg_codein_4813_63ab_large_bbffd21a9a.webp",
        name: "Viên sủi Efferalgan lớn",
        price: 2,
      },
      {
        image: "/eferalgan_1_f94f787f4f.webp",
        name: "Viên sủi Efferalgan 500mg",
        price: 2,
      },
      {
        image: "/00002720_efferalgan_80mg_3191_5caf_large_e9191badac.webp",
        name: "Bột sủi Efferalgan 80mg",
        price: 2,
      },
      {
        image:
          "/00027792_efferhasan_250mg_hasan_30_goi_7437_609c_large_6f71054f49.webp",
        name: "Bột sủi EfferHasan 250mg",
        price: 2,
      },
      {
        image: "/00021929_perfect_white_60v_3739_600f_large_6794b33ce3.webp",
        name: "Viên uống Perfect White",
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Dung dịch vệ sinh phụ nữ Dạ Hương",
    description:
      "Dung dịch vệ sinh Dạ Hương giúp làm sạch nhẹ nhàng, khử mùi hôi, dưỡng da, chống khô rát. Bảo vệ vùng kín giúp ngăn ngừa vi trùng gây viêm nhiễm",
    image: "/00002166_da_huong_120ml_9942_5cff_large_e72548a7a2.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image:
          "/00002723_efferalgan_150mg_codein_4813_63ab_large_bbffd21a9a.webp",
        name: "Viên sủi Efferalgan lớn",
        price: 2,
      },
      {
        image: "/eferalgan_1_f94f787f4f.webp",
        name: "Viên sủi Efferalgan 500mg",
        price: 2,
      },
      {
        image: "/00002720_efferalgan_80mg_3191_5caf_large_e9191badac.webp",
        name: "Bột sủi Efferalgan 80mg",
        price: 2,
      },
      {
        image:
          "/00027792_efferhasan_250mg_hasan_30_goi_7437_609c_large_6f71054f49.webp",
        name: "Bột sủi EfferHasan 250mg",
        price: 2,
      },
      {
        image: "/00021929_perfect_white_60v_3739_600f_large_6794b33ce3.webp",
        name: "Viên uống Perfect White",
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: "Viên uống An Dạ Kingphar",
    description:
      "Viên uống An Dạ Kingphar hỗ trợ làm giảm các triệu chứng đau rát vùng thượng vị, xung huyết hang vị, ợ nóng, ợ chua, trào ngược dạ dày - thực quản, giúp làm lành các tổn thương tại đường tiêu hóa.",
    image: "/00028630_an_da_kingphar_60v_7740_63aa_large_52dbd4b38e.webp",
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image:
          "/00002723_efferalgan_150mg_codein_4813_63ab_large_bbffd21a9a.webp",
        name: "Viên sủi Efferalgan lớn",
        price: 2,
      },
      {
        image: "/eferalgan_1_f94f787f4f.webp",
        name: "Viên sủi Efferalgan 500mg",
        price: 2,
      },
      {
        image: "/00002720_efferalgan_80mg_3191_5caf_large_e9191badac.webp",
        name: "Bột sủi Efferalgan 80mg",
        price: 2,
      },
      {
        image:
          "/00027792_efferhasan_250mg_hasan_30_goi_7437_609c_large_6f71054f49.webp",
        name: "Bột sủi EfferHasan 250mg",
        price: 2,
      },
      {
        image: "/00021929_perfect_white_60v_3739_600f_large_6794b33ce3.webp",
        name: "Viên uống Perfect White",
        price: 2,
      },
    ],
  },
  {
    id: 5,
    name: "Viên uống Bảo Dạ Phương Y Nam",
    description:
      "Bảo Dạ Phương Y Nam hỗ trợ giảm acid dịch vị, hỗ trợ bảo vệ niêm mạc dạ dày. Hỗ trợ giảm nguy cơ viêm loét ",
    image:
      "/00502320_bao_da_phuong_y_nam_ho_tro_giam_viem_loet_da_day_ta_trang_15_goi_x_15ml_5610_6372_large_bd29697b80.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image:
          "/00002723_efferalgan_150mg_codein_4813_63ab_large_bbffd21a9a.webp",
        name: "Viên sủi Efferalgan lớn",
        price: 2,
      },
      {
        image: "/eferalgan_1_f94f787f4f.webp",
        name: "Viên sủi Efferalgan 500mg",
        price: 2,
      },
      {
        image: "/00002720_efferalgan_80mg_3191_5caf_large_e9191badac.webp",
        name: "Bột sủi Efferalgan 80mg",
        price: 2,
      },
      {
        image:
          "/00027792_efferhasan_250mg_hasan_30_goi_7437_609c_large_6f71054f49.webp",
        name: "Bột sủi EfferHasan 250mg",
        price: 2,
      },
      {
        image: "/00021929_perfect_white_60v_3739_600f_large_6794b33ce3.webp",
        name: "Viên uống Perfect White",
        price: 2,
      },
    ],
  },
  {
    id: 6,
    name: "Nước Yến Sào Cao Cấp Nunest Kids",
    description:
      "Nước yến sào cao cấp cho trẻ em Nunest Kid vị chuối là sản phẩm kết hợp giữa yến sào thiên nhiên từ Khánh Hòa, Ninh Thuận cùng",
    image: "/DSC_05061_841dc11199.jpg",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image:
          "/00002723_efferalgan_150mg_codein_4813_63ab_large_bbffd21a9a.webp",
        name: "Viên sủi Efferalgan lớn",
        price: 2,
      },
      {
        image: "/eferalgan_1_f94f787f4f.webp",
        name: "Viên sủi Efferalgan 500mg",
        price: 2,
      },
      {
        image: "/00002720_efferalgan_80mg_3191_5caf_large_e9191badac.webp",
        name: "Bột sủi Efferalgan 80mg",
        price: 2,
      },
      {
        image:
          "/00027792_efferhasan_250mg_hasan_30_goi_7437_609c_large_6f71054f49.webp",
        name: "Bột sủi EfferHasan 250mg",
        price: 2,
      },
      {
        image: "/00021929_perfect_white_60v_3739_600f_large_6794b33ce3.webp",
        name: "Viên uống Perfect White",
        price: 2,
      },
    ],
  },
  {
    id: 7,
    name: "Viên nang cứng Gastroclean Thái Minh",
    description:
      "Gastroclean Thái Minh hỗ trợ giảm acid dịch vị, giúp bảo vệ niêm mạc dạ dày. Hỗ trợ hạn chế các triệu chứng và giảm nguy cơ viêm loét dạ dày, tá tràng.",
    image: "/DSC_03779_31b49c4503.webp",
    priceSm: 12.99,
    priceMd: 13.99,
    priceLg: 14.99,
    toppings: [
      {
        image:
          "/00002723_efferalgan_150mg_codein_4813_63ab_large_bbffd21a9a.webp",
        name: "Viên sủi Efferalgan lớn",
        price: 2,
      },
      {
        image: "/eferalgan_1_f94f787f4f.webp",
        name: "Viên sủi Efferalgan 500mg",
        price: 2,
      },
      {
        image: "/00002720_efferalgan_80mg_3191_5caf_large_e9191badac.webp",
        name: "Bột sủi Efferalgan 80mg",
        price: 2,
      },
      {
        image:
          "/00027792_efferhasan_250mg_hasan_30_goi_7437_609c_large_6f71054f49.webp",
        name: "Bột sủi EfferHasan 250mg",
        price: 2,
      },
      {
        image: "/00021929_perfect_white_60v_3739_600f_large_6794b33ce3.webp",
        name: "Viên uống Perfect White",
        price: 2,
      },
    ],
  },
  {
    id: 8,
    name: "Viên uống CumarGold Nano",
    description:
      "CumarGold New hỗ trợ bảo vệ niêm mạc dạ dày, hỗ trợ giảm nhanh các triệu chứng của viêm loét dạ dày, tá tràng. Hỗ trợ giảm tác dụng phụ của hóa trị, xạ trị.",
    image:
      "/00032831_cumargold_nano_curcumin_new_4x10_2219_6198_large_59befe4c51.webp",
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image:
          "/00002723_efferalgan_150mg_codein_4813_63ab_large_bbffd21a9a.webp",
        name: "Viên sủi Efferalgan lớn",
        price: 2,
      },
      {
        image: "/eferalgan_1_f94f787f4f.webp",
        name: "Viên sủi Efferalgan 500mg",
        price: 2,
      },
      {
        image: "/00002720_efferalgan_80mg_3191_5caf_large_e9191badac.webp",
        name: "Bột sủi Efferalgan 80mg",
        price: 2,
      },
      {
        image:
          "/00027792_efferhasan_250mg_hasan_30_goi_7437_609c_large_6f71054f49.webp",
        name: "Bột sủi EfferHasan 250mg",
        price: 2,
      },
      {
        image: "/00021929_perfect_white_60v_3739_600f_large_6794b33ce3.webp",
        name: "Viên uống Perfect White",
        price: 2,
      },
    ],
  },
  {
    id: 9,
    name: "Nước yến sào cao cấp Nunest",
    description:
      "Nước yến sào cao cấp cho trẻ em Nunest Kid Grow vị cam là sản phẩm kết hợp giữa yến sào thiên nhiên từ Khánh Hòa, Ninh Thuận cùng chiết xuất cam tự nhiên và các dưỡng chất bổ dưỡng",
    image: "/DSC_07253_b8c427cb66.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image:
          "/00002723_efferalgan_150mg_codein_4813_63ab_large_bbffd21a9a.webp",
        name: "Viên sủi Efferalgan lớn",
        price: 2,
      },
      {
        image: "/eferalgan_1_f94f787f4f.webp",
        name: "Viên sủi Efferalgan 500mg",
        price: 2,
      },
      {
        image: "/00002720_efferalgan_80mg_3191_5caf_large_e9191badac.webp",
        name: "Bột sủi Efferalgan 80mg",
        price: 2,
      },
      {
        image:
          "/00027792_efferhasan_250mg_hasan_30_goi_7437_609c_large_6f71054f49.webp",
        name: "Bột sủi EfferHasan 250mg",
        price: 2,
      },
      {
        image: "/00021929_perfect_white_60v_3739_600f_large_6794b33ce3.webp",
        name: "Viên uống Perfect White",
        price: 2,
      },
    ],
  },
  {
    id: 10,
    name: "Nước yến sào cao cấp Nunest Kids",
    description:
      "Nước yến sào cao cấp cho trẻ em Nunest Kid vị chuối là sản phẩm kết hợp giữa yến sào thiên nhiên từ Khánh Hòa, Ninh Thuận cùng chiết xuất chuối tự nhiên",
    image: "/DSC_01795_a7d58eac3b.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image:
          "/00002723_efferalgan_150mg_codein_4813_63ab_large_bbffd21a9a.webp",
        name: "Viên sủi Efferalgan lớn",
        price: 2,
      },
      {
        image: "/eferalgan_1_f94f787f4f.webp",
        name: "Viên sủi Efferalgan 500mg",
        price: 2,
      },
      {
        image: "/00002720_efferalgan_80mg_3191_5caf_large_e9191badac.webp",
        name: "Bột sủi Efferalgan 80mg",
        price: 2,
      },
      {
        image:
          "/00027792_efferhasan_250mg_hasan_30_goi_7437_609c_large_6f71054f49.webp",
        name: "Bột sủi EfferHasan 250mg",
        price: 2,
      },
      {
        image: "/00021929_perfect_white_60v_3739_600f_large_6794b33ce3.webp",
        name: "Viên uống Perfect White",
        price: 2,
      },
    ],
  },
];

export default function Home() {
  return (
    <section>
      <Banner />
      <div className="container mx-auto">
        {/* pizza grid */}
        <div className="grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12">
          {pizzas.map((pizza, index) => {
            return <Pizza key={index} pizza={pizza} />;
          })}
        </div>
      </div>
    </section>
  );
}
