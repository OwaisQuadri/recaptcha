import { Box, Button, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Target from "./Target.js";
import ButtonHold from "./ButtonHold.js";
import ImageQuestion from "./ImageQuestion.js";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 700,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    borderRadius: 3,
};

function Recaptcha() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [gameOne, setGameOne] = useState(true);
    const [gameTwo, setGameTwo] = useState(false);
    const [gameThree, setGameThree] = useState(false);
    const [score, setScore] = useState(0);

    const gameOneOver = (result) => {
        setScore(score + result);
        setGameOne(false);
        setGameTwo(true);
    };

    const gameTwoOver = (result) => {
        setScore(score + result);
        setGameTwo(false);
        setGameThree(true);
    };

    const gameThreeOver = (result) => {
        setScore(score + result);
        setGameThree(false);
        handleClose();
    };

    useEffect(() => {
        console.log("Score: ", score);
    });

    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <Button
                id="submit"
                sx={{
                    boxShadow: 10,
                    height: 100,
                    width: 250,
                    fontSize: 18,
                    fontWeight: "bold",
                }}
                onClick={handleOpen}
            >
                Start Recaptcha
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        reCaptcha
                    </Typography>
                    <div
                        style={{
                            width: "500px",
                            height: "500px",
                            margin: "auto",
                            borderWidth: 2,
                            borderStyle: "solid",
                        }}
                        id="game"
                    >
                        {gameOne && !gameTwo && !gameThree && (
                            <Target callback={gameOneOver}></Target>
                        )}
                        {!gameOne && gameTwo && !gameThree && (
                            <ButtonHold callback={gameTwoOver}></ButtonHold>
                        )}
                        {!gameOne && !gameTwo && gameThree && (
                            <ImageQuestion
                                callback={gameThreeOver}
                            ></ImageQuestion>
                        )}
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default Recaptcha;
