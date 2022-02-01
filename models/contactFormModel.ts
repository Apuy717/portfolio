// yup
import * as Yup from "yup";

export const ContactFormSchema = Yup.object().shape({
  from_name: Yup.string().min(3).max(32).required().label("Name"),
  reply_to: Yup.string().email().required().label("Email"),
  to_name: Yup.string().min(3).max(255).label("Subject"),
  message: Yup.string().min(3).max(2048).required().label("Message"),
});
