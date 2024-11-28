// src/components/ContactCard.jsx
import React, { useState } from "react";
import styles from "./ContactCard.module.css";

const ContactCard = ({ id, name, phone, deleteContact }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.card}>
      <div onClick={toggleExpand}>
        <h3>{name}</h3>
        {isExpanded && <p className={styles.phone}>{phone}</p>}
      </div>
      <button onClick={() => deleteContact(id)} className={styles.deleteButton}>
        Delete
      </button>
    </div>
  );
};

export default ContactCard;
