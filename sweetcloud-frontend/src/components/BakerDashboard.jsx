import React, { useState } from "react";
import "../style/Baker.css";
import { Outlet } from "react-router-dom";
function BakerDashboard() {

  const [stats, setStats] = useState({
    totalCakes : 0,
    completedOrders : 0,
    activeOrders : 0,
    canceledOrders : 0,
    totalEarning : 0
  })
  return (
    <>
      <div className="container-fluid p-5 " style={{backgroundColor : "#ffc1d6"}}>
        <div className=" row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3">
              <div class="card-header fw-bold">Total cakes</div>
              <div class="card-body text-primary">
                {/* <h5 class="card-title">Primary card title</h5> */}
                <p id="dashboardTxt" class="text-dark">
                 {stats.totalCakes}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3">
              <div class="card-header fw-bold">Total Completed Orders</div>
              <div class="card-body text-primary">
                {/* <h5 class="card-title">Primary card title</h5> */}
                <p id="dashboardTxt" class="text-dark">
                  {stats.completedOrders}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3">
              <div class="card-header fw-bold">Active Orders</div>
              <div class="card-body text-primary">
                {/* <h5 class="card-title">Primary card title</h5> */}
                <p id="dashboardTxt" class="text-dark">
                 {stats.activeOrders}
                </p>
              </div>
            </div>
          </div>
        

        <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3">
              <div class="card-header fw-bold">Canceled Orders</div>
              <div class="card-body text-primary">
                {/* <h5 class="card-title">Primary card title</h5> */}
                <p id="dashboardTxt" class="text-dark">
                 {stats.canceledOrders}
                </p>
              </div>
            </div>
          </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3">
              <div class="card-header fw-bold">Total Earning</div>
              <div class="card-body text-primary">
                {/* <h5 class="card-title">Primary card title</h5> */}
                <p id="dashboardTxt" class="text-dark">
                 ₹{stats.totalEarning}
                </p>
              </div>
            </div>
          </div>


</div>
      </div>
     
    </>
  );
}

export default BakerDashboard;
