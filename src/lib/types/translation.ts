export interface TranslationRequest {
  model: string;
  messages: Array<{
    role: string;
    content: string;
  }>;
  temperature: number;
  max_tokens: number;
}

export interface TranslationResponse {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
}

export interface TranslationConfig {
  temperature: number;
  maxTokens: number;
  systemPrompt: string;
}