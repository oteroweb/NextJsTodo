import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { TodoContext } from "@src/TodoContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
};

function ModalTodo(props) {
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setNewTodoValue("");

        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setNewTodoValue("");
        setOpenModal(false);
    };
    const handleOpen = () => props.setOpenModal(true);
    const handleClose = () => props.setOpenModal(false);
    return (
        <div>
            <Box
                sx={{
                    bgcolor: "background.paper",
                    width: "100%",
                    position: "relative",
                    minHeight: 200,
                }}
            >
                <Fab
                    onClick={handleOpen}
                    sx={fabStyle}
                    aria-label="Add"
                    color="primary"
                >
                    <AddIcon />
                </Fab>
            </Box>
            <Modal
                open={props.openModal}
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
                        Create TODO
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={onSubmit}>
                            <TextField
                                id="outlined-textarea"
                                label="Todo Description"
                                multiline
                                maxRows={4}
                                value={newTodoValue}
                                onChange={onChange}
                                variant="outlined"
                                fullWidth 
								margin="normal" 
                            />
                            <div className="TodoForm-buttonContainer">
                                <Stack
                                    justifyContent="space-between"
                                    direction="row"
                                    spacing={8} 
                                >
                                    <Button 
                                        onClick={onCancel}
                                        variant="outlined"
                                        startIcon={<CancelIcon />}
                                    >
                                        Delete
                                    </Button>
                                    <Button 
                                        type="submit"
                                        variant="contained"
                                        endIcon={<SaveIcon />}
                                    >
                                        Save
                                    </Button>
                                </Stack>
                            </div>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
export { ModalTodo };
