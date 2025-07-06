import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TodoModel } from './list';
import Grid from '@mui/material/Grid';



type TodoCardProps = {
    data: TodoModel;
    actionType?: string;
    children?: React.ReactNode;
}
const TodoCard: React.FC<TodoCardProps> = ({ data, actionType }) => {
    console.log("# TodoCard Component | Child of ListEditor:", data, actionType);
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant='outlined'>
                <CardContent className='todo-card'>
                    <Grid container spacing={2} sx={{ padding: 2 }}>
                        <Grid size={12}>
                            <Typography variant="h5" component="div">
                                {data.primary}
                            </Typography>
                        </Grid>
                        <Grid size={12}>
                            <Typography variant="body2" color="text.secondary">
                                {data.secondary}
                            </Typography>
                        </Grid>
                        <Grid size={12}>
                            <Typography variant="body2" color="text.secondary">
                                Status: {actionType}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}

export default TodoCard;