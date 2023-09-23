import React from "react";
import { list } from "./ContactList";
import ContactItem from "./ContactItem";
import { Flare } from "@mui/icons-material";
function Contact() {
  const List = list.map((Item) => {
    return (
      <ContactItem
        name={Item.name}
        link={Item.link}
        photo_link={Item.photo_link}
      />
    );
  });

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {" "}
      {List}{" "}
    </div>
  );
}

export default Contact;
