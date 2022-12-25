import React, {useCallback} from 'react';
import {createUseStyles} from 'react-jss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {Box, Typography} from '@mui/material';

const useStyles = createUseStyles({
    firstBlockText: {
        opacity: 0.6
    },
    secondBlockText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    firstText: {
        height: 50,
        opacity: 0.6,
        marginBottom: 5
    },
    secondText: {
        height: 20
    }
});

const styles = {
    carousel: {
        width: 475,
    },
    carouselButton: {
        height: 100,
        borderRadius: 5,
        padding: 0,
        border: 0,
        marginBottom: 35,
        boxShadow: '2px 2px 10px #303030'
    },
    carouselCard: {
        width: 340,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 700,
        fontSize: 16,
        color: '#000',
        backgroundColor: '#fff',
        padding: 14,
        borderRadius: 5,
        boxShadow: '2px 2px 10px #303030'
    },
    carouselText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontWeight: 700
    }
}

const BasicCarousel = ({
                           firstCardsCarousel, setFirstCardsCarousel, secondCardsCarousel, setSecondCardsCarousel,
                           firstAchievements, setFirstAchievements, secondAchievements, setSecondAchievements,
                           challenges, setChallenges, card
                       }) => {

    const classesCarousel = useStyles();

    const moveCardsFirstBlock = useCallback((currentCard) => {
        const filteredCards = firstCardsCarousel.filter(oldCard => oldCard !== currentCard);
        const removedCard = firstCardsCarousel.filter(oldCard => oldCard === currentCard);
        setChallenges([...challenges, ...removedCard]);
        setFirstAchievements([...firstAchievements, ...removedCard]);
        setFirstCardsCarousel(filteredCards);
    },[challenges, firstAchievements, firstCardsCarousel,
            setChallenges, setFirstAchievements, setFirstCardsCarousel]);

    const moveCardsSecondBlock = useCallback((currentCard) => {
        const filteredCards = card.filter(oldCard => oldCard === currentCard);
        const removedCard = secondCardsCarousel.filter(oldCard => oldCard !== currentCard);
        setChallenges([...challenges, ...filteredCards]);
        setSecondAchievements([...secondAchievements, ...filteredCards]);
        setSecondCardsCarousel(removedCard);
    }, [card, challenges, secondAchievements, secondCardsCarousel,
             setChallenges, setSecondAchievements, setSecondCardsCarousel]);

    return (
        <Carousel style={styles.carousel} showThumbs={false}>
            {firstCardsCarousel.map(card => {
                return (
                    <button key={card.key} style={styles.carouselButton}
                            onClick={() => moveCardsFirstBlock(card)}>
                        <Box className={classesCarousel.firstBlockText} style={styles.carouselCard}>
                            {card.activity}
                        </Box>
                    </button>
                );
            })}
            {secondCardsCarousel.map(card =>
                (
                    <button key={card.key} style={styles.carouselButton}
                            onClick={() => moveCardsSecondBlock(card)}>
                        <Box className={classesCarousel.secondBlockText} style={styles.carouselCard}>
                            <Typography className={classesCarousel.firstText} style={styles.carouselText}>
                                {card.activity}
                            </Typography>
                            <Typography className={classesCarousel.secondText} style={styles.carouselText}>
                                {card.type}
                            </Typography>
                        </Box>
                    </button>
                )
            )}
        </Carousel>
    );
}

export default BasicCarousel