import React, { Fragment, useState, useEffect } from "react";
import { toast } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";

type Product = {
  id: number;
  name: string;
  type: "dog" | "cat" | "accessory";
  price: number;
  image: string;
};

type CartItem = Product & {
  quantity: number;
  checked: boolean;
};

const priceOptions = [
  { label: "< 1,000,000", min: 0, max: 999999 },
  { label: "1,000,000 - 5,000,000", min: 1000000, max: 5000000 },
  { label: "5,000,000 - 10,000,000", min: 5000001, max: 10000000 },
  { label: "> 10,000,000", min: 10000001, max: Infinity },
];

const itemsPerPage = 12;

function formatCurrency(value: number): string {
  return value.toLocaleString("vi-VN") + "đ";
}

function Pet() {
  const [selectedType, setSelectedType] = useState<
    "all" | "dog" | "cat" | "accessory"
  >("all");
  const [selectedPriceIndex, setSelectedPriceIndex] = useState<number>(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    fetch("/pet.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Lỗi tải products:", err));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const addToCart = (product: Product) => {
    const stored = localStorage.getItem("cart");
    let cart: CartItem[] = stored ? JSON.parse(stored) : [];

    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1, checked: false });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Đã thêm vào giỏ hàng!");
  };

  const handleTypeChange = (type: "all" | "dog" | "cat" | "accessory") => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const handlePriceChange = (index: number) => {
    setSelectedPriceIndex(index);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((p) => {
    const matchType = selectedType === "all" || p.type === selectedType;
    const matchPrice =
      selectedPriceIndex === -1 ||
      (p.price >= priceOptions[selectedPriceIndex].min &&
        p.price <= priceOptions[selectedPriceIndex].max);
    const matchSearch = p.name
      .toLowerCase()
      .includes(searchKeyword.toLowerCase());
    return matchType && matchPrice && matchSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Fragment>
      <link
        rel="stylesheet"
        href="assets/plugins/font-awesome/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="assets/plugins/bootstrap/css/bootstrap.min.css"
      />
      <Header />

      <section
        className="banner-area banner-area2 text-center text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url("assets/images/pet.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "630px",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.13)",
            padding: "20px 40px",
            borderRadius: "8px",
          }}
        >
          <h1 className="display-4 fw-bold mb-0">Pet</h1>
        </div>
      </section>

      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-2 py-1">
            <i className="fa-solid fa-table-list me-2"></i>Danh mục sản phẩm
            <hr />
          </div>
          <div className="col-8">
            {/* Hiển thị trang đang ở */}
            <div className="text-dark text-start fw-bold fs-5">
              <a href="/" className="text-dark text-decoration-none">
                Home
              </a>{" "}
              / Pet /{" "}
              {selectedType === "all"
                ? "Tất cả"
                : selectedType === "cat"
                ? "Mèo"
                : selectedType === "dog"
                ? "Chó"
                : "Phụ kiện"}
            </div>
            <hr />
            {/* Bộ lọc */}
            <div className="row mb-3">
              <div className="col-md-4 d-flex flex-wrap gap-2 mb-2 me-auto">
                {/* Cat */}
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handleTypeChange("cat")}
                >
                  Mèo
                </button>
                {/* Dog */}
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handleTypeChange("dog")}
                >
                  Chó
                </button>
                {/* Accessory */}
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handleTypeChange("accessory")}
                >
                  Phụ kiện
                </button>
              </div>

              {/* Tìm theo tên */}
              <div className="col-md-3 mb-2 ms-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm theo tên sản phẩm..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </div>

              {/* Khoảng giá */}
              <div className="col-md-2">
                <select
                  className="form-select"
                  value={selectedPriceIndex}
                  onChange={(e) => handlePriceChange(parseInt(e.target.value))}
                >
                  <option value={-1}>Giá</option>
                  {priceOptions.map((opt, index) => (
                    <option key={index} value={index}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Danh sách sản phẩm */}
            <div className="row g-4">
              {paginatedProducts.map((product) => (
                <div className="col-10 col-sm-5 col-md-3" key={product.id}>
                  <div className="product-card border p-3 text-center">
                    <div className="product-image-container">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid mb-2"
                        style={{ width: "100%" }}
                      />
                      <div className="product-actions">
                        <button
                          title="Thêm vào giỏ hàng"
                          onClick={() => addToCart(product)}
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </button>
                        <button title="Xem chi tiết">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                    <h5>{product.name}</h5>
                    <p className="text-muted">
                      {formatCurrency(product.price)}
                    </p>
                  </div>
                </div>
              ))}
              {paginatedProducts.length === 0 && (
                <p className="text-center text-danger">
                  Không có sản phẩm phù hợp.
                </p>
              )}
            </div>

            {/* Phân trang */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-4">
                <nav>
                  <ul className="pagination">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage - 1)}
                      >
                        Trước
                      </button>
                    </li>
                    {[...Array(totalPages)].map((_, i) => (
                      <li
                        key={i}
                        className={`page-item ${
                          currentPage === i + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage + 1)}
                      >
                        Tiếp
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default Pet;
