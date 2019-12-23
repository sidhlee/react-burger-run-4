export const checkValidity = (value, rules) => {
  let isValid = true;

  if (!rules) return;

  if (rules.required) {
    // this AND all preceeding evaluations must be true
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isNumeric) {
    const re = /^\d+$/;
    isValid = re.test(value) && isValid;
  }

  if (rules.isEmail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isValid = re.test(value) && isValid;
  }

  return isValid;
};
