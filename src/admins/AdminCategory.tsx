import React, { Fragment, useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";

type Category = {
  id: number;
  name: string;
  image?: string;
  parentId?: number; // ID danh mục cha (nếu có)
};

const API_URL = "http://localhost:3001/categories";

const AdminCategory: React.FC = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(""); // Ảnh
  const [categories, setCategories] = useState<Category[]>([]);
  const [editId, setEditId] = useState<number | null>(null); // ID đang sửa
  const [viewParent, setViewParent] = useState<Category | null>(null); // Danh mục cha đang xem

  // Load từ json-server
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Xử lý ảnh
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // ========== Thêm ==========
  const handleAddCategory = async () => {
    if (!name.trim()) return;

    if (editId === null) {
      const newCategory = viewParent
        ? { name, image, parentId: viewParent.id }
        : { name, image };

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCategory),
      });

      const data = await res.json();
      setCategories([...categories, data]);
    } else {
      const res = await fetch(`${API_URL}/${editId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, image }),
      });

      const updated = await res.json();
      setCategories(
        categories.map((cat) => (cat.id === editId ? updated : cat))
      );
      setEditId(null);
    }

    setName("");
    setImage("");
  };

  // ========== Xóa ==========
  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xoá?");
    if (!confirmDelete) return;

    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    setCategories(categories.filter((cat) => cat.id !== id));
  };

  // ========== Sửa ==========
  const handleEdit = (cat: Category) => {
    setName(cat.name);
    setImage(cat.image || "");
    setEditId(cat.id);
  };

  return (
    <Fragment>
      <div className="container-fluid text-start">
        <div className="row">
          <AdminSidebar />
          <div className="content bg-secondary bg-opacity-25 col-10 text-start p-3">
            <h4 className="text-start mb-3">
              {viewParent ? "Thêm danh mục con" : "Danh mục sản phẩm"}
            </h4>
            <hr />

            <div className="row">
              {/* Form thêm / sửa */}
              <div className="col-md-5 text-start">
                <div className="card p-3 mb-3">
                  <h5>{editId === null ? "Thêm danh mục" : "Sửa danh mục"}</h5>

                  {/* Danh mục */}
                  {viewParent && (
                    <div className="mb-2 mt-2">
                      <label className="form-label">Danh mục cha</label>
                      <input
                        type="text"
                        className="form-control"
                        value={viewParent.name}
                        readOnly
                      />
                    </div>
                  )}

                  {/* Tên */}
                  <div className="mb-3 mt-2">
                    <label className="form-label">Tên</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập tên danh mục"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* Chỉ hiện "Thêm ảnh" khi là danh mục con */}
                  {viewParent && (
                    <div className="mb-3">
                      <label className="form-label">Ảnh</label>
                      <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                        onChange={handleImageChange}
                      />
                      {image && (
                        <img
                          src={image}
                          alt="Preview"
                          className="mt-2"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                      )}
                    </div>
                  )}

                  {/* Nút xử lý */}
                  <div className="row p-2">
                    <button
                      className="btn btn-primary col-5 me-2"
                      onClick={handleAddCategory}
                    >
                      {editId === null ? "Thêm" : "Cập nhật"}
                    </button>
                    {editId !== null && (
                      <button
                        className="btn btn-secondary col-5"
                        onClick={() => {
                          setEditId(null);
                          setName("");
                        }}
                      >
                        Huỷ
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Danh sách Right */}
              <div className="col-md-7">
                {/* Danh mục cha */}
                {!viewParent ? (
                  <div className="card p-3">
                    <h5 className="text-start">Danh mục cha</h5>
                    <table className="table table-bordered table-striped mt-2">
                      <thead className="table-light">
                        <tr>
                          <th>ID</th>
                          <th>Tên danh mục</th>
                          <th>Hành động</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.filter((cat) => !cat.parentId).length ===
                        0 ? (
                          <tr>
                            <td colSpan={3} className="text-center text-muted">
                              Chưa có danh mục nào.
                            </td>
                          </tr>
                        ) : (
                          categories
                            .filter((cat) => !cat.parentId)
                            .map((cat) => (
                              <tr key={cat.id}>
                                <td>{cat.id}</td>
                                <td>{cat.name}</td>
                                <td>
                                  <i
                                    className="fa-solid fa-eye text-warning me-2"
                                    title="Xem danh mục con"
                                    onClick={() => setViewParent(cat)}
                                  ></i>
                                  <i
                                    className="fa-solid fa-pen-to-square text-primary me-2"
                                    title="Sửa"
                                    onClick={() => handleEdit(cat)}
                                  ></i>
                                  <i
                                    className="fa-solid fa-trash text-danger"
                                    title="Xoá"
                                    onClick={() => handleDelete(cat.id)}
                                  ></i>
                                </td>
                              </tr>
                            ))
                        )}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  // ========== Right Tree con ==========
                  <div className="card p-3">
                    {/* Danh mục con của: */}
                    <div className="d-flex justify-content-between align-items-center">
                      <h5>📂 Danh mục con của: {viewParent.name}</h5>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                          setViewParent(null);
                          setEditId(null);
                          setName("");
                        }}
                      >
                        ⬅ Quay lại danh mục cha
                      </button>
                    </div>
                    <table className="table table-bordered table-striped mt-2">
                      <thead className="table-light">
                        <tr>
                          <th>ID</th>
                          <th>Ảnh</th>
                          <th>Tên danh mục con</th>
                          <th>Hành động</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.filter(
                          (cat) => cat.parentId === viewParent.id
                        ).length === 0 ? (
                          <tr>
                            <td colSpan={4} className="text-center text-muted">
                              Chưa có danh mục con nào.
                            </td>
                          </tr>
                        ) : (
                          categories
                            .filter((cat) => cat.parentId === viewParent.id)
                            .map((cat) => (
                              <tr key={cat.id}>
                                <td>{cat.id}</td>
                                <td>
                                  {cat.image && (
                                    <img
                                      src={cat.image}
                                      alt="img"
                                      width="50"
                                      height="50"
                                      style={{ objectFit: "cover" }}
                                    />
                                  )}
                                </td>
                                <td>{cat.name}</td>
                                <td>
                                  <i
                                    className="fa-solid fa-pen-to-square text-primary me-2"
                                    title="Sửa"
                                    onClick={() => handleEdit(cat)}
                                  ></i>
                                  <i
                                    className="fa-solid fa-trash text-danger"
                                    title="Xoá"
                                    onClick={() => handleDelete(cat.id)}
                                  ></i>
                                </td>
                              </tr>
                            ))
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminCategory;
