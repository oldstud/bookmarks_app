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
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import { INavigation } from "../../interface/api/navigation.interface";
import { Link } from "react-router-dom";

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
    
      const list = (anchor: Anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {navigationArray.map((text, index) => (
             
              <ListItem button key={text}>
               <Link to={`/${text.toLowerCase()}`} style={{display:'flex',color:'inherit',transform:'scale(1.2)'}}>
                <ListItemIcon>
                  {index == 1 ? <ContactsIcon/> : <HomeIcon />}
                </ListItemIcon>
              
                <ListItemText primary={text} />
                </Link>
              </ListItem>
           
            ))}
          </List>
          <Divider />
          <List>
            {bottomNavigationArray.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
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