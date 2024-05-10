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
            <Typography
              variant="h7"
              marginRight={1}
              sx={{ fontWeight: 500, color: "white" }}
            >
              User ID
            </Typography>
            <input placeholder="Enter a user ID" />
            <button>
              <SearchIcon className={classes.searchIcn} />
            </button>
          </Box>
          <Box className={classes.inpBox}>
            <Typography
              variant="h7"
              marginRight={1}
              marginLeft={5}
              sx={{ fontWeight: 500, color: "white" }}
            >
              Amount
            </Typography>
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
