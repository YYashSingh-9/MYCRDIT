import EditAccount from "./EditAccount";

const ProprietorAccountEdit = () => {
  const titles = ["Proprietor Name", "Proprietor Number"];

  return (
    <>
      <EditAccount
        titleNHtmlFor={titles}
        bck_btnLink={"/your-account-details"}
      />
    </>
  );
};

export default ProprietorAccountEdit;
