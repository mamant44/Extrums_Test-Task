import React from "react";
import {Box, Typography} from "@mui/material";

const styles = {
    circleItem: {
        width: 110,
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    circleFirstText: {
        width: 110,
        height: 110,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 22,
        fontWeight: 700,
        borderRadius: 60,
        backgroundColor: '#fff',
        boxShadow: 'inset -15px -15px 20px #666'
    },
    circleSecondText: {
        fontWeight: 700,
        fontSize: 19
    }
}

const CircleItem = ({type, participants}) => {

    return (
        <Box style={styles.circleItem}>
            <Typography style={styles.circleFirstText}>
                {participants}
            </Typography>
            <Typography style={styles.circleSecondText}>
                {type}
            </Typography>
        </Box>
    );
}

export default CircleItem