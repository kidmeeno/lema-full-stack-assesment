export const generatePageNumbers = (current: number, total: number): (number | string)[] => {
  const pages: (number | string)[] = [];

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  if (current <= 2) {
    pages.push(1, 2, 3, '...', total - 2, total - 1, total);
  } else if (current <= 4) {
    pages.push(1, 2, 3, 4, 5, '...', total);
  } else if (current >= total - 3) {
    pages.push(1, '...', total - 4, total - 3, total - 2, total - 1, total);
  } else {
    pages.push(1, '...', current - 1, current, current + 1, '...', total);
  }

  return pages;
};


export const MAX_TITLE_CHAR_LENGHT = 80
export const MAX_POST_CHAR_LENGHT = 500