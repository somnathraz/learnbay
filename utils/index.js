export const sortByDate = (a, b) => {
  return new Date(b.date) - new Date(a.date);
};
export const sortByDateEvent = (a, b) => {
  return new Date(b.eventDate) - new Date(a.eventDate);
};
