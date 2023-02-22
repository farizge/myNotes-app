import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import useDate from "../components/useDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useDate();
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = { ...note, title, details, date };
        }
        return item;
      });
      setNotes(newNotes);
    }
    navigate("/");
  };

  const deleteNote = () => {
    if (window.confirm("Are You Sure ?")) {
      const newNote = notes.filter((item) => item.id !== id);
      setNotes(newNote);
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleEdit}>
          Save
        </button>
        <button className="btn danger" onClick={deleteNote}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form
        action=""
        className="create-note__form"
        onSubmit={handleEdit}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={28}
          placeholder="Notes"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
