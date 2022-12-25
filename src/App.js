import axios from 'axios';
import {useEffect, useState, createContext} from "react";
import {createUseStyles} from "react-jss";
import {Box, Paper, Table, TableContainer, TableHead, TableRow} from "@mui/material";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {styled} from "@mui/material/styles";
import BasicCard from "./basicCard";
import BasicCarousel from "./basicCarousel";
import BasicAchievement from "./basicAchievements";
import BasicTable from "./basicTable";

export const FirstAchievementsContext = createContext('');
export const SecondAchievementsContext = createContext('');
export const ThirdAchievementsContext = createContext('');

const API_ACTIVITY = 'https://www.boredapi.com/api/activity/';

const FreshIdeas = (number) => {
    const [freshIdeas, setFreshIdeas] = useState([]);
    const addFreshIdeas = (newIdea) => setFreshIdeas(oldIdeas => [...oldIdeas, newIdea]);

    useEffect(() => {
        for (let i = 0; i < number; i++) {
            axios.get(API_ACTIVITY).then((resp) => {
                addFreshIdeas(resp.data)
            });
        }
    }, [number]);

    useEffect(() => {
        localStorage.setItem("freshIdeas", JSON.stringify(freshIdeas));
    }, [freshIdeas]);

    return {freshIdeas, setFreshIdeas};
}

const FirstBlockCarousel = (number) => {
    const [firstCardsCarousel, setFirstCardsCarousel] = useState([]);
    const addCards = (newCard) => setFirstCardsCarousel(oldCards => [...oldCards, newCard]);

    useEffect(() => {
        for (let i = 0; i < number; i++) {
            axios.get(API_ACTIVITY).then((resp) => {
                addCards(resp.data)
            });
        }
    }, [number]);

    useEffect(() => {
        localStorage.setItem("firstCardsCarousel", JSON.stringify(firstCardsCarousel));
    }, [firstCardsCarousel]);

    return {firstCardsCarousel, setFirstCardsCarousel};
}

const SecondBlockCarousel = () => {
    const [secondCardsCarousel, setSecondCardsCarousel] = useState([]);
    const addNewCards = (newCard) => setSecondCardsCarousel(oldCards => [...oldCards, newCard]);

    useEffect(() => {
        axios.get(API_ACTIVITY).then((resp) => {
            addNewCards(resp.data)
        });
    }, []);

    useEffect(() => {
        localStorage.setItem("secondCardsCarousel", JSON.stringify(secondCardsCarousel));
    }, [secondCardsCarousel]);

    return {secondCardsCarousel, setSecondCardsCarousel};
}

const FirstBlockAchievements = () => {
    const [firstAchievements, setFirstAchievements] = useState([] || '');
    const addAchievements = (newAchievement) =>
        setFirstAchievements(oldAchievements => [...oldAchievements, newAchievement]);

    useEffect(() => {
        if (firstAchievements.length < 3) {
            axios.get(API_ACTIVITY).then((resp) => {
                addAchievements(resp.data)
            });
        }
    }, [firstAchievements]);

    useEffect(() => {
        localStorage.setItem("firstAchievements", JSON.stringify(firstAchievements));
    }, [firstAchievements]);

    return {firstAchievements, setFirstAchievements};
}

const SecondBlockAchievements = () => {
    const [secondAchievements, setSecondAchievements] = useState([] || '');
    const addAchievements = (newAchievement) =>
        setSecondAchievements(oldAchievements => [...oldAchievements, newAchievement]);

    useEffect(() => {
        axios.get(API_ACTIVITY).then((resp) => {
            addAchievements(resp.data)
        });
    }, []);

    useEffect(() => {
        localStorage.setItem("secondAchievements", JSON.stringify(secondAchievements));
    }, [secondAchievements]);

    return {secondAchievements, setSecondAchievements};
}

const ThirdBlockAchievements = () => {
    const [thirdAchievements, setThirdAchievements] = useState([] || '');
    const addAchievements = (newIdea) => setThirdAchievements([newIdea]);

    useEffect(() => {
        axios.get(API_ACTIVITY).then((resp) => {
            addAchievements(resp.data)
        });
    }, []);

    useEffect(() => {
        localStorage.setItem("thirdAchievements", JSON.stringify(thirdAchievements));
    }, [thirdAchievements]);

    return {thirdAchievements, setThirdAchievements};
}

const CompletedChallenges = () => {
    const [challenges, setChallenges] = useState([]);
    const addChallenges = (newChallenge) => setChallenges(oldChallenges => [...oldChallenges, newChallenge]);

    useEffect(() => {
        if (challenges.length < 3) {
            axios.get(API_ACTIVITY).then((resp) => {
                addChallenges(resp.data)
            });
        }
    }, [challenges]);

    useEffect(() => {
        localStorage.setItem("challenges", JSON.stringify(challenges));
    }, [challenges]);

    return {challenges, setChallenges};
}

const useStyles = createUseStyles({
    freshIdeasWrapper: {
        width: '100%',
        height: 200,
        flexDirection: 'column',
        marginTop: 35
    },
    freshIdeas: {
        height: 135
    },
    titlesFlexWrapper: {
        display: 'flex',
        justifyContent: 'center'
    }
});

const styles = {
    App: {
        width: '100%',
        height: 1580,
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        backgroundColor: '#dfdddd',
        backgroundImage: "url(/background.jpg)"
    },
    titles: {
        fontSize: 34,
        margin: 0,
        color: 'cornsilk',
        marginBottom: 35
    },
    freshIdeasBlock: {
        display: 'flex',
        justifyContent: 'space-evenly',
        textAlign: 'center'
    },
    ideas: {
        height: 210,
        marginTop: 60,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ideasBlock: {
        width: 475
    },
    achievements: {
        marginTop: 72
    },
    challenges: {
        width: 1400,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '0 auto',
        marginTop: 20
    },
    tableShadow: {
        boxShadow: '5px 5px 20px #000'
    }
}

function App() {
    const {freshIdeas, setFreshIdeas} = FreshIdeas(4);
    const {firstCardsCarousel, setFirstCardsCarousel} = FirstBlockCarousel(2);
    const {secondCardsCarousel, setSecondCardsCarousel} = SecondBlockCarousel();
    const {firstAchievements, setFirstAchievements} = FirstBlockAchievements(3);
    const {secondAchievements, setSecondAchievements} = SecondBlockAchievements();
    const {thirdAchievements} = ThirdBlockAchievements();
    const {challenges, setChallenges} = CompletedChallenges(3);

    const classesApp = useStyles();

    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#000',
            color: '#fff',
            fontSize: 16,
            fontWeight: 700,
            textAlign: 'center'
        },
        '&:first-of-type': {
            width: 600
        },
        '&:last-child': {
            width: 90
        }
    }));

    return (
        <FirstAchievementsContext.Provider value={firstAchievements}>
            <SecondAchievementsContext.Provider value={secondAchievements}>
                <ThirdAchievementsContext.Provider value={thirdAchievements}>
                    <Box style={styles.App}>
                        <Box className={classesApp.freshIdeasWrapper} style={styles.freshIdeasBlock}>
                            <h2 style={styles.titles}>Choose fresh ideas to do</h2>
                            <Box className={classesApp.freshIdeas} style={styles.freshIdeasBlock}>
                                <>
                                    {freshIdeas.map(card => {
                                        return (
                                            <BasicCard activity={card.activity}
                                                       type={card.type}
                                                       key={card.key}
                                                       secondCardsCarousel={secondCardsCarousel}
                                                       setSecondCardsCarousel={setSecondCardsCarousel}
                                                       freshIdeas={freshIdeas}
                                                       setFreshIdeas={setFreshIdeas}
                                                       card={card}
                                            />
                                        );
                                    })}
                                </>
                            </Box>
                        </Box>
                        <Box style={styles.ideas}>
                            <h2 style={styles.titles}>Ideas in my list</h2>
                            <Box style={styles.ideasBlock}>
                                <BasicCarousel
                                    firstCardsCarousel={firstCardsCarousel}
                                    setFirstCardsCarousel={setFirstCardsCarousel}
                                    secondCardsCarousel={secondCardsCarousel}
                                    setSecondCardsCarousel={setSecondCardsCarousel}
                                    firstAchievements={firstAchievements}
                                    setFirstAchievements={setFirstAchievements}
                                    secondAchievements={secondAchievements}
                                    setSecondAchievements={setSecondAchievements}
                                    challenges={challenges}
                                    setChallenges={setChallenges}
                                    card={secondCardsCarousel}
                                />
                            </Box>
                        </Box>
                        <Box style={styles.achievements}>
                            <h2 className={classesApp.titlesFlexWrapper} style={styles.titles}>Achievements</h2>
                            <BasicAchievement/>
                        </Box>
                        <Box style={styles.challenges}>
                            <h2 className={classesApp.titlesFlexWrapper} style={styles.titles}>Completed challenges</h2>
                            <TableContainer style={styles.tableShadow} component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Title</StyledTableCell>
                                            <StyledTableCell>Type</StyledTableCell>
                                            <StyledTableCell>When</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <>
                                        {challenges.map(challenge => {
                                            return (
                                                <BasicTable type={challenge.type}
                                                            activity={challenge.activity}
                                                            key={challenge.key}
                                                />
                                            );
                                        })}
                                    </>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </ThirdAchievementsContext.Provider>
            </SecondAchievementsContext.Provider>
        </FirstAchievementsContext.Provider>
    );
}

export default App;