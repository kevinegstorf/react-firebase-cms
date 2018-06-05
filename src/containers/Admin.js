import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import styles from "./Admin.css";
import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";

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

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.controls
    };

    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    console.log("updatedFormElement", updatedFormElement.value);
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;

    console.log("Touched", updatedFormElement.touched);

    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ controls: updatedOrderForm, formIsValid: formIsValid });
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
        <Card className={styles.card}>
          <h1 className={styles.header}>Admin Login</h1>
          <form className={styles.form}>
            <div className={styles.input}>
              {input}
              <div className={styles.button}>
                <Button variant="contained" className={styles.button}>
                  Sign In
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}
