export function useFormatPrice() {
  const formatPrice = (price) => {
    const newPrice = `R$ ${price.toFixed(2).replace('.', ',')}`
    return newPrice
  }

  return {
    formatPrice,
  }
}
