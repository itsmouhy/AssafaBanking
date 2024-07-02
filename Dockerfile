FROM openjdk:17
ADD target/assafa-banking.jar assafa-banking.jar
ENTRYPOINT ["java","-jar","/assafa-banking.jar"]
