export const generateMessage = (
  text: string
): { text: string; createdAt: number } => ({
  text,
  createdAt: new Date().getTime(),
});
