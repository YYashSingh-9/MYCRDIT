import classes from "./ShopInfo.module.css";
import BasicCoverDiv from "./BasicCoverDiv";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";

const InfoPart = () => {
  return (
    <>
      <table className={classes.table_m}>
        <tr>
          <td>Shop name :</td>
          <td> Modi Kirana</td>
        </tr>
        <tr>
          <td>Shop Address :</td>
          <td> xyz near mandir vidya nagar, C.G,Bilaspur,495001</td>
        </tr>
        <tr>
          <td>Shop Category:</td>
          <td> Daily Needs</td>
        </tr>
        <tr>
          <td>Contact Number :</td>
          <td> 9786523389</td>
        </tr>
        <tr>
          <td>Proprietor's Name :</td>
          <td> Monu Modi</td>
        </tr>
        <tr>
          <td>GST Number :</td>
          <td> 1284BH132MD313K</td>
        </tr>
      </table>
    </>
  );
};

const ShopInfo = () => {
  const accType = useSelector((state) => state.sliceOne.accountType);
  return (
    <>
      {accType === "proprietor" ? (
        <BasicCoverDiv heading={"About your"} heading_highlight={" Shop."}>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={classes.mainInfo}
          >
            <InfoPart />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={classes.btnSection}
          >
            <Link to={"/"}>
              <button>
                <EditIcon />
                Edit
              </button>
            </Link>
            <Link to={"/your-account-details"}>
              <button>Back</button>
            </Link>
          </Grid>
        </BasicCoverDiv>
      ) : (
        <p>Invalid link</p>
      )}
    </>
  );
};

export default ShopInfo;
