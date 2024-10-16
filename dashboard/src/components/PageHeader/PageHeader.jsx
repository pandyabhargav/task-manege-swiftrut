import UseAuthUser from "../../hooks/UseAuthUser";

const PageHeader = ({ title }) => {
  const { user } = UseAuthUser();
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
