import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";

export default function BasicMenu({title1, title2, title3, title4, title5}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Typography variant="inherit" noWrap>
                MENU
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>
            <Typography variant="inherit" noWrap>
                <Link style={{ margin: "0 1rem" }} to="/">Permutação</Link>
            </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Typography variant="inherit" noWrap>
              <Link style={{ margin: "0 1rem" }} to="anagramas/">Anagramas</Link>
            </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Typography variant="inherit" noWrap>
              <Link style={{ margin: "0 1rem" }} to="arranjo/">Arranjo</Link>
            </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Typography variant="inherit" noWrap>
              <Link style={{ margin: "0 1rem" }} to="combinacao/">Combinação</Link>
            </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Typography variant="inherit" noWrap>
              <Link style={{ margin: "0 1rem" }} to="principiomultiplicativo/">Princípio Multiplicativo</Link>
            </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
