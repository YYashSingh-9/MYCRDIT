import EditAccount from "./EditAccount";

const CustomerAccountEdit = () => {
  const titles = ["Customer Name", "Customer Number"];

  return (
    <>
      <EditAccount
        titleNHtmlFor={titles}
        bck_btnLink={"/your-account-details"}
      />
    </>
  );
};

export default CustomerAccountEdit;
