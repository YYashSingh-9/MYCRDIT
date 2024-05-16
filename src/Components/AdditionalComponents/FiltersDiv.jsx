import { Container, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./FiltersDiv.module.css";

const FilterDiv = () => {
  return (
    <>
      <Box>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Typography
            variant="h5"
            margin={"auto"}
            sx={{
              fontWeight: 800,
              color: "white",
              fontFamily: "Manrope",
              paddingTop: 1,
            }}
          >
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
            <h4>Customer</h4>
            <input placeholder="Customer Name" />
            <button>
              <SearchIcon className={classes.searchIcn} />
            </button>

            <h4>Amount</h4>
            <input placeholder="Ex- 3,XXX" type="number" />
            <button>
              <SearchIcon className={classes.searchIcn} />
            </button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FilterDiv;
