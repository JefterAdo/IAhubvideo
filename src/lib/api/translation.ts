import { groqClient } from './groq';
import { GROQ_API_CONFIG } from '../constants';
import { translationConfig } from '../config/translation';
import { TranslationRequest, TranslationResponse } from '../types/translation';
import { TranslationError } from '../types/errors';

function createTranslationRequest(text: string): TranslationRequest {
  return {
    model: GROQ_API_CONFIG.MODEL,
    messages: [
      {
        role: 'system',
        content: translationConfig.systemPrompt
      },
      {
        role: 'user',
        content: `Translate to French: "${text}"`
      }
    ],
    temperature: translationConfig.temperature,
    max_tokens: translationConfig.maxTokens
  };
}

export async function translateToFrench(text: string): Promise<string> {
  if (!text?.trim()) {
    return '';
  }

  try {
    const request = createTranslationRequest(text);
    const { data } = await groqClient.post<TranslationResponse>('', request);
    
    const translation = data?.choices?.[0]?.message?.content;
    if (!translation) {
      throw new TranslationError('No translation received from API');
    }

    // Remove any quotation marks that might be in the response
    return translation.trim().replace(/^["']|["']$/g, '');
  } catch (error) {
    if (error instanceof TranslationError) {
      console.error('Translation failed:', error.message);
    } else {
      console.error('API error:', error);
    }
    return text;
  }
}