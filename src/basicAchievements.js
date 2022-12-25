import React, {useContext} from "react";
import {createUseStyles} from "react-jss";
import {Box} from "@mui/material";
import CircleItem from "./circleItem";
import {FirstAchievementsContext, SecondAchievementsContext, ThirdAchievementsContext} from "./App";

const useStyles = createUseStyles({
    circleFirstBlock: {
        width: 1100
    },
    circleSecondBlock: {
        width: 900
    }
});

const styles = {
    circleWrapper: {
        height: 450,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleBlock: {
        height: 200,
        display: 'flex',
        justifyContent: 'space-between'
    }
}

const BasicAchievement = () => {
    const firstBlockAchievements = useContext(FirstAchievementsContext);
    const secondBlockAchievements = useContext(SecondAchievementsContext);
    const thirdBlockAchievements = useContext(ThirdAchievementsContext);

    const classesAchievements = useStyles();

    return (
        <Box style={styles.circleWrapper}>
            <Box className={classesAchievements.circleFirstBlock} style={styles.circleBlock}>
                {firstBlockAchievements.map((type, participants) =>
                    <CircleItem {...type}{...participants}/>
                )}
            </Box>
            <Box className={classesAchievements.circleSecondBlock} style={styles.circleBlock}>
                {secondBlockAchievements.map((type, participants) =>
                    <CircleItem {...type}{...participants}/>
                )}
                {thirdBlockAchievements.map((type, participants) =>
                    <CircleItem {...type}{...participants}/>
                )}
            </Box>
        </Box>
    );
}

export default BasicAchievement