import PasswordValidator from "password-validator";
import EmailValidator from 'email-validator';

const schema = new PasswordValidator();
schema.is().min(8)
  .is().max(100)
  .has().uppercase()
  .has().lowercase()
  .has().digits(2)
  .has().not().spaces()
  .is().not().oneOf(["password"]);

  export default schema;

  
