export const copyOnClick = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('Текст скопирован: ' + text);
  } catch (err) {
    console.error('Не удалось скопировать текст: ', err);
  }
}
