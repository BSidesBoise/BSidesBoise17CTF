# README #

To deploy run:
`docker-compose build && docker-compose up -d`

This builds and links the containers, exposing the struts app on port 9999 and the ssh app on port 2222.

To get the flag, exploit the struts app and find the ssh key in /home/tomcat/bsidesctf@bsidesctf_ssh

Then pivot from the struts app via ssh: ssh -oStrictHostKeyChecking=no -i bsidesctf_ssh_key bsidesctf@bsidesctf_ssh

OR

extract the key and ssh directly to the app on port 2222

Flag is found in /opt/bsidesctf/flag (where you're dropped via ssh)