'use client'
import styles from "./styles.module.css";
import Vazio from "@/components/Empty/empty";

import { TextField, InputAdornment, Select, MenuItem, FormControl, InputLabel, Checkbox, Button, Tooltip, Modal, Box, List, ListItem, ListItemText} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { FaSearch } from 'react-icons/fa';

import React, { useState, useEffect } from 'react';

export default function Board() {

  const [value, setValue] = useState('');
  const [dark, setDark] = useState(false);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);  
  const [isClient, setIsClient] = useState(false);
  const [valueFilter, setValueFilter] = useState(10);
  const [editItemIndex, setEditItemIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items)

  const handleOpen = () => setOpen(true);
  const handleClose = () => {    
    setOpen(false);
    setInputValue('');
    setEditItemIndex(null);
  } 

  useEffect(() => {

    console.log('Filtro aplicado:', valueFilter);
    console.log('Itens antes do filtro:', items);
    const newFilteredItems = items.filter((item) => {
      const matchSearch = item.text.toLowerCase().includes(searchTerm.toLowerCase());
  
      switch (valueFilter) {
        case 10: 
          return matchSearch; 
  
        case 20:
          return matchSearch && item.checked;
  
        case 30:
          return matchSearch && !item.checked;
  
        default: 
          return matchSearch;
      };

      console.log(`Item ${item.text} passa no filtro:`, result);
      return result;

    });

    console.log('Itens filtrados:', newFilteredItems);
  
    setFilteredItems(newFilteredItems);
  }, [items, searchTerm, valueFilter]);
  


  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const savedItems = localStorage.getItem('todoItem');
      if (savedItems) {
        setItems(JSON.parse(savedItems));
      }
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('todoItem', JSON.stringify(items));
    }
  }, [items, isClient]);


  const handleAddItem = () => {
    if (inputValue.trim()) {
      const newItem = { text: inputValue, checked: false };
      setItems([...items, newItem]);
      setInputValue('');
    }
  };

  const handleChangeChbk = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };
  

 
  

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);

    if (updatedItems.length === 0) {
      setEditItemIndex(null);
    }
  };

  const handleEditItem = (index) => {
    setEditItemIndex(index)
    setInputValue(items[index].text);
    setOpen(true)
    
  };

  const handleSaveItem = () => {
    const updatedItems = items.map((item, i) =>
      i === editItemIndex ? { ...item, text: inputValue } : item
    );
    setItems(updatedItems);
    handleClose();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeDark = () => {
    setDark((darkLight) => !darkLight);
  };

  const handleChangeFilter = (event) => {
    setValueFilter(event.target.value);
  };  
  
  return (
    <>
      <div className={`${styles.div} ${dark ? styles.darkTheme : styles.lightTheme}`}>
        <div className={styles.conteudo}>
          <h3>TODO-LIST</h3>

          <div className={styles.searchContent}>
            <TextField
              className={styles.TextField}
              variant="outlined"
              type="search"
              label="Pesquisar tarefa"
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                  <SearchIcon sx={{ color: dark ? '#F7F7F7' : 'black' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                height: '40px',
                '& .MuiOutlinedInput-root': {
                  height: '40px',
                  width: '400px',
                  '& fieldset': {
                    borderColor: dark ? '#F7F7F7' : '#6C63FF',
                  },
                  '&:hover fieldset': {
                    borderColor: dark ? '#F7F7F7' : '#6C63FF', 
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: dark ? '#F7F7F7' : '#6C63FF', 
                  },
                },
                '& .MuiInputLabel-root': {
                  color: dark ? '#F7F7F7' : 'black', 
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: dark ? '#F7F7F7' : 'black',
                },
                '& .MuiInputBase-input': {
                  color: dark ? '#F7F7F7' : 'black',
                },
              }}
              
            />

            <FormControl sx={{ width: 100, height: '40px', backgroundColor: '#6C63FF', borderRadius: '4px' }}>
              <InputLabel className={styles.input} id="demo-simple-select-label">
                Options
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={valueFilter}
                onChange={handleChangeFilter}
                sx={{
                  height: '40px',
                  '& .MuiOutlinedInput-root': {
                    height: '40px',
                    color: '#F7F7F7'
                  },
                }}
              >
                <MenuItem value={10}>Todos</MenuItem>
                <MenuItem value={20}>Completos</MenuItem>
                <MenuItem value={30}>Incompletos</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ width: 50, height: '40px' }}>
              <Button
                onClick={handleChangeDark}
                sx={{
                  width: '100%',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid',
                  borderColor: 'rgba(0, 0, 0, 0.23)',
                  borderRadius: '4px',
                  backgroundColor: '#6C63FF',
                  color: '#F7F7F7' 
                }}
              >
                <Tooltip title={dark ? "Altere para o modo claro" : "Altere para o modo escuro"}>
                  {dark ? (<Brightness4OutlinedIcon />) : (<DarkModeOutlinedIcon />) }                
                </Tooltip>
              </Button>
            </FormControl>
          </div>

          <div className={styles.tarefasContainer}>
            <ul>
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <li key={index} className={styles.checkboxContainer}>
                    <Checkbox
                    className={styles.checkbox}
                      checked={item.checked}
                      onChange={() => handleChangeChbk(index)}                      
                    />
                    <p className={item.checked ? styles.riscado : ''}>{item.text}</p>
                    <div className={styles.buttonsEditDelete}>
                      <button onClick={() => handleEditItem(index)}><EditIcon /></button>
                      <button onClick={() => handleDeleteItem(index)}><DeleteIcon /></button>
                    </div>
                    <br/>
                    {/* <hr className={styles.customHr} /> */}
                  </li>
                ))
              ) : (
                <Vazio />
              )}
            </ul>
          </div>

          <div className={styles.addButton}>            
            <AddCircleIcon fontSize="large" onClick={handleOpen} variant="contained">Adicionar Item</AddCircleIcon>
          </div>
        </div>

        <Modal          
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box 
            className={styles.modalBox}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: dark ? '#1E1E1E' : 'background.paper',
              color: dark ? '#F7F7F7' : 'black',
              border: dark ? '1px solid #F7F7F7' : '',
              borderRadius: '1rem',
              boxShadow: 24,
              p: 4,
            }}
          >
            <h2 className={`${styles.modalTitle} ${dark ? styles.modalTitleDarkTheme : ''}`} id="modal-title">
              {editItemIndex !== null ? 'Salvar' : "Adicionar tarefa"}</h2>
              {/* {console.log(editItemIndex, 'aaaaaaa')} */}
              <TextField
                fullWidth
                label="Digite algo.."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: dark ? '#F7F7F7' : '#6C63FF',
                    },
                    '&:hover fieldset': {
                      borderColor: dark ? '#F7F7F7' : '#6C63FF', 
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: dark ? '#F7F7F7' : '#6C63FF', 
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: dark ? '#F7F7F7' : 'black', 
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: dark ? '#F7F7F7' : 'black',
                  },
                  '& .MuiInputBase-input': {
                    color: dark ? '#F7F7F7' : 'black',
                  },
                }}
                
              />

            <section className={styles.closeAddButtons}>
              {editItemIndex !== null ?
               (<Button 
                className={styles.buttonSaveEditModal}
                onClick={handleSaveItem}
                variant="contained"
                sx={{
                   mt: 2,
                   color: '#F7F7F7',
                   bgcolor: '#6C63FF'
                  
                  }}
              >
                Salvar
              </Button>): (<Button
                className={styles.buttonSaveEditModal}
                onClick={handleAddItem}
                variant="contained"
                sx={{
                  mt: 2,
                  color: '#F7F7F7',
                  bgcolor: '#6C63FF'
                 
                 }}
              >
                Adicionar
              </Button>)}              

              <Button
                className={styles.buttonCloseModal}
                onClick={handleClose}
                variant="contained"
                sx={{
                  mt: 2,
                  color: '#6C63FF',
                  bgcolor: 'transparent'                 
                 }}
              >
                Fechar
              </Button>
            </section>
          </Box>
        </Modal>        
      </div>
    </>
  ) 
}