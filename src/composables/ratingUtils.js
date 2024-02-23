// 計算總星數與平均星數
export function calculateAverageRating(ratings) {
  let totalStars = 0;
  let totalRatings = 0;

  // 遍歷每個星級評分
  for (let star = 1; star <= 5; star += 1) {
    // 獲取該星級的計數
    const { count } = ratings[`star_${star}`];
    // 計算該星級的總星數
    totalStars += star * count;
    // 計算總評分數
    totalRatings += count;
  }

  // 計算平均分數，如果沒有評分則返回0
  const averageRating = totalRatings > 0 ? (totalStars / totalRatings).toFixed(1) : 0;

  return {
    averageRating: parseFloat(averageRating),
    totalRatings,
  };
}

// 為每個產品生成星星符號的函數
export function getStarSymbols(averageRating) {
  const fullStars = Math.floor(averageRating); // 滿星
  const halfStar = averageRating % 1 >= 0.5; // 半星
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // 空星

  return {
    fullStars,
    halfStar,
    emptyStars,
  };
}

// 計算屬性：為產品列表中的每個產品計算星星符號
export function calculateProductsRatings(productsList) {
  return productsList.map((product) => {
    const { averageRating, totalRatings } = calculateAverageRating(product.ratings);
    const starSymbols = getStarSymbols(averageRating);
    return {
      ...product,
      averageRating,
      totalRatings,
      starSymbols,
    };
  });
}
