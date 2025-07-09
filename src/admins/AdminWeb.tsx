import React, { Fragment } from "react";
import AdminMain from "./AdminMain";
import AdminFooter from "./AdminFooter";
import AdminSidebar from "./AdminSidebar";

function AdminWeb() {
  return (
    <Fragment>
      <div className="container-fluid text-start">
        <div className="row g-1">
          <AdminSidebar />
          <AdminMain />
        </div>
      </div>
      <AdminFooter />
    </Fragment>
  );
}

export default AdminWeb;
