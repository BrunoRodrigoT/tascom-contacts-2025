import { useForm } from "react-hook-form";
import {
  Button,
  Container,
  FormGroup,
  Header,
  Input,
  Select,
} from "../../components";
import type { IContact } from "../../@types/Contact";
import ContactsService from "../../services/Contacts.service";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Create() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContact>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      category_id: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    try {
      const contact: IContact = {
        id: String(new Date().getTime()), // gera um ID exclusivo baseado no timestamp
        name: data.name,
        email: data.email,
        phone: data.phone,
        category_id: data.category_id,
      };
      ContactsService.post(contact);
      reset();
    } catch (error) {
      alert(error);
    }
  });

  return (
    <Container>
      <Header />
      <FormGroup error={errors.name}>
        <Input name="name" placeholder="Nome" register={register} />
      </FormGroup>

      <FormGroup error={errors.email}>
        <Input
          name="email"
          placeholder="Email"
          register={register}
          type="email"
        />
      </FormGroup>

      <FormGroup error={errors.phone}>
        <Input
          name="phone"
          placeholder="Telefone"
          register={register}
          type="tel"
        />
      </FormGroup>

      <FormGroup error={errors.category_id}>
        <Select
          name="category_id"
          register={register}
          options={[
            { id: "instagram", label: "Instagram" },
            { id: "linkedin", label: "Linkedin" },
            { id: "facebook", label: "Facebook" },
            { id: "twitter", label: "Twitter" },
            { id: "outros", label: "Outros" },
          ]}
          optionLabelKey="label"
          optionValueKey="id"
          optionKeyExtractor="id"
        />
      </FormGroup>
      <Button onClick={onSubmit}>Salvar</Button>
      <Link className={styles.backButton} to="/">
        Voltar
      </Link>
    </Container>
  );
}
