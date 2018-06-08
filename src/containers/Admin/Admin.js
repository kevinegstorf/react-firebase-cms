import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import styles from "./Admin.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import validityChecker from "../../utils/validityChecker";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class Admin extends Component {
  state = {
    controls: {
      email: {
        name: "email",
        placeholder: "Enter Email",
        value: "",
        onChange: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        name: "password",
        placeholder: "Enter Password",
        value: "",
        onChange: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedLoginForm = {
      ...this.state.controls
    };

    const updatedFormElement = {
      ...updatedLoginForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = validityChecker(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;

    console.log("Touched", updatedFormElement.touched);

    updatedLoginForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedLoginForm) {
      formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ controls: updatedLoginForm, formIsValid: formIsValid });
  };

  submitHandler = event => {
    console.log("clickerdeklik");
    console.log(
      "value",
      this.state.controls.email.value,
      this.state.controls.password.value
    );
    event.preventDefault();
    // this.props.onAuth(
    //   this.state.controls.email.value,
    //   this.state.controls.password.value
    // );
  };

  render() {
    console.log(this.state);
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    let input = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        name={formElement.config.name}
        placeholder={formElement.config.placeholder}
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    return (
      <div className={styles.admin}>
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          transitionName={styles}
        >
          <Card className={styles.card}>
            <h1 className={styles.header}>Admin Login</h1>
            <form onSubmit={this.handleClick} className={styles.form}>
              <div className={styles.input}>
                {input}
                <div className={styles.button}>
                  <Button
                    clicked={this.submitHandler}
                    variant="contained"
                    className={styles.button}
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
