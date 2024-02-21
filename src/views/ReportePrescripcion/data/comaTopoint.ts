export const convertComaAPunto = (str: string): string => {
    if (typeof str !== 'string') return '';
    // Reemplaza la coma por punto
    const convertedStr = str.replace(',', '.');
    return convertedStr;
  };