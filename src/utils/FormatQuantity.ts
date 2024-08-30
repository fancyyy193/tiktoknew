export const getFormatQuantity = (quantity: number) => {
  let result: any = null;
  const oneBillion = 1000000000;
  const oneMillion = 1000000;
  const oneThousand = 1000;
  if (quantity >= oneThousand) {
    if (quantity >= oneBillion) {
      result = quantity / oneBillion + 'B';
    } else if (quantity >= oneMillion) {
      result = quantity / oneMillion + 'M';
    } else {
      result = quantity / oneThousand + 'K';
    }
  } else {
    result = quantity;
  }
  return result;
};
