import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    header: {
        position: 'relative',
        // margin: '0 0 10px 0',
    },
    btnClose: {
        position: 'absolute',
        right: 0,
    },
    paper: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        marginBottom: '10px',
    },
    textarea: {
        padding: '10px',
        marginBottom: '10px',
        marginTop: '10px',
    },
    footer: {
        marginTop: '10px',
    },
}))