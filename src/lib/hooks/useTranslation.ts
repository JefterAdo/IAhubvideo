import { useState, useCallback, useEffect } from 'react';
import { translateToFrench } from '../api/translation';
import { extractSummary } from '../utils/text';

export function useTranslation(text: string, enabled = true) {
  const [translation, setTranslation] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const translate = useCallback(async () => {
    if (!text?.trim() || !enabled) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await translateToFrench(text);
      setTranslation(extractSummary(result));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Translation failed'));
      setTranslation('');
    } finally {
      setIsLoading(false);
    }
  }, [text, enabled]);

  useEffect(() => {
    let mounted = true;

    const handleTranslation = async () => {
      if (!mounted) return;
      await translate();
    };

    handleTranslation();
    return () => { mounted = false; };
  }, [translate]);

  return { translation, isLoading, error };
}