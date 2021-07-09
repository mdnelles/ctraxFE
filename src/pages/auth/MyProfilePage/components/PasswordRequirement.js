import React from 'react';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(() => ({
  requirement: {
    color: '#324D66',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center'
  },
  disabledRequirement: {
    color: '#BDC3C7',
    opacity: 1
  },
  requirementText: {
    fontSize: '12px',
    color: 'inherit',
    lineHeight: '16px'
  },
  iconContainer: {
    display: 'flex'
  },
  icon: {
    height: '16px',
    width: '14px',
    marginRight: '4px'
  },
  iconCheck: {
    color: '#324D66'
  },
  iconClear: {
    color: '#BDC3C7'
  }
}));

const PasswordRequirement = ({ isValid = false, text = '' }) => {
  const classes = useStyles();

  const Check = () => (
    <div className={classes.iconContainer}>
      <CheckIcon className={clsx(classes.icon, classes.iconCheck)} />
    </div>
  );

  const Clear = () => {
    return (
      <div className={classes.iconContainer}>
        <ClearIcon className={clsx(classes.icon, classes.iconClear)} />
      </div>
    );
  };

  return (
    <div
      className={clsx(classes.requirement, {
        [classes.disabledRequirement]: !isValid
      })}
    >
      {isValid ? <Check /> : <Clear />}
      <Typography component="span" className={classes.requirementText}>
        {text}
      </Typography>
    </div>
  );
};

export default React.memo(PasswordRequirement);
