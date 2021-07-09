import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export const useOpen = (state = false) => {
  const [open, setOpen] = useState(state);
  
  useEffect(() => {
    if (state !== open) {
      setOpen(state);
    }
  }, [state])

  return {
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: () => setOpen(!open),
    opened: open
  };
};

export const useAnchor = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(null);

  return {
    value: anchorEl,
    text: value,
    set: (el, text) => {
      setAnchorEl(el.currentTarget);
      setValue(text);
    },
    toggle: (el, text) => {
      setAnchorEl(!!anchorEl ? null : el.currentTarget);
      setValue(!!anchorEl ? null : text);
    },
    close: () => {
      setAnchorEl(null);
      setValue(null);
    }
  };
};

export const useWindowSize = () => {
  const isClient = typeof window === 'object';

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
      isMobile: isClient ? window.innerWidth <= 480 : undefined,
      isTablet: isClient ? window.innerWidth <= 768 : undefined,
      isMinimizeDrawer: isClient ? window.innerWidth <= 1400 : undefined
    };
  };

  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const useAuth = () => {
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  return {
    user,
    isLoggedIn: !!user,
    login: (email, password) => {
      try {
        const data = { email, password };
        localStorage.setItem('user', JSON.stringify(data));
        return Promise.resolve(data);
      } catch (err) {
        return Promise.reject(err);
      }
    },
    logout: () =>
      new Promise((resolve, reject) => {
        localStorage.removeItem('user');
        resolve();
      }),
    clear: () =>
      new Promise((resolve, reject) => {
        localStorage.clear();
        resolve();
      })
  };
};

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
