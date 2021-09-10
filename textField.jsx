import React from "react";
import {
    withStyles,
    makeStyles,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// Custom TextField CSS

const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "black" // Text on placeholder color
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "black" // Static border color
            },
            "&:hover fieldset": {
                borderColor: "black" // Hover border color
            },
            "&.Mui-focused fieldset": {
                borderColor: "black" // onClick border color
            }
        }
    }
})(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing(1)
    }
}));

export default function CustomizedInputs() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate>
            <CssTextField
                className={classes.margin}
                label="Custom CSS"
                variant="outlined"
                id="custom-css-outlined-input"
            />
        </form>
    );
}