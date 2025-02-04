import axios from 'axios';

const TRANSLATION_API_URL = `https://translation.googleapis.com/language/translate/v2?key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;

export async function translateToFrench(text: string): Promise<string> {
  try {
    const response = await axios.post(TRANSLATION_API_URL, {
      q: text,
      target: 'fr',
      source: 'en'
    });

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
}