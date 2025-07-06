import { DeleteForeverOutlined } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export type TodoModel = { id: string; primary: string; secondary: string };
export type TodoListProps = {

    className?: string;
    style?: React.CSSProperties;
    onAction?: (data: TodoModel, actionType: string) => void;
    disabled?: boolean;
    data?: TodoModel[];
    children?: React.ReactNode;
};


const TodoList: React.FC<TodoListProps> = (props) => {

    console.log("# TodoList Component | Child of Dashboard:", props.data);

    const customTodoStyle = {
        todoListStyle: {
            border: '1px solid #ccc',
            backdropFilter: 'blur(5px)',
            // backgroundColor: 'background.paper',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '8px',
            position: 'relative',
            transition: 'all .1s ease-in-out',
            '&:hover .icon': {
                opacity: 1,
                transform: 'translateX(0)',
            },
        },
        todoIconStyle: {
            position: 'absolute',
            right: '3px',
            opacity: 0,
            transform: 'translateX(3px)',
            transition: 'all .2s ease-in-out',
            cursor: 'pointer',
            zIndex: '99',
            color: 'whitesmoke'
        }
    };

    return (
        <>
            {props.data && props.data.map((dataObj: any, index: number) => (
                <ListItem key={index}
                    component="li" id={dataObj.id}
                    style={props.style}
                    className={props.className}
                    sx={{ ...customTodoStyle.todoListStyle }}>
                    <ListItemText primary={dataObj.primary} secondary={dataObj.secondary} />
                    <Fab size='small' color="primary" aria-label="edit" className="icon" onClick={() => { props.onAction ? props.onAction(dataObj, 'edit') : console.log(`Edit item with id: ${dataObj.id}`) }}
                        sx={{ ...customTodoStyle.todoIconStyle, right: '50px', transform: 'translateX(10px)' }}>
                        <EditIcon />
                    </Fab>
                    <Fab size='small' color="secondary" aria-label="delete" className="icon" onClick={() => { props.onAction ? props.onAction(dataObj, 'delete') : console.log(`Delete item with id: ${dataObj.id}`)  }}
                        sx={{ ...customTodoStyle.todoIconStyle }}>
                        <DeleteForeverOutlined />
                    </Fab>
                    {props.children}
                </ListItem>
            ))}
        </>
    );
}

export default TodoList;