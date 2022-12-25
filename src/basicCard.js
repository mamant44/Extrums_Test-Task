import React, {useCallback} from "react";
import {createUseStyles} from 'react-jss';
import {Card, CardContent, Typography} from "@mui/material";

const useStyles = createUseStyles({
    cardFirstText: {
        maxWidth: 318,
        maxHeight: 50,
        marginBottom: 16,
        opacity: 0.6
    },
    cardSecondText: {
        height: 16
    }
});

const styles = {
    card: {
        maxWidth: 350,
        boxShadow: '2px 2px 10px #474747'
    },
    cardButton: {
        height: 98,
        borderRadius: 5,
        padding: 0,
        border: 0,
        boxShadow: '2px 2px 10px #474747'
    },
    cardText: {
        fontSize: 16,
        fontWeight: 700
    }
}

const BasicCard = ({
                       activity, type, secondCardsCarousel, setSecondCardsCarousel,
                       freshIdeas, setFreshIdeas, card
                   }) => {

    const classesCardText = useStyles();

    const addFreshIdeas = useCallback(() => {
        const filteredFreshIdeas = freshIdeas.filter(oldCard => oldCard !== card);
        setSecondCardsCarousel([...secondCardsCarousel, card]);
        setFreshIdeas(filteredFreshIdeas);
    }, [card, freshIdeas, secondCardsCarousel,
             setFreshIdeas, setSecondCardsCarousel]);

    return (
        <button style={styles.cardButton} onClick={() => addFreshIdeas()}>
            <Card style={styles.card}>
                <CardContent>
                    <Typography className={classesCardText.cardFirstText} style={styles.cardText}>
                        {activity}
                    </Typography>
                    <Typography className={classesCardText.cardSecondText} style={styles.cardText}>
                        {type}
                    </Typography>
                </CardContent>
            </Card>
        </button>
    );
}

export default BasicCard