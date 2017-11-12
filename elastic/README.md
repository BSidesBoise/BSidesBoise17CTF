https://github.com/t0kx/exploit-CVE-2015-1427.git
 
 
docker build -t elastic .
 
Modify Docker file to include flag.txt
Copy flag.txt /root/flag.txt
 
bsb17_f45c827333f9f86b2c96eb01dc68dbbcdf5ac22d
 
 
docker run -d -p 9200:9200 elastic:latest
 
Metasploit
exploit/multi/elasticsearch/search_groovy_script
