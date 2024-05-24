import React, { useEffect, useState } from 'react'
import { Button, Container, Grid, TextField, colors, Paper } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';
import NewTodoForm from './NewTodoForm';
import DoneIcon from '@mui/icons-material/Done';
import Dialog from '@mui/material/Dialog';

export default function NewTodoListView({ itemList = [], setItemlist }) {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: "1px solid black" }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: 800 }}>
        <style>
          .item:child(1){
          }

        </style>


        <h1 style={{ color: 'white', backgroundColor: 'steelBlue', textAlign: 'center', padding: 0, borderRadius: '50px' }}>To do List :</h1>
        <div style={{ flexcolor: 'black', backgroundColor: 'steelBlue', textAlign: 'center', padding: 0, borderRadius: '50px' }}>
          {itemList.map((item) =>
            <Paper elevation={3} sx={{ p: 2, mb: 2, backgroundColor: item.complete ? 'lightGreen' : 'white' }}>
              <div className='item' style={{ backgroundColor: item.complete ? 'powderBlue' : 'aliceBlue', padding: '1rem 0', border: "1px solid black" }}>

                <Grid2 container spacing={0} justifyContent={'space-between'} alignItems={'left'} >
                  <Grid2 item xs={4}>
                    <strong> {item.title || 'No title'}</strong>
                  </Grid2>
                  <Grid2 item xs={4} color={'grey'}>
                    {item.description || 'No description'}
                  </Grid2>
                  <Grid2 item xs={4}>
                    {new Date(item.duedate).toLocaleDateString() || 'No due date'}
                  </Grid2>
                </Grid2>


                <Grid2 xs={2} display={'flex'} justifyContent={'center'} mt={4} >
                  {item.edit &&
                    <Grid2 item xs={12}>
                      <NewTodoForm setItemlist={setItemlist} addForm={false} i={item} />
                    </Grid2>
                  }

                  {/* <Grid2 item xs={2} display={'flex'} justifyContent={"center"} mt={6}> */}
                  <Tooltip title="Delete">
                    <DeleteRoundedIcon sx={{ mt: 1 }} onClick={
                      () => {
                        setItemlist((prevValues) => prevValues.filter(prevValue => prevValue != item)
                        )
                      }
                    } />
                  </Tooltip>

                  <Tooltip title="Task Completed">
                    <DoneIcon style={{ backgroundColor: 'steelBlue', color: 'white', marginTop: '6' }} onClick={
                      () => {
                        setItemlist((prevValues) =>
                          prevValues.map(prevValue => {

                            if (prevValue.title == item.title)
                              return { title: item.title, complete: true }
                            else
                              return prevValue
                          }
                          )
                        )
                      }
                    }>Done</DoneIcon>
                  </Tooltip>

                  <Tooltip title="Info">
                    <InfoOutlinedIcon sx={{ mt: 1 }} onClick={
                      () => {
                        window.alert(item.title)
                      }
                    } />
                  </Tooltip>
                  {/* </Grid2> */}
                </Grid2>

                <Tooltip title="Show Edit">
                  <Button sx={{ backgroundColor: 'steelBlue', color: 'white', mt: 6 }} onClick={
                    () => {
                      setItemlist((prevValues) =>
                        prevValues.map(prevValue => {

                          if (prevValue.title == item.title)
                            return { title: prevValue.title, description: prevValue.description, duedate: prevValue.duedate, complete: prevValue.complete, edit: true }
                          else
                            return prevValue
                        }
                        )
                      )
                    }
                  }>Edit</Button>
                </Tooltip>
              </div>
            </Paper>
          )}
        </div>
      </div >
    </div >
  )
}



