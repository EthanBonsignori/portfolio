export const localeDateStringOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', localeDateStringOptions);
};

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};
