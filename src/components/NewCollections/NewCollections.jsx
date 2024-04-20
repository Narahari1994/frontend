import "./NewCollections.css";

import new_collection from "../../assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((collection) => (
          <Item key={collection.id} {...collection} />
        ))}
      </div>
    </div>
  );
};
export default NewCollections;
