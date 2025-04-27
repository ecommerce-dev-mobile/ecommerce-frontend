export function useGetDiscountedPrice() {
  const getDiscountedPrice = (price) => {
    const discountedPrice = `R$ ${Math.round(price * 0.85)},49 no Pix`
    return discountedPrice
  }

  return {
    getDiscountedPrice,
  }
}