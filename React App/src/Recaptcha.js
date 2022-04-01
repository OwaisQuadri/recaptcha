import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import Game from "./Game.js";

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
                    <Game></Game>
                </Box>
            </Modal>
        </div>
    );
}

export default Recaptcha;
