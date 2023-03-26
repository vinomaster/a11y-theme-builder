import { } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface Props {
    system?: any;
    styles?: any;
    setStyles?(newStyles:any): Promise<void>;
}


export const ColorBand: React.FC<Props> = ({system, styles, setStyles}) => {

    return (
        <div className="color-band">
            <Box>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </Box>
        </div>
    );
}

export default ColorBand;