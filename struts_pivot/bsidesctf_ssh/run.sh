#!/bin/bash

export BASEDIR="/opt/bsidesctf"
export USER_GROUP="bsidesctf:bsidesctf"


set_authorized_keys()
{
    echo ${SSH_KEY} >> ${BASEDIR}/.ssh/authorized_keys
    chmod 600 ${BASEDIR}/.ssh/authorized_keys
}

echo ${SSH_KEY}
set_authorized_keys
chown -R ${USER_GROUP} ${BASEDIR}

/usr/sbin/sshd -D
