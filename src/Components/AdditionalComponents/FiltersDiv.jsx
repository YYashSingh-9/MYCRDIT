import { Container, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./FiltersDiv.module.css";

const HelperFilterInput = (props) => {
  return (
    <Box className={classes.inputDiv}>
      <h4>{props.title}</h4>
      <input placeholder={props.placeholder} />
      <button>
        <SearchIcon className={classes.searchIcn} />
      </button>
    </Box>
  );
};

const styles = {
  heading: {
    fontWeight: 800,
    color: "white",
    fontFamily: "Manrope",
    paddingTop: 1,
    "@media only screen and (min-width: 280px) and (max-width: 576px)": {
      display: "block",
      fontSize: 17,
    },
  },
};

const FilterDiv = () => {
  return (
    <>
      <Box>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Typography variant="h5" margin={"auto"} sx={styles.heading}>
            FILTER
          </Typography>
        </Box>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box className={classes.inpBox}>
            <HelperFilterInput title="Customer" placeholder="Customer Name" />
            <HelperFilterInput
              title="Amount"
              placeholder=" Amount/ ex - 3,XXX"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FilterDiv;
