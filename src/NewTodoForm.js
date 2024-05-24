import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, Container, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function NewTodoForm({ setItemlist, addForm, i }) {
    const [itemName, setItemName] = useState("")
    const [itemDescription, setItemDescription] = useState("")
    const [itemDate, setItemDate] = React.useState(dayjs('2022-04-17'));

    const handleAdd = (e) => {
        e.preventDefault()
        setItemlist((prevValues) => [...prevValues, { title: itemName, description: itemDescription, duedate: itemDate, complete: false, edit: false }])
        setItemName("")
        setItemDescription("")
        setItemDate("")
    }


    const handleEdit = (e) => {
        e.preventDefault()

        setItemlist(prevValues =>
            prevValues.map(prevValue => {
                if (prevValue.title == i.title) {
                    return { title: itemName, description: itemDescription, duedate: itemDate, complete: prevValue.complete, edit: false }
                }
                else {
                    return prevValue
                }
            }))
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', padding: '1rem 0', border: "1px solid black", placeItems: 'center', textAlign: 'center' }}>

            <form>
           
                {addForm &&
                    <h1 style={{ color: 'white', backgroundColor: 'steelBlue', textAlign: 'center', padding: '1rem 1rem', borderRadius: '50px' }}>Things To Do :</h1>
                }
            
                <Container maxWidth={'xl'}>
                    <Grid2 container spacing={2}>
                        <Grid2 md={4}>
                            <TextField id="outlined-basic" label="Title" variant="outlined" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                        </Grid2>

                        <Grid2 md={4}>
                            <TextField id="outlined-basic" label="Description" variant="outlined" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} />
                        </Grid2>

                        <Grid2 md={4}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer sx={{ pt: 0 }} components={['DatePicker', 'DatePicker']}>
                                    <DemoItem>
                                        <DatePicker defaultValue={dayjs('2022-04-17')} value={itemDate} onChange={(e) => setItemDate(e)} />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid2>
                    </Grid2>
                </Container>

            

                
                <Button variant="contained" sx={{ backgroundColor: 'steelBlue', mt: 3 }} onClick={addForm ? handleAdd : handleEdit}>Submit</Button>

            </form>


        </div>
    )
}
