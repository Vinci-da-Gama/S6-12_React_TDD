import React from 'react';

const InfoForAdmin = (props) => (
    <div>
        <h3>Info is: </h3>
        <p>
            { props.info }
        </p>
    </div>
);

// const MsgViaDelegate = (MsgViaDelegate) => {
const MsgViaDelegate = (MsgViaDelegate) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This message is only for Admin.</p> }
            <MsgViaDelegate {...props} />
        </div>
    );
};

export const AdminApplyDelegate = MsgViaDelegate(InfoForAdmin);
