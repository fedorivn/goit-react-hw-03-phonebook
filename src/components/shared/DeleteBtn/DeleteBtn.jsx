
import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeleteBtn({id, onDeleteContacts}) {
    return (
      
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => onDeleteContacts(id)}>
          Delete
        </Button>
       
    );
  }
