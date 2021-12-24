import React, { useRef } from "react";
import { Form } from "@unform/web";
import Input from "../FormRegister/input";
import * as Yup from "yup";
import { RegisterContainer, RegisterContent } from "../../styles/RegisterForm";
import { Wrapper } from "../../styles/StyleGlobal";

const initialData = {
  email: "gabriel@gmail.com",
};

const Register = function () {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("E-mail é obrigatório"),
        password: Yup.string()
          .min(6, "No mínimo 6 caracteres")
          .required("Senha é obrigatória"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "As senhas não conferem")
          .required("Confirmação de senha é obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);

      formRef.current.setErrors({});

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <RegisterContent>
      <Wrapper>
        <RegisterContainer>
          <div className="aside">
            <h2>MiMemories</h2>
            <p>Sua memoria eternizadas com amor.</p>
          </div>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" />
            <Input type="email" name="email" />
            <Input type="password" name="password" />
            <Input type="password" name="confirmPassword" />

            <button type="submit">Registrar</button>
          </Form>
        </RegisterContainer>
      </Wrapper>
    </RegisterContent>
  );
};

export default Register;
