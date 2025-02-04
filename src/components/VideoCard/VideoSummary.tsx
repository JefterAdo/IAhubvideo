import { useTranslation } from '../../lib/hooks/useTranslation';

interface VideoSummaryProps {
  description: string;
}

export function VideoSummary({ description }: VideoSummaryProps) {
  const { translation, isLoading, error } = useTranslation(description);

  if (isLoading) {
    return (
      <div className="pt-2 border-t">
        <p className="text-sm text-gray-500">Traduction en cours...</p>
      </div>
    );
  }

  if (error || !translation) {
    return null;
  }

  return (
    <div className="pt-2 border-t">
      <p className="text-sm text-gray-700 italic">
        Résumé en français:
      </p>
      <p className="text-sm text-gray-700">
        {translation}
      </p>
    </div>
  );
}