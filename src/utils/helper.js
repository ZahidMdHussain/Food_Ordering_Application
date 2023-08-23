export function filterSerachCard(searchInputText, restaurantList) {
  const filterData = restaurantList.filter((restaurant) =>
    restaurant?.info?.name
      ?.toLowerCase()
      .includes(searchInputText.toLowerCase())
  );
  return filterData;
}
