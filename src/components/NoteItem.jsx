import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  const bgStyles = [
    "#D3F8E2",
    "#E4C1F9",
    "#F694C1",
    "#EDE7B1",
    "#A9DEF9",
  ];
  const randomBg = () => {
    const randomNum = Math.floor(Math.random() * 5);
    return bgStyles[randomNum];
  };

  return (
    <Link
      to={`/edit-note/${note.id}`}
      className="note"
      style={{ backgroundColor: randomBg() }}
    >
      <h4>
        {note.title.length > 20
          ? note.title.substr(0, 20) + "..."
          : note.title}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItem;
