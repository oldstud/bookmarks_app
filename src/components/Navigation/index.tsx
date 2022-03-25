import React from "react";

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import { INavigation } from "../../interface/api/navigation.interface";
import { NavLink } from "react-router-dom";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const Navigation:React.FC<INavigation> = (props) => {
  const { 
    navButtonTitle,
    navigationArray,
    bottomNavigationArray
   } = props;

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }
    
          setState({ ...state, [anchor]: open });
        };
        
        const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
          <Tooltip {...props} classes={{ popper: className }} />
        ))(({ theme }) => ({
          [`& .${tooltipClasses.tooltip}`]: {
            fontSize: 14,
          },
        }));

      const list = (anchor: Anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 80 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {navigationArray.map((text, index) => (
             
              <ListItem button key={text}>
               <NavLink to={`/${text.toLowerCase()}`}>
                <CustomTooltip title={text}>
                  <IconButton>
                    <HomeIcon fontSize='large'/>
                  </IconButton>
                </CustomTooltip>
               </NavLink>
              </ListItem>
           
            ))}
          </List>
          <Divider />
          <List>
            {bottomNavigationArray.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                <CustomTooltip title={text}>
                  <IconButton>
                  <SettingsIcon fontSize='large'/>
                  </IconButton>
                </CustomTooltip>
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    

    return (
        <div>
        <React.Fragment>
          <Button size='large' onClick={toggleDrawer('left', true)}>{navButtonTitle}</Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
        </div>
    )
}