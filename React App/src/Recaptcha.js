import { useState } from "react";
import { Modal, Button, CloseButton } from "react-bootstrap";
import Game from "./Game.js";

function Recaptcha() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} id="submit">
                Open reCaptcha
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header>
                    <Modal.Title>reCaptcha</Modal.Title>
                    <CloseButton />
                </Modal.Header>
                <Modal.Body>
                    <Game />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Recaptcha;
