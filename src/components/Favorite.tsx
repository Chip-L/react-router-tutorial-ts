import { Form } from "react-router-dom";
import { ContactType } from "../types";

interface FavoriteProps {
  contact: ContactType;
}

const Favorite = ({ contact }: FavoriteProps) => {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
};

export default Favorite;
