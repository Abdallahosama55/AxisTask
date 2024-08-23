import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  searchQuery: '',
  selectedChar: '',
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
      setCards: (state, action) => {
        state.cards = action.payload;
      },
      deleteCard: (state, action) => {
        state.cards = state.cards.filter(card => card.id?.value !== action.payload);
      },
      editCard: (state, action) => {
        const { id, updatedData } = action.payload;
        state.cards = state.cards.map(card =>
          card.id?.value === id
            ? { ...card, ...updatedData }
            : card
        );
      },
      addCard: (state, action) => {
        state.cards.push(action.payload);
      },
      setSearchQuery: (state, action) => {
        state.searchQuery = action.payload;
      },
      setSelectedChar: (state, action) => {
        state.selectedChar = action.payload;
      },
    },
  });
  
  

export const { setCards, deleteCard, editCard, addCard, setSearchQuery, setSelectedChar } = cardsSlice.actions;
export default cardsSlice.reducer;
