FROM tomcat:8-jre8

RUN set -ex \
	&& rm -rf /usr/local/tomcat/webapps/* \
	&& chmod a+x /usr/local/tomcat/bin/*.sh

RUN apt-get update && apt-get -y install openssh-client

RUN groupadd -r tomcat \
   && useradd -m -r -g tomcat tomcat

RUN chown -R tomcat:tomcat /usr/local/tomcat
COPY bsidesctf_ssh_key /home/tomcat/bsidesctf@bsidesctf_ssh
RUN chown tomcat:tomcat /home/tomcat/bsidesctf@bsidesctf_ssh

USER tomcat
COPY struts_vuln.war /usr/local/tomcat/webapps/ROOT.war

EXPOSE 8080

CMD ["/usr/local/tomcat/bin/catalina.sh", "run"]