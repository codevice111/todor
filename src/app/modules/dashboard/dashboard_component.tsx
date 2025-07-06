import { Checkbox, Fab, List, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import TodoList, { TodoModel } from '../../components/list';
import ListEditor from '../../components/list-editor';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { AddOutlined, DarkMode, Favorite, FavoriteBorder, LightMode, Padding } from '@mui/icons-material';
import { useTodoTheme } from '../../context/theme-context-provider';

const val = [
    {
        "id": "1",
        "primary": "Dashboard",
        "secondary": "Main overview of tasks"
    },
    {
        "id": "2",
        "primary": "Reminders",
        "secondary": "Notifications for due items"
    },
    {
        "id": "3",
        "primary": "Settings",
        "secondary": "Customize your preferences"
    }
]

const Dashboard = () => {

    const [data, setData] = useState<TodoModel[]>(val);
    const [selectedData, setSelectedData] = useState<TodoModel | undefined>(undefined);
    const [actionType, setActionType] = useState<string | undefined>('NA');
    const [checked, setChecked] = useState<boolean>(false);
    const { theme, setTheme } = useTodoTheme();

    console.log("# Dashboard Component")
    useEffect(() => {
        console.log("Dashboard Props | useEffect hook called:", selectedData, actionType);
        // throw new Error("Simulated error for testing purposes");
    }, [data]);

    const onTodoItemClicked = useCallback((dataOb: TodoModel, actionType: string) => {
        console.log("onTodoItemClicked", dataOb, actionType);
        if (actionType.toLowerCase() === 'edit') {
            setSelectedData(dataOb);
            setActionType(actionType);
        } else {
            const id = dataOb.id;
            const updated = data.filter(item => item.id !== id);
            setSelectedData(undefined);
            setData(updated);
        }
    }, [data]);
    

    const handleAdd = useCallback(() => {
        const newTask = {
            id: (data.length + 1).toString(),
            primary: `New Task ${data.length + 1}`,
            secondary: `Description for task ${data.length + 1}`,
        };
        setSelectedData(newTask);
        setData([...data, newTask]);
        setActionType('ADD');
    }, [data]);
    

    const handleThemeChanged = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setChecked(!checked);
        setTheme(newTheme);
        console.log("global theme: ", theme);
    }

    const gridStyle = {
        bgcolor: 'background.default',
    }


    return (
        <>
            <Grid container spacing={3} sx={{ justifyContent: 'center', height: '100vh', bgcolor: 'background.default', }} className='dashboard'>
                <Grid className='side1' size={6}  sx={{ ...gridStyle}}>
                    <Grid container spacing={3} >
                        <Grid size={12}>
                            <Checkbox checked={checked} onChange={handleThemeChanged} icon={<DarkMode />} checkedIcon={<LightMode />} sx={{ float: 'right' }} />
                        </Grid>
                        <Grid size={12} sx={{ padding: 2 }}>
                            <Fab color="secondary" aria-label="edit" onClick={handleAdd}>
                                <AddOutlined />
                            </Fab>
                        </Grid>
                        <Grid size={12}>
                            <Stack direction={'row'} spacing={2} >
                                <List style={{ width: '100%' }}>
                                    <TodoList data={data} onAction={onTodoItemClicked} />
                                </List>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className='side2' size={6} sx={{ ...gridStyle}}>
                    <ListEditor data={selectedData} actionType={actionType} />
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard;