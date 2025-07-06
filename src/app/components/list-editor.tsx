import { act, useEffect, useMemo } from "react";
import { TodoModel } from "./list";
import Grid from "@mui/material/Grid";
import { Fab, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import TodoCard from "./todo-card";

type ListEditorProps = {
    data?: TodoModel;
    actionType?: string;
};
const ListEditor: React.FC<ListEditorProps> = ({ data, actionType }) => {
    console.log("# ListEditor Component:", data, actionType);
    useEffect(() => {
        console.log("ListEditor Props:", data, actionType);
    }, [data, actionType]);

    const renderedCard = useMemo(() => {
        if (data && Object.keys(data).length > 0) {
            return <TodoCard data={data} actionType={actionType} />;
        }
        return null;
    }, [data, actionType]);


    return (
        <>
            <Grid container spacing={3}>
                <Grid size={12} >
                    {JSON.stringify(data) == undefined &&
                        <Grid container spacing={1} sx={{ bgcolor: 'background.paper', padding: 5, borderRadius: 2, border: '1px solid #ccc' }}>
                            <Grid size={12} >
                                <Fab color="secondary" aria-label="edit" disabled sx={{ justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                                    <EditIcon />
                                </Fab>
                            </Grid>
                            <Grid size={12} sx={{ color: 'gray' }}>
                                <Typography variant="h6" >
                                    Please select a todo item to edit...
                                </Typography>
                            </Grid>
                        </Grid>

                    }
                    {
                        data && Object.keys(data).length > 0 && renderedCard && 
                        <Typography variant="h4" sx={{ padding: 2 }}>
                            {renderedCard}
                        </Typography>
                    }
                </Grid>
                <Grid size={6}>
                    {/* Additional content or components can go here */}
                </Grid>
            </Grid>
        </>
    )
}

export default ListEditor;