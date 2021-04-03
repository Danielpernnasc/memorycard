import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const VictoryDialog = ({isOpen, onClose, onGameRestart}) => (
   <Dialog open={isOpen} onClose={onClose}>
       <DialogTitle>   <h4>Parbéns</h4><h4>Congratulations!</h4></DialogTitle>
       <DialogContent>
           <DialogContentText>
                <p>Você venceu o jogo.</p>
                <p>You win the game.</p>
           </DialogContentText>
       </DialogContent>
       <DialogActions>
            <Button color="primary" onClick={onGameRestart}>
                Reiniciar
            </Button>
            <Button color="primary" onClick={onClose} autoFocus>
                Ok
            </Button>
        </DialogActions>
   </Dialog>
);
export default (VictoryDialog);