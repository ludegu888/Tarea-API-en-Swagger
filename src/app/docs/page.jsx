'use client';

import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { 
  ssr: false,
  loading: () => <p>Cargando documentación...</p>
});

export default function ApiDoc() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <SwaggerUI url="/api/doc" />
    </div>
  );
}
