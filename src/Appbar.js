import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const top100Films = [
    { displayName: 'Sandstone' },
    { displayName: 'Limestone' },
    { displayName: 'Sandstone Block' },
    { displayName: 'Limestone Block' },
];

function Appbar(props) {
    return (
        <div className="appbar">
            {/*<TextField label="Search" variant="outlined" size="small" helperText="e.g. Sandstone Block"/>*/}

            <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.displayName}
                style={{ width: 300, display: "inline-block", marginRight: 5, marginLeft: 20 }}
                renderInput={(params) => <TextField {...params} label="Search" variant="outlined" size="small" />}
            />


            <TextField id="outlined-select-currency-native" select
                label="Game"
                onChange={null}
                SelectProps={{
                    native: true
                }}
                variant="outlined"
                size="small"
            >
                <option value="a">
                    Albion Online
                </option>
                <option value="b">
                    My Time At Portia
                </option>
            </TextField>
        </div>
    );
}

export default Appbar;
