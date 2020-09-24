import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from "./TextInput"

export default class FormDialog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      discription: "",

    }
    this.inputName = this.inputName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputDiscription = this.inputDiscription.bind(this);
  }

  inputName = (event) => {
    this.setState({name: event.target.value})
  }

  inputEmail = (event) => {
    this.setState({email: event.target.value})
  }

  inputDiscription = (event) => {
    this.setState({discription: event.target.value})
  }

  render(){
    return(
        <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">問い合わせフォーム</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextInput 
              label={"お名前(必須)"}
              multiline={false}
              rows={1}
              value={this.state.name}
              type={"text"}
              onChange={this.inputName}
            />
            <TextInput 
              label={"メールアドレス(必須)"}
              multiline={false}
              rows={1}
              value={this.state.email}
              type={"email"}
              onChange={this.inputEmail}
            />
            <TextInput 
              label={"お問い合わせ内容(必須)"}
              multiline={true}
              rows={5}
              value={this.state.discription}
              type={"text"}
              onChange={this.inputDiscription}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={this.props.handleClose} color="primary" autoFocus>
            送信する
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}