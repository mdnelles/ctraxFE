import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountIcon from '@material-ui/icons/Person';
import clsx from 'clsx';
import { useHistory } from 'react-router';
import React from 'react';
import LogoutIcon from '../../common/icons/LoginIcon';
import { useUserData } from '../../common/state/user/hooks';
import { ROUTE_MY_PROFILE} from '../../constants/routes';
import { useAnchor } from '../../utilities/hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0
  },
  icon: {
    color: '#fff',
    fontSize: 36
  },
  iconButton: {
    padding: 2,
    margin: '0 !important'
  },
  menu: {
    minWidth: 135,
    padding: '3px 0',
    margin: 0,
    borderRadius: 6
  },
  menuItem: {
    padding: '11px 22px',
    marginBottom: 3,
    '&:last-child': {
      marginBottom: 0
    },
    '&:hover': {
      backgroundColor: '#f7f8f9'
    }
  },
  menuItemLabel: {
    fontSize: 14,
    color: theme.palette.primary.main,
    fontWeight: 500
  },
  menuItemIcon: {
    color: theme.palette.primary.main,
    fontSize: 24,
    marginRight: 10
  },
  uppercase: {
    textTransform: 'uppercase'
  }
}));

const LayoutHeaderUserWidget = (props) => {
  const classes = useStyles();
  const menuAnchor = useAnchor();
  const history = useHistory();
  const { logout } = useUserData();

  const handleProfile = () => {
    console.log('go profile');
    history.push(ROUTE_MY_PROFILE);
    menuAnchor.close();
  };

  const menuItems = [
    {
      label: 'Profile',
      icon: <AccountIcon className={classes.menuItemIcon} />,
      onClick: handleProfile
    },
    {
      label: 'Log Out',
      icon: <LogoutIcon className={classes.menuItemIcon} />,
      onClick: logout
    }
  ];

  return (
    <div className={classes.root}>
      <IconButton
        className={clsx(classes.iconButton, props.iconButtonClassName)}
        aria-label="account"
        onClick={menuAnchor.set}
      >
        <AccountIcon className={clsx(classes.icon, props.iconClassName)} />
      </IconButton>

      <Menu
        id="simple-menu"
        className={classes.menu}
        anchorEl={menuAnchor.value}
        keepMounted
        open={!!menuAnchor.value}
        onClose={menuAnchor.close}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.label} className={classes.menuItem} onClick={item.onClick}>
            {item.icon}

            <span className={clsx(classes.menuItemLabel, item.labelClassName)}>{item.label}</span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LayoutHeaderUserWidget;
