import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  const onlineStatus = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.item}>
      <span className={onlineStatus}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
