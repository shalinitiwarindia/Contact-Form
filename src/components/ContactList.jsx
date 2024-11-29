// src/components/ContactList.jsx
import React from "react";
import ContactCard from "./ContactCard";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={styles.list}>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
