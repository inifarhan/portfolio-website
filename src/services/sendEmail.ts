import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import type { FormikHelpers } from "formik";
import type { FormInitialValues } from "@/types";

type FormValues = Record<keyof FormInitialValues, string>;

const EMAIL_JS_SERVICE_ID: string = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!;
const EMAIL_JS_TEMPLATE_ID: string = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!;
const EMAIL_JS_PUBLIC_KEY: string = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!;

export const sendEmail = async (values: FormInitialValues, actions: FormikHelpers<FormInitialValues>): Promise<void> => {
  try {
    const parsedValues: FormValues = { ...values };

    await emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, {
      first_name: parsedValues.first_name,
      last_name: parsedValues.last_name,
      to_name: 'Farhan',
      from_email: parsedValues.email,
      to_email: 'farhangunawan619@gmail.com',
      subject: parsedValues.subject,
      message: parsedValues.message
    }, EMAIL_JS_PUBLIC_KEY);

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Your Message Is Successfully Sended!",
      confirmButtonColor: "#38bdf8",
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something Went Wrong!",
      confirmButtonColor: "#38bdf8",
    });
  } finally {
    actions.setSubmitting(false);
    actions.resetForm();
  }
};
