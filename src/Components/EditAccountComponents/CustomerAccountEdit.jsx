import EditAccount from "../EditAccountComponents";

const CustomerAccountEdit = () => {
  const titles = ["Customer Name", "Customer Number", "Customer ID"];

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
