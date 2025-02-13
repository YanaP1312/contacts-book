import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { useAppDispatch } from "../../redux/hooks";
import { MdDeleteForever } from "react-icons/md";
import { PiPencilLineDuotone } from "react-icons/pi";
import { TfiSave } from "react-icons/tfi";
import { Contact } from "../../redux/reduxTypes/interfaceContact";
import { useEffect, useState } from "react";

interface ContactProps {
  contact: Contact;
}

export default function Contact({ contact }: ContactProps) {
  const dispatch = useAppDispatch();

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  useEffect(() => {
    if (editMode) {
      setName(contact.name);
      setNumber(contact.number);
    }
  }, [editMode, contact]);

  const handleSave = () => {
    const updatedContact: Contact = {
      id: contact.id,
      name,
      number,
    };
    dispatch(updateContact(updatedContact));
    setEditMode(false);
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={s.listItem}>
      <div className={s.contactInfo}>
        {editMode ? (
          <>
            <input
              className={s.input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={s.input}
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </>
        ) : (
          <>
            <p className={s.contactName}>
              <FaUserAlt size={15} style={{ marginRight: 10 }} />
              {contact.name}
            </p>
            <a
              className={s.contactNum}
              href={`tel:${contact.number
                .trim()
                .replace(/\s+/g, "")
                .replace(/-/g, "")}`}
            >
              <FaPhoneAlt
                className={s.icon}
                size={18}
                style={{ marginRight: 10 }}
              />
              {contact.number}
            </a>{" "}
          </>
        )}
      </div>
      {editMode ? (
        <button onClick={handleSave} className={s.btnSave}>
          <TfiSave />
        </button>
      ) : (
        <button onClick={() => setEditMode(true)} className={s.btnUpdate}>
          <PiPencilLineDuotone />
        </button>
      )}
      <button onClick={handleDelete} className={s.btnDelete}>
        <MdDeleteForever />
      </button>
    </div>
  );
}
