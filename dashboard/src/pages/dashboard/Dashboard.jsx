import { useEffect } from "react";
import DataTable from "datatables.net-dt";
import PageHeader from "../../components/PageHeader/PageHeader";

const Dashboard = () => {
  useEffect(() => {
    new DataTable(".datatable");
  });
  return (
    <>
      {/* <PageHeader title="Dashboard" /> */}

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <h2>Task Manegement System</h2>
              <p>
                  Enter your Task
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
