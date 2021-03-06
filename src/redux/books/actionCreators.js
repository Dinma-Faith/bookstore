import LOADING_DATA, { ADD_BOOK, REMOVE_BOOK, FETCH_BOOK } from './actions';

export const addBookAction = (book) => ({
  type: ADD_BOOK,
  payLoad: book,
});

export const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  payLoad: id,
});

export const loadingBookAction = () => ({
  type: LOADING_DATA,
});

export const fetchBookAction = (book) => ({
  type: FETCH_BOOK,
  payLoad: book,
});
