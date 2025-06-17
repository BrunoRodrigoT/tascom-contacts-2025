import styles from "./styles.module.css";
import trash from "../../assets/icons/trash.svg";
import edit from "../../assets/icons/edit.svg";
import { Link } from "react-router";
import type { IContactCardProps } from "./types";

export default function ContactCard({ data, onDelete }: IContactCardProps) {
  return (
    <div className={styles.contatcsCard}>
      <div>
        <div>
          <strong>{data.name}</strong>{" "}
          {data.category_name && <small>{data.category_name}</small>}
        </div>
        {data.email && <span>{data.email}</span>}
        {data.phone && <span>{data.phone}</span>}
      </div>
      <div>
        <Link to={`/edit/${data.id}`}>
          <img src={edit} alt="Editar" />
        </Link>
        <img src={trash} alt="Excluir" onClick={() => onDelete(data)} />
      </div>
    </div>
  );
}
