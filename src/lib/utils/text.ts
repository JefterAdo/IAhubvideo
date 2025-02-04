export function extractSummary(text: string, sentenceCount = 2): string {
  const sentences = text.split(/[.!?]+/).filter(Boolean);
  return sentences.slice(0, sentenceCount).join('. ') + '.';
}