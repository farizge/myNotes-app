import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import notes_data from "../notes_data";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";

const Notes = () => {
  return (
    <section>
      <header className="notes__header">
        <h2>MY NOTES</h2>
        {/* <input type="text" autoFocus placeholder="Keywords..." /> */}
        <button className="btn">
          <CiSearch />
        </button>
      </header>
      <div className="notes__container">
        {notes_data.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link className="btn btn__add">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
