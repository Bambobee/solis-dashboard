/* eslint-disable no-useless-escape */
export default class Validator {
  static validateEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  static validatePassword(password) {
    const length = password.length >= 6;
    if (!length) {
      return false;
    } else {
      return true;
    }
  }

  static validateNumber(tel) {
    const numLength = tel.length === 10 || tel.length === 11 || tel.length === 12;
    const checkInteger = tel.match(/^(\d){10}|(\d){11}|(\d){12}$/);

    if (numLength && checkInteger) {
      return true;
    } else {
      if (!numLength) {
        return false;
      } else {
        if (!checkInteger) {
          return false;
        }
      }
    }
  }

  static validateName(name) {
    const nameLength = name.length > 3;
    if (nameLength && typeof name === 'string') {
      return true;
    } else {
      return false;
    }
  }

  static validateBusinessName(businessName) {
    const minLength = businessName.length > 3;
    if (minLength && typeof businessName === 'string') return true;
    return false;
  }

  static validateWebsite(webUrl) {
    const regex =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

    return regex.test(webUrl);
  }
  /**Write Validator functions for Images,  */
  static validateImage() {}
  // static validate
}
