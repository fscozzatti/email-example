import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import DateFormat from './../DateFormat'
import ImageAttach from './../ImageAttach'
import Tos from './../Tos'
import iconMailSp from './../../images/icon_mail_sp.svg';



const GridDetail = ({ from, tos, subject, date, files, onSetModal, modal, onSetSelectedMail, id, mails}) => {

    const toggle = () => { 
        const mail = mails.find( m => m.id === id)
        onSetSelectedMail(mail)
        onSetModal(!modal);}

    
    return (
        <div className="container-fluid">
            <div className="row">
                <Grid container           
                direction="row"
                justify="flex-start"
                alignItems="center">
                        <Grid className='col-1 d-md-none d-lg-none d-xl-none' item>
                            {<img className='imgContainerMail' src={iconMailSp} alt="" height="50px" width="20px" />}
                        </Grid>
                        <div className="row d-md-none d-lg-none d-xl-none">
                            <Grid className='col-sm-10 divFromDetailSM' item>
                                {from}
                            </Grid>
                            <Grid className='col-sm-1 divAttachDetailSM' item>
                                <ImageAttach files={files}></ImageAttach>
                            </Grid>
                            <Grid className='col-sm-1 divDateDetailSM' item>
                                <DateFormat date={date}/>
                            </Grid>
                            <Grid className='col-sm-11 divToDetailSM' item>
                                {tos[0].to}            
                            </Grid>
                            <Grid className='col-sm-1 divBadgeSM' item>
                                <Tos tos={tos}></Tos>
                            </Grid>
                        </div> 
                        <Grid className='col-md-2 d-none d-md-block divDetail' item>
                            {from}
                        </Grid>
                        <Grid className='col-md-3 d-none d-md-block divDetail' item>
                            {tos[0].to}            
                        </Grid>
                        <Grid className='col-md-1 d-none d-md-block divBadge' item>
                            <Tos tos={tos}></Tos>
                        </Grid>
                        <Grid className='col-sm-12 col-md-4 divDetail' item>
                            <a href="#" data-toggle="modal" data-target="exampleModal" onClick={toggle}>{subject}</a>
                        </Grid>
                        <Grid className='col-md-1 d-none d-md-block divAttachDetail' item>
                            <ImageAttach files={files}></ImageAttach>
                        </Grid>
                        <Grid className='col-md-1 d-none d-md-block divDateDetail' item>
                            <DateFormat date={date}/>
                        </Grid>
                </Grid>
            </div>
        </div>
    )
}

GridDetail.propTypes = {
    from: PropTypes.string.isRequired,
    tos: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
        }).isRequired,
    ),
    subject: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onSetModal: PropTypes.func.isRequired,
    modal: PropTypes.bool.isRequired,
    onSetSelectedMail: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    selectedMail: PropTypes.shape({
        id: PropTypes.number.isRequired,
        from: PropTypes.string.isRequired,
        tos: PropTypes.arrayOf(
            PropTypes.shape({
                to: PropTypes.string.isRequired,
            }).isRequired,
        ),
        subject: PropTypes.string.isRequired,
        files: PropTypes.arrayOf(
            PropTypes.shape({
                file_id: PropTypes.string.isRequired,
                file_name: PropTypes.string.isRequired,
            }),
        ),
        date: PropTypes.string.isRequired,
    })
}

export default GridDetail
