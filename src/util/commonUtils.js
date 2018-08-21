export const isLastPage = (pageLinks) => {
  return Object.keys(pageLinks).length === 2 &&
    pageLinks.first && pageLinks.prev;
}

export const getPageCount = (pageLinks) => {
  if(!pageLinks) {
    return 0;
  }
  if(isLastPage(pageLinks)) {
    return parseInt(pageLinks.prev.page, 10) + 1;
  } else if(pageLinks.last) {
    return parseInt(pageLinks.last.page, 10)
  } else {
    return 0;
  }
}