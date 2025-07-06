import { ThemeOptions } from '@mui/material/styles';

export const darkTheme: ThemeOptions = {
    palette: {
        mode: 'dark',
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0bec5',
        },
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#9c27b0',
        },
        error: { main: '#f44336' },
        warning: { main: '#ff9800' },
        info: { main: '#2196f3' },
        success: { main: '#4caf50' },
    },
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    backgroundColor: '#gggg',
                    color: '#ffffff',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    transition: 'all 0.2s',
                    '&:hover': {
                        backgroundColor: '#2c2c2c',
                        color: '#9c27b0'
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'darkslategray',
                    color: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(255,255,255,0.05)',
                    transition: 'background-color 0.3s ease',
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '16px',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    transition: 'color 0.3s ease',
                },
            },
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    backgroundColor: 'purple',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'darkviolet',
                    },
                },
            },
        },
    },
};

export const lightTheme: ThemeOptions = {
    palette: {
        mode: 'light',
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: 'green',
        },
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#9c27b0',
        },
    },
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    transition: 'all 0.2s',
                    '&:hover': {
                        backgroundColor: '#eeeeee',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'background-color 0.3s ease',
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '16px',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    transition: 'color 0.3s ease',
                },
            },
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    backgroundColor: 'steelblue',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'slategray',
                    },
                },
            },
        },
    },
};
