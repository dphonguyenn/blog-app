import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    card: {
        position:'relative'
    },
    media: {
        height: 150,
        padding: 10,
        width: '97%'
    },
    card_more_actions: {
        marginRight: 12,
        flexDirection: 'column',
        minWidth:52,
        border: '1px solid #ccc',
        padding: 0,
        position: 'absolute',
        top: 52,
        right: 10,
    },
    card_header_post: {
        padding: '16px 16px 4px 16px'
    },
    list_actions_card: {
        padding: 0
    },
    hide: {
        display: 'none'
    },
    btnActions: {
        backgroundColor:'#ccc'
    }
}));