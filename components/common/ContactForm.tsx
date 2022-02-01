// react
import * as React from "react";
// formik
import { Formik } from "formik";
// @mui
import { Alert, Card, CardProps, CardActions, CardContent, CardHeader, Typography, styled, SliderValueLabelUnstyled } from "@mui/material";
// custom component
import CustomTextField from "components/common/CustomTextField";
import CustomButton from "components/common/CustomButton";
// validation
import { ContactFormSchema } from "models/contactFormModel";
//email
import emailjs from "@emailjs/browser";
// type
interface ContactFormProps {}

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  maxWidth: "32rem",
}));

const ContactForm: React.FunctionComponent<ContactFormProps> = (props) => {
  const toCapitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [success, setSuccess] = React.useState<boolean>(false);
  const [errEmail, setErrEmail] = React.useState<boolean>(false);
  return (
    <CustomCard>
      {success ? (
        <Alert severity="success" onClose={() => setSuccess(false)}>
          Successfully sent email message to Abdul Gopur
        </Alert>
      ) : (
        <></>
      )}
      {errEmail ? (
        <Alert severity="error" onClose={() => setErrEmail(false)}>
          Failed sent email message to Abdul Gopur, please try again.!
        </Alert>
      ) : (
        <></>
      )}

      <CardHeader
        title={
          <Typography color="primary" component="h2" variant="h5">
            Contact form
          </Typography>
        }
      />

      <Formik
        initialValues={{ from_name: "", reply_to: "", to_name: "abdulgopur2306@gmail.com", message: "" }}
        validationSchema={ContactFormSchema}
        onSubmit={async (values, { resetForm }) => {
          await emailjs
            .send("service_meaqn8q", "template_3hh83cy", values, "user_oOvT2DOStbbmCJOLvEGnr")
            .then((result) => {
              if (result?.status === 200) {
                setSuccess(true);
                resetForm();
              } else {
                setErrEmail(true);
              }
            })
            .catch((err) => {
              console.error(err);
              setErrEmail(true);
            });
        }}
      >
        {({ errors, touched, values, handleChange, handleBlur, handleSubmit, handleReset }) => (
          <>
            <CardContent
              sx={{
                paddingBottom: 0,
                padding: 0,
                margin: "1rem",
              }}
            >
              <form onReset={handleReset} onSubmit={handleSubmit} noValidate>
                <CustomTextField
                  error={touched.from_name && errors.from_name ? true : false}
                  fullWidth
                  helperText={touched.from_name && errors.from_name && errors.from_name}
                  id="contact-form-name"
                  label={toCapitalize("name")}
                  name="from_name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ marginBottom: "1rem" }}
                  type="text"
                  value={values.from_name}
                  variant="outlined"
                />
                <CustomTextField
                  error={touched.reply_to && errors.reply_to ? true : false}
                  fullWidth
                  helperText={touched.reply_to && errors.reply_to && errors.reply_to}
                  id="contact-form-email"
                  label={toCapitalize("email")}
                  name="reply_to"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  sx={{ marginBottom: "1rem" }}
                  type="email"
                  value={values.reply_to}
                  variant="outlined"
                />

                <CustomTextField
                  error={touched.message && errors.message ? true : false}
                  fullWidth
                  helperText={touched.message && errors.message && errors.message}
                  id="contact-form-message"
                  label={toCapitalize("message")}
                  maxRows={6}
                  minRows={4}
                  multiline
                  name="message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  type="text"
                  value={values.message}
                  variant="outlined"
                />
              </form>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end", margin: "1rem", padding: 0 }}>
              <CustomButton onClick={() => handleReset()} type="reset">
                Reset
              </CustomButton>
              <CustomButton
                type="submit"
                onClick={() => {
                  handleSubmit();
                }}
                variant="contained"
              >
                Submit
              </CustomButton>
            </CardActions>
          </>
        )}
      </Formik>
    </CustomCard>
  );
};

export default ContactForm;
