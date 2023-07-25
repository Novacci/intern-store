import CactusDetailPage from '@/components/CactusItems/CactusDetailPage';
import React from 'react';

interface PageParams {
  params: {
    cactusId: string;
  };
}

export default function page({ params }: PageParams) {
  const cactusUrl = params.cactusId;

  return (
    <div>
      <CactusDetailPage cactusId={cactusUrl} />
    </div>
  );
}
