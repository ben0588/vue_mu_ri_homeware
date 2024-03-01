const usePriceToTw = (price) => {
  const newPrice = price !== undefined ? Math.floor(price) : 0;

  // 轉換成台幣 ( 未來多國語系時可以切換此設定 )
  return new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
  }).format(newPrice);
};

export default usePriceToTw;
