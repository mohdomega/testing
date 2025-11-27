import { MouseEvent, useCallback, useMemo, useState } from 'react';

import { useIsMounted } from 'usehooks-ts';

export interface UseButton {
  /**
   * When isLoading is true,
   * button will be disabled
   * and a loader will appear as endIcon on button
   * @default false
   */
  isLoading?: boolean;
  /**
   * If a promise is returned then
   * button will be disabled
   * and a loader will appear as endIcon on button
   * until the promise is resolved or rejected
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}

function useButton({ isLoading: _isLoading = false, onClick }: UseButton) {
  const getIsMounted = useIsMounted();

  const [isAwaiting, setIsAwaiting] = useState(false);

  const isLoading = useMemo(() => isAwaiting || _isLoading, [_isLoading, isAwaiting]);

  const handleClick = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      if (!onClick) return;
      try {
        setIsAwaiting(true);
        await onClick(event);
      } finally {
        const isMounted = getIsMounted();
        if (isMounted) setIsAwaiting(false);
      }
    },
    [onClick, getIsMounted]
  );

  return {
    isLoading,
    handleClick,
  };
}

export default useButton;
