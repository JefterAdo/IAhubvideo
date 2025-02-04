import { TranslationConfig } from '../types/translation';

export const translationConfig: TranslationConfig = {
  temperature: 0.2, // Lower temperature for more consistent translations
  maxTokens: 512, // Adjusted for the 8B model
  systemPrompt: `Tu es un traducteur professionnel anglais vers français.
Traduis le texte en français en respectant ces règles:
- Traduction précise et naturelle
- Maintien du style et du ton original
- Pas de commentaires additionnels`
};