import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "../../Redux/UserApi";
import { Link } from "react-router-dom"; // Import Link for navigation
import CardsInfo from "./CardInfo";
import CreateCardModal from "./CreateCardModal";
import { toast } from "react-toastify";
import {
  setCards,
  deleteCard,
  editCard,
  addCard,
  setSelectedChar
} from "../../Redux/cardsSlice";

function Card() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetUserQuery();
  const cards = useSelector((state) => state.cards.cards);
  const searchQuery = useSelector((state) => state.cards.searchQuery);
  const selectedChar = useSelector((state) => state.cards.selectedChar);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    if (data?.results) {
      dispatch(setCards(data.results));
    }
  }, [data, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCard(id));
    toast.success("Deleted successfully");
  };

  const handleEdit = (id, updatedData) => {
    dispatch(editCard({ id, updatedData }));
    toast.success("Updated successfully");
  };

  const handleAddCard = (newCard) => {
    dispatch(addCard(newCard));
  };

  // Filter cards based on the search query and the selected character
  const filteredCards = cards.filter(card => {
    const matchesSearch = card.name.first.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesChar = card.name.first.toLowerCase().startsWith(selectedChar.toLowerCase());
    return matchesSearch && matchesChar;
  });

  // Create an array of characters from A to Z
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <div className="min-h-[50vh] mt-12">
      <div className="flex w-full justify-end mb-4">
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-green-500 text-white p-2 rounded-lg px-4"
        >
          Create Card
        </button>
      </div>

      {/* Cards Display */}
      <div className="grid grid-cols-12 gap-5">
        {filteredCards.length > 0 ? (
          filteredCards.map((item) => (
            <div key={item?.id?.value || Math.random()} className="lg:col-span-3 col-span-12">
              <Link to={`/contact/${item?.id?.value || Math.random()}`}>
                <CardsInfo
                  title={item?.name?.title || "N/A"}
                  first={item?.name?.first || "N/A"}
                  last={item?.name?.last || "N/A"}
                  city={item?.location?.city || "N/A"}
                  phone={item?.phone || "N/A"}
                  imgSrc={item?.picture?.large || "default-image-url"}
                  email={item?.email || "N/A"}
                  age={item?.dob?.age || "N/A"}
                  gender={item?.gender || "N/A"}
                  postcode={item?.location?.postcode || "N/A"}
                  country={item?.location?.country || "N/A"}
                  id={item?.id?.value || "N/A"}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-12 font-bold text-2xl h-100">No items found</p>
        )}
      </div>

      {/* Alphabet Filter */}
      <div className="my-4 gap-2 flex flex-wrap w-full justify-center">
        {alphabet.map(char => (
          <button
            key={char}
            className={`px-3 py-1 rounded ${selectedChar === char ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => dispatch(setSelectedChar(char))}
          >
            {char}
          </button>
        ))}
        <button
          className="px-3 py-1 rounded bg-gray-200 text-black"
          onClick={() => dispatch(setSelectedChar(''))}
        >
          All
        </button>
      </div>
      <CreateCardModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
}

export default Card;
