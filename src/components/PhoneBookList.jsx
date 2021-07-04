import React from "react";
import PropTypes from "prop-types";

function PhoneBookList(props) {

    const sortContact = props.phoneBook.sort((a,b) => {
        if(a.firstname < b.firstname) return -1
        if(a.firstname > b.firstname) return 1
        return 0
    })

  return (
    <div>
      {sortContact.map((contact) => (
        <ul key={contact.phonenumber}>
          <li>{contact.firstname}</li>
          <li>{contact.lastname}</li>
          <li>{contact.phonenumber}</li>
        </ul>
      ))}
    </div>
  );
}

PhoneBookList.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  phonenumber: PropTypes.string,
};

export default PhoneBookList;
