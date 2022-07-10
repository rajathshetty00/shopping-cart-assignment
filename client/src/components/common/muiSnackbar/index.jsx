import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {useEffect} from 'react';

const MuiSnackBar = ({children, showSnackBar, onClose,timeout, ...props }) => {
  useEffect(()=>{
    let timeoutId = setTimeout(()=>{
      onClose()
    }, timeout)

    return ()=>{
      clearTimeout(timeoutId)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSnackBar])

  return (
    <Snackbar open={showSnackBar} onClose={onClose} {...props} >
      {children}
    </Snackbar>
  );
};

export default MuiSnackBar;