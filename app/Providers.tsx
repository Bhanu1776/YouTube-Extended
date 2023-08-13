'use client';

import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { useState } from 'react';
import store from '@store/store';

export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>
        <Provider store={store}>{children}</Provider>
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
