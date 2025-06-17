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
import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.css";

export default function Edit() {
  const param = useParams();

  const contact = ContactsService.getOne(String(param.id));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({
    defaultValues: contact,
  });

  const onSubmit = handleSubmit((data) => {
    const contacts = ContactsService.get();
    const contactData: IContact = {
      id: String(contacts.length + 1),
      name: data.name,
      email: data.email,
      phone: data.phone,
      category_id: data.category_id,
    };
    ContactsService.update(String(param.id), contactData);
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
