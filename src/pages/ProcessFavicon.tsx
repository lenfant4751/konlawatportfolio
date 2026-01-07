import { useState } from 'react';
import { removeBackground, loadImage } from '@/utils/removeBackground';
import { Button } from '@/components/ui/button';

const ProcessFavicon = () => {
  const [processing, setProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleProcess = async () => {
    setProcessing(true);
    setError(null);
    
    try {
      const img = await loadImage('/favicon.png');
      const blob = await removeBackground(img);
      const url = URL.createObjectURL(blob);
      setProcessedImageUrl(url);
    } catch (err) {
      console.error('Processing error:', err);
      setError(err instanceof Error ? err.message : 'Failed to process image');
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (processedImageUrl) {
      const a = document.createElement('a');
      a.href = processedImageUrl;
      a.download = 'favicon-transparent.png';
      a.click();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 gap-8">
      <h1 className="text-2xl font-bold text-foreground">Favicon Background Removal</h1>
      
      <div className="flex gap-8 items-start">
        <div className="flex flex-col items-center gap-2">
          <p className="text-muted-foreground">Original</p>
          <div className="w-32 h-32 border border-border rounded-lg flex items-center justify-center bg-white">
            <img src="/favicon.png" alt="Original favicon" className="max-w-full max-h-full" />
          </div>
        </div>
        
        {processedImageUrl && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-muted-foreground">Processed (Transparent)</p>
            <div className="w-32 h-32 border border-border rounded-lg flex items-center justify-center" 
                 style={{ backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }}>
              <img src={processedImageUrl} alt="Processed favicon" className="max-w-full max-h-full" />
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="text-destructive">{error}</p>
      )}

      <div className="flex gap-4">
        <Button onClick={handleProcess} disabled={processing}>
          {processing ? 'Processing... (This may take a minute)' : 'Remove Background'}
        </Button>
        
        {processedImageUrl && (
          <Button onClick={handleDownload} variant="secondary">
            Download Transparent PNG
          </Button>
        )}
      </div>

      <p className="text-sm text-muted-foreground max-w-md text-center">
        Click "Remove Background" to process the favicon. Once done, download the transparent version 
        and share it with me to update the favicon.
      </p>
    </div>
  );
};

export default ProcessFavicon;
